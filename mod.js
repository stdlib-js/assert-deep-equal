// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function i(t,r){return null!=t&&u.call(t,r)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[f],r=i(t,f);try{t[f]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[f]=e:delete t[f],n}:function(t){return o.call(t)};function l(t){return"[object Arguments]"===c(t)}var a=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,y=Object.defineProperty,b=Object.prototype,g=b.toString,v=b.__defineGetter__,j=b.__defineSetter__,h=b.__lookupGetter__,d=b.__lookupSetter__;s=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?y:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(h.call(t,r)||d.call(t,r)?(n=t.__proto__,t.__proto__=b,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&v&&v.call(t,r,e.get),i&&j&&j.call(t,r,e.set),t};var m=s;function w(t,r,e){m(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var O=String.prototype.valueOf;var S=n();function E(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===c(t)))}function P(t){return _(t)||E(t)}function I(t){return"number"==typeof t}w(P,"isPrimitive",_),w(P,"isObject",E);var T=Number,A=T.prototype.toString;var x=n();function N(t){return"object"==typeof t&&(t instanceof T||(x?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===c(t)))}function k(t){return I(t)||N(t)}function B(t){return t!=t}function V(t){return I(t)&&B(t)}function F(t){return N(t)&&B(t.valueOf())}function D(t){return V(t)||F(t)}w(k,"isPrimitive",I),w(k,"isObject",N),w(D,"isPrimitive",V),w(D,"isObject",F);var L=Number.POSITIVE_INFINITY,G=T.NEGATIVE_INFINITY,R=Math.floor;function Y(t){return R(t)===t}function C(t){return t<L&&t>G&&Y(t)}function M(t){return I(t)&&C(t)}function X(t){return N(t)&&C(t.valueOf())}function H(t){return M(t)||X(t)}w(H,"isPrimitive",M),w(H,"isObject",X);var W=Object.prototype.propertyIsEnumerable;var U,q=!W.call("beep","0");function z(t,r){var e;return null!=t&&(!(e=W.call(t,r))&&q&&P(t)?!V(r=+r)&&M(r)&&r>=0&&r<t.length:e)}U=Array.isArray?Array.isArray:function(t){return"[object Array]"===c(t)};var J,K=U;J=a?l:function(t){return null!==t&&"object"==typeof t&&!K(t)&&"number"==typeof t.length&&Y(t.length)&&t.length>=0&&t.length<=4294967295&&i(t,"callee")&&!z(t,"callee")};var Q=J,Z=Array.prototype.slice;function $(t){return null!==t&&"object"==typeof t}var tt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!K(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}($);w($,"isObjectLikeArray",tt);var rt=z((function(){}),"prototype"),et=!z({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Y(t.length)&&t.length>=0&&t.length<=9007199254740991}function ot(t,r,e){var n,o;if(!nt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!M(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(D(r)){for(;o<n;o++)if(D(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var ut=/./;function it(t){return"boolean"==typeof t}var ft=Boolean.prototype.toString;var ct=n();function lt(t){return"object"==typeof t&&(t instanceof Boolean||(ct?function(t){try{return ft.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===c(t)))}function at(t){return it(t)||lt(t)}function pt(){return new Function("return this;")()}w(at,"isPrimitive",it),w(at,"isObject",lt);var st="object"==typeof self?self:null,yt="object"==typeof window?window:null,bt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gt="object"==typeof bt?bt:null;var vt=function(t){if(arguments.length){if(!it(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(st)return st;if(yt)return yt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")}(),jt=vt.document&&vt.document.childNodes,ht=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var mt=/^\s*function\s*([^(]*)/i;function wt(t){return $(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))}function _t(t){var r,e,n;if(("Object"===(e=c(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=mt.exec(n.toString()))return r[1]}return wt(t)?"Buffer":e}w(dt,"REGEXP",mt);var Ot="function"==typeof ut||"object"==typeof ht||"function"==typeof jt?function(t){return _t(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?_t(t).toLowerCase():r};function St(t){return t.constructor&&t.constructor.prototype===t}var Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pt="undefined"==typeof window?void 0:window;var It=function(){var t;if("undefined"===Ot(Pt))return!1;for(t in Pt)try{-1===ot(Et,t)&&i(Pt,t)&&null!==Pt[t]&&"object"===Ot(Pt[t])&&St(Pt[t])}catch(t){return!0}return!1}(),Tt="undefined"!=typeof window;var At,xt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];At=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return Q(r)?t(Z.call(r)):t(r)}:t:function(t){var r,e,n,o,u,f,c;if(o=[],Q(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!i(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!$(t))return o;e=rt&&n}for(u in t)e&&"prototype"===u||!i(t,u)||o.push(String(u));if(et)for(r=function(t){if(!1===Tt&&!It)return St(t);try{return St(t)}catch(t){return!1}}(t),c=0;c<xt.length;c++)f=xt[c],r&&"constructor"===f||!i(t,f)||o.push(String(f));return o};var Nt=At;var kt,Bt,Vt=Object.getPrototypeOf;Bt=Object.getPrototypeOf,kt="function"===Ot(Bt)?Vt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===c(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ft=kt;function Dt(t){return null==t?null:(t=Object(t),Ft(t))}var Lt=Date.prototype.getDay;var Gt=n();function Rt(t){return"object"==typeof t&&(t instanceof Date||(Gt?function(t){try{return Lt.call(t),!0}catch(t){return!1}}(t):"[object Date]"===c(t)))}var Yt=RegExp.prototype.exec;var Ct=n();function Mt(t){return"object"==typeof t&&(t instanceof RegExp||(Ct?function(t){try{return Yt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===c(t)))}function Xt(t,r){var e,n,o,u,i,f;if(o=typeof t,u=typeof r,null===t||"object"!==o)return(null===r||"object"!==u)&&t===r;if("object"!==u)return!1;if(Dt(t)!==Dt(r))return!1;if(Rt(t))return t.getTime()===r.getTime();if(Mt(t))return t.source===r.source&&t.flags===r.flags;if(function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===c(t))return!0;t=Dt(t)}return!1}(t)&&(t.message!==r.message||t.name!==r.name))return!1;if(wt(t)){if(t.length!==r.length)return!1;for(f=0;f<t.length;f++)if(t[f]!==r[f])return!1;return!0}if(e=Nt(t),n=Nt(r),e.length!==n.length)return!1;for(e.sort(),n.sort(),f=0;f<e.length;f++)if(e[f]!==n[f])return!1;for(f=0;f<e.length;f++)if(!Xt(t[i=e[f]],r[i]))return!1;return o===u}export{Xt as default};
//# sourceMappingURL=mod.js.map