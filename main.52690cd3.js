parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector(".spider"),e=document.querySelector(".wall"),n=t.offsetHeight,i=t.offsetWidth,c=e.offsetHeight,l=e.offsetWidth,o=e.clientLeft,g=e.clientTop;e.addEventListener("click",function(d){var u=d.clientX-e.getBoundingClientRect().x-o-i/2,f=d.clientY-e.getBoundingClientRect().y-g-n/2;d.clientX<e.getBoundingClientRect().x+o+i/2&&(u=0),d.clientY<e.getBoundingClientRect().y+g+i/2&&(f=0),d.clientX>e.getBoundingClientRect().x+l-o-i/2&&(u=l-2*o-i),d.clientY>e.getBoundingClientRect().y+c-g-n/2&&(f=c-2*g-n),t.style.left="".concat(u,"px"),t.style.top="".concat(f,"px")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.52690cd3.js.map