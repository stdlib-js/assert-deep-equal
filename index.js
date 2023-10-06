// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).deepEqual=e()}(this,(function(){"use strict";function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f,l=n()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[c]=t:delete r[c],n}:function(r){return o.call(r)};function s(r){return"[object Arguments]"===l(r)}f=function(){return s(arguments)}();var p=f,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function b(r){return"number"==typeof r}function h(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function d(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+h(o):h(o)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!b(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=d(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=d(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function j(r){return"string"==typeof r}var E=Math.abs,S=String.prototype.toLowerCase,O=String.prototype.toUpperCase,_=String.prototype.replace,x=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,A=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function F(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!b(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":E(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_.call(t,V,"$1e"),t=_.call(t,P,"e"),t=_.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_.call(t,x,"e+0$1"),t=_.call(t,T,"e-0$1"),r.alternate&&(t=_.call(t,k,"$1."),t=_.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===O.call(r.specifier)?O.call(t):S.call(t)}function N(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+N(n):N(n)+r}var $=String.fromCharCode,C=isNaN,B=Array.isArray;function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function G(r){var e,t,n,o,i,a,u,c,f;if(!B(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(j(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):$(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function X(r){var e,t,n,o;for(t=[],o=0,n=W.exec(r);n;)(e=r.slice(o,W.lastIndex-n[0].length)).length&&t.push(e),t.push(D(n)),o=W.lastIndex,n=W.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function Z(r){return"string"==typeof r}function M(r){var e,t,n;if(!Z(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=X(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return G.apply(null,t)}var Y,U=Object.prototype,H=U.toString,q=U.__defineGetter__,z=U.__defineSetter__,J=U.__lookupGetter__,K=U.__lookupSetter__;Y=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?y:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(J.call(r,e)||K.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&q&&q.call(r,e,t.get),a&&z&&z.call(r,e,t.set),r};var Q=Y;function rr(r,e,t){Q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function er(r){return"string"==typeof r}var tr=String.prototype.valueOf;var nr=n();function or(r){return"object"==typeof r&&(r instanceof String||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function ir(r){return er(r)||or(r)}function ar(r){return"number"==typeof r}rr(ir,"isPrimitive",er),rr(ir,"isObject",or);var ur=Number,cr=ur.prototype.toString;var fr=n();function lr(r){return"object"==typeof r&&(r instanceof ur||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function sr(r){return ar(r)||lr(r)}function pr(r){return r!=r}function gr(r){return ar(r)&&pr(r)}function yr(r){return lr(r)&&pr(r.valueOf())}function br(r){return gr(r)||yr(r)}rr(sr,"isPrimitive",ar),rr(sr,"isObject",lr),rr(br,"isPrimitive",gr),rr(br,"isObject",yr);var hr=Number.POSITIVE_INFINITY,dr=ur.NEGATIVE_INFINITY,vr=Math.floor;function wr(r){return vr(r)===r}function mr(r){return r<hr&&r>dr&&wr(r)}function jr(r){return ar(r)&&mr(r)}function Er(r){return lr(r)&&mr(r.valueOf())}function Sr(r){return jr(r)||Er(r)}rr(Sr,"isPrimitive",jr),rr(Sr,"isObject",Er);var Or=Object.prototype.propertyIsEnumerable;var _r,xr=!Or.call("beep","0");function Tr(r,e){var t;return null!=r&&(!(t=Or.call(r,e))&&xr&&ir(r)?!gr(e=+e)&&jr(e)&&e>=0&&e<r.length:t)}_r=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};var kr,Ir=_r;kr=p?s:function(r){return null!==r&&"object"==typeof r&&!Ir(r)&&"number"==typeof r.length&&wr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Tr(r,"callee")};var Ar=kr,Pr=Array.prototype.slice;function Vr(r){return null!==r&&"object"==typeof r}var Fr=function(r){if("function"!=typeof r)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Vr);rr(Vr,"isObjectLikeArray",Fr);var Nr=Tr((function(){}),"prototype"),Rr=!Tr({toString:null},"toString");function $r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&wr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Cr(r,e,t){var n,o;if(!$r(r)&&!er(r))throw new TypeError(M("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!jr(t))throw new TypeError(M("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(br(e)){for(;o<n;o++)if(br(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Br=/./;function Lr(r){return"boolean"==typeof r}var Gr=Boolean,Wr=Boolean.prototype.toString;var Dr=n();function Xr(r){return"object"==typeof r&&(r instanceof Gr||(Dr?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===l(r)))}function Zr(r){return Lr(r)||Xr(r)}function Mr(){return new Function("return this;")()}rr(Zr,"isPrimitive",Lr),rr(Zr,"isObject",Xr);var Yr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Hr="object"==typeof global?global:null,qr="object"==typeof globalThis?globalThis:null;var zr=function(r){if(arguments.length){if(!Lr(r))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Mr()}if(qr)return qr;if(Yr)return Yr;if(Ur)return Ur;if(Hr)return Hr;throw new Error("unexpected error. Unable to resolve global object.")}(),Jr=zr.document&&zr.document.childNodes,Kr=Int8Array;function Qr(){return/^\s*function\s*([^(]*)/i}var re=/^\s*function\s*([^(]*)/i;function ee(r){return Vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function te(r){var e,t,n;if(("Object"===(t=l(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=re.exec(n.toString()))return e[1]}return ee(r)?"Buffer":t}rr(Qr,"REGEXP",re);var ne="function"==typeof Br||"object"==typeof Kr||"function"==typeof Jr?function(r){return te(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?te(r).toLowerCase():e};function oe(r){return r.constructor&&r.constructor.prototype===r}var ie=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ae="undefined"==typeof window?void 0:window;var ue=function(){var r;if("undefined"===ne(ae))return!1;for(r in ae)try{-1===Cr(ie,r)&&a(ae,r)&&null!==ae[r]&&"object"===ne(ae[r])&&oe(ae[r])}catch(r){return!0}return!1}(),ce="undefined"!=typeof window;var fe,le=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];fe=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return Ar(e)?r(Pr.call(e)):r(e)}:r:function(r){var e,t,n,o,i,u,c;if(o=[],Ar(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Vr(r))return o;t=Nr&&n}for(i in r)t&&"prototype"===i||!a(r,i)||o.push(String(i));if(Rr)for(e=function(r){if(!1===ce&&!ue)return oe(r);try{return oe(r)}catch(r){return!1}}(r),c=0;c<le.length;c++)u=le[c],e&&"constructor"===u||!a(r,u)||o.push(String(u));return o};var se=fe,pe=Object;var ge,ye,be=Object.getPrototypeOf;ye=Object.getPrototypeOf,ge="function"===ne(ye)?be:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===l(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var he=ge;function de(r){return null==r?null:(r=pe(r),he(r))}var ve=Date.prototype.getDay;var we=n();function me(r){return"object"==typeof r&&(r instanceof Date||(we?function(r){try{return ve.call(r),!0}catch(r){return!1}}(r):"[object Date]"===l(r)))}var je=RegExp.prototype.exec;var Ee=n();function Se(r){return"object"==typeof r&&(r instanceof RegExp||(Ee?function(r){try{return je.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===l(r)))}return function r(e,t){var n,o,i,a,u,c;if(i=typeof e,a=typeof t,null===e||"object"!==i)return(null===t||"object"!==a)&&e===t;if("object"!==a)return!1;if(de(e)!==de(t))return!1;if(me(e))return e.getTime()===t.getTime();if(Se(e))return e.source===t.source&&e.flags===t.flags;if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===l(r))return!0;r=de(r)}return!1}(e)&&(e.message!==t.message||e.name!==t.name))return!1;if(ee(e)){if(e.length!==t.length)return!1;for(c=0;c<e.length;c++)if(e[c]!==t[c])return!1;return!0}if(n=se(e),o=se(t),n.length!==o.length)return!1;for(n.sort(),o.sort(),c=0;c<n.length;c++)if(n[c]!==o[c])return!1;for(c=0;c<n.length;c++)if(!r(e[u=n[c]],t[u]))return!1;return i===a}}));
//# sourceMappingURL=index.js.map
