(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{47:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n.n(a),r=n(1),i=n.n(r),u=n(0),s=n.n(u),l=(n(28),n(48));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){switch(t.type){case"attr":return-1===(a=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[a]=d({},e.chats[a],{},t.value),e=d({},e));case"attr_remove":return-1===(a=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[a]=d({},e.chats[a],{},t.value),e=d({},e));case"update":return d({},e,{},t.value);case"add":return-1===(a=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[a].active=!0,e.chats[a].mn=0,e.chats[a].support_chat=!1),d({},e);case"remove":return-1===(a=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(a,1),d({},e));case"update_chat":return-1===(a=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[a]=d({},e.chats[a],{},t.value),d({},e));case"msg_received":if(-1===(a=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[a].msg=t.value.msg;var n=document.getElementById("chat-tab-link-"+t.id);return null!==n&&n.classList.contains("active")?e.chats[a].active=!0:e.chats[a].active=!1,e.chats[a].mn=0==e.chats[a].active?e.chats[a].mn?e.chats[a].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(a,1)[0]),d({},e);case"refocus":var a;if(-1!==(a=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[a].id)return e;e.chats[a].active=!1}return-1!==(a=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[a].active=!0,e.chats[a].mn=0,e.chats[a].support_chat=!1),d({},e);case"group_offline":return e.group_offline=t.value,d({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(u.useReducer)(f,{chats:[],id:null,hash:null}),n=c()(t,2),a=n[0],r=(n[1],Object(u.useRef)(a));Object(u.useEffect)((function(){r.current=a}),[a]),Object(u.useEffect)((function(){return console.log(e.initParams),function(){}}),[]);var i=Object(l.a)("voice_call"),o=i.t;i.i18n;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"audio",name:"callType"}),"Audio & Video call"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"audiovideo",name:"callType"}),"Only Audio call"),s.a.createElement("button",{className:"btn btn-primary"},o("voice_call.join_call"))))}}}]);
//# sourceMappingURL=2.d73fa1ebb293c32f8c13.js.map