(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229481"],{dd7b:function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("headerTop"),r("nav",{staticClass:"breadcrumb-wrap",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb container"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{path:"../"}}},[e._v("Home")])],1),e._m(0)])]),r("div",{staticClass:"min-height"},[r("div",{staticClass:"login"},[r("div",{staticClass:"loginform"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputUser"}},[e._v("帳號")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter username"},domProps:{value:e.user.username},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.login()},input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword1"}},[e._v("密碼")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:e.user.password},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.login()},input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}})]),e._m(1),r("button",{staticClass:"btn btn-block btn-primary",on:{click:function(s){return e.login()}}},[e._v("登入")])])])]),r("footerTop")],1)},a=[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"#"}},[e._v("全系列商品")])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"form-group form-check"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),r("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[e._v("記住我")])])}],o=r("71c2"),n=r("076e"),u={components:{headerTop:o["a"],footerTop:n["a"]},data:function(){return{user:{username:"",password:""}}},methods:{login:function(){console.log("1",this.user.username,this.user.password),this.user.username?this.user.password?""===this.user.username||""===this.user.password&&"aazz"!==this.user.username||"a123"!==this.user.password?(console.log(this.user.username,this.user.password),this.$toastr.error("".concat(this.user.username," 登入失敗！請重新登入"))):"aazz"===this.user.username&&"a123"===this.user.password&&(console.log(this.user.username,this.user.password),this.$toastr.success("".concat(this.user.username," 登入成功")),localStorage.setItem("login","true"),this.$router.push({path:"/",query:{username:this.user.username}})):this.$toastr.error("尚未輸入密碼"):this.$toastr.error("尚未輸入帳號")}}},i=u,l=r("2877"),c=Object(l["a"])(i,t,a,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d229481.8cc507ca.js.map