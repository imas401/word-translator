webpackJsonp([0],{0:function(t,e){},"1fjL":function(t,e){},"1uuo":function(t,e){},KuIU:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"translateForm"}},[a("div",{staticClass:"col-md-12 d-flex justify-content-center"},[a("form",{staticClass:"form-inline well",attrs:{id:"transForm"},on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter a word..."},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"ru"}},[t._v(" Russian ")]),t._v(" "),a("option",{attrs:{value:"fr"}},[t._v(" French ")]),t._v(" "),a("option",{attrs:{value:"vi"}},[t._v(" Vietnamese ")]),t._v(" "),a("option",{attrs:{value:"zh"}},[t._v(" Chinese ")]),t._v(" "),a("option",{attrs:{value:"en"}},[t._v(" English ")]),t._v(" "),a("option",{attrs:{value:"es"}},[t._v(" Spanish ")])]),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Translate"}})])])])},staticRenderFns:[]};var s={render:function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"text-success"},[this._v(this._s(this.translatedText))])},staticRenderFns:[]};var o={name:"app",components:{TranslateForm:a("VU/8")({name:"translateForm",data:function(){return{textToTranslate:"",language:""}},created:function(){this.language="vi"},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}}},r,!1,function(t){a("svUi")},null,null).exports,TranslateOutput:a("VU/8")({name:"translateOutput",props:["translatedText"]},s,!1,function(t){a("KuIU")},null,null).exports},data:function(){return{translatedText:""}},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190819T172024Z.24d6e5d13d9c8656.07859ebb904ded6a25ea2429202d53a98a7e6878&lang="+e+"&text="+t).then(function(t){a.translatedText=t.body.text[0]})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center",attrs:{id:"app"}},[a("h1",[t._v(" Word Translator ")]),t._v(" "),a("h5",[t._v(" Powered by Vue.js ")]),t._v(" "),a("TranslateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("TranslateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},staticRenderFns:[]};var i=a("VU/8")(o,l,!1,function(t){a("1fjL")},null,null).exports,u=a("/ocq"),v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports;n.a.use(u.a);var _=new u.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),p=a("8+8L");n.a.config.productionTip=!1,n.a.use(p.a),new n.a({el:"#app",router:_,components:{App:i},template:"<App/>"})},svUi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a3cec9c6e35cbf7e0c35.js.map