(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0075":function(t,e,n){var i={"./github.png":"98b7","./linkedin.png":"0eda","./medium.png":"0aa7","./twitter.png":"9bde"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="0075"},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"0aa7":function(t,e,n){t.exports=n.p+"img/medium.dd01d2dd.png"},"0eda":function(t,e,n){t.exports=n.p+"img/linkedin.fd0d5546.png"},"3b69":function(t,e,n){"use strict";var i=n("c748"),a=n.n(i);a.a},"4d70":function(t,e,n){t.exports=n.p+"img/image.f9ee747e.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HomePage")],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bcg-black",attrs:{id:"svitel"}},[i("div",{staticClass:"content"},[i("img",{attrs:{src:n("4d70")}}),i("h1",{staticClass:"name"},[t._v(t._s(t.name))]),i("span",{staticClass:"uname"},[t._v("@"+t._s(t.uname))]),i("p",{staticClass:"address"},[i("b",[t._v(t._s(t.job))]),t._v(" from "),i("i",[t._v(t._s(t.address))])]),i("div",{staticClass:"tags"},[i("p",[t._v("#"+t._s(t.tags))])]),i("div",{staticClass:"social"},t._l(t.socials,(function(e){return i("a",{key:e.length,attrs:{target:"_blank",href:e.src}},[i("img",{attrs:{src:n("0075")("./"+e.icon),width:"40",height:"40",alt:e.icon}}),i("p",[t._v(t._s(e.src))])])})),0),i("div",{staticClass:"canvas"},[i("canvas",{attrs:{id:"emailCanvas",width:t.canvas_w,height:"100"}},[t._v(" Your browser does not support the canvas element. ")])])])])},o=[],c=(n("a15b"),n("ac1f"),n("1276"),{name:"HelloWorld",props:{msg:String},data:function(){return{canvas_w:"500px",idx:0,name:"Samuel Vitel",uname:"svitel11",job:"Web Developer",tags:"php, javascript, mysql, laravel, lumen, vuejs, jquery, api, linux, aws, css3, html5, vast, adserving, adtechnologies",address:"Vienna, Austria",socials:{medium:{icon:"medium.png",src:"https://medium.com/@svitel11"},github:{icon:"github.png",src:"https://github.com/svitel11"},twitter:{icon:"twitter.png",src:"https://twitter.com/svitel11"},linkedin:{icon:"linkedin.png",src:"https://www.linkedin.com/in/svitel11/"}}}},methods:{canvasWidth:function(){this.canvas_w=window.innerWidth>500?"500px":window.innerWidth},tagsBeatify:function(){this.tags=this.tags.split(" ").join(" #")},writeEmailOnCanvas:function(){var t=document.getElementById("emailCanvas"),e=t.getContext("2d");e.font="30px Arial",e.fillStyle="#867d7b",e.textAlign="center",e.fillText("samuel@vitel.at",t.width/2,t.height/2)}},created:function(){this.tagsBeatify()},mounted:function(){this.writeEmailOnCanvas()}}),u=c,l=(n("3b69"),n("2877")),p=Object(l["a"])(u,s,o,!1,null,"7f4aa4c4",null),d=p.exports,f={name:"App",components:{HomePage:d}},v=f,g=(n("034f"),Object(l["a"])(v,a,r,!1,null,null,null)),m=g.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,n){},"98b7":function(t,e,n){t.exports=n.p+"img/github.21944b90.png"},"9bde":function(t,e,n){t.exports=n.p+"img/twitter.aa27da92.png"},c748:function(t,e,n){}});
//# sourceMappingURL=app.69833907.js.map