// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).deepEqual=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r=function(t){return Object.keys(Object(t))},e=r;var n=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},f=Object.prototype.toString,c=f;var a=function(t){return c.call(t)},l=Object.prototype.hasOwnProperty;var p=function(t,r){return null!=t&&l.call(t,r)},s="function"==typeof Symbol?Symbol.toStringTag:"",v=p,y=s,b=f;var g=a,d=function(t){var r,e,n;if(null==t)return b.call(t);e=t[y],r=v(t,y);try{t[y]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[y]=e:delete t[y],n},j=u()?d:g,m=j;var h,w=function(t){return"[object Arguments]"===m(t)},O=w;h=function(){return O(arguments)}();var _=h,P="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return P({},"x",{}),!0}catch(t){return!1}},E=Object.defineProperty,T=Object.prototype,I=T.toString,x=T.__defineGetter__,A=T.__defineSetter__,k=T.__lookupGetter__,N=T.__lookupSetter__;var B=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(k.call(t,r)||N.call(t,r)?(n=t.__proto__,t.__proto__=T,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&x&&x.call(t,r,e.get),u&&A&&A.call(t,r,e.set),t},V=E,D=B,F=S()?V:D;var G=function(t,r,e){F(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},L=G;var R=function(t){return"string"==typeof t},M=String.prototype.valueOf;var X=j,Y=function(t){try{return M.call(t),!0}catch(t){return!1}},C=u();var H=function(t){return"object"==typeof t&&(t instanceof String||(C?Y(t):"[object String]"===X(t)))},W=R,q=H;var z=L,U=function(t){return W(t)||q(t)},J=H;z(U,"isPrimitive",R),z(U,"isObject",J);var K=U;var Q=function(t){return"number"==typeof t},Z=Number,$=Z.prototype.toString;var tt=j,rt=Z,et=function(t){try{return $.call(t),!0}catch(t){return!1}},nt=u();var ot=function(t){return"object"==typeof t&&(t instanceof rt||(nt?et(t):"[object Number]"===tt(t)))},it=Q,ut=ot;var ft=L,ct=function(t){return it(t)||ut(t)},at=ot;ft(ct,"isPrimitive",Q),ft(ct,"isObject",at);var lt=ct;var pt=function(t){return t!=t},st=lt.isPrimitive,vt=pt;var yt=function(t){return st(t)&&vt(t)},bt=lt.isObject,gt=pt;var dt=function(t){return bt(t)&&gt(t.valueOf())},jt=yt,mt=dt;var ht=L,wt=function(t){return jt(t)||mt(t)},Ot=dt;ht(wt,"isPrimitive",yt),ht(wt,"isObject",Ot);var _t=wt,Pt=Number.POSITIVE_INFINITY,St=Z.NEGATIVE_INFINITY,Et=Math.floor;var Tt=function(t){return Et(t)===t},It=Pt,xt=St,At=Tt;var kt=function(t){return t<It&&t>xt&&At(t)},Nt=lt.isPrimitive,Bt=kt;var Vt=function(t){return Nt(t)&&Bt(t)},Dt=lt.isObject,Ft=kt;var Gt=function(t){return Dt(t)&&Ft(t.valueOf())},Lt=Vt,Rt=Gt;var Mt=L,Xt=function(t){return Lt(t)||Rt(t)},Yt=Gt;Mt(Xt,"isPrimitive",Vt),Mt(Xt,"isObject",Yt);var Ct,Ht=Xt,Wt=Object.prototype.propertyIsEnumerable;Ct=!Wt.call("beep","0");var qt=K,zt=_t.isPrimitive,Ut=Ht.isPrimitive,Jt=Wt,Kt=Ct;var Qt=function(t,r){var e;return null!=t&&(!(e=Jt.call(t,r))&&Kt&&qt(t)?!zt(r=+r)&&Ut(r)&&r>=0&&r<t.length:e)},Zt=Qt,$t=j;var tr=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},rr=p,er=Zt,nr=tr,or=Tt;var ir=_?w:function(t){return null!==t&&"object"==typeof t&&!nr(t)&&"number"==typeof t.length&&or(t.length)&&t.length>=0&&t.length<=4294967295&&rr(t,"callee")&&!er(t,"callee")},ur=ir,fr=r,cr=Array.prototype.slice;var ar=function(t){return ur(t)?fr(cr.call(t)):fr(t)},lr=tr;var pr=function(t){return null!==t&&"object"==typeof t};L(pr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!lr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(pr));var sr=pr;var vr=Zt((function(){}),"prototype"),yr=!Zt({toString:null},"toString"),br=Tt;var gr=_t,dr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&br(t.length)&&t.length>=0&&t.length<=9007199254740991},jr=K.isPrimitive,mr=Ht.isPrimitive;var hr=function(t,r,e){var n,o;if(!dr(t)&&!jr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!mr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(gr(r)){for(;o<n;o++)if(gr(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1},wr=hr,Or=/./;var _r=function(t){return"boolean"==typeof t},Pr=Boolean.prototype.toString;var Sr=j,Er=function(t){try{return Pr.call(t),!0}catch(t){return!1}},Tr=u();var Ir=function(t){return"object"==typeof t&&(t instanceof Boolean||(Tr?Er(t):"[object Boolean]"===Sr(t)))},xr=_r,Ar=Ir;var kr=L,Nr=function(t){return xr(t)||Ar(t)},Br=Ir;kr(Nr,"isPrimitive",_r),kr(Nr,"isObject",Br);var Vr=Nr;var Dr=function(){return new Function("return this;")()},Fr="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Rr="object"==typeof Lr?Lr:null;module.exports=Rr;var Mr=Vr.isPrimitive,Xr=Dr,Yr=Fr,Cr=Gr,Hr=t(Object.freeze({__proto__:null}));var Wr=function(t){if(arguments.length){if(!Mr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Xr()}if(Yr)return Yr;if(Cr)return Cr;if(Hr)return Hr;throw new Error("unexpected error. Unable to resolve global object.")},qr=Wr(),zr=qr.document&&qr.document.childNodes,Ur=Int8Array,Jr=Or,Kr=zr,Qr=Ur;var Zr=function(){return"function"==typeof Jr||"object"==typeof Qr||"function"==typeof Kr};var $r=function(){return/^\s*function\s*([^(]*)/i},te=$r;L(te,"REGEXP",$r());var re=sr;var ee=function(t){return re(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))},ne=j,oe=te.REGEXP,ie=ee;var ue=function(t){var r,e,n;if(("Object"===(e=ne(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=oe.exec(n.toString()))return r[1]}return ie(t)?"Buffer":e},fe=ue;var ce=ue;var ae=function(t){var r;return null===t?"null":"object"===(r=typeof t)?fe(t).toLowerCase():r},le=function(t){return ce(t).toLowerCase()},pe=Zr()?le:ae;var se,ve=function(t){return t.constructor&&t.constructor.prototype===t},ye="undefined"==typeof window?void 0:window,be=p,ge=wr,de=pe,je=ve,me=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],he=ye;se=function(){var t;if("undefined"===de(he))return!1;for(t in he)try{-1===ge(me,t)&&be(he,t)&&null!==he[t]&&"object"===de(he[t])&&je(he[t])}catch(t){return!0}return!1}();var we="undefined"!=typeof window,Oe=se,_e=ve,Pe=we;var Se=sr,Ee=p,Te=ir,Ie=vr,xe=yr,Ae=function(t){if(!1===Pe&&!Oe)return _e(t);try{return _e(t)}catch(t){return!1}},ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ne=r,Be=ar,Ve=function(t){var r,e,n,o,i,u,f;if(o=[],Te(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!Ee(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof t)&&!Se(t))return o;e=Ie&&n}for(i in t)e&&"prototype"===i||!Ee(t,i)||o.push(String(i));if(xe)for(r=Ae(t),f=0;f<ke.length;f++)u=ke[f],r&&"constructor"===u||!Ee(t,u)||o.push(String(u));return o},De=o?n()?Be:Ne:Ve,Fe=pe;var Ge=function(t){return"function"===Fe(t)},Le=Object.getPrototypeOf;var Re=function(t){return t.__proto__},Me=j,Xe=Re;var Ye=function(t){var r=Xe(t);return r||null===r?r:"[object Function]"===Me(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Ce=Le,He=Ye,We=Ge(Object.getPrototypeOf)?Ce:He;var qe=function(t){return null==t?null:(t=Object(t),We(t))},ze=Date.prototype.getDay;var Ue=j,Je=function(t){try{return ze.call(t),!0}catch(t){return!1}},Ke=u();var Qe=function(t){return"object"==typeof t&&(t instanceof Date||(Ke?Je(t):"[object Date]"===Ue(t)))},Ze=qe,$e=j;var tn=function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===$e(t))return!0;t=Ze(t)}return!1},rn=RegExp.prototype.exec;var en=j,nn=function(t){try{return rn.call(t),!0}catch(t){return!1}},on=u();var un=function(t){return"object"==typeof t&&(t instanceof RegExp||(on?nn(t):"[object RegExp]"===en(t)))};return function t(r,e){var n,o,i,u,f,c;if(i=typeof r,u=typeof e,null===r||"object"!==i)return(null===e||"object"!==u)&&r===e;if("object"!==u)return!1;if(qe(r)!==qe(e))return!1;if(Qe(r))return r.getTime()===e.getTime();if(un(r))return r.source===e.source&&r.flags===e.flags;if(tn(r)&&(r.message!==e.message||r.name!==e.name))return!1;if(ee(r)){if(r.length!==e.length)return!1;for(c=0;c<r.length;c++)if(r[c]!==e[c])return!1;return!0}if(n=De(r),o=De(e),n.length!==o.length)return!1;for(n.sort(),o.sort(),c=0;c<n.length;c++)if(n[c]!==o[c])return!1;for(c=0;c<n.length;c++)if(!t(r[f=n[c]],e[f]))return!1;return i===u}}));
//# sourceMappingURL=index.js.map
