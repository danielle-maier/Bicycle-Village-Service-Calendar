webpackJsonp([0],{0:function(t,e){},"1YFL":function(t,e,s){"use strict";function n(t){s("YDWZ")}var a=s("hroH"),i=s("sCp7"),o=s("VU/8"),r=n,c=o(a.a,i.a,!1,r,null,null);e.a=c.exports},"3hq0":function(t,e,s){"use strict";e.a={name:"navbar",data:function(){return{mobile:!1}},computed:{isSignedIn:function(){return!!localStorage.getItem("token")}},methods:{toggleBurger:function(){this.mobile=!this.mobile},logout:function(){localStorage.removeItem("token"),location.href="/"}}}},"3ob1":function(t,e){},"5j2A":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-event-calendar",{attrs:{events:t.demoEvents},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.showEvents,function(e,n){return s("div",{staticClass:"event-item"},[s("span",[t._v("Hi "+t._s(e.title))]),s("br"),t._v(" "),s("span",[t._v("Your service is scheduled for: ")]),s("br"),t._v(" "),s("span",[t._v(t._s(e.date))])])})}}])})},a=[],i={render:n,staticRenderFns:a};e.a=i},"7Otq":function(t,e,s){t.exports=s.p+"static/img/logo.1b18b99.png"},"7y/R":function(t,e,s){"use strict";function n(t){s("zV/q")}var a=s("HNS7"),i=s("qqdM"),o=s("VU/8"),r=n,c=o(a.a,i.a,!1,r,null,null);e.a=c.exports},Asuo:function(t,e,s){"use strict";function n(t){s("3ob1")}var a=s("rOBC"),i=s("j6U7"),o=s("VU/8"),r=n,c=o(a.a,i.a,!1,r,null,null);e.a=c.exports},CPnK:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[n("img",{attrs:{src:s("7Otq"),alt:"BV",width:"112",height:"60"}})]),t._v(" "),n("button",{staticClass:"button navbar-burger",class:{"is-active":t.mobile},on:{click:t.toggleBurger}},[n("span",[t._v("Sign In")]),t._v(" "),n("span",[t._v("Sign Up")]),t._v(" "),n("span",[t._v("Log out")])])],1),t._v(" "),n("div",{staticClass:"navbar-menu",class:{"is-active":t.mobile}},[n("div",{staticClass:"navbar-end"},[t.isSignedIn?t._e():n("router-link",{staticClass:"navbar-item",attrs:{to:"/signin"},on:{click:t.toggleBurger}},[t._v("Sign In")]),t._v(" "),t.isSignedIn?t._e():n("router-link",{staticClass:"navbar-item",attrs:{to:"/signup"},on:{click:t.toggleBurger}},[t._v("Sign Up")]),t._v(" "),t.isSignedIn?t._e():n("router-link",{staticClass:"navbar-item",attrs:{to:"/end"},on:{click:t.toggleBurger}},[t._v("Log Out")])],1)])])])},a=[],i={render:n,staticRenderFns:a};e.a=i},DECe:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("h2",{staticClass:"title"},[t._v("Sign Up")]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.signUp(e)}}},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signUpForm.email,expression:"signUpForm.email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.signUpForm.email},on:{input:function(e){e.target.composing||t.$set(t.signUpForm,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signUpForm.password,expression:"signUpForm.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.signUpForm.password},on:{input:function(e){e.target.composing||t.$set(t.signUpForm,"password",e.target.value)}}})])]),t._v(" "),t._m(0)])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v("Submit")])])])}],i={render:n,staticRenderFns:a};e.a=i},HNS7:function(t,e,s){"use strict";e.a={name:"foot"}},"HcB/":function(t,e){},J56h:function(t,e,s){"use strict";function n(t){s("HcB/")}var a=s("3hq0"),i=s("CPnK"),o=s("VU/8"),r=n,c=o(a.a,i.a,!1,r,null,null);e.a=c.exports},Lnbs:function(t,e){},M93x:function(t,e,s){"use strict";var n=s("xJD8"),a=s.n(n),i=s("MTSB"),o=s("VU/8"),r=o(a.a,i.a,!1,null,null,null);r.exports},MTSB:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"app"}})},a=[],i={render:n,staticRenderFns:a};e.a=i},NEyv:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"thanks"},[t._v("Thank You for Visiting BicycleVillage.com")]),t._v(" "),n("img",{staticClass:"logo",attrs:{src:s("7Otq"),alt:"BV Logo"}})])}],i={render:n,staticRenderFns:a};e.a=i},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=(s("M93x"),s("YaEn")),i=s("MMSg"),o=s.n(i),r=s("doPI"),c=(s.n(r),s("p+RM")),l=(s.n(c),s("U4OO")),u=s.n(l),m=s("J56h"),d=s("7y/R");n.a.use(u.a,{locale:"en",color:"#ec433c"}),n.a.use(o.a),n.a.config.productionTip=!1,new n.a({template:'\n  <div>\n    <navbar />\n    <section class="section">\n      <div class="container is-fluid">\n        <router-view></router-view>\n      </div>\n    </section>\n    <foot />\n  </div>\n  ',router:a.a,components:{navbar:m.a,foot:d.a}}).$mount("#app")},NIHy:function(t,e,s){"use strict";e.a={name:"shop",data:function(){return{demoEvents:[{date:"2017/11/6",title:"Ian MacKaye - IanMac@hotmail.com",desc:"720-678-2480 - 1 Bike"},{date:"2017/11/6",title:"J Mascis - JMac@yahoo.com",desc:"303-578-2823 - 1 Bike"},{date:"2017/11/6",title:"Henrey Rollins - BlackFlag@gmail.com",desc:"202-422-4943 - 1 Bike"},{date:"2017/11/6",title:"Thurston Moore - ThurstonM@yahoo.com",desc:"212-322-8530 - 1 Bike"},{date:"2017/11/7",title:"Matt Talbott - MTalbott@outlook.com",desc:"312-329-8943 - 1 Bike"},{date:"2017/11/7",title:"Milo Aukerman - Milo@descendants.com",desc:"970-697-4832 - 1 Bike"},{date:"2017/11/7",title:"Jim Lindberg - Jim@pennywisdom.com",desc:"310-304-0595 - 1 Bike"}]}}}},OBXJ:function(t,e,s){"use strict";var n=s("mvHQ"),a=s.n(n);e.a={name:"signup",data:function(){return{signUpForm:{email:"",password:""}}},methods:{signUp:function(){this.$router.push("/form");var t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:a()({email:this.signUpForm.email,password:this.signUpForm.password})};fetch("https://bv-shop.herokuapp.com/api/signup",t).then(function(t){return t.json()}).then(function(t){location.href="/form"})}}}},PJpi:function(t,e,s){"use strict";e.a={name:"end"}},YDWZ:function(t,e){},YaEn:function(t,e,s){"use strict";var n=s("7+uW"),a=s("/ocq"),i=s("Asuo"),o=s("psOb"),r=s("1YFL"),c=s("aEEp"),l=s("d5kq"),u=s("w3Yg"),m=s("ORbq");n.a.use(m.a),n.a.use(a.a);var d=[{path:"/",component:i.a},{path:"/signin",component:i.a},{path:"/signup",component:o.a},{path:"/shop",component:c.a},{path:"/form",component:r.a},{path:"/customer",component:l.a},{path:"/end",component:u.a}];e.a=new a.a({mode:"history",routes:d,linkActiveClass:"is-active"})},ZQYJ:function(t,e){},aEEp:function(t,e,s){"use strict";function n(t){s("upXI")}var a=s("NIHy"),i=s("thR9"),o=s("VU/8"),r=n,c=o(a.a,i.a,!1,r,null,null);e.a=c.exports},d5kq:function(t,e,s){"use strict";function n(t){s("yWxe")}var a=s("nIg1"),i=s("5j2A"),o=s("VU/8"),r=n,c=o(a.a,i.a,!1,r,null,null);e.a=c.exports},doPI:function(t,e){},hroH:function(t,e,s){"use strict";var n=s("mvHQ"),a=s.n(n);e.a={name:"form",data:function(){return{scheduleForm:{name:"",email:"",phone:"",servicedate:"",bikes:"",contactme:""}}},methods:{sendForm:function(){this.$router.push("/customer");var t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:a()({name:this.scheduleForm.name,email:this.scheduleForm.email,phone:this.scheduleForm.phone,servicedate:this.scheduleForm.servicedate,bikes:this.servicedate.bikes,contactme:this.servicedate.servicedate})};fetch("https://bv-shop.herokuapp.com/api/form",t).then(function(t){return t.json()}).then(function(t){location.href="/customer"})}}}},j6U7:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("h1",{staticClass:"welcome"},[t._v("Welcome")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("h2",{staticClass:"title"},[t._v("Sign In")]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.signIn(e)}}},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signInForm.email,expression:"signInForm.email"}],staticClass:"input",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.signInForm.email},on:{input:function(e){e.target.composing||t.$set(t.signInForm,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signInForm.password,expression:"signInForm.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.signInForm.password},on:{input:function(e){e.target.composing||t.$set(t.signInForm,"password",e.target.value)}}})])]),t._v(" "),t._m(0)])]),t._v(" "),s("p",{staticClass:"please"},[t._v("New Users please click the sign up link above")])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v("Submit")])])])}],i={render:n,staticRenderFns:a};e.a=i},nIg1:function(t,e,s){"use strict";e.a={name:"shop",data:function(){return{demoEvents:[{date:"2017/11/7",title:"Milo Aukerman - Milo@descendants.com",desc:"970-697-4832 - 1 Bike"}]}}}},"p+RM":function(t,e){},psOb:function(t,e,s){"use strict";function n(t){s("Lnbs")}var a=s("OBXJ"),i=s("DECe"),o=s("VU/8"),r=n,c=o(a.a,i.a,!1,r,null,null);e.a=c.exports},qqdM:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("p",[t._v("©2017 Bicycle Village. All Rights Reserved")])])])])}],i={render:n,staticRenderFns:a};e.a=i},rOBC:function(t,e,s){"use strict";var n=s("mvHQ"),a=s.n(n);e.a={name:"signin",data:function(){return{signInForm:{email:"",password:""}}},methods:{signIn:function(){this.$router.push("/shop");var t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:a()({email:this.signInForm.email,password:this.signInForm.password})};fetch("https://bv-shop.herokuapp.com/api/signin",t).then(function(t){return t.json()}).then(function(t){console.log(t),location.href="/shop"})}}}},sCp7:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("h2",{staticClass:"title"},[t._v("Schedule")]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.sendForm(e)}}},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Name")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.scheduleForm.name,expression:"scheduleForm.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.scheduleForm.name},on:{input:function(e){e.target.composing||t.$set(t.scheduleForm,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.scheduleForm.email,expression:"scheduleForm.email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.scheduleForm.email},on:{input:function(e){e.target.composing||t.$set(t.scheduleForm,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Phone Number")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.scheduleForm.phone,expression:"scheduleForm.phone"}],staticClass:"input",attrs:{type:"tel",placeholder:"Phone #"},domProps:{value:t.scheduleForm.phone},on:{input:function(e){e.target.composing||t.$set(t.scheduleForm,"phone",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Desired Service Date")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.scheduleForm.date,expression:"scheduleForm.date"}],staticClass:"input",attrs:{type:"date",placeholder:"Date"},domProps:{value:t.scheduleForm.date},on:{input:function(e){e.target.composing||t.$set(t.scheduleForm,"date",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Number of bikes to service")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.scheduleForm.bikes,expression:"scheduleForm.bikes"}],staticClass:"input",attrs:{type:"number",placeholder:"Number of Bikes"},domProps:{value:t.scheduleForm.bikes},on:{input:function(e){e.target.composing||t.$set(t.scheduleForm,"bikes",e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"checkbox"}}),t._v("I would like an Appointment reminder sent to the email above.\n         ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v("Submit")])])])}],i={render:n,staticRenderFns:a};e.a=i},thR9:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-event-calendar",{attrs:{events:t.demoEvents},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.showEvents,function(e,n){return s("div",{staticClass:"event-item"},[s("span",[t._v("Customer: "+t._s(e.title))]),s("br"),t._v(" "),s("span",[t._v(t._s(e.desc))])])})}}])})},a=[],i={render:n,staticRenderFns:a};e.a=i},upXI:function(t,e){},w3Yg:function(t,e,s){"use strict";function n(t){s("ZQYJ")}var a=s("PJpi"),i=s("NEyv"),o=s("VU/8"),r=n,c=o(a.a,i.a,!1,r,null,null);e.a=c.exports},xJD8:function(t,e){},yWxe:function(t,e){},"zV/q":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2e956e8ab0dbf02ef8e4.js.map