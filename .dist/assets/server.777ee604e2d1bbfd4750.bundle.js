/*! For license information please see server.777ee604e2d1bbfd4750.bundle.js.LICENSE.txt */
(self.webpackChunkbolerplate=self.webpackChunkbolerplate||[]).push([[377],{376:(e,t,n)=>{"use strict";e.exports=n.p+"103b5fa18196d5665a7e.svg"},804:(e,t,n)=>{var r={"./about/index.tsx":786,"./details/index.tsx":723};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=804},349:(e,t,n)=>{"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})},122:(e,t,n)=>{"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:()=>r})},552:(e,t,n)=>{"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{Z:()=>o})},756:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:()=>r})},531:(e,t,n)=>{"use strict";n.d(t,{lX:()=>x,q_:()=>H,ob:()=>d,PP:()=>k,Ep:()=>p});var r=n(122);function o(e){return"/"===e.charAt(0)}function a(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}const i=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],i=t&&t.split("/")||[],c=e&&o(e),s=t&&o(t),l=c||s;if(e&&o(e)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var u=i[i.length-1];n="."===u||".."===u||""===u}else n=!1;for(var f=0,p=i.length;p>=0;p--){var d=i[p];"."===d?a(i,p):".."===d?(a(i,p),f++):f&&(a(i,p),f--)}if(!l)for(;f--;f)i.unshift("..");!l||""===i[0]||i[0]&&o(i[0])||i.unshift("");var h=i.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h};var c=n(177);function s(e){return"/"===e.charAt(0)?e:"/"+e}function l(e){return"/"===e.charAt(0)?e.substr(1):e}function u(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function f(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function p(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function d(e,t,n,o){var a;"string"==typeof e?(a=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(a=(0,r.Z)({},e)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(a.key=n),o?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=i(a.pathname,o.pathname)):a.pathname=o.pathname:a.pathname||(a.pathname="/"),a}function h(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var v=!("undefined"==typeof window||!window.document||!window.document.createElement);function m(e,t){t(window.confirm(e))}var y="popstate",g="hashchange";function b(){try{return window.history.state||{}}catch(e){return{}}}function x(e){void 0===e&&(e={}),v||(0,c.Z)(!1);var t,n=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,a=!(-1===window.navigator.userAgent.indexOf("Trident")),i=e,l=i.forceRefresh,x=void 0!==l&&l,w=i.getUserConfirmation,E=void 0===w?m:w,O=i.keyLength,L=void 0===O?6:O,P=e.basename?f(s(e.basename)):"";function H(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return P&&(a=u(a,P)),d(a,r,n)}function C(){return Math.random().toString(36).substr(2,L)}var k=h();function T(e){(0,r.Z)(F,e),F.length=n.length,k.notifyListeners(F.location,F.action)}function j(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||G(H(e.state))}function A(){G(H(b()))}var _=!1;function G(e){if(_)_=!1,T();else{k.confirmTransitionTo(e,"POP",E,(function(t){t?T({action:"POP",location:e}):function(e){var t=F.location,n=S.indexOf(t.key);-1===n&&(n=0);var r=S.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(_=!0,M(o))}(e)}))}}var R=H(b()),S=[R.key];function U(e){return P+p(e)}function M(e){n.go(e)}var Z=0;function $(e){1===(Z+=e)&&1===e?(window.addEventListener(y,j),a&&window.addEventListener(g,A)):0===Z&&(window.removeEventListener(y,j),a&&window.removeEventListener(g,A))}var N=!1;var F={length:n.length,action:"POP",location:R,createHref:U,push:function(e,t){var r="PUSH",a=d(e,t,C(),F.location);k.confirmTransitionTo(a,r,E,(function(e){if(e){var t=U(a),i=a.key,c=a.state;if(o)if(n.pushState({key:i,state:c},null,t),x)window.location.href=t;else{var s=S.indexOf(F.location.key),l=S.slice(0,s+1);l.push(a.key),S=l,T({action:r,location:a})}else window.location.href=t}}))},replace:function(e,t){var r="REPLACE",a=d(e,t,C(),F.location);k.confirmTransitionTo(a,r,E,(function(e){if(e){var t=U(a),i=a.key,c=a.state;if(o)if(n.replaceState({key:i,state:c},null,t),x)window.location.replace(t);else{var s=S.indexOf(F.location.key);-1!==s&&(S[s]=a.key),T({action:r,location:a})}else window.location.replace(t)}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(e){void 0===e&&(e=!1);var t=k.setPrompt(e);return N||($(1),N=!0),function(){return N&&(N=!1,$(-1)),t()}},listen:function(e){var t=k.appendListener(e);return $(1),function(){$(-1),t()}}};return F}var w="hashchange",E={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+l(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:l,decodePath:s},slash:{encodePath:s,decodePath:s}};function O(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function L(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function P(e){window.location.replace(O(window.location.href)+"#"+e)}function H(e){void 0===e&&(e={}),v||(0,c.Z)(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),o=n.getUserConfirmation,a=void 0===o?m:o,i=n.hashType,l=void 0===i?"slash":i,y=e.basename?f(s(e.basename)):"",g=E[l],b=g.encodePath,x=g.decodePath;function H(){var e=x(L());return y&&(e=u(e,y)),d(e)}var C=h();function k(e){(0,r.Z)(N,e),N.length=t.length,C.notifyListeners(N.location,N.action)}var T=!1,j=null;function A(){var e,t,n=L(),r=b(n);if(n!==r)P(r);else{var o=H(),i=N.location;if(!T&&(t=o,(e=i).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(j===p(o))return;j=null,function(e){if(T)T=!1,k();else{var t="POP";C.confirmTransitionTo(e,t,a,(function(n){n?k({action:t,location:e}):function(e){var t=N.location,n=S.lastIndexOf(p(t));-1===n&&(n=0);var r=S.lastIndexOf(p(e));-1===r&&(r=0);var o=n-r;o&&(T=!0,U(o))}(e)}))}}(o)}}var _=L(),G=b(_);_!==G&&P(G);var R=H(),S=[p(R)];function U(e){t.go(e)}var M=0;function Z(e){1===(M+=e)&&1===e?window.addEventListener(w,A):0===M&&window.removeEventListener(w,A)}var $=!1;var N={length:t.length,action:"POP",location:R,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=O(window.location.href)),n+"#"+b(y+p(e))},push:function(e,t){var n="PUSH",r=d(e,void 0,void 0,N.location);C.confirmTransitionTo(r,n,a,(function(e){if(e){var t=p(r),o=b(y+t);if(L()!==o){j=t,function(e){window.location.hash=e}(o);var a=S.lastIndexOf(p(N.location)),i=S.slice(0,a+1);i.push(t),S=i,k({action:n,location:r})}else k()}}))},replace:function(e,t){var n="REPLACE",r=d(e,void 0,void 0,N.location);C.confirmTransitionTo(r,n,a,(function(e){if(e){var t=p(r),o=b(y+t);L()!==o&&(j=t,P(o));var a=S.indexOf(p(N.location));-1!==a&&(S[a]=t),k({action:n,location:r})}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(e){void 0===e&&(e=!1);var t=C.setPrompt(e);return $||(Z(1),$=!0),function(){return $&&($=!1,Z(-1)),t()}},listen:function(e){var t=C.appendListener(e);return Z(1),function(){Z(-1),t()}}};return N}function C(e,t,n){return Math.min(Math.max(e,t),n)}function k(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,o=t.initialEntries,a=void 0===o?["/"]:o,i=t.initialIndex,c=void 0===i?0:i,s=t.keyLength,l=void 0===s?6:s,u=h();function f(e){(0,r.Z)(x,e),x.length=x.entries.length,u.notifyListeners(x.location,x.action)}function v(){return Math.random().toString(36).substr(2,l)}var m=C(c,0,a.length-1),y=a.map((function(e){return d(e,void 0,"string"==typeof e?v():e.key||v())})),g=p;function b(e){var t=C(x.index+e,0,x.entries.length-1),r=x.entries[t];u.confirmTransitionTo(r,"POP",n,(function(e){e?f({action:"POP",location:r,index:t}):f()}))}var x={length:y.length,action:"POP",location:y[m],index:m,entries:y,createHref:g,push:function(e,t){var r="PUSH",o=d(e,t,v(),x.location);u.confirmTransitionTo(o,r,n,(function(e){if(e){var t=x.index+1,n=x.entries.slice(0);n.length>t?n.splice(t,n.length-t,o):n.push(o),f({action:r,location:o,index:t,entries:n})}}))},replace:function(e,t){var r="REPLACE",o=d(e,t,v(),x.location);u.confirmTransitionTo(o,r,n,(function(e){e&&(x.entries[x.index]=o,f({action:r,location:o}))}))},go:b,goBack:function(){b(-1)},goForward:function(){b(1)},canGo:function(e){var t=x.index+e;return t>=0&&t<x.entries.length},block:function(e){return void 0===e&&(e=!1),u.setPrompt(e)},listen:function(e){return u.appendListener(e)}};return x}},679:(e,t,n)=>{"use strict";var r=n(864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var o=d(n);o&&o!==h&&e(t,o,r)}var i=u(n);f&&(i=i.concat(f(n)));for(var c=s(t),v=s(n),m=0;m<i.length;++m){var y=i[m];if(!(a[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(n,y);try{l(t,y,g)}catch(e){}}}}return t}},826:e=>{var t={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(s[u]=i[u]);if(t){c=t(i);for(var f=0;f<c.length;f++)r.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s}},779:(e,t,n)=>{var r=n(826);e.exports=d,e.exports.parse=a,e.exports.compile=function(e,t){return c(a(e,t),t)},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var n,r=[],a=0,i=0,c="",u=t&&t.delimiter||"/";null!=(n=o.exec(e));){var f=n[0],p=n[1],d=n.index;if(c+=e.slice(i,d),i=d+f.length,p)c+=p[1];else{var h=e[i],v=n[2],m=n[3],y=n[4],g=n[5],b=n[6],x=n[7];c&&(r.push(c),c="");var w=null!=v&&null!=h&&h!==v,E="+"===b||"*"===b,O="?"===b||"*"===b,L=n[2]||u,P=y||g;r.push({name:m||a++,prefix:v||"",delimiter:L,optional:O,repeat:E,partial:w,asterisk:!!x,pattern:P?l(P):x?".*":"[^"+s(L)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",f(t)));return function(t,o){for(var a="",c=t||{},s=(o||{}).pretty?i:encodeURIComponent,l=0;l<e.length;l++){var u=e[l];if("string"!=typeof u){var f,p=c[u.name];if(null==p){if(u.optional){u.partial&&(a+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(r(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=s(p[d]),!n[l].test(f))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===d?u.prefix:u.delimiter)+f}}else{if(f=u.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):s(p),!n[l].test(f))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+f+'"');a+=u.prefix+f}}else a+=u}return a}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e&&e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",c=0;c<e.length;c++){var l=e[c];if("string"==typeof l)i+=s(l);else{var p=s(l.prefix),d="(?:"+l.pattern+")";t.push(l),l.repeat&&(d+="(?:"+p+d+")*"),i+=d=l.optional?l.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=s(n.delimiter||"/"),v=i.slice(-h.length)===h;return o||(i=(v?i.slice(0,-h.length):i)+"(?:"+h+"(?=$))?"),i+=a?"$":o&&v?"":"(?="+h+"|$)",u(new RegExp("^"+i,f(n)),t)}function d(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(d(e[o],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(a(e,n),t,n)}(e,t,n)}},703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},921:(e,t)=>{"use strict";var n=60103,r=60106,o=60107,a=60108,i=60114,c=60109,s=60110,l=60112,u=60113,f=60120,p=60115,d=60116,h=60121,v=60122,m=60117,y=60129,g=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;n=b("react.element"),r=b("react.portal"),o=b("react.fragment"),a=b("react.strict_mode"),i=b("react.profiler"),c=b("react.provider"),s=b("react.context"),l=b("react.forward_ref"),u=b("react.suspense"),f=b("react.suspense_list"),p=b("react.memo"),d=b("react.lazy"),h=b("react.block"),v=b("react.server.block"),m=b("react.fundamental"),y=b("react.debug_trace_mode"),g=b("react.legacy_hidden")}function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case i:case a:case u:case f:return e;default:switch(e=e&&e.$$typeof){case s:case l:case d:case p:case c:return e;default:return t}}case r:return t}}}var w=c,E=n,O=l,L=o,P=d,H=p,C=r,k=i,T=a,j=u;t.ContextConsumer=s,t.ContextProvider=w,t.Element=E,t.ForwardRef=O,t.Fragment=L,t.Lazy=P,t.Memo=H,t.Portal=C,t.Profiler=k,t.StrictMode=T,t.Suspense=j,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return x(e)===s},t.isContextProvider=function(e){return x(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===l},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===d},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===i},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===u},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===y||e===a||e===u||e===f||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===c||e.$$typeof===s||e.$$typeof===l||e.$$typeof===m||e.$$typeof===h||e[0]===v)},t.typeOf=x},864:(e,t,n)=>{"use strict";e.exports=n(921)},977:(e,t,n)=>{"use strict";n.d(t,{AW:()=>P,F0:()=>w,gx:()=>A,rs:()=>_,s6:()=>x,LX:()=>L,EN:()=>G});var r=n(552),o=n(294),a=n(697),i=n.n(a),c=n(531),s=1073741823,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function u(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}const f=o.createContext||function(e,t){var n,a,c="__create-react-context-"+function(){var e="__global_unique_id__";return l[e]=(l[e]||0)+1}()+"__",f=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=u(t.props.value),t}(0,r.Z)(n,e);var o=n.prototype;return o.getChildContext=function(){var e;return(e={})[c]=this.emitter,e},o.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((a=r)===(i=o)?0!==a||1/a==1/i:a!=a&&i!=i)?n=0:(n="function"==typeof t?t(r,o):s,0!==(n|=0)&&this.emitter.set(e.value,n))}var a,i},o.render=function(){return this.props.children},n}(o.Component);f.childContextTypes=((n={})[c]=i().object.isRequired,n);var p=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}(0,r.Z)(n,t);var o=n.prototype;return o.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?s:t},o.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?s:e},o.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},o.getValue=function(){return this.context[c]?this.context[c].get():e},o.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(o.Component);return p.contextTypes=((a={})[c]=i().object,a),{Provider:f,Consumer:p}};var p=n(177),d=n(122),h=n(779),v=n.n(h),m=(n(864),n(756)),y=n(679),g=n.n(y),b=function(e){var t=f();return t.displayName=e,t}("Router-History"),x=function(e){var t=f();return t.displayName=e,t}("Router"),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}(0,r.Z)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.createElement(x.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(b.Provider,{children:this.props.children||null,value:this.props.history}))},t}(o.Component);o.Component;o.Component;var E={},O=0;function L(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,c=void 0!==i&&i,s=n.sensitive,l=void 0!==s&&s;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=E[n]||(E[n]={});if(r[e])return r[e];var o=[],a={regexp:v()(e,o,t),keys:o};return O<1e4&&(r[e]=a,O++),a}(n,{end:a,strict:c,sensitive:l}),o=r.regexp,i=r.keys,s=o.exec(e);if(!s)return null;var u=s[0],f=s.slice(1),p=e===u;return a&&!p?null:{path:n,url:"/"===n&&""===u?"/":u,isExact:p,params:i.reduce((function(e,t,n){return e[t.name]=f[n],e}),{})}}),null)}var P=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this;return o.createElement(x.Consumer,null,(function(t){t||(0,p.Z)(!1);var n=e.props.location||t.location,r=e.props.computedMatch?e.props.computedMatch:e.props.path?L(n.pathname,e.props):t.match,a=(0,d.Z)({},t,{location:n,match:r}),i=e.props,c=i.children,s=i.component,l=i.render;return Array.isArray(c)&&0===c.length&&(c=null),o.createElement(x.Provider,{value:a},a.match?c?"function"==typeof c?c(a):c:s?o.createElement(s,a):l?l(a):null:"function"==typeof c?c(a):null)}))},t}(o.Component);function H(e){return"/"===e.charAt(0)?e:"/"+e}function C(e,t){if(!e)return t;var n=H(e);return 0!==t.pathname.indexOf(n)?t:(0,d.Z)({},t,{pathname:t.pathname.substr(n.length)})}function k(e){return"string"==typeof e?e:(0,c.Ep)(e)}function T(e){return function(){(0,p.Z)(!1)}}function j(){}var A=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handlePush=function(e){return t.navigateTo(e,"PUSH")},t.handleReplace=function(e){return t.navigateTo(e,"REPLACE")},t.handleListen=function(){return j},t.handleBlock=function(){return j},t}(0,r.Z)(t,e);var n=t.prototype;return n.navigateTo=function(e,t){var n=this.props,r=n.basename,o=void 0===r?"":r,a=n.context,i=void 0===a?{}:a;i.action=t,i.location=function(e,t){return e?(0,d.Z)({},t,{pathname:H(e)+t.pathname}):t}(o,(0,c.ob)(e)),i.url=k(i.location)},n.render=function(){var e=this.props,t=e.basename,n=void 0===t?"":t,r=e.context,a=void 0===r?{}:r,i=e.location,s=void 0===i?"/":i,l=(0,m.Z)(e,["basename","context","location"]),u={createHref:function(e){return H(n+k(e))},action:"POP",location:C(n,(0,c.ob)(s)),push:this.handlePush,replace:this.handleReplace,go:T(),goBack:T(),goForward:T(),listen:this.handleListen,block:this.handleBlock};return o.createElement(w,(0,d.Z)({},l,{history:u,staticContext:a}))},t}(o.Component);var _=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this;return o.createElement(x.Consumer,null,(function(t){t||(0,p.Z)(!1);var n,r,a=e.props.location||t.location;return o.Children.forEach(e.props.children,(function(e){if(null==r&&o.isValidElement(e)){n=e;var i=e.props.path||e.props.from;r=i?L(a.pathname,(0,d.Z)({},e.props,{path:i})):t.match}})),r?o.cloneElement(n,{location:a,computedMatch:r}):null}))},t}(o.Component);function G(e){var t="withRouter("+(e.displayName||e.name)+")",n=function(t){var n=t.wrappedComponentRef,r=(0,m.Z)(t,["wrappedComponentRef"]);return o.createElement(x.Consumer,null,(function(t){return t||(0,p.Z)(!1),o.createElement(e,(0,d.Z)({},r,t,{ref:n}))}))};return n.displayName=t,n.WrappedComponent=e,g()(n,e)}o.useContext},825:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r,o=n(570),a=n(294),i=n(727),c=n(977),s=n(829);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function l(e){return a.createElement("div",{className:"App"},a.createElement("nav",{className:"tab-ctn"},a.createElement("div",{className:"tabs"},s.L.map((({name:t,path:n})=>a.createElement(i.rU,{className:"tab "+(e.location.pathname===n?"is-active":""),key:n,to:n},t))))),a.createElement(c.rs,null,s._))}const u=(0,o.w)((0,c.EN)(l)),f=u;var p,d;(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(l,"App","/Users/luo/projects/bolerplate/client/App.tsx"),p.register(u,"default","/Users/luo/projects/bolerplate/client/App.tsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},786:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r,o=n(684);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=(0,o.ZP)((()=>n.e(646).then(n.bind(n,646)))),i="/about",c={path:i,name:"about",component:a},s=c;var l,u;(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(a,"About","/Users/luo/projects/bolerplate/client/dynamic_pages/about/index.tsx"),l.register(i,"path","/Users/luo/projects/bolerplate/client/dynamic_pages/about/index.tsx"),l.register(c,"default","/Users/luo/projects/bolerplate/client/dynamic_pages/about/index.tsx")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},723:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r,o=n(684);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=(0,o.ZP)((()=>n.e(593).then(n.bind(n,593)))),i="/details";function c(){return new Promise((e=>{n.g.setTimeout(e,2e3)}))}const s={path:i,name:"details",component:a,loadData:c},l=s;var u,f;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(a,"Details","/Users/luo/projects/bolerplate/client/dynamic_pages/details/index.tsx"),u.register(i,"path","/Users/luo/projects/bolerplate/client/dynamic_pages/details/index.tsx"),u.register(c,"loadData","/Users/luo/projects/bolerplate/client/dynamic_pages/details/index.tsx"),u.register(s,"default","/Users/luo/projects/bolerplate/client/dynamic_pages/details/index.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},449:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,o=n(294),a=n(376);function i(){const[e,t]=(0,o.useState)(0);return o.createElement("header",{className:"App-header"},o.createElement("img",{src:a,className:"App-logo",alt:"logo"}),o.createElement("p",null,"Hello Vite + React!"),o.createElement("p",null,o.createElement("button",{type:"button",onClick:()=>t((e=>e+1))},"hello world! count: ",e)),o.createElement("p",null,"Edit ",o.createElement("code",null,"App.tsx")," and save to test HMR updates."),o.createElement("p",null,o.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",o.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs")))}e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(i,"useState{[count, setCount](0)}");const c={path:"/",name:"home",component:i},s=c;var l,u;(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"Home","/Users/luo/projects/bolerplate/client/home/index.tsx"),l.register(c,"default","/Users/luo/projects/bolerplate/client/home/index.tsx")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},829:(e,t,n)=>{"use strict";n.d(t,{L:()=>s,_:()=>l});var r,o=n(294),a=n(449),i=n(977);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const c=n(804),s=c.keys().map((e=>c(e).default));s.unshift(a.Z);const l=s.map((e=>o.createElement(i.AW,{key:e.path,path:e.path,exact:"/"===e.path},o.createElement(e.component,null))));var u,f;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(c,"ctx","/Users/luo/projects/bolerplate/client/routes.tsx"),u.register(s,"pages","/Users/luo/projects/bolerplate/client/routes.tsx"),u.register(l,"routes","/Users/luo/projects/bolerplate/client/routes.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},203:(e,t,n)=>{"use strict";var r,o=n(294),a=n(762),i=n(977),c=n(825);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var s,l;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function u(e,t){return a.renderToString(o.createElement(i.gx,{location:e,context:t},o.createElement(c.Z,null)))}(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(u,"render","/Users/luo/projects/bolerplate/client/server-entry.tsx"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)},177:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r="Invariant failed";const o=function(e,t){if(!e)throw new Error(r)}}},e=>{"use strict";e.O(0,[377],(()=>(e.E(646),e.E(593))),5);e.O(0,[736],(()=>{return t=203,e(e.s=t);var t}));e.O()}]);