(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[4],{63:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a.n(n),r=a(2),i=a.n(r),s=a(0),u=a.n(s),o=a(15),l=a.n(o);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t){switch(t.type){case"attr":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=m({},e.chats[n],{},t.value),e=m({},e));case"attr_remove":return-1===(n=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[n]=m({},e.chats[n],{},t.value),e=m({},e));case"update":return m({},e,{},t.value);case"add":return-1===(n=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),m({},e);case"remove":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(n,1),m({},e));case"update_chat":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=m({},e.chats[n],{},t.value),m({},e));case"msg_received":if(-1===(n=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[n].msg=t.value.msg;var a=document.getElementById("chat-tab-link-"+t.id);return null!==a&&a.classList.contains("active")?e.chats[n].active=!0:e.chats[n].active=!1,e.chats[n].mn=0==e.chats[n].active?e.chats[n].mn?e.chats[n].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(n,1)[0]),m({},e);case"refocus":var n;if(-1!==(n=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[n].id)return e;e.chats[n].active=!1}return-1!==(n=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),m({},e);case"group_offline":return e.group_offline=t.value,m({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(s.useReducer)(h,{chats:[],group_offline:!1}),a=c()(t,2),n=a[0],r=a[1],i=Object(s.useRef)(n);Object(s.useEffect)((function(){i.current=n}),[n]);var o=function(e){l.a.get(WWW_DIR_JAVASCRIPT+"front/tabs/(id)/"+(void 0!==e?e.join("/"):function(){var e=[];return n.chats.map((function(t,a){return e.push(t.id)})),e}().join("/"))).then((function(e){e.data.map((function(e,t){return r({type:"update_chat",id:e.id,value:e})}))}))};Object(s.useEffect)((function(){function e(e,t){t.focus&&r({type:"attr_remove",id:!0,attr:"active",value:{active:!1}}),r({type:"add",value:{id:e,active:t.focus}}),o([e])}function t(e){r({type:"remove",id:e})}function a(e){r({type:"refocus",id:e})}function n(e){r({type:"group_offline",value:lhinst.hidenicknamesstatus}),Object.keys(e.result_status).map((function(t){r({type:"update_chat",id:e.result_status[t].chat_id,value:e.result_status[t]})})),"false"!==e.result&&Object.keys(e.result).map((function(t){r({type:"msg_received",id:e.result[t].chat_id,value:{msg:e.result[t].msg,mn:e.result[t].mn}})}))}function c(e){r({type:"update_chat",id:e.id,value:{tp:"true",tx:e.txt}})}function s(e){r({type:"update_chat",id:e.id,value:{tp:"false"}})}function u(e,t){var a=i.current.chats.findIndex((function(e){return 1==e.active}));-1!==a&&(i.current.chats.length-1>a&&0==t?d(i.current.chats[a+1]):a>0&&1==t&&d(i.current.chats[a-1]))}if(ee.addListener("chatStartTab",e),ee.addListener("chatStartBackground",e),ee.addListener("removeSynchroChat",t),ee.addListener("chatTabClicked",a),ee.addListener("chatTabFocused",a),ee.addListener("chatAdminSync",n),ee.addListener("supportUnreadChat",(function(e){e.id&&1==e.unread&&r({type:"update_chat",id:e.id,value:{support_chat:!0}})})),ee.addListener("nodeJsTypingVisitor",c),ee.addListener("nodeJsTypingVisitorStopped",s),ee.addListener("activateNextTab",u),localStorage){var l=localStorage.getItem("achat_id");if(null!==l&&""!==l){var m=l.split(","),h=[];m.forEach((function(e){var t=document.getElementById("chat-tab-link-"+e);if(null!==t){var a=t.classList.contains("active");h.push({id:parseInt(e),active:a})}})),r({type:"update",value:{chats:h}}),m.length>0&&o(m),setTimeout((function(){m.forEach((function(e){var t=document.getElementById("chat-tab-link-"+e);null!==t&&t.classList.contains("active")&&a(parseInt(e))}))}),1e3)}}return function(){ee.removeListener("chatStartTab",e),ee.removeListener("chatStartBackground",e),ee.removeListener("removeSynchroChat",t),ee.removeListener("chatTabClicked",a),ee.removeListener("chatTabFocused",a),ee.removeListener("chatAdminSync",n),ee.removeListener("supportUnreadChat",n),ee.removeListener("nodeJsTypingVisitor",c),ee.removeListener("nodeJsTypingVisitorStopped",s),ee.removeListener("activateNextTab",u)}}),[]);var d=function(e){$("#chat-tab-link-"+e.id).click()};return u.a.createElement(u.a.Fragment,null,(!n.chats||0==n.chats.length)&&u.a.createElement("div",{className:"text-center text-muted p-3"},u.a.createElement("span",{className:"material-icons"},"chat")," Your open chats will appear here"),n.chats.map((function(e,t){return u.a.createElement("div",{title:e.id,onClick:function(){return d(e)},className:"p-1 action-image chat-tabs-row border-bottom"+(e.active?" chat-tab-active":"")},u.a.createElement("div",{className:"fs12"},e.support_chat&&u.a.createElement("span",{className:"whatshot blink-ani text-warning material-icons"},"whatshot"),u.a.createElement("i",{className:"material-icons "+(2==e.us?"icon-user-away":0==e.us?"icon-user-online":"icon-user-offline")},"face"),u.a.createElement("i",{className:"material-icons icon-user-online "+(1==e.um?"icon-user-offline":"icon-user-online")},"send"),e.cc&&u.a.createElement("img",{title:e.cn,src:e.cc,alt:""})," ",(0==n.group_offline||!(0!=e.us))&&u.a.createElement("span",{className:(e.mn>0?"font-weight-bold ":"")+(0==e.cs?"text-warning":"")},e.nick||e.id),e.mn>0&&u.a.createElement("span",{className:"msg-nm pl-1"},"(",e.mn,")"),e.lmsg&&u.a.createElement("span",{className:"text-muted"}," ",e.lmsg),u.a.createElement("button",{type:"button",onClick:function(t){return function(e,t){e.preventDefault(),e.stopPropagation(),lhinst.removeDialogTab(t.id,$("#tabs"),!0)}(t,e)},className:"float-right btn-light m-0 p-0 btn btn-xs"},u.a.createElement("i",{className:"material-icons mr-0"},"close")),e.dep&&u.a.createElement("span",{className:"float-right text-muted text-truncate mw-80px"},u.a.createElement("span",{className:"material-icons"},"home"),e.dep)),(e.msg||"true"==e.tp&&e.tx)&&u.a.createElement("div",{className:"fs13 text-muted pt-1"},u.a.createElement("span",{id:"",className:"d-inline-block text-truncate mw-100 "+(e.mn>0?"font-weight-bold":"")+("true"==e.tp&&e.tx?" font-italic":"")},"true"==e.tp&&e.tx?e.tx:e.msg)))})))}}}]);