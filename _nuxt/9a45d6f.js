(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(t,e,n){"use strict";n(23);var o=n(3);function r(){return(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.store,e.app,t.next=4;break;case 4:if(n.state.categories){t.next=7;break}return t.next=7,n.dispatch("fetchCategories");case 7:0;case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.a=function(t){return r.apply(this,arguments)}},169:function(t,e,n){"use strict";var o=n(19),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-screen flex flex-col"},[e("div",{staticClass:"w-full bg-purple-500 h-1"}),this._v(" "),e("AppHeader",{staticClass:"border-b-2"}),this._v(" "),e("div",{staticClass:"flex flex-row flex-grow"},[e("AppSidebar",{staticClass:"w-1/4 py-2 px-4 border-r-2"}),this._v(" "),e("Nuxt",{staticClass:"w-3/4 py-2 px-4"})],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppHeader:n(223).default,AppSidebar:n(222).default})},172:function(t,e,n){n(173),t.exports=n(174)},209:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("38dfa7e4",content,!0,{sourceMap:!1})},210:function(t,e,n){(e=n(74)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.nuxt-content h2{font-size:1.25rem}.nuxt-content a{--text-opacity:1;color:#3eb6ff;color:rgba(62,182,255,var(--text-opacity))}.nuxt-content ol,.nuxt-content p,.nuxt-content ul{margin-top:.5rem;margin-bottom:.5rem}.nuxt-content ol,.nuxt-content ul{margin-left:1.25rem}.nuxt-content ol{list-style-type:decimal}.nuxt-content ul{list-style-type:disc}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.bg-purple-500{--bg-opacity:1;background-color:#7e4c97;background-color:rgba(126,76,151,var(--bg-opacity))}.border-r-2{border-right-width:2px}.border-b-2{border-bottom-width:2px}.flex{display:flex}.table{display:table}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.flex-grow{flex-grow:1}.font-medium{font-weight:500}.font-bold{font-weight:700}.h-1{height:.25rem}.h-8{height:2rem}.h-screen{height:100vh}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-4xl{font-size:2.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mt-5{margin-top:1.25rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.static{position:static}.text-center{text-align:center}.text-right{text-align:right}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-blue-500{--text-opacity:1;color:#3eb6ff;color:rgba(62,182,255,var(--text-opacity))}.text-purple-500{--text-opacity:1;color:#7e4c97;color:rgba(126,76,151,var(--text-opacity))}.uppercase{text-transform:uppercase}.underline{text-decoration:underline}.tracking-wider{letter-spacing:.05em}.whitespace-no-wrap{white-space:nowrap}.w-1\\/4{width:25%}.w-3\\/4{width:75%}.w-full{width:100%}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:text-xs{font-size:.75rem}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}',""]),t.exports=e},213:function(t,e,n){"use strict";n.r(e),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return m}));n(23);var o=n(3),r=n(166),c=n.n(r),l={SET_CATEGORIES:function(t,e){t.categories=e}},m={fetchCategories:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,t.state,n.next=3,e.$content("guide").only(["title","menuTitle","category","slug","path","duration"]).sortBy("position","asc").fetch();case 3:r=n.sent,delete(l=c()(r,"category"))[void 0],console.log(l),o("SET_CATEGORIES",l);case 8:case"end":return n.stop()}}),n)})))()}}},222:function(t,e,n){"use strict";n.r(e);var o=n(152),r=n.n(o).a.humanizer({language:"shortEn",languages:{shortEn:{y:function(){return"yr"},mo:function(){return"mo"},w:function(){return"wk"},d:function(){return"day"},h:function(){return"hr"},m:function(){return"min"},s:function(){return"sec"},ms:function(){return"ms"}}}}),c={computed:{categories:function(){return this.$store.state.categories}},methods:{formatDuration:function(t){return r(1e3*t,{largest:1,round:!0})}}},l=n(19),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"flex flex-col text-sm lg:text-xs"},[n("h3",{staticClass:"text-purple-500 text-lg font-medium mt-5 mb-2"},[t._v("Contents")]),t._v(" "),n("ul",t._l(t.categories,(function(e,o,r){return n("li",{key:o},[n("p",{staticClass:"mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"},[t._v("\n        "+t._s(o)+"\n      ")]),t._v(" "),n("ul",{staticClass:"mb-4"},t._l(e,(function(e){return n("li",{key:e.slug,staticClass:"text-gray-700 dark:text-gray-300"},[n("NuxtLink",{staticClass:"flex flex-row items-center py-1",attrs:{to:e.path}},[n("span",{staticClass:"flex-grow"},[t._v(t._s(e.menuTitle||e.title))]),t._v(" "),n("small",{staticClass:"text-xs whitespace-no-wrap"},[t._v("("+t._s(t.formatDuration(e.duration))+")")])])],1)})),0)])})),0)])}),[],!1,null,null,null);e.default=component.exports},223:function(t,e,n){"use strict";n.r(e);var o=n(19),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-row items-center"},[e("div",{staticClass:"w-1/4 px-4 py-2"},[e("img",{staticClass:"h-8",attrs:{src:"/logo.svg"}})]),this._v(" "),e("div",{staticClass:"w-3/4 text-center"},[e("h1",{staticClass:"text-xl"},[this._v("How to guide")])])])}],!1,null,null,null);e.default=component.exports}},[[172,4,1,5]]]);