/*! For license information please see client.8c1d20bcae33947bd459.bundle.js.LICENSE.txt */
(self.webpackChunkbolerplate=self.webpackChunkbolerplate||[]).push([[47],{376:(e,t,n)=>{"use strict";e.exports=n.p+"103b5fa18196d5665a7e.svg"},804:(e,t,n)=>{var r={"./about/index.tsx":786,"./details/index.tsx":723};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=804},349:(e,t,n)=>{"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})},122:(e,t,n)=>{"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:()=>r})},552:(e,t,n)=>{"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{Z:()=>o})},756:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:()=>r})},531:(e,t,n)=>{"use strict";n.d(t,{lX:()=>w,q_:()=>P,ob:()=>d,PP:()=>T,Ep:()=>p});var r=n(122);function o(e){return"/"===e.charAt(0)}function a(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}const i=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],i=t&&t.split("/")||[],c=e&&o(e),l=t&&o(t),u=c||l;if(e&&o(e)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var s=i[i.length-1];n="."===s||".."===s||""===s}else n=!1;for(var f=0,p=i.length;p>=0;p--){var d=i[p];"."===d?a(i,p):".."===d?(a(i,p),f++):f&&(a(i,p),f--)}if(!u)for(;f--;f)i.unshift("..");!u||""===i[0]||i[0]&&o(i[0])||i.unshift("");var h=i.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h};var c=n(177);function l(e){return"/"===e.charAt(0)?e:"/"+e}function u(e){return"/"===e.charAt(0)?e.substr(1):e}function s(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function f(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function p(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function d(e,t,n,o){var a;"string"==typeof e?(a=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(a=(0,r.Z)({},e)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(a.key=n),o?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=i(a.pathname,o.pathname)):a.pathname=o.pathname:a.pathname||(a.pathname="/"),a}function h(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var v=!("undefined"==typeof window||!window.document||!window.document.createElement);function m(e,t){t(window.confirm(e))}var y="popstate",b="hashchange";function g(){try{return window.history.state||{}}catch(e){return{}}}function w(e){void 0===e&&(e={}),v||(0,c.Z)(!1);var t,n=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,a=!(-1===window.navigator.userAgent.indexOf("Trident")),i=e,u=i.forceRefresh,w=void 0!==u&&u,x=i.getUserConfirmation,_=void 0===x?m:x,L=i.keyLength,E=void 0===L?6:L,k=e.basename?f(l(e.basename)):"";function P(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return k&&(a=s(a,k)),d(a,r,n)}function O(){return Math.random().toString(36).substr(2,E)}var T=h();function H(e){(0,r.Z)(I,e),I.length=n.length,T.notifyListeners(I.location,I.action)}function C(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||G(P(e.state))}function j(){G(P(g()))}var A=!1;function G(e){if(A)A=!1,H();else{T.confirmTransitionTo(e,"POP",_,(function(t){t?H({action:"POP",location:e}):function(e){var t=I.location,n=R.indexOf(t.key);-1===n&&(n=0);var r=R.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(A=!0,S(o))}(e)}))}}var M=P(g()),R=[M.key];function U(e){return k+p(e)}function S(e){n.go(e)}var Z=0;function $(e){1===(Z+=e)&&1===e?(window.addEventListener(y,C),a&&window.addEventListener(b,j)):0===Z&&(window.removeEventListener(y,C),a&&window.removeEventListener(b,j))}var N=!1;var I={length:n.length,action:"POP",location:M,createHref:U,push:function(e,t){var r="PUSH",a=d(e,t,O(),I.location);T.confirmTransitionTo(a,r,_,(function(e){if(e){var t=U(a),i=a.key,c=a.state;if(o)if(n.pushState({key:i,state:c},null,t),w)window.location.href=t;else{var l=R.indexOf(I.location.key),u=R.slice(0,l+1);u.push(a.key),R=u,H({action:r,location:a})}else window.location.href=t}}))},replace:function(e,t){var r="REPLACE",a=d(e,t,O(),I.location);T.confirmTransitionTo(a,r,_,(function(e){if(e){var t=U(a),i=a.key,c=a.state;if(o)if(n.replaceState({key:i,state:c},null,t),w)window.location.replace(t);else{var l=R.indexOf(I.location.key);-1!==l&&(R[l]=a.key),H({action:r,location:a})}else window.location.replace(t)}}))},go:S,goBack:function(){S(-1)},goForward:function(){S(1)},block:function(e){void 0===e&&(e=!1);var t=T.setPrompt(e);return N||($(1),N=!0),function(){return N&&(N=!1,$(-1)),t()}},listen:function(e){var t=T.appendListener(e);return $(1),function(){$(-1),t()}}};return I}var x="hashchange",_={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+u(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:u,decodePath:l},slash:{encodePath:l,decodePath:l}};function L(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function E(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function k(e){window.location.replace(L(window.location.href)+"#"+e)}function P(e){void 0===e&&(e={}),v||(0,c.Z)(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),o=n.getUserConfirmation,a=void 0===o?m:o,i=n.hashType,u=void 0===i?"slash":i,y=e.basename?f(l(e.basename)):"",b=_[u],g=b.encodePath,w=b.decodePath;function P(){var e=w(E());return y&&(e=s(e,y)),d(e)}var O=h();function T(e){(0,r.Z)(N,e),N.length=t.length,O.notifyListeners(N.location,N.action)}var H=!1,C=null;function j(){var e,t,n=E(),r=g(n);if(n!==r)k(r);else{var o=P(),i=N.location;if(!H&&(t=o,(e=i).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(C===p(o))return;C=null,function(e){if(H)H=!1,T();else{var t="POP";O.confirmTransitionTo(e,t,a,(function(n){n?T({action:t,location:e}):function(e){var t=N.location,n=R.lastIndexOf(p(t));-1===n&&(n=0);var r=R.lastIndexOf(p(e));-1===r&&(r=0);var o=n-r;o&&(H=!0,U(o))}(e)}))}}(o)}}var A=E(),G=g(A);A!==G&&k(G);var M=P(),R=[p(M)];function U(e){t.go(e)}var S=0;function Z(e){1===(S+=e)&&1===e?window.addEventListener(x,j):0===S&&window.removeEventListener(x,j)}var $=!1;var N={length:t.length,action:"POP",location:M,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=L(window.location.href)),n+"#"+g(y+p(e))},push:function(e,t){var n="PUSH",r=d(e,void 0,void 0,N.location);O.confirmTransitionTo(r,n,a,(function(e){if(e){var t=p(r),o=g(y+t);if(E()!==o){C=t,function(e){window.location.hash=e}(o);var a=R.lastIndexOf(p(N.location)),i=R.slice(0,a+1);i.push(t),R=i,T({action:n,location:r})}else T()}}))},replace:function(e,t){var n="REPLACE",r=d(e,void 0,void 0,N.location);O.confirmTransitionTo(r,n,a,(function(e){if(e){var t=p(r),o=g(y+t);E()!==o&&(C=t,k(o));var a=R.indexOf(p(N.location));-1!==a&&(R[a]=t),T({action:n,location:r})}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(e){void 0===e&&(e=!1);var t=O.setPrompt(e);return $||(Z(1),$=!0),function(){return $&&($=!1,Z(-1)),t()}},listen:function(e){var t=O.appendListener(e);return Z(1),function(){Z(-1),t()}}};return N}function O(e,t,n){return Math.min(Math.max(e,t),n)}function T(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,o=t.initialEntries,a=void 0===o?["/"]:o,i=t.initialIndex,c=void 0===i?0:i,l=t.keyLength,u=void 0===l?6:l,s=h();function f(e){(0,r.Z)(w,e),w.length=w.entries.length,s.notifyListeners(w.location,w.action)}function v(){return Math.random().toString(36).substr(2,u)}var m=O(c,0,a.length-1),y=a.map((function(e){return d(e,void 0,"string"==typeof e?v():e.key||v())})),b=p;function g(e){var t=O(w.index+e,0,w.entries.length-1),r=w.entries[t];s.confirmTransitionTo(r,"POP",n,(function(e){e?f({action:"POP",location:r,index:t}):f()}))}var w={length:y.length,action:"POP",location:y[m],index:m,entries:y,createHref:b,push:function(e,t){var r="PUSH",o=d(e,t,v(),w.location);s.confirmTransitionTo(o,r,n,(function(e){if(e){var t=w.index+1,n=w.entries.slice(0);n.length>t?n.splice(t,n.length-t,o):n.push(o),f({action:r,location:o,index:t,entries:n})}}))},replace:function(e,t){var r="REPLACE",o=d(e,t,v(),w.location);s.confirmTransitionTo(o,r,n,(function(e){e&&(w.entries[w.index]=o,f({action:r,location:o}))}))},go:g,goBack:function(){g(-1)},goForward:function(){g(1)},canGo:function(e){var t=w.index+e;return t>=0&&t<w.entries.length},block:function(e){return void 0===e&&(e=!1),s.setPrompt(e)},listen:function(e){return s.appendListener(e)}};return w}},679:(e,t,n)=>{"use strict";var r=n(864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function l(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var u=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var o=d(n);o&&o!==h&&e(t,o,r)}var i=s(n);f&&(i=i.concat(f(n)));for(var c=l(t),v=l(n),m=0;m<i.length;++m){var y=i[m];if(!(a[y]||r&&r[y]||v&&v[y]||c&&c[y])){var b=p(n,y);try{u(t,y,b)}catch(e){}}}}return t}},826:e=>{var t={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))n.call(i,s)&&(l[s]=i[s]);if(t){c=t(i);for(var f=0;f<c.length;f++)r.call(i,c[f])&&(l[c[f]]=i[c[f]])}}return l}},779:(e,t,n)=>{var r=n(826);e.exports=d,e.exports.parse=a,e.exports.compile=function(e,t){return c(a(e,t),t)},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var n,r=[],a=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=o.exec(e));){var f=n[0],p=n[1],d=n.index;if(c+=e.slice(i,d),i=d+f.length,p)c+=p[1];else{var h=e[i],v=n[2],m=n[3],y=n[4],b=n[5],g=n[6],w=n[7];c&&(r.push(c),c="");var x=null!=v&&null!=h&&h!==v,_="+"===g||"*"===g,L="?"===g||"*"===g,E=n[2]||s,k=y||b;r.push({name:m||a++,prefix:v||"",delimiter:E,optional:L,repeat:_,partial:x,asterisk:!!w,pattern:k?u(k):w?".*":"[^"+l(E)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",f(t)));return function(t,o){for(var a="",c=t||{},l=(o||{}).pretty?i:encodeURIComponent,u=0;u<e.length;u++){var s=e[u];if("string"!=typeof s){var f,p=c[s.name];if(null==p){if(s.optional){s.partial&&(a+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(r(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=l(p[d]),!n[u].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===d?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):l(p),!n[u].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');a+=s.prefix+f}}else a+=s}return a}}function l(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function s(e,t){return e.keys=t,e}function f(e){return e&&e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",c=0;c<e.length;c++){var u=e[c];if("string"==typeof u)i+=l(u);else{var p=l(u.prefix),d="(?:"+u.pattern+")";t.push(u),u.repeat&&(d+="(?:"+p+d+")*"),i+=d=u.optional?u.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=l(n.delimiter||"/"),v=i.slice(-h.length)===h;return o||(i=(v?i.slice(0,-h.length):i)+"(?:"+h+"(?=$))?"),i+=a?"$":o&&v?"":"(?="+h+"|$)",s(new RegExp("^"+i,f(n)),t)}function d(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return s(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(d(e[o],t,n).source);return s(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(a(e,n),t,n)}(e,t,n)}},703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},921:(e,t)=>{"use strict";var n=60103,r=60106,o=60107,a=60108,i=60114,c=60109,l=60110,u=60112,s=60113,f=60120,p=60115,d=60116,h=60121,v=60122,m=60117,y=60129,b=60131;if("function"==typeof Symbol&&Symbol.for){var g=Symbol.for;n=g("react.element"),r=g("react.portal"),o=g("react.fragment"),a=g("react.strict_mode"),i=g("react.profiler"),c=g("react.provider"),l=g("react.context"),u=g("react.forward_ref"),s=g("react.suspense"),f=g("react.suspense_list"),p=g("react.memo"),d=g("react.lazy"),h=g("react.block"),v=g("react.server.block"),m=g("react.fundamental"),y=g("react.debug_trace_mode"),b=g("react.legacy_hidden")}function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case i:case a:case s:case f:return e;default:switch(e=e&&e.$$typeof){case l:case u:case d:case p:case c:return e;default:return t}}case r:return t}}}var x=c,_=n,L=u,E=o,k=d,P=p,O=r,T=i,H=a,C=s;t.ContextConsumer=l,t.ContextProvider=x,t.Element=_,t.ForwardRef=L,t.Fragment=E,t.Lazy=k,t.Memo=P,t.Portal=O,t.Profiler=T,t.StrictMode=H,t.Suspense=C,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===d},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===s},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===y||e===a||e===s||e===f||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===c||e.$$typeof===l||e.$$typeof===u||e.$$typeof===m||e.$$typeof===h||e[0]===v)},t.typeOf=w},864:(e,t,n)=>{"use strict";e.exports=n(921)},977:(e,t,n)=>{"use strict";n.d(t,{AW:()=>k,F0:()=>x,gx:()=>j,rs:()=>A,s6:()=>w,LX:()=>E,EN:()=>G});var r=n(552),o=n(294),a=n(697),i=n.n(a),c=n(531),l=1073741823,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}const f=o.createContext||function(e,t){var n,a,c="__create-react-context-"+function(){var e="__global_unique_id__";return u[e]=(u[e]||0)+1}()+"__",f=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=s(t.props.value),t}(0,r.Z)(n,e);var o=n.prototype;return o.getChildContext=function(){var e;return(e={})[c]=this.emitter,e},o.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((a=r)===(i=o)?0!==a||1/a==1/i:a!=a&&i!=i)?n=0:(n="function"==typeof t?t(r,o):l,0!==(n|=0)&&this.emitter.set(e.value,n))}var a,i},o.render=function(){return this.props.children},n}(o.Component);f.childContextTypes=((n={})[c]=i().object.isRequired,n);var p=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}(0,r.Z)(n,t);var o=n.prototype;return o.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?l:t},o.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?l:e},o.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},o.getValue=function(){return this.context[c]?this.context[c].get():e},o.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(o.Component);return p.contextTypes=((a={})[c]=i().object,a),{Provider:f,Consumer:p}};var p=n(177),d=n(122),h=n(779),v=n.n(h),m=(n(864),n(756)),y=n(679),b=n.n(y),g=function(e){var t=f();return t.displayName=e,t}("Router-History"),w=function(e){var t=f();return t.displayName=e,t}("Router"),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}(0,r.Z)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.createElement(w.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(g.Provider,{children:this.props.children||null,value:this.props.history}))},t}(o.Component);o.Component;o.Component;var _={},L=0;function E(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,c=void 0!==i&&i,l=n.sensitive,u=void 0!==l&&l;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=_[n]||(_[n]={});if(r[e])return r[e];var o=[],a={regexp:v()(e,o,t),keys:o};return L<1e4&&(r[e]=a,L++),a}(n,{end:a,strict:c,sensitive:u}),o=r.regexp,i=r.keys,l=o.exec(e);if(!l)return null;var s=l[0],f=l.slice(1),p=e===s;return a&&!p?null:{path:n,url:"/"===n&&""===s?"/":s,isExact:p,params:i.reduce((function(e,t,n){return e[t.name]=f[n],e}),{})}}),null)}var k=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this;return o.createElement(w.Consumer,null,(function(t){t||(0,p.Z)(!1);var n=e.props.location||t.location,r=e.props.computedMatch?e.props.computedMatch:e.props.path?E(n.pathname,e.props):t.match,a=(0,d.Z)({},t,{location:n,match:r}),i=e.props,c=i.children,l=i.component,u=i.render;return Array.isArray(c)&&0===c.length&&(c=null),o.createElement(w.Provider,{value:a},a.match?c?"function"==typeof c?c(a):c:l?o.createElement(l,a):u?u(a):null:"function"==typeof c?c(a):null)}))},t}(o.Component);function P(e){return"/"===e.charAt(0)?e:"/"+e}function O(e,t){if(!e)return t;var n=P(e);return 0!==t.pathname.indexOf(n)?t:(0,d.Z)({},t,{pathname:t.pathname.substr(n.length)})}function T(e){return"string"==typeof e?e:(0,c.Ep)(e)}function H(e){return function(){(0,p.Z)(!1)}}function C(){}var j=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handlePush=function(e){return t.navigateTo(e,"PUSH")},t.handleReplace=function(e){return t.navigateTo(e,"REPLACE")},t.handleListen=function(){return C},t.handleBlock=function(){return C},t}(0,r.Z)(t,e);var n=t.prototype;return n.navigateTo=function(e,t){var n=this.props,r=n.basename,o=void 0===r?"":r,a=n.context,i=void 0===a?{}:a;i.action=t,i.location=function(e,t){return e?(0,d.Z)({},t,{pathname:P(e)+t.pathname}):t}(o,(0,c.ob)(e)),i.url=T(i.location)},n.render=function(){var e=this.props,t=e.basename,n=void 0===t?"":t,r=e.context,a=void 0===r?{}:r,i=e.location,l=void 0===i?"/":i,u=(0,m.Z)(e,["basename","context","location"]),s={createHref:function(e){return P(n+T(e))},action:"POP",location:O(n,(0,c.ob)(l)),push:this.handlePush,replace:this.handleReplace,go:H(),goBack:H(),goForward:H(),listen:this.handleListen,block:this.handleBlock};return o.createElement(x,(0,d.Z)({},u,{history:s,staticContext:a}))},t}(o.Component);var A=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this;return o.createElement(w.Consumer,null,(function(t){t||(0,p.Z)(!1);var n,r,a=e.props.location||t.location;return o.Children.forEach(e.props.children,(function(e){if(null==r&&o.isValidElement(e)){n=e;var i=e.props.path||e.props.from;r=i?E(a.pathname,(0,d.Z)({},e.props,{path:i})):t.match}})),r?o.cloneElement(n,{location:a,computedMatch:r}):null}))},t}(o.Component);function G(e){var t="withRouter("+(e.displayName||e.name)+")",n=function(t){var n=t.wrappedComponentRef,r=(0,m.Z)(t,["wrappedComponentRef"]);return o.createElement(w.Consumer,null,(function(t){return t||(0,p.Z)(!1),o.createElement(e,(0,d.Z)({},r,t,{ref:n}))}))};return n.displayName=t,n.WrappedComponent=e,b()(n,e)}o.useContext},53:(e,t)=>{"use strict";var n,r,o,a;if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var c=Date,l=c.now();t.unstable_now=function(){return c.now()-l}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,s=null,f=function(){if(null!==u)try{var e=t.unstable_now();u(!0,e),u=null}catch(e){throw setTimeout(f,0),e}};n=function(e){null!==u?setTimeout(n,0,e):(u=e,setTimeout(f,0))},r=function(e,t){s=setTimeout(e,t)},o=function(){clearTimeout(s)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var h=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,m=null,y=-1,b=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<e?Math.floor(1e3/e):5};var w=new MessageChannel,x=w.port2;w.port1.onmessage=function(){if(null!==m){var e=t.unstable_now();g=e+b;try{m(!0,e)?x.postMessage(null):(v=!1,m=null)}catch(e){throw x.postMessage(null),e}}else v=!1},n=function(e){m=e,v||(v=!0,x.postMessage(null))},r=function(e,n){y=p((function(){e(t.unstable_now())}),n)},o=function(){d(y),y=-1}}function _(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<k(o,t)))break e;e[r]=t,e[n]=o,n=r}}function L(e){return void 0===(e=e[0])?null:e}function E(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var a=2*(r+1)-1,i=e[a],c=a+1,l=e[c];if(void 0!==i&&0>k(i,n))void 0!==l&&0>k(l,i)?(e[r]=l,e[c]=n,r=c):(e[r]=i,e[a]=n,r=a);else{if(!(void 0!==l&&0>k(l,n)))break e;e[r]=l,e[c]=n,r=c}}}return t}return null}function k(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var P=[],O=[],T=1,H=null,C=3,j=!1,A=!1,G=!1;function M(e){for(var t=L(O);null!==t;){if(null===t.callback)E(O);else{if(!(t.startTime<=e))break;E(O),t.sortIndex=t.expirationTime,_(P,t)}t=L(O)}}function R(e){if(G=!1,M(e),!A)if(null!==L(P))A=!0,n(U);else{var t=L(O);null!==t&&r(R,t.startTime-e)}}function U(e,n){A=!1,G&&(G=!1,o()),j=!0;var a=C;try{for(M(n),H=L(P);null!==H&&(!(H.expirationTime>n)||e&&!t.unstable_shouldYield());){var i=H.callback;if("function"==typeof i){H.callback=null,C=H.priorityLevel;var c=i(H.expirationTime<=n);n=t.unstable_now(),"function"==typeof c?H.callback=c:H===L(P)&&E(P),M(n)}else E(P);H=L(P)}if(null!==H)var l=!0;else{var u=L(O);null!==u&&r(R,u.startTime-n),l=!1}return l}finally{H=null,C=a,j=!1}}var S=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){A||j||(A=!0,n(U))},t.unstable_getCurrentPriorityLevel=function(){return C},t.unstable_getFirstCallbackNode=function(){return L(P)},t.unstable_next=function(e){switch(C){case 1:case 2:case 3:var t=3;break;default:t=C}var n=C;C=t;try{return e()}finally{C=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=S,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=C;C=e;try{return t()}finally{C=n}},t.unstable_scheduleCallback=function(e,a,i){var c=t.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?c+i:c:i=c,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:T++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>c?(e.sortIndex=i,_(O,e),null===L(P)&&e===L(O)&&(G?o():G=!0,r(R,i-c))):(e.sortIndex=l,_(P,e),A||j||(A=!0,n(U))),e},t.unstable_wrapCallback=function(e){var t=C;return function(){var n=C;C=t;try{return e.apply(this,arguments)}finally{C=n}}}},840:(e,t,n)=>{"use strict";e.exports=n(53)},190:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r,o=n(570),a=n(294),i=n(727),c=n(977),l=n(829),u=n(706);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;console.log(new u.y("Bruto").name),e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function s(e){return a.createElement("div",{className:"App"},a.createElement("nav",{className:"tab-ctn"},a.createElement("div",{className:"tabs"},l.L.map((({name:t,path:n})=>a.createElement(i.rU,{className:"tab "+(e.location.pathname===n?"is-active":""),key:n,to:n},t))))),a.createElement(c.rs,null,l._))}const f=(0,o.w)((0,c.EN)(s)),p=f;var d,h;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(s,"App","/Users/luo/projects/bolerplate/client/App.tsx"),d.register(f,"default","/Users/luo/projects/bolerplate/client/App.tsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)},346:(e,t,n)=>{"use strict";var r=n(294),o=n(935),a=n(727),i=n(190);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;n.g.__webpack_nonce__="Id1DogTWj5e4R/tUH+9PNQ==",o.hydrate(r.createElement(a.VK,null,r.createElement(i.Z,null)),document.getElementById("root"))},786:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r,o=n(684);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=(0,o.ZP)((()=>n.e(646).then(n.bind(n,646)))),i="/about",c={path:i,name:"about",component:a},l=c;var u,s;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(a,"About","/Users/luo/projects/bolerplate/client/dynamic_pages/about/index.tsx"),u.register(i,"path","/Users/luo/projects/bolerplate/client/dynamic_pages/about/index.tsx"),u.register(c,"default","/Users/luo/projects/bolerplate/client/dynamic_pages/about/index.tsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},723:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r,o=n(684);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=(0,o.ZP)((()=>n.e(593).then(n.bind(n,593)))),i="/details";function c(){return new Promise((e=>{n.g.setTimeout(e,2e3)}))}const l={path:i,name:"details",component:a,loadData:c},u=l;var s,f;(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(a,"Details","/Users/luo/projects/bolerplate/client/dynamic_pages/details/index.tsx"),s.register(i,"path","/Users/luo/projects/bolerplate/client/dynamic_pages/details/index.tsx"),s.register(c,"loadData","/Users/luo/projects/bolerplate/client/dynamic_pages/details/index.tsx"),s.register(l,"default","/Users/luo/projects/bolerplate/client/dynamic_pages/details/index.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},449:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,o=n(294),a=n(376);function i(){const[e,t]=(0,o.useState)(0);return o.createElement("header",{className:"App-header"},o.createElement("img",{src:a,className:"App-logo",alt:"logo"}),o.createElement("p",null,"Hello Vite + React!"),o.createElement("p",null,o.createElement("button",{type:"button",onClick:()=>t((e=>e+1))},"hello world! count: ",e)),o.createElement("p",null,"Edit ",o.createElement("code",null,"App.tsx")," and save to test HMR updates."),o.createElement("p",null,o.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",o.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs")))}e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(i,"useState{[count, setCount](0)}");const c={path:"/",name:"home",component:i},l=c;var u,s;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(i,"Home","/Users/luo/projects/bolerplate/client/home/index.tsx"),u.register(c,"default","/Users/luo/projects/bolerplate/client/home/index.tsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},829:(e,t,n)=>{"use strict";n.d(t,{L:()=>l,_:()=>u});var r,o=n(294),a=n(449),i=n(977);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const c=n(804),l=c.keys().map((e=>c(e).default));l.unshift(a.Z);const u=l.map((e=>o.createElement(i.AW,{key:e.path,path:e.path,exact:"/"===e.path},o.createElement(e.component,null))));var s,f;(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"ctx","/Users/luo/projects/bolerplate/client/routes.tsx"),s.register(l,"pages","/Users/luo/projects/bolerplate/client/routes.tsx"),s.register(u,"routes","/Users/luo/projects/bolerplate/client/routes.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},706:(module,__webpack_exports__,__webpack_require__)=>{"use strict";var enterModule;__webpack_require__.d(__webpack_exports__,{y:()=>Dog}),module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},reactHotLoader,leaveModule;class Dog{constructor(e){this.name=e}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(Dog,"Dog","/Users/luo/projects/bolerplate/client/test/lib.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},177:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r="Invariant failed";const o=function(e,t){if(!e)throw new Error(r)}}},e=>{"use strict";e.O(0,[47],(()=>(e.E(646),e.E(593))),5);e.O(0,[736],(()=>{return t=346,e(e.s=t);var t}));e.O()}]);