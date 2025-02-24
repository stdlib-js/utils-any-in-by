// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"";var a=r()?function(e){var r,i,a,c,l;if(null==e)return t.call(e);i=e[o],l=o,r=null!=(c=e)&&n.call(c,l);try{e[o]=void 0}catch(r){return t.call(e)}return a=t.call(e),r?e[o]=i:delete e[o],a}:function(e){return t.call(e)};var c=Array.isArray?Array.isArray:function(e){return"[object Array]"===a(e)};var l=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty;function f(e){return"number"==typeof e}function p(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function g(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+p(i):p(i)+e,n&&(e="-"+e)),e}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!f(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=g(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=g(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===h.call(e.specifier)?h.call(t):d.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var b=Math.abs,w=String.prototype.toLowerCase,v=String.prototype.toUpperCase,m=String.prototype.replace,_=/e\+(\d)$/,j=/e-(\d)$/,E=/^(\d+)$/,S=/^(\d+)e/,x=/\.0$/,k=/\.0*e/,T=/(\..*[^0])0*e/;function A(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":b(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=m.call(t,T,"$1e"),t=m.call(t,k,"e"),t=m.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=m.call(t,_,"e+0$1"),t=m.call(t,j,"e-0$1"),e.alternate&&(t=m.call(t,E,"$1."),t=m.call(t,S,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===v.call(e.specifier)?v.call(t):w.call(t)}function V(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var O=String.fromCharCode,C=Array.isArray;function F(e){return e!=e}function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,n,i,o,a,c,l,u,s,f,p,d;if(!C(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,F(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!F(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(o)?String(n.arg):O(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=g(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,f=n.width,p=n.padRight,d=void 0,(d=f-s.length)<0?s:s=p?s+V(d):V(d)+s)),a+=n.arg||"",c+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function B(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function L(e){var r,t;if("string"!=typeof e)throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[B(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $.apply(null,r)}var G,Z=Object.prototype,U=Z.toString,W=Z.__defineGetter__,M=Z.__defineSetter__,X=Z.__lookupGetter__,z=Z.__lookupSetter__;G=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?s:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=Z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&W&&W.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var H=G;function N(e,r,t){H(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(e){return"boolean"==typeof e}var D=Boolean,J=Boolean.prototype.toString;var K=r();function Q(e){return"object"==typeof e&&(e instanceof D||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===a(e)))}function Y(e){return q(e)||Q(e)}N(Y,"isPrimitive",q),N(Y,"isObject",Q);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ne="object"==typeof te?te:null,ie="object"==typeof globalThis?globalThis:null;var oe=function(e){if(arguments.length){if(!q(e))throw new TypeError(L("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ie)return ie;if(ee)return ee;if(re)return re;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=oe.document&&oe.document.childNodes,ce=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function se(e){return null!==e&&"object"==typeof e}function fe(e){var r,t,n,i;if(("Object"===(t=a(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ue.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}N(le,"REGEXP",ue),N(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!c(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var pe="function"==typeof l||"object"==typeof ce||"function"==typeof ae?function(e){return fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?fe(e).toLowerCase():r};function ge(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function de(e,r,t){var n,i;if("object"!=typeof(i=e)||null===i||c(i))throw new TypeError(ge("null3L",e));if(!function(e){return"function"===pe(e)}(r))throw new TypeError(ge("null2H",r));for(n in e)if(r.call(t,e[n],n,e))return!0;return!1}export{de as default};
//# sourceMappingURL=mod.js.map
