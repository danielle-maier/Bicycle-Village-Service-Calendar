const mongoose = require('mongoose');
const passport = require('passport');
const config = require('../config/database');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const Entry = require('../models/entry');

router.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please enter email and password.'});
  } else {
    let newUser = new User({
      email: req.body.username,
      password: req.body.password,
      roll: req.body.roll,
    });
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Email already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/signin', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          let token = jwt.sign(user, config.secret);
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.post('/entry', passport.authenticate('jwt', { session: false}), function(req, res) {
  let token = getToken(req.headers);
  if (token) {
    let newEntry = new Entry({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      servicedate: req.body.servicedate,
      bike: req.body.bike,
      contactme: req.body.contactme
    });

    newEntry.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Save Entry failed.'});
      }
      res.json({success: true, msg: 'Successful added to the Calendar.'});
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.get('/entry', passport.authenticate('jwt', { session: false}), function(req, res) {
  let token = getToken(req.headers);
  console.log(token);
  if (token) {
    Entry.find(function (err, entries) {
      if (err) return next(err);
      res.json(entries);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
