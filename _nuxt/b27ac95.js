(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{235:function(t,e,n){"use strict";n.r(e);n(32),n(42),n(83);var r={props:{src:{type:String,default:""}},computed:{formats:function(){var t=this;return["webm","mp4","ogv"].map((function(e){return[t.src.replace(/\.\w{3,4}$/,".".concat(e)),"video/".concat(e)]}))},poster:function(){return this.src.replace(/\.\w{3,4}$/,".jpg")}}},o=n(19),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.src?e("video",{attrs:{poster:this.poster,controls:""}},this._l(this.formats,(function(t){var n=t[0],r=t[1];return e("source",{key:n,attrs:{src:n,type:r}})})),0):this._e()}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row"},[n("div",{staticClass:"flex-grow"},[t.prev?n("NuxtLink",{staticClass:"text-blue-500 font-medium underline",attrs:{to:t.prev}},[t._v("Previous video | "+t._s(t.prev.title))]):t._e()],1),t._v(" "),n("div",{staticClass:"flex-grow text-right"},[t.next?n("NuxtLink",{staticClass:"text-blue-500 font-medium underline",attrs:{to:t.next}},[t._v("Next video | "+t._s(t.next.title))]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,n){"use strict";n.r(e);var r=n(54),o=(n(23),n(3)),c=n(152),l=n.n(c).a.humanizer({language:"shortEn",languages:{shortEn:{y:function(){return"yr"},mo:function(){return"mo"},w:function(){return"wk"},d:function(){return"day"},h:function(){return"hr"},m:function(){return"min"},s:function(){return"sec"},ms:function(){return"ms"}}}}),f={middleware:function(t){t.app;var e=t.params,n=t.redirect;"index"===e.slug&&n("/")},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,f,d,m,v,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,c=t.error,(l=o.slug)||(l="index"),e.next=5,n("guide",l).fetch();case 5:if(f=e.sent){e.next=8;break}return e.abrupt("return",c({statusCode:404,message:"Page not found"}));case 8:return e.next=10,n("guide",{deep:!0}).only(["title","slug","to"]).sortBy("position","asc").surround(l,{before:1,after:1}).fetch();case 10:return d=e.sent,m=Object(r.a)(d,2),v=m[0],x=m[1],e.abrupt("return",{document:f,prev:v,next:x});case 15:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.document.title,meta:[{hid:"og:title",property:"og:title",content:this.document.title},{hid:"twitter:title",property:"twitter:title",content:this.document.title}]}},computed:{formattedDuration:function(){return l(1e3*this.document.duration,{})}}},d=n(19),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("h1",{staticClass:"text-4xl flex flex-row items-center mb-2"},[n("span",{staticClass:"flex-grow text-purple-500",attrs:{"data-page-title":""}},[t._v(t._s(t.document.title))]),t._v(" "),n("small",{staticClass:"text-sm"},[t._v("("+t._s(t.formattedDuration)+")")])]),t._v(" "),n("VideoBlock",{staticClass:"mb-2",attrs:{src:t.document.video}}),t._v(" "),n("AppPrevNext",{staticClass:"mb-2",attrs:{prev:t.prev,next:t.next}}),t._v(" "),n("div",[n("NuxtContent",{attrs:{document:t.document}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VideoBlock:n(235).default,AppPrevNext:n(236).default})}}]);