(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[5],{62:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a.n(n),c=a(2),r=a.n(c),s=a(0),m=a.n(s),i=a(15),o=a.n(i),u=a(63),d=a(16),p=a.n(d),E=m.a.memo((function(e){var t=e.children,a=Object(s.useState)(!1),n=l()(a,2),c=n[0],r=n[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"pb-2"},m.a.createElement("button",{onClick:function(){return r(!c)},className:"btn btn-sm btn-outline-secondary"},"...")),c&&t)})),v=m.a.memo((function(e){var t=e.message,a=e.index,n=e.totalMessages,c=e.noReplyRequired,r=e.mode,i=Object(s.useState)(!1),o=l()(i,2),u=o[0],v=o[1],f=Object(s.useState)(a+1==n),_=l()(f,2),b=_[0],g=_[1];Object(s.useEffect)((function(){}),[]);return m.a.createElement("div",{className:"row pb-2 mb-2 border-bottom"+(0==a&&"preview"!==r?" border-top pt-2":"")},m.a.createElement("div",{className:"col-8 action-image",onClick:function(){return g(!b)}},m.a.createElement("span",{title:"Expand message "+t.id},m.a.createElement("i",{className:"material-icons"},b?"expand_less":"expand_more")),m.a.createElement("b",null,t.from_name),m.a.createElement("small",null," <",t.from_address,"> "),m.a.createElement("small",{className:t.status&&1!=t.status?t.cls_time?"chat-closed":"chat-active":"chat-pending"},m.a.createElement("i",{className:"material-icons"},"mail_outline"),t.status&&1!=t.status?"Responded":"Pending response")),m.a.createElement("div",{className:"col-4 text-right text-muted"},m.a.createElement("small",{className:"pr-2"},t.udate_front," | ",t.udate_ago," ago."),"preview"!==r&&m.a.createElement("i",{className:"material-icons settings text-muted"},"reply"),m.a.createElement("i",{onClick:function(e){e.stopPropagation(),v(!u)},className:"material-icons settings text-muted"},u?"expand_less":"expand_more"),"preview"!==r&&m.a.createElement("div",{className:"dropdown float-right"},m.a.createElement("i",{className:"material-icons settings text-muted",id:"message-id-"+t.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"more_vert"),m.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message-id-"+t.id},m.a.createElement("a",{className:"dropdown-item",href:"#"},m.a.createElement("i",{className:"material-icons text-muted"},"reply"),"Reply"),m.a.createElement("a",{className:"dropdown-item",href:"#"},m.a.createElement("i",{className:"material-icons text-muted"},"forward"),"Forward"),m.a.createElement("a",{className:"dropdown-item",href:WWW_DIR_JAVASCRIPT+"mailconv/apimaildownload/"+t.id},m.a.createElement("i",{className:"material-icons text-muted"},"cloud_download"),"Download"),m.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return c(t)}},m.a.createElement("i",{className:"material-icons text-muted"},"done"),"No reply required")))),u&&m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Message information"),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},m.a.createElement("li",null,m.a.createElement("span",{className:"text-muted"},"from:")," ",m.a.createElement("b",null,t.from_name)," <",t.from_address,">"),m.a.createElement("li",null,m.a.createElement("span",{className:"text-muted"},"to:")," ",t.to_data_front),t.cc_data_front&&m.a.createElement("li",null,m.a.createElement("span",{className:"text-muted"},"cc:")," ",t.cc_data_front),t.bcc_data_front&&m.a.createElement("li",null,m.a.createElement("span",{className:"text-muted"},"bcc:")," ",t.bcc_data_front),m.a.createElement("li",null,m.a.createElement("span",{className:"text-muted"},"reply-to:")," ",t.reply_to_data_front),m.a.createElement("li",null,m.a.createElement("span",{className:"text-muted"},"mailed-by:")," ",t.from_host))),m.a.createElement("div",{className:"col-6"},m.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},t.accept_time_front&&m.a.createElement("li",null,"Accepted at: ",t.accept_time_front),t.plain_user_name&&m.a.createElement("li",null,"Accepted by: ",m.a.createElement("b",null,t.plain_user_name)),t.wait_time&&m.a.createElement("li",null,"Accept wait time: ",t.wait_time_pending),t.lr_time&&t.response_time&&m.a.createElement("li",null,"Response wait time: ",t.wait_time_response),t.lr_time&&m.a.createElement("li",null,"Response type: ",1==t.response_type?"No response required":2==t.response_type?"Our response message":"Responeded by e-mail"),t.interaction_time&&m.a.createElement("li",null,"Interaction time: ",t.interaction_time_duration),t.cls_time&&m.a.createElement("li",null,"Close time: ",t.cls_time_front))))))),b&&m.a.createElement("div",{className:"col-12 mail-message-body pt-2 pb-2"},p()(t.body_front,{replace:function(e){if(e.attribs){Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,delete e.attribs.class),e.name&&"blockquote"===e.name)return e.attribs.style&&(e.attribs.style=(t=e.attribs.style,a={},t.split(";").forEach((function(e){var t=e.split(":"),n=l()(t,2),c=n[0],r=n[1];if(c){var s=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")}(c.trim());a[s]=r.trim()}})),a)),m.a.createElement("blockquote",e.attribs,m.a.createElement(E,null,Object(d.domToReact)(e.children)))}var t,a}}),t.attachments&&t.attachments.length>0&&m.a.createElement("div",{className:"pt-2"},t.attachments.map((function(e){return m.a.createElement("a",{className:"btn btn-sm btn-outline-info mr-1",href:e.download_url,title:e.description},e.name)})))),"preview"!==r&&a+1==n&&m.a.createElement("div",{className:"col-12 mt-2 pt-3 pb-2"},m.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Mail actions"},m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},m.a.createElement("i",{className:"material-icons"},"reply"),"Reply"),m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return c(t)}},m.a.createElement("i",{className:"material-icons"},"done"),"No reply required"),m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},m.a.createElement("i",{className:"material-icons"},"forward"),"Forward"))))}));function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return _({},e,{},t.value);case"update_message":var a=e.messages.findIndex((function(e){return e.id==t.message.id}));return e.messages[a]=t.message,t.conv&&(e.conv=t.conv),e=_({},e);case"update_messages":return t.messages.lmsop=e.lmsop||t.value.lmsop,(e=_({},e,{},t.value)).messages.push(t.messages),e;case"update_history":return e=_({},e,{},t.value),""!=t.history.msg&&e.messages.unshift(t.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}t.default=function(e){Object(s.useRef)(null),Object(s.useRef)(null);var t=Object(s.useRef)(null),a=Object(s.useReducer)(b,{messages:[],operators:[],conv:null,loaded:!1,saving_remarks:!1,old_message_id:0,last_message:"",remarks:"",last_message_id:0,lmsop:0,lgsync:0}),n=l()(a,2),c=n[0],r=n[1],i=function(){o.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId+"/(mode)/"+(""!=e.mode?e.mode:"normal")).then((function(t){r({type:"update",value:{conv:t.data.conv,messages:t.data.messages,loaded:!0}}),"preview"!==e.mode&&function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("machat_id",t.join(",")))}catch(e){}}(e.chatId)})).catch((function(e){}))},d=function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+e.url})};Object(s.useEffect)((function(){var t=setTimeout((function(){o.a.post(WWW_DIR_JAVASCRIPT+"mailconv/saveremarks/"+e.chatId,{data:c.remarks}).then((function(e){r({type:"update",value:{saving_remarks:!1}})}))}),500);return function(){return clearTimeout(t)}}),[c.remarks]);Object(s.useEffect)((function(){return i(),function(){!function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1!==t.indexOf(e)&&t.splice(t.indexOf(e),1),localStorage.setItem("machat_id",t.join(","))}catch(e){}}(e.chatId)}}),[]),Object(s.useEffect)((function(){if(1==c.loaded)t.current}),[c.loaded]);var p=Object(u.a)("mail_chat");p.t,p.i18n;return 0==c.loaded?m.a.createElement("span",null,"..."):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"chat-main-left-column "+("preview"==e.mode?"col-12":"col-7")},"preview"!==e.mode&&m.a.createElement("h1",{className:"pb-2"},m.a.createElement("i",{className:"material-icons"},1==c.conv.start_type?"call_made":"call_received"),c.conv.subject),m.a.createElement("div",null,c.messages.map((function(t,a){return m.a.createElement(v,{mode:e.mode,key:"msg_mail_"+e.chatId+"_"+a+"_"+t.id,totalMessages:c.messages.length,index:a,message:t,noReplyRequired:function(e){return function(e){o.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apinoreplyrequired/"+e.id).then((function(e){r({type:"update_message",message:e.data.message,conv:e.data.conv})})).catch((function(e){}))}(t)}})})))),m.a.createElement("div",{className:"chat-main-right-column "+("preview"==e.mode?"d-none":"col-5")},m.a.createElement("div",{role:"tabpanel"},m.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:t},m.a.createElement("li",{role:"presentation",className:"nav-item"},m.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},m.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),m.a.createElement("li",{role:"presentation",className:"nav-item"},m.a.createElement("a",{className:"nav-link",href:"#mail-chat-remarks-"+e.chatId,"aria-controls":"#mail-chat-remarks-"+e.chatId,role:"tab","data-toggle":"tab",title:"Remarks"},m.a.createElement("i",{className:"material-icons mr-0"},"mode_edit")))),m.a.createElement("div",{className:"tab-content"},m.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-remarks-"+e.chatId},m.a.createElement("div",{className:"material-icons pb-1 text-success"+(c.saving_remarks?" text-warning":"")},"mode_edit"),m.a.createElement("div",null,c.conv&&m.a.createElement("textarea",{placeholder:"Enter your remarks here.",onKeyUp:function(e){return t=e.target.value,void r({type:"update",value:{saving_remarks:!0,remarks:t}});var t},class:"form-control mh150",defaultValue:c.conv.remarks}))),m.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},m.a.createElement("div",{className:"pb-2"},m.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e=!1,c.messages.forEach((function(t){2!=t.status&&(e=!0)})),void((0==e||confirm("There is still unresponded messages, are you sure you want to close this conversation?"))&&o.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apicloseconversation/"+c.conv.id).then((function(e){r({type:"update",value:{conv:e.data.conv,messages:e.data.messages}}),document.getElementById("chat-tab-link-mc"+c.conv.id)&&lhinst.removeDialogTabMail("mc"+c.conv.id,$("#tabs"),!0)})).catch((function(e){})));var e}},m.a.createElement("i",{className:"material-icons"},"close"),"Close")),c.conv&&m.a.createElement("table",{className:"table table-sm"},m.a.createElement("tr",null,m.a.createElement("td",{colSpan:"2"},m.a.createElement("i",{className:"material-icons action-image",onClick:function(){return d({url:"mailconv/mailhistory/"+e.chatId})}},"history"),m.a.createElement("a",{className:"material-icons action-image",onClick:function(){return d({url:"mailconv/transfermail/"+e.chatId})},title:"Transfer chat"},"supervisor_account"),m.a.createElement("a",{className:"material-icons mr-0",onClick:function(e){o.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apideleteconversation/"+c.conv.id).then((function(e){document.getElementById("chat-tab-link-mc"+c.conv.id)?lhinst.removeDialogTabMail("mc"+c.conv.id,$("#tabs"),!0):document.location=WWW_DIR_JAVASCRIPT+"mailconv/conversations"})).catch((function(e){}))},title:"Delete chat"},"delete"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Sender"),m.a.createElement("td",null,c.conv.from_address," <",c.conv.from_name,">")),m.a.createElement("tr",null,m.a.createElement("td",null,"Status"),m.a.createElement("td",null,!c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-pending"},"mail_outline"),"Pending"),1==c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-active"},"mail_outline"),"Active"),2==c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-closed"},"mail_outline"),"Closed"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Department"),m.a.createElement("td",null,c.conv.department_name)),m.a.createElement("tr",null,m.a.createElement("td",null,"Received"),m.a.createElement("td",null,c.conv.udate_front)),m.a.createElement("tr",null,m.a.createElement("td",null,"ID"),m.a.createElement("td",null,c.conv.id)),c.conv.accept_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Accepted at"),m.a.createElement("td",null,c.conv.accept_time_front," | Wait time ",c.conv.wait_time_pending)),c.conv.response_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Responded at"),m.a.createElement("td",null,c.conv.lr_time_front," | Wait time ",c.conv.wait_time_response)),c.conv.cls_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Closed at"),m.a.createElement("td",null,c.conv.cls_time_front)),c.conv.interaction_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Interaction time"),m.a.createElement("td",null,c.conv.interaction_time_duration)),c.conv.priority&&m.a.createElement("tr",null,m.a.createElement("td",null,"Priority"),m.a.createElement("td",null,c.conv.priority)),m.a.createElement("tr",null,m.a.createElement("td",null,"Chat owner"),m.a.createElement("td",null,c.conv.plain_user_name)))))))))}}}]);