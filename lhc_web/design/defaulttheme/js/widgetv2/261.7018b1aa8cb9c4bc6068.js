"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[261],{261:(t,e,n)=>{n.r(e),n.d(e,{nodeJSChat:()=>v});var a=n(8926),s=n.n(a),i=n(4575),r=n.n(i),c=n(3913),h=n.n(c),o=n(7003),u=n.n(o),d=n(7757),p=n.n(d),l=n(2137),g=n(6512),v=new(function(){function t(){var e=this;r()(this,t),this.socket=null,l.a.eventEmitter.addListener("endedChat",(function(){null!==e.socket&&e.socket.disconnect()}))}return h()(t,[{key:"bootstrap",value:function(t,e,a){console.log("connect");var i=a(),r=i.chatwidget.getIn(["chatData","id"]),c=(i.chatwidget.getIn(["chatData","hash"]),i.chatwidget.getIn(["chat_ui","sync_interval"])),h={hostname:t.hostname,path:t.path,autoReconnectOptions:{initialDelay:5e3,randomness:5e3}};""!=t.port&&(h.port=parseInt(t.port)),1==t.secure&&(h.secure=!0),t.instance_id>0&&t.instance_id;var o=n(2984),d=this.socket=o.create(h),v=null;function m(){var e=a(),n=e.chatwidget.getIn(["chatData","id"]);window.lhcAxios.post(window.lhcChat.base_url+"nodejshelper/tokenvisitor/"+n+"/"+e.chatwidget.getIn(["chatData","hash"]),null,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var e=s()(p().mark((function e(a){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([d.invoke("login",{hash:a.data,chanelName:t.instance_id>0?"chat_"+t.instance_id+"_"+n:"chat_"+n}),d.listener("authenticate").once()]);case 2:b();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}function _(e){console.log("typing listener"),1==e.status?t.instance_id>0?d.transmitPublish("chat_"+t.instance_id+"_"+r,{op:"vt",msg:e.msg}):d.transmitPublish("chat_"+r,{op:"vt",msg:e.msg}):t.instance_id>0?d.transmitPublish("chat_"+t.instance_id+"_"+r,{op:"vts"}):d.transmitPublish("chat_"+r,{op:"vts"})}function f(e){t.instance_id>0?d.transmitPublish("chat_"+t.instance_id+"_"+r,{op:"vt",msg:"✉️ "+e.msg}):d.transmitPublish("chat_"+r,{op:"vt",msg:"✉️ "+e.msg})}function w(e){t.instance_id>0?d.transmitPublish("chat_"+t.instance_id+"_"+r,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"}):d.transmitPublish("chat_"+r,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"})}function x(){if(null!==v)try{v.destroy()}catch(t){}l.a.eventEmitter.removeListener("visitorTyping",_),l.a.eventEmitter.removeListener("messageSend",f),l.a.eventEmitter.removeListener("messageSendError",w),e({type:"CHAT_UI_UPDATE",data:{sync_interval:c}}),e({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})}function b(){return k.apply(this,arguments)}function k(){return(k=s()(p().mark((function n(){var i,c,h,o,m,x,b,k,y,D,I;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(v),i=null==v,v=t.instance_id>0?d.subscribe("chat_"+t.instance_id+"_"+r):d.subscribe("chat_"+r),s()(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.listener("subscribe").once();case 2:d.transmitPublish(t.instance_id>0?"chat_"+t.instance_id+"_"+r:"chat_"+r,{op:"vi_online",status:!0});case 3:case"end":return e.stop()}}),e)})))(),l.a.eventEmitter.addListener("visitorTyping",_),l.a.eventEmitter.addListener("messageSend",f),l.a.eventEmitter.addListener("messageSendError",w),e({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),e({type:"CHAT_ADD_OVERRIDE",data:"typing"}),1!=i){n.next=38;break}c=!1,h=!1,n.prev=12,m=u()(v);case 14:return n.next=16,m.next();case 16:if(!(c=!(x=n.sent).done)){n.next=22;break}"ot"==(b=x.value).op?1==b.data.status?e({type:"chat_status_changed",data:{text:b.data.ttx}}):e({type:"chat_status_changed",data:{text:""}}):"cmsg"==b.op||"schange"==b.op?(k=a()).chatwidget.hasIn(["chatData","id"])&&e((0,g.W4)({chat_id:k.chatwidget.getIn(["chatData","id"]),hash:k.chatwidget.getIn(["chatData","hash"]),lmgsid:k.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:k.chatwidget.get("theme")})):"umsg"==b.op?(y=a()).chatwidget.hasIn(["chatData","id"])&&(0,g.o6)({msg_id:b.msid,id:y.chatwidget.getIn(["chatData","id"]),hash:y.chatwidget.getIn(["chatData","hash"])})(e,a):"schange"==b.op||"cclose"==b.op?(D=a()).chatwidget.hasIn(["chatData","id"])&&e((0,g.kW)({chat_id:D.chatwidget.getIn(["chatData","id"]),hash:D.chatwidget.getIn(["chatData","hash"]),mode:D.chatwidget.get("mode"),theme:D.chatwidget.get("theme")})):"vo"==b.op&&(I=a()).chatwidget.hasIn(["chatData","id"])&&d.transmitPublish(t.instance_id>0?"chat_"+t.instance_id+"_"+I.chatwidget.getIn(["chatData","id"]):"chat_"+I.chatwidget.getIn(["chatData","id"]),{op:"vi_online",status:!0});case 19:c=!1,n.next=14;break;case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(12),h=!0,o=n.t0;case 28:if(n.prev=28,n.prev=29,!c||null==m.return){n.next=33;break}return n.next=33,m.return();case 33:if(n.prev=33,!h){n.next=36;break}throw o;case 36:return n.finish(33);case 37:return n.finish(28);case 38:case"end":return n.stop()}}),n,null,[[12,24,28,38],[29,,33,37]])})))).apply(this,arguments)}s()(p().mark((function t(){var e,n,a,s,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=!1,n=!1,t.prev=2,s=u()(d.listener("connect"));case 4:return t.next=6,s.next();case 6:if(!(e=!(i=t.sent).done)){t.next=12;break}i.value.isAuthenticated?b():m();case 9:e=!1,t.next=4;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),n=!0,a=t.t0;case 18:if(t.prev=18,t.prev=19,!e||null==s.return){t.next=23;break}return t.next=23,s.return();case 23:if(t.prev=23,!n){t.next=26;break}throw a;case 26:return t.finish(23);case 27:return t.finish(18);case 28:case"end":return t.stop()}}),t,null,[[2,14,18,28],[19,,23,27]])})))(),s()(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.listener("disconnect").once();case 2:x();case 3:case"end":return t.stop()}}),t)})))(),s()(p().mark((function t(){var e,n,a,s,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=!1,n=!1,t.prev=2,s=u()(d.listener("deauthenticate"));case 4:return t.next=6,s.next();case 6:if(!(e=!(i=t.sent).done)){t.next=12;break}i.value,m();case 9:e=!1,t.next=4;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),n=!0,a=t.t0;case 18:if(t.prev=18,t.prev=19,!e||null==s.return){t.next=23;break}return t.next=23,s.return();case 23:if(t.prev=23,!n){t.next=26;break}throw a;case 26:return t.finish(23);case 27:return t.finish(18);case 28:case"end":return t.stop()}}),t,null,[[2,14,18,28],[19,,23,27]])})))()}}]),t}())}}]);
//# sourceMappingURL=261.7018b1aa8cb9c4bc6068.js.map