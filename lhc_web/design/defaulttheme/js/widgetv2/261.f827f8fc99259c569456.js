"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[261],{261:(e,t,n)=>{n.r(t),n.d(t,{nodeJSChat:()=>g});var a=n(8926),r=n.n(a),s=n(4575),i=n.n(s),c=n(3913),h=n.n(c),u=n(7003),o=n.n(u),d=n(7757),p=n.n(d),l=n(2137),v=n(6512),g=new(function(){function e(){var t=this;i()(this,e),this.socket=null,l.a.eventEmitter.addListener("endedChat",(function(){null!==t.socket&&t.socket.disconnect()}))}return h()(e,[{key:"bootstrap",value:function(e,t,a){console.log("connect");var s=a(),i=s.chatwidget.getIn(["chatData","id"]),c=(s.chatwidget.getIn(["chatData","hash"]),s.chatwidget.getIn(["chat_ui","sync_interval"])),h={hostname:e.hostname,path:e.path,autoReconnectOptions:{initialDelay:5e3,randomness:5e3}};""!=e.port&&(h.port=parseInt(e.port)),1==e.secure&&(h.secure=!0),e.instance_id>0&&e.instance_id;var u=n(2984),d=this.socket=u.create(h),g=null;function m(){var t=a(),n=t.chatwidget.getIn(["chatData","id"]);window.lhcAxios.post(window.lhcChat.base_url+"nodejshelper/tokenvisitor/"+n+"/"+t.chatwidget.getIn(["chatData","hash"]),null,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var t=r()(p().mark((function t(a){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([d.invoke("login",{hash:a.data,chanelName:e.instance_id>0?"chat_"+e.instance_id+"_"+n:"chat_"+n}),d.listener("authenticate").once()]);case 2:b();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}function _(t){console.log("typing listener"),1==t.status?e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:t.msg}):d.transmitPublish("chat_"+i,{op:"vt",msg:t.msg}):e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vts"}):d.transmitPublish("chat_"+i,{op:"vts"})}function f(t){e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:"✉️ "+t.msg}):d.transmitPublish("chat_"+i,{op:"vt",msg:"✉️ "+t.msg})}function x(t){e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"}):d.transmitPublish("chat_"+i,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"})}function w(){if(null!==g)try{g.unsubscribe()}catch(e){}l.a.eventEmitter.removeListener("visitorTyping",_),l.a.eventEmitter.removeListener("messageSend",f),l.a.eventEmitter.removeListener("messageSendError",x),t({type:"CHAT_UI_UPDATE",data:{sync_interval:c}}),t({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})}function b(){return k.apply(this,arguments)}function k(){return(k=r()(p().mark((function n(){var s,c,h,u,m,w,b,k,D,y,I;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=null==g,g=e.instance_id>0?d.subscribe("chat_"+e.instance_id+"_"+i):d.subscribe("chat_"+i),r()(p().mark((function t(){var n,a,r,s,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,a=!1,t.prev=2,s=o()(g.listener("subscribe"));case 4:return t.next=6,s.next();case 6:if(!(n=!(c=t.sent).done)){t.next=12;break}c.value,d.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+i:"chat_"+i,{op:"vi_online",status:!0});case 9:n=!1,t.next=4;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),a=!0,r=t.t0;case 18:if(t.prev=18,t.prev=19,!n||null==s.return){t.next=23;break}return t.next=23,s.return();case 23:if(t.prev=23,!a){t.next=26;break}throw r;case 26:return t.finish(23);case 27:return t.finish(18);case 28:case"end":return t.stop()}}),t,null,[[2,14,18,28],[19,,23,27]])})))(),l.a.eventEmitter.addListener("visitorTyping",_),l.a.eventEmitter.addListener("messageSend",f),l.a.eventEmitter.addListener("messageSendError",x),t({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),t({type:"CHAT_ADD_OVERRIDE",data:"typing"}),1!=s){n.next=37;break}c=!1,h=!1,n.prev=11,m=o()(g);case 13:return n.next=15,m.next();case 15:if(!(c=!(w=n.sent).done)){n.next=21;break}"ot"==(b=w.value).op?1==b.data.status?t({type:"chat_status_changed",data:{text:b.data.ttx}}):t({type:"chat_status_changed",data:{text:""}}):"cmsg"==b.op||"schange"==b.op?(k=a()).chatwidget.hasIn(["chatData","id"])&&t((0,v.W4)({chat_id:k.chatwidget.getIn(["chatData","id"]),hash:k.chatwidget.getIn(["chatData","hash"]),lmgsid:k.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:k.chatwidget.get("theme")})):"umsg"==b.op?(D=a()).chatwidget.hasIn(["chatData","id"])&&(0,v.o6)({msg_id:b.msid,id:D.chatwidget.getIn(["chatData","id"]),hash:D.chatwidget.getIn(["chatData","hash"])})(t,a):"schange"==b.op||"cclose"==b.op?(y=a()).chatwidget.hasIn(["chatData","id"])&&t((0,v.kW)({chat_id:y.chatwidget.getIn(["chatData","id"]),hash:y.chatwidget.getIn(["chatData","hash"]),mode:y.chatwidget.get("mode"),theme:y.chatwidget.get("theme")})):"vo"==b.op&&(I=a()).chatwidget.hasIn(["chatData","id"])&&d.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+I.chatwidget.getIn(["chatData","id"]):"chat_"+I.chatwidget.getIn(["chatData","id"]),{op:"vi_online",status:!0});case 18:c=!1,n.next=13;break;case 21:n.next=27;break;case 23:n.prev=23,n.t0=n.catch(11),h=!0,u=n.t0;case 27:if(n.prev=27,n.prev=28,!c||null==m.return){n.next=32;break}return n.next=32,m.return();case 32:if(n.prev=32,!h){n.next=35;break}throw u;case 35:return n.finish(32);case 36:return n.finish(27);case 37:case"end":return n.stop()}}),n,null,[[11,23,27,37],[28,,32,36]])})))).apply(this,arguments)}r()(p().mark((function e(){var t,n,a,r,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,n=!1,e.prev=2,r=o()(d.listener("connect"));case 4:return e.next=6,r.next();case 6:if(!(t=!(s=e.sent).done)){e.next=12;break}s.value.isAuthenticated?b():m();case 9:t=!1,e.next=4;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),n=!0,a=e.t0;case 18:if(e.prev=18,e.prev=19,!t||null==r.return){e.next=23;break}return e.next=23,r.return();case 23:if(e.prev=23,!n){e.next=26;break}throw a;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})))(),r()(p().mark((function e(){var t,n,a,r,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,n=!1,e.prev=2,r=o()(d.listener("disconnect"));case 4:return e.next=6,r.next();case 6:if(!(t=!(s=e.sent).done)){e.next=12;break}s.value,w();case 9:t=!1,e.next=4;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),n=!0,a=e.t0;case 18:if(e.prev=18,e.prev=19,!t||null==r.return){e.next=23;break}return e.next=23,r.return();case 23:if(e.prev=23,!n){e.next=26;break}throw a;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})))(),r()(p().mark((function e(){var t,n,a,r,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,n=!1,e.prev=2,r=o()(d.listener("deauthenticate"));case 4:return e.next=6,r.next();case 6:if(!(t=!(s=e.sent).done)){e.next=12;break}s.value,m();case 9:t=!1,e.next=4;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),n=!0,a=e.t0;case 18:if(e.prev=18,e.prev=19,!t||null==r.return){e.next=23;break}return e.next=23,r.return();case 23:if(e.prev=23,!n){e.next=26;break}throw a;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})))()}}]),e}())}}]);
//# sourceMappingURL=261.f827f8fc99259c569456.js.map