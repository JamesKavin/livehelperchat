"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[261],{261:(t,e,a)=>{a.r(e),a.d(e,{nodeJSChat:()=>_});var n=a(8926),i=a.n(n),s=a(4575),c=a.n(s),r=a(3913),h=a.n(r),d=a(7003),o=a.n(d),u=a(7757),p=a.n(u),g=a(2137),l=a(6512),_=new(function(){function t(){var e=this;c()(this,t),this.socket=null,g.a.eventEmitter.addListener("endedChat",(function(){null!==e.socket&&e.socket.destroy()}))}var e;return h()(t,[{key:"bootstrap",value:(e=i()(p().mark((function t(e,n,s){var c,r,h,d,u,_,m,v,w,f,b,x,k,D,I,y,P;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x=function(){return(x=i()(p().mark((function t(){var a,i,c,h,d,m,b,x,k,D,I;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=null==_,_=e.instance_id>0?u.subscribe("chat_"+e.instance_id+"_"+r):u.subscribe("chat_"+r),u.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+r:"chat_"+r,{op:"vi_online",status:!0}),g.a.eventEmitter.addListener("visitorTyping",v),g.a.eventEmitter.addListener("messageSend",w),g.a.eventEmitter.addListener("messageSendError",f),n({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),n({type:"CHAT_ADD_OVERRIDE",data:"typing"}),1!=a){t.next=37;break}i=!1,c=!1,t.prev=11,d=o()(_);case 13:return t.next=15,d.next();case 15:if(!(i=!(m=t.sent).done)){t.next=21;break}"ot"==(b=m.value).op?1==b.data.status?n({type:"chat_status_changed",data:{text:b.data.ttx}}):n({type:"chat_status_changed",data:{text:""}}):"cmsg"==b.op||"schange"==b.op?(x=s()).chatwidget.hasIn(["chatData","id"])&&n((0,l.W4)({chat_id:x.chatwidget.getIn(["chatData","id"]),hash:x.chatwidget.getIn(["chatData","hash"]),lmgsid:x.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:x.chatwidget.get("theme")})):"umsg"==b.op?(k=s()).chatwidget.hasIn(["chatData","id"])&&(0,l.o6)({msg_id:b.msid,id:k.chatwidget.getIn(["chatData","id"]),hash:k.chatwidget.getIn(["chatData","hash"])})(n,s):"schange"==b.op||"cclose"==b.op?(D=s()).chatwidget.hasIn(["chatData","id"])&&n((0,l.kW)({chat_id:D.chatwidget.getIn(["chatData","id"]),hash:D.chatwidget.getIn(["chatData","hash"]),mode:D.chatwidget.get("mode"),theme:D.chatwidget.get("theme")})):"vo"==b.op&&(I=s()).chatwidget.hasIn(["chatData","id"])&&u.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+I.chatwidget.getIn(["chatData","id"]):"chat_"+I.chatwidget.getIn(["chatData","id"]),{op:"vi_online",status:!0});case 18:i=!1,t.next=13;break;case 21:t.next=27;break;case 23:t.prev=23,t.t0=t.catch(11),c=!0,h=t.t0;case 27:if(t.prev=27,t.prev=28,!i||null==d.return){t.next=32;break}return t.next=32,d.return();case 32:if(t.prev=32,!c){t.next=35;break}throw h;case 35:return t.finish(32);case 36:return t.finish(27);case 37:case"end":return t.stop()}}),t,null,[[11,23,27,37],[28,,32,36]])})))).apply(this,arguments)},b=function(){return x.apply(this,arguments)},f=function(t){e.instance_id>0?u.transmitPublish("chat_"+e.instance_id+"_"+r,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"}):u.transmitPublish("chat_"+r,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"})},w=function(t){e.instance_id>0?u.transmitPublish("chat_"+e.instance_id+"_"+r,{op:"vt",msg:"✉️ "+t.msg}):u.transmitPublish("chat_"+r,{op:"vt",msg:"✉️ "+t.msg})},v=function(t){console.log("typing listener"),1==t.status?e.instance_id>0?u.transmitPublish("chat_"+e.instance_id+"_"+r,{op:"vt",msg:t.msg}):u.transmitPublish("chat_"+r,{op:"vt",msg:t.msg}):e.instance_id>0?u.transmitPublish("chat_"+e.instance_id+"_"+r,{op:"vts"}):u.transmitPublish("chat_"+r,{op:"vts"})},m=function(){var t=s(),a=t.chatwidget.getIn(["chatData","id"]);window.lhcAxios.post(window.lhcChat.base_url+"nodejshelper/tokenvisitor/"+a+"/"+t.chatwidget.getIn(["chatData","hash"]),null,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var t=i()(p().mark((function t(n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([u.invoke("login",{hash:n.data,chanelName:e.instance_id>0?"chat_"+e.instance_id+"_"+a:"chat_"+a}),u.listener("authenticate").once()]);case 2:b();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},c=s(),r=c.chatwidget.getIn(["chatData","id"]),c.chatwidget.getIn(["chatData","hash"]),c.chatwidget.getIn(["chat_ui","sync_interval"]),h={hostname:e.hostname,path:e.path,autoReconnectOptions:{initialDelay:5e3,randomness:5e3}},""!=e.port&&(h.port=parseInt(e.port)),1==e.secure&&(h.secure=!0),e.instance_id>0&&e.instance_id,d=a(2984),u=this.socket=d.create(h),_=null,t.next=20,u.listener("connect").once();case 20:t.sent.isAuthenticated?b():m(),k=!1,D=!1,t.prev=24,y=o()(u.listener("deauthenticate"));case 26:return t.next=28,y.next();case 28:if(!(k=!(P=t.sent).done)){t.next=34;break}P.value,m();case 31:k=!1,t.next=26;break;case 34:t.next=40;break;case 36:t.prev=36,t.t0=t.catch(24),D=!0,I=t.t0;case 40:if(t.prev=40,t.prev=41,!k||null==y.return){t.next=45;break}return t.next=45,y.return();case 45:if(t.prev=45,!D){t.next=48;break}throw I;case 48:return t.finish(45);case 49:return t.finish(40);case 50:case"end":return t.stop()}}),t,this,[[24,36,40,50],[41,,45,49]])}))),function(t,a,n){return e.apply(this,arguments)})}]),t}())}}]);
//# sourceMappingURL=261.09fe3b69d615ad1e5aa1.js.map