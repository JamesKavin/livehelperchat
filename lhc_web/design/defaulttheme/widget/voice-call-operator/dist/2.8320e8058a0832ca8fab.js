(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{52:function(e,t,a){"use strict";a.r(t);var n=a(24),c=a.n(n),r=a(26),i=a.n(r),l=a(14),s=a.n(l),o=a(1),u=a.n(o),d=a(0),m=a.n(d),p=a(32),f=a.n(p),v=a(53);var h=function(e,t){var a=Object(d.useRef)();Object(d.useEffect)((function(){a.current=e}),[e]),Object(d.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])},b=a(50),k=a.n(b);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=k.a.createClient({mode:"rtc",codec:"vp8"});function E(e,t){switch(t.type){case"attr":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=x({},e.chats[n],{},t.value),e=x({},e));case"attr_remove":return-1===(n=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[n]=x({},e.chats[n],{},t.value),e=x({},e));case"update":return x({},e,{},t.value);case"add":return-1===(n=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),x({},e);case"remove":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(n,1),x({},e));case"update_chat":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=x({},e.chats[n],{},t.value),x({},e));case"msg_received":if(-1===(n=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[n].msg=t.value.msg;var a=document.getElementById("chat-tab-link-"+t.id);return null!==a&&a.classList.contains("active")?e.chats[n].active=!0:e.chats[n].active=!1,e.chats[n].mn=0==e.chats[n].active?e.chats[n].mn?e.chats[n].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(n,1)[0]),x({},e);case"refocus":var n;if(-1!==(n=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[n].id)return e;e.chats[n].active=!1}return-1!==(n=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),x({},e);case"group_offline":return e.group_offline=t.value,x({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(d.useReducer)(E,{chats:[],call:{},localTracks:{videoTrack:null,audioTrack:null},remoteUsers:{},uid:null,inCall:!1}),a=s()(t,2),n=a[0],r=a[1],l=Object(d.useRef)(n);Object(d.useEffect)((function(){l.current=n}),[n]);Object(d.useEffect)((function(){return f.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id).then((function(e){r({type:"update",value:{call:e.data}})})),function(){}}),[]);var o=Object(v.a)("voice_call"),u=(o.t,o.i18n,function(){var t=i()(c.a.mark((function t(a){var i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/"+a).then((function(e){r({type:"update",value:{call:e.data}})})),"leave"!=a&&"end"!=a){t.next=7;break}for(trackName in console.log(n.localTracks),n.localTracks)(i=n.localTracks[trackName])&&(i.stop(),i.close(),n.localTracks[trackName]=void 0);return r({type:"update",value:{remoteUsers:{},localTracks:{videoTrack:null,audioTrack:null}}}),t.next=7,y.leave();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());h((function(){f.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id).then((function(e){r({type:"update",value:{call:e.data}})}))}),2!=n.call.status||2!=n.call.vi_status||1!=n.call.op_status?2e3:null);var p=function(){var e=i()(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.uid,e.next=3,y.subscribe(t,a);case 3:console.log("subscribe success");case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(e,t){p(e,t)},g=function(e){},x=function(){var t=i()(c.a.mark((function t(a){var n,i,l,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y.on("user-published",b),y.on("user-unpublished",g),n=null,i={audioTrack:null,videoTrack:null},t.next=6,Promise.all([y.join(e.initParams.appid,e.initParams.id+"_"+e.initParams.hash,a.token||null),k.a.createMicrophoneAudioTrack(),k.a.createCameraVideoTrack()]);case 6:return l=t.sent,o=s()(l,3),n=o[0],i.audioTrack=o[1],i.videoTrack=o[2],i.videoTrack.play("local-player"),r({type:"update",value:{uid:n,localTracks:i}}),t.next=15,y.publish(Object.values(i));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(t){f.a.post(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"/(action)/join").then((function(e){"audiovideo"==t&&x(e.data),r({type:"update",value:{call:e.data}})}))};return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"d-flex flex-row flex-grow-1 pt-2"},m.a.createElement("div",{className:"col bg-light mx-1 align-middle text-center d-flex pl-0 pr-0",title:"UID "+n.uid,id:"local-player"}),m.a.createElement("div",{className:"col bg-light mx-1 align-middle text-center d-flex pl-0 pr-0"},m.a.createElement("div",{className:"align-self-center mx-auto text-muted font-weight-bold"},"Visitor"))),m.a.createElement("div",{className:"row header-chat desktop-header"},m.a.createElement("div",{className:"btn-toolbar p-2 text-center mx-auto btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},m.a.createElement("div",{className:"p-2 text-center mx-auto btn-group",role:"group"},2==n.call.vi_status&&m.a.createElement("span",{className:"text-muted py-2"},"Visitor has joined a call!"),0==n.call.vi_status&&m.a.createElement("span",{className:"text-muted py-2"},"Pending visitor to join a call!"),1==n.call.vi_status&&m.a.createElement("span",{className:"text-muted py-2"},"Visitor is waiting for someone to let him in!")),m.a.createElement("div",{className:"p-2 text-center mx-auto btn-group",role:"group"},1==n.call.vi_status&&m.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return u("letvisitorin")}},m.a.createElement("span",{className:"material-icons"},"face"),"Let visitor in"),1==n.call.op_status&&m.a.createElement("button",{title:"Leave a call. Visitor still remain on the call",className:"btn btn-sm btn-outline-secondary",onClick:function(){return u("leave")}},m.a.createElement("span",{className:"material-icons"},"call_end"),"Leave a call"),1==n.call.op_status&&m.a.createElement("button",{title:"Call for the visitor also will end.",className:"btn btn-sm btn-outline-secondary",onClick:function(){return u("end")}},m.a.createElement("span",{className:"material-icons"},"call_end"),"End a call"),0==n.call.op_status&&m.a.createElement(m.a.Fragment,null,m.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return w("audio")}},m.a.createElement("span",{className:"material-icons"},"call"),"Join with audio"),m.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return w("audiovideo")}},m.a.createElement("span",{className:"material-icons"},"video_call"),"Join with audio & video"))))))}}}]);
//# sourceMappingURL=2.8320e8058a0832ca8fab.js.map