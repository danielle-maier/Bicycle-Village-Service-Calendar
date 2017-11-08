![BV Logo](./client/src/assets/logo.png "BV Logo")

# Bicycle Village Service Calendar

<img src="http://vuejs.org/images/logo.png" height="50"> <img src="https://coligo.io/images/express.svg" height="50"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/527px-MongoDB-Logo.svg.png" height="50"> <img src="https://worldvectorlogo.com/logos/nodejs-icon.svg" height="50"> <img src="https://camo.githubusercontent.com/66747a6e05a799aec9c6e04a3e721ca567748e8b/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313336353838312f313931383337332f32653035373166612d376462632d313165332d383436352d3839356632393164343366652e706e67" height="50">

This project is a full stack application using Vue.js, MongoDB
express and node.js. This app is a partnership with the Service
Department at Bicycle Village Boulder to automate the
scheduling of bicycle service. Customers are able sign up and enter their information and select a the service date that is most convenient for their schedule. When the schedule request is submitted the customer will receive and email with the details of their appointment with an option to save the date to google or ical. Alternatively the shop employees may sign in and view all the scheduled service for the month and each date is selectable to show a customer details for the day.

![Cust Walkthrough](./client/src/assets/cap-cust.gif "Cust View")
![Shop Walkthrough](./client/src/assets/cap-shop.gif "Shop View")

[Live Demo](https://bv-shop.herokuapp.com/ "Service Calendar")

## Client Build
> Requirements -
> Node and Vue-CLI

``` bash
# go to client directory
$ cd client

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report
```

## Server Build
> Requirements -
> Node and MongoDB

``` bash
#go to server directory
$ cd server

# install dependencies
$ npm install

# run server with local database
$ nodemon
```

## License

Bicycle Village Service Calendar is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact

Copyright (C) 2017 Danielle Maier
