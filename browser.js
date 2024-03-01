// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return Object.keys(Object(e))}var r=void 0!==Object.keys,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,i=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&i.call(e,r)}var u,c="function"==typeof Symbol?Symbol:void 0,f="function"==typeof c?c.toStringTag:"",l=n()?function(e){var r,t,n;if(null==e)return o.call(e);t=e[f],r=a(e,f);try{e[f]=void 0}catch(r){return o.call(e)}return n=o.call(e),r?e[f]=t:delete e[f],n}:function(e){return o.call(e)};function s(e){return"[object Arguments]"===l(e)}u=function(){return s(arguments)}();var p=u,g="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty;function h(e){return"number"==typeof e}function b(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+b(o):b(o)+e,n&&(e="-"+e)),e}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===w.call(e.specifier)?w.call(t):v.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var j=Math.abs,E=String.prototype.toLowerCase,S=String.prototype.toUpperCase,O=String.prototype.replace,_=/e\+(\d)$/,x=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,A=/\.0*e/,P=/(\..*[^0])0*e/;function V(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!h(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":j(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=O.call(t,P,"$1e"),t=O.call(t,A,"e"),t=O.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=O.call(t,_,"e+0$1"),t=O.call(t,x,"e-0$1"),e.alternate&&(t=O.call(t,T,"$1."),t=O.call(t,k,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===S.call(e.specifier)?S.call(t):E.call(t)}function F(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var N=String.fromCharCode,R=isNaN,$=Array.isArray;function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function B(e){var r,t,n,o,i,a,u,c,f,l,s,p,g;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if("string"==typeof(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,R(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!R(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(i)?String(n.arg):N(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+F(g):F(g)+l)),a+=n.arg||"",u+=1}return a}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function W(e){var r,t,n,o;for(t=[],o=0,n=L.exec(e);n;)(r=e.slice(o,L.lastIndex-n[0].length)).length&&t.push(r),t.push(G(n)),o=L.lastIndex,n=L.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function D(e){var r,t;if("string"!=typeof e)throw new TypeError(D("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[W(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return B.apply(null,r)}var X,Z=Object.prototype,M=Z.toString,Y=Z.__defineGetter__,U=Z.__defineSetter__,H=Z.__lookupGetter__,q=Z.__lookupSetter__;X=function(){try{return g({},"x",{}),!0}catch(e){return!1}}()?y:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(D("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(D("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(H.call(e,r)||q.call(e,r)?(n=e.__proto__,e.__proto__=Z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Y&&Y.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e};var z=X;function J(e,r,t){z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(e){return"string"==typeof e}var Q=String.prototype.valueOf,ee=n();function re(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object String]"===l(e)))}function te(e){return K(e)||re(e)}function ne(e){return"number"==typeof e}J(te,"isPrimitive",K),J(te,"isObject",re);var oe=Number,ie=oe.prototype.toString,ae=n();function ue(e){return"object"==typeof e&&(e instanceof oe||(ae?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Number]"===l(e)))}function ce(e){return ne(e)||ue(e)}function fe(e){return e!=e}function le(e){return ne(e)&&fe(e)}function se(e){return ue(e)&&fe(e.valueOf())}function pe(e){return le(e)||se(e)}J(ce,"isPrimitive",ne),J(ce,"isObject",ue),J(pe,"isPrimitive",le),J(pe,"isObject",se);var ge=Number.POSITIVE_INFINITY,ye=oe.NEGATIVE_INFINITY,he=Math.floor;function be(e){return he(e)===e}function de(e){return e<ge&&e>ye&&be(e)}function ve(e){return ne(e)&&de(e)}function we(e){return ue(e)&&de(e.valueOf())}function me(e){return ve(e)||we(e)}J(me,"isPrimitive",ve),J(me,"isObject",we);var je,Ee=Object.prototype.propertyIsEnumerable,Se=!Ee.call("beep","0");function Oe(e,r){var t;return null!=e&&(!(t=Ee.call(e,r))&&Se&&te(e)?!le(r=+r)&&ve(r)&&r>=0&&r<e.length:t)}je=Array.isArray?Array.isArray:function(e){return"[object Array]"===l(e)};var _e,xe=je;_e=p?s:function(e){return null!==e&&"object"==typeof e&&!xe(e)&&"number"==typeof e.length&&be(e.length)&&e.length>=0&&e.length<=4294967295&&a(e,"callee")&&!Oe(e,"callee")};var Te=_e,ke=Array.prototype.slice;function Ie(e){return null!==e&&"object"==typeof e}var Ae=function(e){if("function"!=typeof e)throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!xe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ie);J(Ie,"isObjectLikeArray",Ae);var Pe=Oe((function(){}),"prototype"),Ve=!Oe({toString:null},"toString"),Fe=9007199254740991;function Ne(e,r,t){var n,o,i;if(!("object"==typeof(i=e)&&null!==i&&"number"==typeof i.length&&be(i.length)&&i.length>=0&&i.length<=Fe||K(e)))throw new TypeError(D("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!ve(t))throw new TypeError(D("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(pe(r)){for(;o<n;o++)if(pe(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}var Re=/./;function $e(e){return"boolean"==typeof e}var Ce=Boolean,Be=Boolean.prototype.toString,Le=n();function Ge(e){return"object"==typeof e&&(e instanceof Ce||(Le?function(e){try{return Be.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===l(e)))}function We(e){return $e(e)||Ge(e)}J(We,"isPrimitive",$e),J(We,"isObject",Ge);var De="object"==typeof self?self:null,Xe="object"==typeof window?window:null,Ze="object"==typeof globalThis?globalThis:null,Me=function(e){if(arguments.length){if(!$e(e))throw new TypeError(D("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ze)return Ze;if(De)return De;if(Xe)return Xe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ye=Me.document&&Me.document.childNodes,Ue=Int8Array;function He(){return/^\s*function\s*([^(]*)/i}var qe=/^\s*function\s*([^(]*)/i;function ze(e){return Ie(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Je(e){var r,t,n;if(("Object"===(t=l(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=qe.exec(n.toString()))return r[1]}return ze(e)?"Buffer":t}J(He,"REGEXP",qe);var Ke="function"==typeof Re||"object"==typeof Ue||"function"==typeof Ye?function(e){return Je(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Je(e).toLowerCase():r};function Qe(e){return e.constructor&&e.constructor.prototype===e}var er,rr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],tr="undefined"==typeof window?void 0:window,nr=function(){var e;if("undefined"===Ke(tr))return!1;for(e in tr)try{-1===Ne(rr,e)&&a(tr,e)&&null!==tr[e]&&"object"===Ke(tr[e])&&Qe(tr[e])}catch(e){return!0}return!1}(),or="undefined"!=typeof window,ir=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];er=r?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return Te(r)?e(ke.call(r)):e(r)}:e:function(e){var r,t,n,o,i,u,c;if(o=[],Te(e)){for(c=0;c<e.length;c++)o.push(c.toString());return o}if("string"==typeof e){if(e.length>0&&!a(e,"0"))for(c=0;c<e.length;c++)o.push(c.toString())}else{if(0==(n="function"==typeof e)&&!Ie(e))return o;t=Pe&&n}for(i in e)t&&"prototype"===i||!a(e,i)||o.push(String(i));if(Ve)for(r=function(e){if(!1===or&&!nr)return Qe(e);try{return Qe(e)}catch(e){return!1}}(e),c=0;c<ir.length;c++)u=ir[c],r&&"constructor"===u||!a(e,u)||o.push(String(u));return o};var ar,ur,cr=er,fr=Object,lr=Object.getPrototypeOf;ur=Object.getPrototypeOf,ar="function"===Ke(ur)?lr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===l(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var sr=ar;function pr(e){return null==e?null:(e=fr(e),sr(e))}var gr=Date.prototype.getDay,yr=n();function hr(e){return"object"==typeof e&&(e instanceof Date||(yr?function(e){try{return gr.call(e),!0}catch(e){return!1}}(e):"[object Date]"===l(e)))}var br=RegExp.prototype.exec,dr=n();function vr(e){return"object"==typeof e&&(e instanceof RegExp||(dr?function(e){try{return br.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===l(e)))}return function e(r,t){var n,o,i,a,u,c;if(i=typeof r,a=typeof t,null===r||"object"!==i)return(null===t||"object"!==a)&&r===t;if("object"!==a)return!1;if(pr(r)!==pr(t))return!1;if(hr(r))return r.getTime()===t.getTime();if(vr(r))return r.source===t.source&&r.flags===t.flags;if(function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof Error)return!0;for(;e;){if("[object Error]"===l(e))return!0;e=pr(e)}return!1}(r)&&(r.message!==t.message||r.name!==t.name))return!1;if(ze(r)){if(r.length!==t.length)return!1;for(c=0;c<r.length;c++)if(r[c]!==t[c])return!1;return!0}if(n=cr(r),o=cr(t),n.length!==o.length)return!1;for(n.sort(),o.sort(),c=0;c<n.length;c++)if(n[c]!==o[c])return!1;for(c=0;c<n.length;c++)if(!e(r[u=n[c]],t[u]))return!1;return i===a}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).deepEqual=r();
//# sourceMappingURL=browser.js.map
