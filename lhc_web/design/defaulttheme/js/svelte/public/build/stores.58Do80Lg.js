function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,c;function u(t,e){return t===e||(i||(i=document.createElement("a")),i.href=e,t===i.href)}function a(e,...n){if(null==e){for(const t of n)t(void 0);return t}const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function d(t,e,n){t.$$.on_destroy.push(a(e,n))}function l(t,e,n){return t.set(n),e}function $(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function b(){return m("")}function y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e,n){const s=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&s.add(t[e].__value);return n||s.delete(e),Array.from(s)}function x(t){let e;return{p(...n){e=n,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}function N(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function j(t,e,n){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function L(t){const e=t.querySelector(":checked");return e&&e.__value}function A(t,e,n){t.classList.toggle(e,!!n)}function O(t){c=t}function S(){if(!c)throw new Error("Function called outside component initialization");return c}function P(t){S().$$.on_mount.push(t)}function C(){const t=S();return(e,n,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}(e,n,{cancelable:s});return o.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const M=[],B=[];let T=[];const H=[],z=Promise.resolve();let D=!1;function F(t){T.push(t)}const G=new Set;let I=0;function q(){if(0!==I)return;const t=c;do{try{for(;I<M.length;){const t=M[I];I++,O(t),J(t.$$)}}catch(t){throw M.length=0,I=0,t}for(O(null),M.length=0,I=0;B.length;)B.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];G.has(e)||(G.add(e),e())}T.length=0}while(M.length);for(;H.length;)H.pop()();D=!1,G.clear(),O(t)}function J(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const R=new Set;let V,K;function Q(){V={r:0,c:[],p:V}}function U(){V.r||s(V.c),V=V.p}function W(t,e){t&&t.i&&(R.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(R.has(t))return;R.add(t),V.c.push((()=>{R.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function Y(t){return void 0!==t?.length?t:Array.from(t)}function Z(t,e){t.d(1),e.delete(t.key)}function tt(t,e,n,o,r,i,c,u,a,d,l,$){let f=t.length,p=i.length,h=f;const _={};for(;h--;)_[t[h].key]=h;const m=[],g=new Map,b=new Map,y=[];for(h=p;h--;){const t=$(r,i,h),s=n(t);let u=c.get(s);u?o&&y.push((()=>u.p(t,e))):(u=d(s,t),u.c()),g.set(s,m[h]=u),s in _&&b.set(s,Math.abs(h-_[s]))}const v=new Set,w=new Set;function x(t){W(t,1),t.m(u,l),c.set(t.key,t),l=t.first,p--}for(;f&&p;){const e=m[p-1],n=t[f-1],s=e.key,o=n.key;e===n?(l=e.first,f--,p--):g.has(o)?!c.has(s)||v.has(s)?x(e):w.has(o)?f--:b.get(s)>b.get(o)?(w.add(s),x(e)):(v.add(o),f--):(a(n,c),f--)}for(;f--;){const e=t[f];g.has(e.key)||a(e,c)}for(;p;)x(m[p-1]);return s(y),m}function et(t){t&&t.c()}function nt(t,n,r){const{fragment:i,after_update:c}=t.$$;i&&i.m(n,r),F((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):s(n),t.$$.on_mount=[]})),c.forEach(F)}function st(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];T.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),T=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){-1===t.$$.dirty[0]&&(M.push(t),D||(D=!0,z.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,o,r,i,u,a,d=null,l=[-1]){const $=c;O(e);const f=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||($?$.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:o.target||$.$$.root};d&&d(f.root);let h=!1;if(f.ctx=r?r(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&u(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),h&&ot(e,t)),n})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();o.intro&&W(e.$$.fragment),nt(e,o.target,o.anchor),q()}O($)}function it(t,e,n,s){const o=n[t]?.type;if(e="Boolean"===o&&"boolean"!=typeof e?null!=e:e,!s||!n[t])return e;if("toAttribute"===s)switch(o){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return null==e?null:e;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}function ct(t,e,n,s,o,r){let i=class extends K{constructor(){super(t,n,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map((t=>(e[t].attribute||t).toLowerCase()))}};return Object.keys(e).forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c&&t in this.$$c?this.$$c[t]:this.$$d[t]},set(n){n=it(t,n,e),this.$$d[t]=n,this.$$c?.$set({[t]:n})}})})),s.forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c?.[t]}})})),r&&(i=r(i)),t.element=i,i}"function"==typeof HTMLElement&&(K=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn)return;function t(t){return()=>{let e;return{c:function(){e=_("slot"),"default"!==t&&v(e,"name",t)},m:function(t,n){f(t,e,n)},d:function(t){t&&p(e)}}}}const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const o of this.$$s)o in n&&(e[o]=[t(o)]);for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=it(i,r.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=it(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const c in this.$$l)for(const u of this.$$l[c]){const a=this.$$c.$on(c,u);this.$$l_u.set(u,a)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=it(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class ut{$$=void 0;$$set=void 0;$destroy(){st(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const at=[];function dt(e,n=t){let s;const o=new Set;function i(t){if(r(e,t)&&(e=t,s)){const t=!at.length;for(const t of o)t[1](),at.push(t,e);if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}function c(t){i(t(e))}return{set:i,update:c,subscribe:function(r,u=t){const a=[r,u];return o.add(a),1===o.size&&(s=n(i,c)||t),r(e),()=>{o.delete(a),0===o.size&&s&&(s(),s=null)}}}}function lt(e,n,r){const i=!Array.isArray(e),c=i?[e]:e;if(!c.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const u=n.length<2;return d=(e,r)=>{let d=!1;const l=[];let $=0,f=t;const p=()=>{if($)return;f();const s=n(i?l[0]:l,e,r);u?e(s):f=o(s)?s:t},h=c.map(((t,e)=>a(t,(t=>{l[e]=t,$&=~(1<<e),d&&p()}),(()=>{$|=1<<e}))));return d=!0,p(),function(){s(h),f(),d=!1}},{subscribe:dt(r,d).subscribe};var d}const $t=dt({onlineusers:[],onlineusersGrouped:[],onlineusers_tt:0}),ft=dt({lhcVersion:0,last_actions_index:0,last_actions:[],userDepartments:[],userProductNames:[],userDepartmentsGroups:[],userGroups:[],userList:[],widgets:[],additionalColumns:[],excludeIcons:[],notifIcons:[],departmentd:[],departmentd_dpgroups:[],departmentdNames:[],operatord:[],operatord_dpgroups:[],operatord_ugroups:[],operatordNames:[],actived:[],actived_products:[],actived_dpgroups:[],actived_ugroups:[],activedNames:[],mcd:[],mcd_products:[],mcd_dpgroups:[],mcdNames:[],unreadd:[],unreadd_products:[],unreadd_dpgroups:[],unreaddNames:[],pendingd:[],pendingd_products:[],pendingd_dpgroups:[],pendingd_ugroups:[],pendingdNames:[],botd:[],botd_products:[],botd_dpgroups:[],botd_ugroups:[],botdNames:[],subjectd:[],subjectd_products:[],subjectd_dpgroups:[],subjectd_ugroups:[],subjectdNames:[],closedd:[],closedd_products:[],closedd_dpgroups:[],closeddNames:[],statusNotifications:[],toggleWidgetData:[],isListLoaded:!1,activeu:[],pendingu:[],subjectu:[],oopu:[],custom_extension_filter:"",depFilterText:"",userFilterText:"",limitb:"10",limita:"10",limitu:"10",limitp:"10",limito:String(confLH.dlist.op_n),limitc:"10",limitd:"10",limitmc:"10",limitgc:"10",limits:"10",new_group_type:"1",bot_st:{},departmentd_hide_dep:!1,departmentd_hide_dgroup:!1,lmtoggle:!1,rmtoggle:!1,current_user_id:confLH.user_id}),pt=dt({});export{L as A,tt as B,Z as C,F as D,j as E,u as F,N as G,x as H,w as I,W as J,X as K,U as L,Q as M,et as N,nt as O,st as P,pt as Q,C as R,ut as S,lt as T,dt as U,$t as V,d as a,l as b,ct as c,g as d,b as e,q as f,f as g,p as h,rt as i,_ as j,v as k,ft as l,$ as m,t as n,P as o,E as p,y as q,k as r,r as s,m as t,s as u,A as v,o as w,Y as x,h as y,a as z};
//# sourceMappingURL=stores.58Do80Lg.js.map
