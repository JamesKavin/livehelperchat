"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[261],{261:(t,e,a)=>{a.r(e),a.d(e,{nodeJSChat:()=>_});var n=a(8926),i=a.n(n),s=a(4575),r=a.n(s),c=a(3913),h=a.n(c),o=a(7003),d=a.n(o),u=a(7757),p=a.n(u),g=a(2137),l=a(6512),_=new(function(){function t(){var e=this;r()(this,t),this.socket=null,g.a.eventEmitter.addListener("endedChat",(function(){null!==e.socket&&e.socket.destroy()}))}var e;return h()(t,[{key:"bootstrap",value:(e=i()(p().mark((function t(e,n,s){var r,c,h,o,u,_,m,v,f,w,b,x,k,y,D,I,E,P,C;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y=function(){return(y=i()(p().mark((function t(){var a,r,h,o,u,v,x,k,y,D,I;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(m),a=null==m,m=e.instance_id>0?_.subscribe("chat_"+e.instance_id+"_"+c):_.subscribe("chat_"+c),i()(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.listener("subscribe").once();case 2:_.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+c:"chat_"+c,{op:"vi_online",status:!0});case 3:case"end":return t.stop()}}),t)})))(),g.a.eventEmitter.addListener("visitorTyping",f),g.a.eventEmitter.addListener("messageSend",w),g.a.eventEmitter.addListener("messageSendError",b),n({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),n({type:"CHAT_ADD_OVERRIDE",data:"typing"}),1!=a){t.next=38;break}r=!1,h=!1,t.prev=12,u=d()(m);case 14:return t.next=16,u.next();case 16:if(!(r=!(v=t.sent).done)){t.next=22;break}"ot"==(x=v.value).op?1==x.data.status?n({type:"chat_status_changed",data:{text:x.data.ttx}}):n({type:"chat_status_changed",data:{text:""}}):"cmsg"==x.op||"schange"==x.op?(k=s()).chatwidget.hasIn(["chatData","id"])&&n((0,l.W4)({chat_id:k.chatwidget.getIn(["chatData","id"]),hash:k.chatwidget.getIn(["chatData","hash"]),lmgsid:k.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:k.chatwidget.get("theme")})):"umsg"==x.op?(y=s()).chatwidget.hasIn(["chatData","id"])&&(0,l.o6)({msg_id:x.msid,id:y.chatwidget.getIn(["chatData","id"]),hash:y.chatwidget.getIn(["chatData","hash"])})(n,s):"schange"==x.op||"cclose"==x.op?(D=s()).chatwidget.hasIn(["chatData","id"])&&n((0,l.kW)({chat_id:D.chatwidget.getIn(["chatData","id"]),hash:D.chatwidget.getIn(["chatData","hash"]),mode:D.chatwidget.get("mode"),theme:D.chatwidget.get("theme")})):"vo"==x.op&&(I=s()).chatwidget.hasIn(["chatData","id"])&&_.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+I.chatwidget.getIn(["chatData","id"]):"chat_"+I.chatwidget.getIn(["chatData","id"]),{op:"vi_online",status:!0});case 19:r=!1,t.next=14;break;case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(12),h=!0,o=t.t0;case 28:if(t.prev=28,t.prev=29,!r||null==u.return){t.next=33;break}return t.next=33,u.return();case 33:if(t.prev=33,!h){t.next=36;break}throw o;case 36:return t.finish(33);case 37:return t.finish(28);case 38:case"end":return t.stop()}}),t,null,[[12,24,28,38],[29,,33,37]])})))).apply(this,arguments)},k=function(){return y.apply(this,arguments)},x=function(){if(null!==m)try{m.destroy()}catch(t){}g.a.eventEmitter.removeListener("visitorTyping",f),g.a.eventEmitter.removeListener("messageSend",w),g.a.eventEmitter.removeListener("messageSendError",b),n({type:"CHAT_UI_UPDATE",data:{sync_interval:h}}),n({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})},b=function(t){e.instance_id>0?_.transmitPublish("chat_"+e.instance_id+"_"+c,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"}):_.transmitPublish("chat_"+c,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"})},w=function(t){e.instance_id>0?_.transmitPublish("chat_"+e.instance_id+"_"+c,{op:"vt",msg:"✉️ "+t.msg}):_.transmitPublish("chat_"+c,{op:"vt",msg:"✉️ "+t.msg})},f=function(t){console.log("typing listener"),1==t.status?e.instance_id>0?_.transmitPublish("chat_"+e.instance_id+"_"+c,{op:"vt",msg:t.msg}):_.transmitPublish("chat_"+c,{op:"vt",msg:t.msg}):e.instance_id>0?_.transmitPublish("chat_"+e.instance_id+"_"+c,{op:"vts"}):_.transmitPublish("chat_"+c,{op:"vts"})},v=function(){var t=s(),a=t.chatwidget.getIn(["chatData","id"]);window.lhcAxios.post(window.lhcChat.base_url+"nodejshelper/tokenvisitor/"+a+"/"+t.chatwidget.getIn(["chatData","hash"]),null,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var t=i()(p().mark((function t(n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([_.invoke("login",{hash:n.data,chanelName:e.instance_id>0?"chat_"+e.instance_id+"_"+a:"chat_"+a}),_.listener("authenticate").once()]);case 2:k();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},r=s(),c=r.chatwidget.getIn(["chatData","id"]),r.chatwidget.getIn(["chatData","hash"]),h=r.chatwidget.getIn(["chat_ui","sync_interval"]),o={hostname:e.hostname,path:e.path,autoReconnectOptions:{initialDelay:5e3,randomness:5e3}},""!=e.port&&(o.port=parseInt(e.port)),1==e.secure&&(o.secure=!0),e.instance_id>0&&e.instance_id,u=a(2984),_=this.socket=u.create(o),m=null,t.next=20,_.listener("connect").once();case 20:t.sent.isAuthenticated?k():v(),i()(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.listener("disconnect").once();case 2:x();case 3:case"end":return t.stop()}}),t)})))(),D=!1,I=!1,t.prev=25,P=d()(_.listener("deauthenticate"));case 27:return t.next=29,P.next();case 29:if(!(D=!(C=t.sent).done)){t.next=35;break}C.value,v();case 32:D=!1,t.next=27;break;case 35:t.next=41;break;case 37:t.prev=37,t.t0=t.catch(25),I=!0,E=t.t0;case 41:if(t.prev=41,t.prev=42,!D||null==P.return){t.next=46;break}return t.next=46,P.return();case 46:if(t.prev=46,!I){t.next=49;break}throw E;case 49:return t.finish(46);case 50:return t.finish(41);case 51:case"end":return t.stop()}}),t,this,[[25,37,41,51],[42,,46,50]])}))),function(t,a,n){return e.apply(this,arguments)})}]),t}())}}]);
//# sourceMappingURL=261.c3fe9124bfb8854d0dc1.js.map