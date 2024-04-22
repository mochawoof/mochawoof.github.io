//https://www.npmjs.com/package/sort-objects-array
var c=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var K=Object.prototype.hasOwnProperty;var v=(r,t)=>{for(var e in t)c(r,e,{get:t[e],enumerable:!0})},P=(r,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of x(t))!K.call(r,s)&&s!==e&&c(r,s,{get:()=>t[s],enumerable:!(n=j(t,s))||n.enumerable});return r};var O=r=>P(c({},"__esModule",{value:!0}),r);var R={};v(R,{default:()=>I});module.exports=O(R);function o(r){return!(r===null||r.constructor.name.toLowerCase()!=="object")}function a(r){return typeof r=="string"}function u(r){return typeof r=="object"}function l(r){return Array.isArray(r)&&r.every(t=>Array.isArray(t))}function g(r,t){return!Array.isArray(r)||!a(t)}function M(r,t){return r.filter(e=>!e[t])}function y(r,t,e){let n=M(r,e);return n.length>0?[...t,...n]:t}var m=["desc","reverse"],p=r=>Object.keys(r).map(t=>({key:t,value:r[t]}));var b=r=>String(r).toLowerCase();function A(r){return r==="desc"?[1,-1,0]:[-1,1,0]}function w(r,t){return function(e,n){let s=b(e[t]),i=b(n[t]);return s<i?r[0]:i<s?r[1]:r[2]}}var F=(r,t)=>(e,n)=>e[t]<n[t]?r[0]:n[t]<e[t]?r[1]:r[2],h=(r,t,e)=>e?w(A(r),t):F(A(r),t);function L(r){if(a(r)&&m.indexOf(String(r))>-1)return"desc";if(u(r)&&m.indexOf(String(r.order))>-1)return"desc"}var T=r=>!!(u(r)&&r.caseinsensitive);function V(r,t,e){let n=T(e),s=L(e)||"",i=h(s,t,n);return r.filter(S=>S[t]).sort(i)}function f(r,t){return t&&o(t)&&t.flatten?r.flat():o(r)?p(r):r}function d(r,t,e){let n=e,s=f(r,n);if(g(s,t))return console.log("* sort-objects-array: Wrong arguments returning original array / object"),r;let i=V(s,t,n);return y(s,i,t)}function W(r,t,e){return l(r)&&(!e||o(e)&&!e.flatten)?r.map(n=>d(n,t,e)):d(r,t,e)}var I=W;
module.exports = module.exports.default;

let username = document.location.host;
username = username.substring(0, username.indexOf("."));
let title;
document.querySelectorAll("meta").forEach((e) => {
  if (e.getAttribute("property") == "og:title") {
    title = e.getAttribute("content");
  }
});

function makeElement(type, innerHTML, parent) {
  let e = document.createElement(type);
  e.innerHTML = innerHTML;
  parent.appendChild(e);
}

function f(e) {
  if (e == null) {
    return "N/A";
  } else {
    return e;
  }
}
