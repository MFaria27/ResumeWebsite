import{n as b,s as _}from"./scheduler.Ndbq6cgY.js";const e=[];function d(n,l=b){let i;const o=new Set;function r(t){if(_(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function h(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(i=l(r,f)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:h}}var u;const p=((u=globalThis.__sveltekit_1c9s0hh)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_1c9s0hh)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};