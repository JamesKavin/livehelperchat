(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{47:function(e,t,a){"use strict";a.r(t);var c=a(14),n=a.n(c),r=a(1),i=a.n(r),l=a(0),s=a.n(l),u=a(28),o=a.n(u),d=a(48);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t){switch(t.type){case"attr":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[c]=h({},e.chats[c],{},t.value),e=h({},e));case"attr_remove":return-1===(c=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[c]=h({},e.chats[c],{},t.value),e=h({},e));case"update":return h({},e,{},t.value);case"add":return-1===(c=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[c].active=!0,e.chats[c].mn=0,e.chats[c].support_chat=!1),h({},e);case"remove":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(c,1),h({},e));case"update_chat":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[c]=h({},e.chats[c],{},t.value),h({},e));case"msg_received":if(-1===(c=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[c].msg=t.value.msg;var a=document.getElementById("chat-tab-link-"+t.id);return null!==a&&a.classList.contains("active")?e.chats[c].active=!0:e.chats[c].active=!1,e.chats[c].mn=0==e.chats[c].active?e.chats[c].mn?e.chats[c].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(c,1)[0]),h({},e);case"refocus":var c;if(-1!==(c=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[c].id)return e;e.chats[c].active=!1}return-1!==(c=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[c].active=!0,e.chats[c].mn=0,e.chats[c].support_chat=!1),h({},e);case"group_offline":return e.group_offline=t.value,h({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(l.useReducer)(f,{chats:[],call:{},inCall:!1}),a=n()(t,2),c=a[0],r=a[1],i=Object(l.useRef)(c);Object(l.useEffect)((function(){i.current=c}),[c]);Object(l.useEffect)((function(){return o.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash).then((function(e){r({type:"update",value:{call:e.data}})})),function(){}}),[]);var u=Object(d.a)("voice_call"),m=u.t;u.i18n;return s.a.createElement(s.a.Fragment,null,1==c.call.vi_status&&s.a.createElement("div",{className:"mx-auto pt-4"},s.a.createElement("p",null,"Please wait untill operator let's you join a room"),s.a.createElement("div",{className:"mx-auto"},s.a.createElement("button",{className:"btn btn-primary w-100"},m("voice_call.cancel_join")))),0==c.call.vi_status&&s.a.createElement("div",{className:"mx-auto pt-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("h5",null,"Choose call type"),s.a.createElement("input",{type:"radio",className:"form-check-input",defaultChecked:!0,value:"audio",name:"callType",id:"inlineFormCheck1"})," ",s.a.createElement("label",{className:"form-check-label",htmlFor:"inlineFormCheck1"},"Audio & Video call"),s.a.createElement("br",null),s.a.createElement("input",{type:"radio",className:"form-check-input",value:"audio",name:"callType",id:"inlineFormCheck2"})," ",s.a.createElement("label",{className:"form-check-label",htmlFor:"inlineFormCheck2"},"Only Audio call")),s.a.createElement("div",{className:"mx-auto"},s.a.createElement("button",{className:"btn btn-primary w-100"},m("voice_call.join_call")))))}}}]);
//# sourceMappingURL=2.a4e07f810e7ad09c241b.js.map