(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/Kuo":function(e,t,n){n("YIwh");var r="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!n.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],n.get(s.value[0])))return!1;return!0}if(i&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!n.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(t[s]!==n[s])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof n.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof n.toString)return t.toString()===n.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(n,u[s]))return!1;if(r&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],n[u[s]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},"0TzC":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"0YXu":function(e,t,n){var r=n("ERFd");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"2oQ4":function(e,t,n){var r=n("0YXu"),o=n("Uifx"),i=n("kpYG"),a=n("0TzC");e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"6dUw":function(e,t,n){var r=n("fK7x"),o=n("i1X9");function i(t,n,a){return o()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},ERFd:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},EifU:function(e,t,n){(function(t){var n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/,o=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=/^\[object .+?Constructor\]$/,s="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,l=s||u||Function("return this")();var f,p=Array.prototype,d=Function.prototype,h=Object.prototype,b=l["__core-js_shared__"],y=(f=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+f:"",v=d.toString,m=h.hasOwnProperty,O=h.toString,g=RegExp("^"+v.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),j=l.Symbol,w=p.splice,x=M(l,"Map"),T=M(Object,"create"),_=j?j.prototype:void 0,S=_?_.toString:void 0;function E(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function C(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function A(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function P(e,t){for(var o,i=0,a=(t=function(e,t){if(D(e))return!1;var o=typeof e;if("number"==o||"symbol"==o||"boolean"==o||null==e||H(e))return!0;return r.test(e)||!n.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:D(o=t)?o:R(o)).length;null!=e&&i<a;)e=e[N(t[i++])];return i&&i==a?e:void 0}function I(e){return!(!z(e)||(t=e,y&&y in t))&&(function(e){var t=z(e)?O.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?g:c).test(function(e){if(null!=e){try{return v.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function L(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function M(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return I(n)?n:void 0}E.prototype.clear=function(){this.__data__=T?T(null):{}},E.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},E.prototype.get=function(e){var t=this.__data__;if(T){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return m.call(t,e)?t[e]:void 0},E.prototype.has=function(e){var t=this.__data__;return T?void 0!==t[e]:m.call(t,e)},E.prototype.set=function(e,t){return this.__data__[e]=T&&void 0===t?"__lodash_hash_undefined__":t,this},C.prototype.clear=function(){this.__data__=[]},C.prototype.delete=function(e){var t=this.__data__,n=k(t,e);return!(n<0)&&(n==t.length-1?t.pop():w.call(t,n,1),!0)},C.prototype.get=function(e){var t=this.__data__,n=k(t,e);return n<0?void 0:t[n][1]},C.prototype.has=function(e){return k(this.__data__,e)>-1},C.prototype.set=function(e,t){var n=this.__data__,r=k(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},A.prototype.clear=function(){this.__data__={hash:new E,map:new(x||C),string:new E}},A.prototype.delete=function(e){return L(this,e).delete(e)},A.prototype.get=function(e){return L(this,e).get(e)},A.prototype.has=function(e){return L(this,e).has(e)},A.prototype.set=function(e,t){return L(this,e).set(e,t),this};var R=F((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(H(e))return S?S.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var n=[];return o.test(e)&&n.push(""),e.replace(i,(function(e,t,r,o){n.push(r?o.replace(a,"$1"):t||e)})),n}));function N(e){if("string"==typeof e||H(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function F(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(F.Cache||A),n}F.Cache=A;var D=Array.isArray;function z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==O.call(e)}e.exports=function(e,t,n){var r=null==e?void 0:P(e,t);return void 0===r?n:r}}).call(this,n("xLOo"))},K2bi:function(e,t,n){"use strict";n.r(t);var r=n("uF78"),o=n("8cql"),i=n("v6s4"),a=n.n(i),c=n("y2NT"),s=n("rJBB"),u=n("0PHv"),l=n("RCEM"),f=n("Bx4J"),p=n("ZCal"),d=n("rwXX"),h=n("EifU"),b=n.n(h),y=n("5UxN"),v=n.n(y),m=n("ZiM/"),O=n("R/i7"),g=n("E1YZ");const j=39,w=37,x=38,T=40,_=32,S=80,E=79,C=71,A=27,k=33,P=34,I=e=>t=>t.mode===e?{mode:O.a.normal}:{mode:e},L=["input","select","textarea","a","button"];var M=()=>{const e=Object(m.a)();Object(i.useEffect)(()=>{const t=t=>{const{metaKey:n,ctrlKey:r,shiftKey:o,altKey:i}=t;if(n||r)return;const a=document.activeElement.tagName.toLowerCase();if(!L.includes(a))if(o)switch(t.keyCode){case _:Object(g.b)(e);break;case S:e.setState(I(O.a.print)),Object(l.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case S:e.setState(I(O.a.presenter));break;case E:e.setState(I(O.a.overview));break;case C:e.setState(I(O.a.grid))}else switch(t.keyCode){case j:case T:case P:case _:Object(g.a)(e);break;case w:case x:case k:Object(g.b)(e);break;case A:e.setState({mode:O.a.normal})}};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e])};const R="mdx-deck-slide",N="mdx-deck-step";var F=()=>{const e=Object(m.a)(),{0:t,1:n}=Object(i.useState)(!1),r=()=>n(!0),o=()=>n(!1),a=t=>{const n=parseInt(t.newValue,10);if(!isNaN(n))switch(t.key){case R:Object(l.navigate)([e.slug,n].join("/"));break;case N:e.setState({step:n})}};Object(i.useEffect)(()=>{n(document.hasFocus())},[]),Object(i.useEffect)(()=>(t||window.addEventListener("storage",a),window.addEventListener("focus",r),window.addEventListener("blur",o),()=>{t||window.removeEventListener("storage",a),window.removeEventListener("focus",r),window.removeEventListener("blur",o)}),[t]),Object(i.useEffect)(()=>{t&&(localStorage.setItem(R,e.index),localStorage.setItem(N,e.step))},[t,e.index,e.step])},D=n("t0TR");const z=e=>a.a.createElement(i.Fragment,null,e.children);var H=e=>{const{0:t,1:n}=Object(i.useState)("100vh"),{mode:r,theme:a}=Object(m.a)();Object(i.useEffect)(()=>{n(window.innerHeight);const e=e=>{n(window.innerHeight)},t=e=>{r===O.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),()=>{window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}},[r]);const{Provider:c=z}=a;return Object(p.d)(c,null,Object(p.d)("div",Object(o.a)({},e,{sx:{width:"100vw",height:r!==O.a.print?t:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},U=n("IhIl"),B=n("vi4U"),Y=n("louR"),K=n("GqlJ"),q=e=>{const t=Object(m.a)(),{index:n,length:r}=t;return Object(p.d)(a.a.Fragment,null,Object(p.d)("div",null,n," / ",r-1),Object(p.d)("div",{sx:{mx:4}},Object(p.d)("a",{href:l.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(p.d)("div",{sx:{mx:"auto"}}),Object(p.d)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(p.d)(K.a,null)),Object(p.d)("div",null,Object(p.d)(Y.a,null)))};var X=e=>{let{slides:t,children:n}=e;const r=Object(m.a)(),o=t[r.index+1],i=!!r.notes&&a.a.Children.toArray(r.notes);return Object(p.d)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(p.d)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(p.d)("div",{sx:{width:"75%",p:3}},Object(p.d)(B.a,{zoom:3/4},n)),Object(p.d)("div",{sx:{width:"25%",p:3}},Object(p.d)(B.a,{ratio:4/3,zoom:1/4},Object(p.d)(U.a,{slide:o,preview:!0})),i&&Object(p.d)("div",{sx:{my:3}},i))),Object(p.d)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(p.d)(q,null)))};const $=["slides","ratio","zoom","onClick"],J=()=>{};var W=e=>{let{slides:t=[],ratio:n=16/9,zoom:c=1/4,onClick:s=J}=e,u=Object(r.a)(e,$);const{index:l}=Object(m.a)(),f=Object(i.useRef)(null);return Object(i.useEffect)(()=>{const e=f.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()}),Object(p.d)(a.a.Fragment,null,t.map((e,t)=>Object(p.d)("div",Object(o.a)({},u,{key:t,role:"link",ref:t===l?f:null,onClick:e=>{s(t)},style:l===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:l===t?"4px solid cyan":null}}),Object(p.d)(B.a,{zoom:c,ratio:n},Object(p.d)(U.a,{slide:e,preview:!0})))))},V=e=>{let{slides:t,children:n}=e;const{slug:r,index:o,length:i}=Object(m.a)();return Object(p.d)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(p.d)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(p.d)(W,{slides:t,zoom:1/6,onClick:e=>{Object(l.navigate)([r,e].join("/"))}})),Object(p.d)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(p.d)("div",{sx:{flex:"1 1 auto"}},Object(p.d)(B.a,{zoom:5/6},n)),Object(p.d)("div",{sx:{py:3}},o," / ",i-1)))},G=e=>{let{slides:t}=e;const{slug:n,setState:r}=Object(m.a)();return Object(p.d)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(p.d)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(p.d)(W,{slides:t,onClick:e=>{Object(l.navigate)([n,e].join("/")),r({mode:O.a.normal})},sx:{width:"25%",m:0}})))};const Z=["slides","pageContext","theme","themes"],Q=["components"];function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ne=()=>(M(),!1),re=()=>(F(),!1),oe=e=>{let{slides:t}=e;const n=te(te({},Object(m.a)()),{},{mode:O.a.print});return Object(f.c)(D.a.Provider,{value:n},t.map((e,t)=>Object(f.c)(U.a,{key:t,slide:e,preview:!0})))},ie=e=>{let{theme:t}=e;return!!t.googleFont&&Object(f.c)(d.a,null,Object(f.c)("link",{rel:"stylesheet",href:t.googleFont}))},ae=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((e,t)=>"function"==typeof t?t(e):v()(e,t),{})},ce=e=>{let{children:t}=e;return Object(f.c)(a.a.Fragment,{children:t})};var se=e=>{let{slides:t=[],pageContext:{title:n,slug:o},theme:i={},themes:c=[]}=e;Object(r.a)(e,Z);const u=Object(m.a)(),h=(()=>{const{pathname:e}=l.globalHistory.location,t=e.split("/"),n=Number(t[t.length-1]);return isNaN(n)?0:n})(),y=t.head.children,v=ae.apply(void 0,[i].concat(Object(s.a)(c))),{components:g}=v,j=Object(r.a)(v,Q),w=te(te({},u),{},{slug:o,length:t.length,index:h,steps:b()(u,"metadata."+h+".steps"),notes:b()(u,"metadata."+h+".notes"),theme:j});let x=ce;switch(w.mode){case O.a.presenter:x=X;break;case O.a.overview:x=V;break;case O.a.grid:x=G}return Object(f.c)(a.a.Fragment,null,Object(f.c)(d.a,null,Object(f.c)("title",null,n),y),Object(f.c)(ie,{theme:j}),Object(f.c)(D.a.Provider,{value:w},Object(f.c)(p.b,{components:g,theme:j},Object(f.c)(f.a,{styles:{body:{margin:0,overflow:w.mode===O.a.normal?"hidden":null}}}),Object(f.c)(ne,null),Object(f.c)(re,null),Object(f.c)(H,null,Object(f.c)(x,{slides:t},Object(f.c)(l.Router,{basepath:o,style:{height:"100%"}},Object(f.c)(U.a,{index:0,path:"/",slide:t[0]}),t.map((e,t)=>Object(f.c)(U.a,{key:t,index:t,path:t+"/*",slide:e})),Object(f.c)(oe,{path:"/print",slides:t})))))))},ue=n("r6Pb");const le=["data"],fe={wrapper:e=>{const t=Object(ue.a)(e);return Object(f.c)(se,Object(o.a)({},e,{slides:t}))}};t.default=e=>{let{data:{deck:{id:t,body:n}}}=e,i=Object(r.a)(e,le);return Object(f.c)(e=>Object(f.c)(c.MDXRenderer,Object(o.a)({},e,{children:n})),Object(o.a)({},i,{components:fe}))}},Sm9g:function(e,t,n){"use strict";var r=n("I1Uh");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},Uifx:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},YIwh:function(e,t,n){var r=n("KKi1"),o=n("X45w"),i=n("LNOJ"),a=n("Sm9g"),c=n("bMM/"),s=r.RegExp,u=s.prototype;o&&c((function(){var e=!0;try{s(".","d")}catch(c){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(u,"flags").get.call(t)!==r||n!==r}))&&i(u,"flags",{configurable:!0,get:a})},i1X9:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},kpYG:function(e,t,n){var r=n("ERFd");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},rwXX:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return be}));var r,o,i,a,c=n("XcRB"),s=n.n(c),u=n("xpAf"),l=n.n(u),f=n("/Kuo"),p=n.n(f),d=n("v6s4"),h=n.n(d),b=n("JPeT"),y=n.n(b),v="bodyAttributes",m="htmlAttributes",O="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",x="href",T="http-equiv",_="innerHTML",S="itemprop",E="name",C="property",A="rel",k="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",N="onChangeClientState",F="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),z=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=Z(e,g.TITLE),n=Z(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,L);return t||r||void 0},J=function(e){return Z(e,N)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===A&&"canonical"===e[n].toLowerCase()||s===A&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==_&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=y()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(g.BODY,r),se(g.HTML,o),ce(f,p);var d={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,i),metaTags:ue(g.META,a),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,l)},h={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),s(e,h,b)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(g.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===_)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[h.a.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case m:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===_||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===_||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(m,o,r),link:pe(g.LINK,i,r),meta:pe(g.META,a,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,s,r),style:pe(g.STYLE,u,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},he=l()((function(e){return{baseTag:V([x,P],e),bodyAttributes:W(v,e),defer:Z(e,M),encode:Z(e,R),htmlAttributes:W(m,e),linkTags:G(g.LINK,[A,x],e),metaTags:G(g.META,[E,j,T,C,S],e),noscriptTags:G(g.NOSCRIPT,[_],e),onChangeClientState:J(e),scriptTags:G(g.SCRIPT,[k,_],e),styleTags:G(g.STYLE,[w],e),title:$(e),titleAttributes:W(O,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),be=(o=he,a=i=function(e){function t(){return U(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},i)});case g.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind}).call(this,n("xLOo"))},wRdu:function(e,t,n){var r=n("2oQ4"),o=n("6dUw"),i=n("6HUR"),a=n("RJGT");const c=["scope","children"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=n("v6s4"),{mdx:f}=n("kvu0"),{useMDXScope:p}=n("geOi");e.exports=function(e){let{scope:t,children:n}=e,i=a(e,c);const s=p(t),d=l.useMemo(()=>{if(!n)return null;const e=u({React:l,mdx:f},s),t=Object.keys(e),i=t.map(t=>e[t]);return o(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(r(i)))},[n,t]);return l.createElement(d,u({},i))}},xpAf:function(e,t,n){"use strict";var r,o=n("v6s4"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},y2NT:function(e,t,n){const r=n("wRdu");e.exports={MDXRenderer:r}}}]);
//# sourceMappingURL=component---gatsby-theme-mdx-deck-src-templates-deck-js-c8744769c805067106e3.js.map