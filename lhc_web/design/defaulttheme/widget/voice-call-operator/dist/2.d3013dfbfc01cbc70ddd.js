(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{52:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a.n(n),c=a(26),i=a.n(c),s=a(14),l=a.n(s),u=a(1),o=a.n(u),d=a(0),p=a.n(d),m=a(32),f=a.n(m),v=a(53);var h=function(e,t){var a=Object(d.useRef)();Object(d.useEffect)((function(){a.current=e}),[e]),Object(d.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])},b=a(50),y=a.n(b),k=p.a.memo((function(e){var t=e.user;return Object(d.useEffect)((function(){return function(){}}),[]),p.a.createElement("div",{className:"col bg-light mx-1 align-middle text-center d-flex pl-0 pr-0",id:"player-"+t.uid,title:"UID "+t.uid})}));function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=y.a.createClient({mode:"rtc",codec:"vp8"});function _(e,t){switch(t.type){case"attr":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=E({},e.chats[n],{},t.value),e=E({},e));case"attr_remove":return-1===(n=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[n]=E({},e.chats[n],{},t.value),e=E({},e));case"update":return E({},e,{},t.value);case"user_published":return e.remoteUsers[t.user.uid]=t.user,E({},e);case"user_unpublished":return delete e.remoteUsers[t.user.uid],E({},e);case"add":return-1===(n=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),E({},e);case"remove":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(n,1),E({},e));case"update_chat":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=E({},e.chats[n],{},t.value),E({},e));case"msg_received":if(-1===(n=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[n].msg=t.value.msg;var a=document.getElementById("chat-tab-link-"+t.id);return null!==a&&a.classList.contains("active")?e.chats[n].active=!0:e.chats[n].active=!1,e.chats[n].mn=0==e.chats[n].active?e.chats[n].mn?e.chats[n].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(n,1)[0]),E({},e);case"refocus":var n;if(-1!==(n=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[n].id)return e;e.chats[n].active=!1}return-1!==(n=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),E({},e);case"group_offline":return e.group_offline=t.value,E({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(d.useReducer)(_,{chats:[],call:{},localTracks:{videoTrack:null,audioTrack:null},remoteUsers:{},uid:null,inCall:!1}),a=l()(t,2),n=a[0],c=a[1],s=Object(d.useRef)(n);Object(d.useEffect)((function(){s.current=n}),[n]);Object(d.useEffect)((function(){return f.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id).then((function(e){c({type:"update",value:{call:e.data}})})),function(){}}),[]);var u=Object(v.a)("voice_call"),o=(u.t,u.i18n,function(){var t=i()(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/"+a).then((function(e){c({type:"update",value:{call:e.data}})})),"leave"!=a&&"end"!=a){t.next=6;break}return Object.keys(n.localTracks).forEach((function(e){var t=n.localTracks[e];t&&(t.stop(),t.close(),n.localTracks[e]=void 0)})),c({type:"update",value:{remoteUsers:{},uid:null,localTracks:{videoTrack:null,audioTrack:null}}}),t.next=6,g.leave();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());h((function(){f.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id).then((function(e){c({type:"update",value:{call:e.data}})}))}),2!=n.call.status||2!=n.call.vi_status||1!=n.call.op_status?2e3:null);var m=function(){var e=i()(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.uid,e.next=3,g.subscribe(t,a);case 3:console.log("subscribe success");case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(e,t){c({type:"user_published",user:e}),m(e,t)},x=function(e){c({type:"user_unpublished",user:e})},E=function(){var t=i()(r.a.mark((function t(a){var n,i,s,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g.on("user-published",b),g.on("user-unpublished",x),n=null,i={audioTrack:null,videoTrack:null},t.next=6,Promise.all([g.join(e.initParams.appid,e.initParams.id+"_"+e.initParams.hash,a.token||null),y.a.createMicrophoneAudioTrack(),y.a.createCameraVideoTrack()]);case 6:return s=t.sent,u=l()(s,3),n=u[0],i.audioTrack=u[1],i.videoTrack=u[2],i.videoTrack.play("local-player"),c({type:"update",value:{uid:n,localTracks:i}}),t.next=15,g.publish(Object.values(i));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){f.a.post(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"/(action)/join").then((function(e){"audiovideo"==t&&E(e.data),c({type:"update",value:{call:e.data}})}))};return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"d-flex flex-row flex-grow-1 pt-2"},p.a.createElement("div",{className:"col bg-light mx-1 align-middle text-center d-flex pl-0 pr-0",title:"UID "+n.uid,id:"local-player"}),Object.keys(n.remoteUsers).map((function(e,t){return p.a.createElement(k,{user:n.remoteUsers[e]})}))),p.a.createElement("div",{className:"row header-chat desktop-header"},p.a.createElement("div",{className:"btn-toolbar p-2 text-center mx-auto btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},p.a.createElement("div",{className:"p-2 text-center mx-auto btn-group",role:"group"},2==n.call.vi_status&&p.a.createElement("span",{className:"text-muted py-2"},"Visitor has joined a call!"),0==n.call.vi_status&&p.a.createElement("span",{className:"text-muted py-2"},"Pending visitor to join a call!"),1==n.call.vi_status&&p.a.createElement("span",{className:"text-muted py-2"},"Visitor is waiting for someone to let him in!")),p.a.createElement("div",{className:"p-2 text-center mx-auto btn-group",role:"group"},1==n.call.vi_status&&p.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return o("letvisitorin")}},p.a.createElement("span",{className:"material-icons"},"face"),"Let visitor in"),1==n.call.op_status&&p.a.createElement("button",{title:"Leave a call. Visitor still remain on the call",className:"btn btn-sm btn-outline-secondary",onClick:function(){return o("leave")}},p.a.createElement("span",{className:"material-icons"},"call_end"),"Leave a call"),1==n.call.op_status&&p.a.createElement("button",{title:"Call for the visitor also will end.",className:"btn btn-sm btn-outline-secondary",onClick:function(){return o("end")}},p.a.createElement("span",{className:"material-icons"},"call_end"),"End a call"),0==n.call.op_status&&p.a.createElement(p.a.Fragment,null,p.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return j("audio")}},p.a.createElement("span",{className:"material-icons"},"call"),"Join with audio"),p.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return j("audiovideo")}},p.a.createElement("span",{className:"material-icons"},"video_call"),"Join with audio & video"))))))}}}]);
//# sourceMappingURL=2.d3013dfbfc01cbc70ddd.js.map