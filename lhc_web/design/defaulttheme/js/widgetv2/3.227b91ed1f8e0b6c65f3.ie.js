(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[3],{471:function(t,e,a){"use strict";a.r(e),a.d(e,"nodeJSChat",(function(){return d}));var n=a(5),c=a.n(n),i=a(6),s=a.n(i),h=a(3),o=a(8),d=new(function(){function t(){c()(this,t),this.socket=null}return s()(t,[{key:"bootstrap",value:function(t,e,n){var c,i=n(),s=i.chatwidget.getIn(["chatData","id"]),d=(i.chatwidget.getIn(["chatData","hash"]),i.chatwidget.getIn(["chat_ui","sync_interval"])),r={hostname:t.hostname,path:t.path};""!=t.port&&(r.port=parseInt(t.port)),1==t.secure&&(r.secure=!0),c=t.instance_id>0?"chat_"+t.instance_id+"_"+s:"chat_"+s;var g=a(480).connect(r),u=null;function _(e){1==e.status?t.instance_id>0?g.publish("chat_"+t.instance_id+"_"+s,{op:"vt",msg:e.msg}):g.publish("chat_"+s,{op:"vt",msg:e.msg}):t.instance_id>0?g.publish("chat_"+t.instance_id+"_"+s,{op:"vts"}):g.publish("chat_"+s,{op:"vts"})}function p(){(u=t.instance_id>0?g.subscribe("chat_"+t.instance_id+"_"+s):g.subscribe("chat_"+s)).on("subscribeFail",(function(t){console.error("Failed to subscribe to the sample channel due to error: "+t)})),u.watch((function(t){if("ot"==t.op)1==t.data.status?e({type:"chat_status_changed",data:{text:t.data.ttx}}):e({type:"chat_status_changed",data:{text:""}});else if("cmsg"==t.op||"schange"==t.op){var a=n();e(Object(o.d)({chat_id:a.chatwidget.getIn(["chatData","id"]),hash:a.chatwidget.getIn(["chatData","hash"]),lmgsid:a.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:a.chatwidget.get("theme")}))}else if("schange"==t.op){var c=n();e(Object(o.b)({chat_id:c.chatwidget.getIn(["chatData","id"]),hash:c.chatwidget.getIn(["chatData","hash"]),mode:c.chatwidget.get("mode"),theme:c.chatwidget.get("theme")}))}})),h.a.eventEmitter.addListener("visitorTyping",_),e({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),e({type:"CHAT_ADD_OVERRIDE",data:"typing"})}g.on("error",(function(t){console.error(t)})),g.on("close",(function(){null!==u&&u.destroy(),h.a.eventEmitter.removeListener("visitorTyping",_),e({type:"CHAT_UI_UPDATE",data:{sync_interval:d}}),e({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})})),g.on("connect",(function(e){e.isAuthenticated&&s>0?p():g.emit("login",{hash:t.hash,chanelName:c},(function(t){t?console.log(t):p()}))}))}}]),t}())}}]);