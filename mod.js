// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f=n()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[c]=t:delete r[c],n}:function(r){return o.call(r)};function l(r){return"[object Arguments]"===f(r)}var s=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function y(r){return"number"==typeof r}function b(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function h(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+b(o):b(o)+r,n&&(r="-"+r)),r}var d=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=h(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=h(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):d.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var m=Math.abs,j=String.prototype.toLowerCase,E=String.prototype.toUpperCase,S=String.prototype.replace,O=/e\+(\d)$/,_=/e-(\d)$/,x=/^(\d+)$/,k=/^(\d+)e/,T=/\.0$/,I=/\.0*e/,A=/(\..*[^0])0*e/;function P(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":m(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=S.call(t,A,"$1e"),t=S.call(t,I,"e"),t=S.call(t,T,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=S.call(t,O,"e+0$1"),t=S.call(t,_,"e-0$1"),r.alternate&&(t=S.call(t,x,"$1."),t=S.call(t,k,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):j.call(t)}function V(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var F=String.fromCharCode,R=Array.isArray;function $(r){return r!=r}function C(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,o,i,a,u,c,f,l,s,p,g;if(!R(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,$(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!$(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(i)?String(n.arg):F(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+V(g):V(g)+l)),a+=n.arg||"",u+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function G(r){var e,t,n,o;for(t=[],o=0,n=B.exec(r);n;)(e=r.slice(o,B.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),o=B.lastIndex,n=B.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function W(r){var e,t;if("string"!=typeof r)throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[G(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var D,X=Object.prototype,Z=X.toString,M=X.__defineGetter__,Y=X.__defineSetter__,U=X.__lookupGetter__,H=X.__lookupSetter__;D=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(U.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=X,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&M&&M.call(r,e,t.get),a&&Y&&Y.call(r,e,t.set),r};var z=D;function q(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(r){return"string"==typeof r}var K=String.prototype.valueOf;var Q=n();function rr(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function er(r){return J(r)||rr(r)}function tr(r){return"number"==typeof r}q(er,"isPrimitive",J),q(er,"isObject",rr);var nr=Number,or=nr.prototype.toString;var ir=n();function ar(r){return"object"==typeof r&&(r instanceof nr||(ir?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function ur(r){return tr(r)||ar(r)}function cr(r){return r!=r}function fr(r){return tr(r)&&cr(r)}function lr(r){return ar(r)&&cr(r.valueOf())}function sr(r){return fr(r)||lr(r)}q(ur,"isPrimitive",tr),q(ur,"isObject",ar),q(sr,"isPrimitive",fr),q(sr,"isObject",lr);var pr=Number.POSITIVE_INFINITY,gr=nr.NEGATIVE_INFINITY,yr=Math.floor;function br(r){return yr(r)===r}function hr(r){return r<pr&&r>gr&&br(r)}function dr(r){return tr(r)&&hr(r)}function vr(r){return ar(r)&&hr(r.valueOf())}function wr(r){return dr(r)||vr(r)}q(wr,"isPrimitive",dr),q(wr,"isObject",vr);var mr=Object.prototype.propertyIsEnumerable;var jr,Er=!mr.call("beep","0");function Sr(r,e){var t;return null!=r&&(!(t=mr.call(r,e))&&Er&&er(r)?!fr(e=+e)&&dr(e)&&e>=0&&e<r.length:t)}jr=Array.isArray?Array.isArray:function(r){return"[object Array]"===f(r)};var Or,_r=jr;Or=s?l:function(r){return null!==r&&"object"==typeof r&&!_r(r)&&"number"==typeof r.length&&br(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Sr(r,"callee")};var xr=Or,kr=Array.prototype.slice;function Tr(r){return null!==r&&"object"==typeof r}var Ir=function(r){if("function"!=typeof r)throw new TypeError(W("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!_r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Tr);q(Tr,"isObjectLikeArray",Ir);var Ar=Sr((function(){}),"prototype"),Pr=!Sr({toString:null},"toString"),Vr=9007199254740991;function Fr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&br(i.length)&&i.length>=0&&i.length<=Vr||J(r)))throw new TypeError(W("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!dr(t))throw new TypeError(W("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(sr(e)){for(;o<n;o++)if(sr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Rr=/./;function $r(r){return"boolean"==typeof r}var Cr=Boolean,Nr=Boolean.prototype.toString;var Br=n();function Lr(r){return"object"==typeof r&&(r instanceof Cr||(Br?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===f(r)))}function Gr(r){return $r(r)||Lr(r)}q(Gr,"isPrimitive",$r),q(Gr,"isObject",Lr);var Wr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,Xr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Zr="object"==typeof Xr?Xr:null,Mr="object"==typeof globalThis?globalThis:null;var Yr=function(r){if(arguments.length){if(!$r(r))throw new TypeError(W("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Mr)return Mr;if(Wr)return Wr;if(Dr)return Dr;if(Zr)return Zr;throw new Error("unexpected error. Unable to resolve global object.")}(),Ur=Yr.document&&Yr.document.childNodes,Hr=Int8Array;function zr(){return/^\s*function\s*([^(]*)/i}var qr=/^\s*function\s*([^(]*)/i;function Jr(r){return Tr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Kr(r){var e,t,n;if(("Object"===(t=f(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=qr.exec(n.toString()))return e[1]}return Jr(r)?"Buffer":t}q(zr,"REGEXP",qr);var Qr="function"==typeof Rr||"object"==typeof Hr||"function"==typeof Ur?function(r){return Kr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Kr(r).toLowerCase():e};function re(r){return r.constructor&&r.constructor.prototype===r}var ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],te="undefined"==typeof window?void 0:window;var ne=function(){var r;if("undefined"===Qr(te))return!1;for(r in te)try{-1===Fr(ee,r)&&a(te,r)&&null!==te[r]&&"object"===Qr(te[r])&&re(te[r])}catch(r){return!0}return!1}(),oe="undefined"!=typeof window;var ie,ae=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ie=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return xr(e)?r(kr.call(e)):r(e)}:r:function(r){var e,t,n,o,i,u,c;if(o=[],xr(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Tr(r))return o;t=Ar&&n}for(i in r)t&&"prototype"===i||!a(r,i)||o.push(String(i));if(Pr)for(e=function(r){if(!1===oe&&!ne)return re(r);try{return re(r)}catch(r){return!1}}(r),c=0;c<ae.length;c++)u=ae[c],e&&"constructor"===u||!a(r,u)||o.push(String(u));return o};var ue=ie,ce=Object;var fe,le,se=Object.getPrototypeOf;le=Object.getPrototypeOf,fe="function"===Qr(le)?se:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===f(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var pe=fe;function ge(r){return null==r?null:(r=ce(r),pe(r))}var ye=Date.prototype.getDay;var be=n();function he(r){return"object"==typeof r&&(r instanceof Date||(be?function(r){try{return ye.call(r),!0}catch(r){return!1}}(r):"[object Date]"===f(r)))}var de=RegExp.prototype.exec;var ve=n();function we(r){return"object"==typeof r&&(r instanceof RegExp||(ve?function(r){try{return de.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===f(r)))}function me(r,e){var t,n,o,i,a,u;if(o=typeof r,i=typeof e,null===r||"object"!==o)return(null===e||"object"!==i)&&r===e;if("object"!==i)return!1;if(ge(r)!==ge(e))return!1;if(he(r))return r.getTime()===e.getTime();if(we(r))return r.source===e.source&&r.flags===e.flags;if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===f(r))return!0;r=ge(r)}return!1}(r)&&(r.message!==e.message||r.name!==e.name))return!1;if(Jr(r)){if(r.length!==e.length)return!1;for(u=0;u<r.length;u++)if(r[u]!==e[u])return!1;return!0}if(t=ue(r),n=ue(e),t.length!==n.length)return!1;for(t.sort(),n.sort(),u=0;u<t.length;u++)if(t[u]!==n[u])return!1;for(u=0;u<t.length;u++)if(!me(r[a=t[u]],e[a]))return!1;return o===i}export{me as default};
//# sourceMappingURL=mod.js.map
