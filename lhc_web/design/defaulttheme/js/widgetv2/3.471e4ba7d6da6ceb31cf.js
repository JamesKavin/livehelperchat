(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[3],{97:function(t,a,e){"use strict";e.r(a),e.d(a,"nodeJSChat",(function(){return d}));var n=e(3),c=e.n(n),i=e(4),s=e.n(i),h=e(2),o=e(9),d=new(function(){function t(){c()(this,t),this.socket=null}return s()(t,[{key:"bootstrap",value:function(t,a,n){var c,i=n(),s=i.chatwidget.getIn(["chatData","id"]),d=(i.chatwidget.getIn(["chatData","hash"]),i.chatwidget.getIn(["chat_ui","sync_interval"])),r={hostname:t.hostname,path:t.path};""!=t.port&&(r.port=parseInt(t.port)),1==t.secure&&(r.secure=!0),c=t.instance_id>0?"chat_"+t.instance_id+"_"+s:"chat_"+s;var g=e(106).connect(r),u=null;function _(a){1==a.status?t.instance_id>0?g.publish("chat_"+t.instance_id+"_"+s,{op:"vt",msg:a.msg}):g.publish("chat_"+s,{op:"vt",msg:a.msg}):t.instance_id>0?g.publish("chat_"+t.instance_id+"_"+s,{op:"vts"}):g.publish("chat_"+s,{op:"vts"})}function p(){(u=t.instance_id>0?g.subscribe("chat_"+t.instance_id+"_"+s):g.subscribe("chat_"+s)).on("subscribeFail",(function(t){console.error("Failed to subscribe to the sample channel due to error: "+t)})),u.watch((function(t){if("ot"==t.op)1==t.data.status?a({type:"chat_status_changed",data:{text:t.data.ttx}}):a({type:"chat_status_changed",data:{text:""}});else if("cmsg"==t.op||"schange"==t.op){var e=n();e.chatwidget.hasIn(["chatData","id"])&&a(Object(o.d)({chat_id:e.chatwidget.getIn(["chatData","id"]),hash:e.chatwidget.getIn(["chatData","hash"]),lmgsid:e.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:e.chatwidget.get("theme")}))}else if("schange"==t.op){var c=n();c.chatwidget.hasIn(["chatData","id"])&&a(Object(o.b)({chat_id:c.chatwidget.getIn(["chatData","id"]),hash:c.chatwidget.getIn(["chatData","hash"]),mode:c.chatwidget.get("mode"),theme:c.chatwidget.get("theme")}))}})),h.a.eventEmitter.addListener("visitorTyping",_),a({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),a({type:"CHAT_ADD_OVERRIDE",data:"typing"})}g.on("error",(function(t){console.error(t)})),g.on("close",(function(){null!==u&&u.destroy(),h.a.eventEmitter.removeListener("visitorTyping",_),a({type:"CHAT_UI_UPDATE",data:{sync_interval:d}}),a({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})})),g.on("connect",(function(a){a.isAuthenticated&&s>0?p():g.emit("login",{hash:t.hash,chanelName:c},(function(t){t?console.log(t):p()}))}))}}]),t}())}}]);