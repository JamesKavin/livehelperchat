(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[6],{85:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),l=a(2),c=a.n(l),i=a(0),s=a.n(i),o=a(15),m=a.n(o),u=a(63),d=a(16),p=a.n(d),f=s.a.memo((function(e){var t=e.children,a=Object(i.useState)(!1),n=r()(a,2),l=n[0],c=n[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"pb-2"},s.a.createElement("button",{onClick:function(){return c(!l)},className:"btn btn-sm btn-outline-secondary"},"...")),l&&t)})),v=a(30),g=a.n(v),h=a(82),b=a(72),E=a.n(b),y=a(74),_=a.n(y),N=a(3),R=a.n(N),w=a(4),k=a.n(w),O=a(31),A=a.n(O),j=a(75),x=a.n(j),I=a(77),C=a.n(I),P=a(79),S=a.n(P),W=a(84);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var J=function(e){x()(r,e);var t,a,n=(t=r,function(){var e,a=S()(t);if(F()){var n=S()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return C()(this,e)});function r(e){var t;return R()(this,r),t=n.call(this,e),c()(A()(t),"state",{hightlight:!1,files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1,progress:""}),t.fileInputRef=s.a.createRef(),t.dropAreaRef=s.a.createRef(),t.openFileDialog=t.openFileDialog.bind(A()(t)),t.onFilesAddedUI=t.onFilesAddedUI.bind(A()(t)),t.onDragOver=t.onDragOver.bind(A()(t)),t.onDragLeave=t.onDragLeave.bind(A()(t)),t.onDrop=t.onDrop.bind(A()(t)),t.onPaste=t.onPaste.bind(A()(t)),t.onFilesAdded=t.onFilesAdded.bind(A()(t)),t.uploadFiles=t.uploadFiles.bind(A()(t)),t.sendRequest=t.sendRequest.bind(A()(t)),t.chooseFromUploaded=t.chooseFromUploaded.bind(A()(t)),t.fileUploaded=t.fileUploaded.bind(A()(t)),t}return k()(r,[{key:"onFilesAdded",value:function(e){var t=this,a=this.props.t,n=new RegExp("(.|/)("+this.props.moptions.fop_op+")$","i"),r=[];e.forEach((function(e){n.test(e.type)||n.test(e.name)||r.push(e.name+": "+a("file.incorrect_type")),e.size>t.props.moptions.fop_size&&r.push(e.name+": "+a("file.to_big_file"))})),r.length>0?alert(r.join("\n")):this.setState({files:e})}},{key:"componentDidUpdate",value:function(e,t){this.state.files.length>0&&0==this.state.uploading&&this.uploadFiles()}},{key:"uploadFiles",value:(a=_()(E.a.mark((function e(){var t,a=this;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({uploadProgress:{},uploading:!0}),t=[],this.state.files.forEach((function(e){t.push(a.sendRequest(e))})),e.prev=3,e.next=6,Promise.all(t);case 6:this.setState({successfullUploaded:!0,uploading:!1,files:[]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),this.setState({successfullUploaded:!0,uploading:!1,files:[]});case 12:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(){return a.apply(this,arguments)})},{key:"fileUploaded",value:function(e){this.props.fileAttached(e)}},{key:"sendRequest",value:function(e){var t=this,a=this.props.t;return new Promise((function(n,r){var l=new XMLHttpRequest;l.upload.addEventListener("progress",(function(n){n.lengthComputable&&(T({},t.state.uploadProgress)[e.name]={state:"pending",percentage:n.loaded/n.total*100},t.setState({progress:a("file.uploading")+" "+Math.round(n.loaded/n.total*100)+"%"}))})),l.upload.addEventListener("load",(function(a){T({},t.state.uploadProgress)[e.name]={state:"done",percentage:100},t.setState({progress:""}),n(l.response)}));var c=t;l.onreadystatechange=function(){4===l.readyState&&c.fileUploaded(JSON.parse(l.response))},l.upload.addEventListener("error",(function(a){var n=T({},t.state.uploadProgress);n[e.name]={state:"error",percentage:0},t.setState({progress:n}),r(l.response)}));var i=new FormData;i.append("files",e,e.name),l.open("POST",WWW_DIR_JAVASCRIPT+"mailconv/uploadfile"),l.send(i)}))}},{key:"openFileDialog",value:function(){this.state.uploading||this.fileInputRef.current.click()}},{key:"onFilesAddedUI",value:function(e){var t=e.target.files,a=this.fileListToArray(t);this.onFilesAdded(a)}},{key:"onDragOver",value:function(e){e.preventDefault(),this.state.uploading||this.setState({hightlight:!0})}},{key:"componentDidMount",value:function(){this.dropAreaRef.current&&(this.dropAreaRef.current.ondragover=this.onDragOver,this.dropAreaRef.current.ondragleave=this.onDragLeave,this.dropAreaRef.current.ondrop=this.onDrop)}},{key:"componentWillUnmount",value:function(){this.dropAreaRef.current&&(this.dropAreaRef.current.ondragover=null,this.dropAreaRef.current.ondragleave=null,this.dropAreaRef.current.ondrop=null),window.attatchReplyCurrent=null}},{key:"onPaste",value:function(e){var t=e&&e.clipboardData&&e.clipboardData.items;if(t&&t.length){for(var a=[],n=0;n<t.length;n++){var r=t[n].getAsFile&&t[n].getAsFile();r&&a.push(r)}a.length>0&&this.onFilesAdded(a)}}},{key:"onDragLeave",value:function(e){this.setState({hightlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.state.uploading){var t=e.dataTransfer.files,a=this.fileListToArray(t);this.onFilesAdded(a),this.setState({hightlight:!1})}}},{key:"fileListToArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.item(a));return t}},{key:"chooseFromUploaded",value:function(){lhc.revealModal({title:"Attatch an already uploaded file",iframe:!0,height:500,url:WWW_DIR_JAVASCRIPT+"mailconv/attatchfile/(attachment)/1"});var e=this;window.attatchReplyCurrent=function(t){e.props.fileAttached(t)}}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:this.chooseFromUploaded},s.a.createElement("i",{className:"material-icons"},"list")," Choose file from uploaded files"),s.a.createElement("button",{ref:this.dropAreaRef,onClick:this.openFileDialog,className:"btn btn-sm "+(1==this.state.hightlight?"btn-outline-primary":"btn-outline-secondary")},s.a.createElement("i",{className:"material-icons"},"attach_file")," ",this.state.progress||"Drop your files here or choose a new file"),s.a.createElement("input",{onChange:this.onFilesAddedUI,ref:this.fileInputRef,id:"fileupload",type:"file",name:"files[]",multiple:!0,className:"d-none"}))}}]),r}(i.PureComponent),U=Object(W.a)()(J);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=s.a.memo((function(e){var t=Object(i.useReducer)((function(e,t){var a=t.type,n=t.value;switch(a){case"add":return[].concat(g()(e),[n]);case"add_recipient":return(e=M({},e))[n].push({name:"",email:""}),e;case"remove_recipient":return(e=M({},e))[n.recipient]=e[n.recipient].filter((function(e,t){return t!==n.index})),e;case"set":return n;case"set_attribute":return(e=M({},e))[n.value.type][n.value.index][n.value.field]=n.value.value,e;case"cleanup":return[];case"remove":return e.filter((function(e,t){return t!==n}));default:return e}}),[]),a=r()(t,2),n=a[0],l=a[1],o=function(t,a){l({type:t,value:a}),e.setRecipients(n)};return Object(i.useEffect)((function(){l({type:"set",value:e.recipients}),e.setRecipients(e.recipients)}),[e.recipients]),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 text-secondary font-weight-bold fs13 pb-1"},"Recipients ",s.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("add_recipient","reply")},style:{fontSize:"20px"}},"add")," Cc ",s.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("add_recipient","cc")},style:{fontSize:"20px"}},"add")," Bcc ",s.a.createElement("i",{onClick:function(e){return o("add_recipient","bcc")},className:"material-icons settings text-muted",style:{fontSize:"20px"}},"add")),s.a.createElement("div",{className:"col-6"},n.reply&&n.reply.map((function(e,t){var a;return s.a.createElement("div",{className:"form-row pb-1"},s.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},"To:"),s.a.createElement("div",{className:"col-5"},s.a.createElement("div",{className:"input-group input-group-sm"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("span",{className:"input-group-text"},s.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),s.a.createElement("input",(a={type:"text",className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"reply",index:t,field:"email"}})},value:e.email},c()(a,"placeholder","E-mail"),c()(a,"aria-describedby","validationTooltipUsernamePrepend"),a)))),s.a.createElement("div",{className:"col-5"},s.a.createElement("input",{type:"text",placeholder:"Recipient name",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"reply",index:t,field:"name"}})},value:e.name,className:"form-control form-control-sm"})),t>0&&s.a.createElement("div",{className:"col"},s.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"reply",index:t})}},"remove")))}))),s.a.createElement("div",{className:"col-6"},n.cc&&n.cc.map((function(e,t){var a;return s.a.createElement("div",{className:"form-row pb-1"},s.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},"Cc:"),s.a.createElement("div",{className:"col-5"},s.a.createElement("div",{className:"input-group input-group-sm"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("span",{className:"input-group-text"},s.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),s.a.createElement("input",(a={type:"text",className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"cc",index:t,field:"email"}})},value:e.email},c()(a,"placeholder","E-mail"),c()(a,"aria-describedby","validationTooltipUsernamePrepend"),a)))),s.a.createElement("div",{className:"col-5"},s.a.createElement("input",{type:"text",placeholder:"Recipient name",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"cc",index:t,field:"name"}})},value:e.name,className:"form-control form-control-sm"})),s.a.createElement("div",{className:"col"},s.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"cc",index:t})}},"remove")))}))),s.a.createElement("div",{className:"col-6"},n.bcc&&n.bcc.map((function(e,t){var a;return s.a.createElement("div",{className:"form-row pb-1"},s.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},"Bcc:"),s.a.createElement("div",{className:"col-5"},s.a.createElement("div",{className:"input-group input-group-sm"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("span",{className:"input-group-text"},s.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),s.a.createElement("input",(a={type:"text",className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"bcc",index:t,field:"email"}})},value:e.email},c()(a,"placeholder","E-mail"),c()(a,"aria-describedby","validationTooltipUsernamePrepend"),a)))),s.a.createElement("div",{className:"col-5"},s.a.createElement("input",{type:"text",placeholder:"Recipient name",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"bcc",index:t,field:"name"}})},value:e.name,className:"form-control form-control-sm"})),s.a.createElement("div",{className:"col"},s.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"bcc",index:t})}},"remove")))}))))})),L=s.a.memo((function(e){var t=Object(i.useState)(!1),a=r()(t,2);a[0],a[1];return s.a.createElement(s.a.Fragment,null,e.status.send&&s.a.createElement("div",null,"Mail was send"))})),z=s.a.memo((function(e){var t=Object(i.useState)(!1),a=r()(t,2),n=a[0],l=a[1],o=Object(i.useState)(!1),u=r()(o,2),d=u[0],p=u[1],f=Object(i.useState)(null),v=r()(f,2),b=(v[0],v[1],Object(i.useState)(null)),E=r()(b,2),y=E[0],_=E[1],N=Object(i.useState)(null),R=r()(N,2),w=R[0],k=R[1],O=Object(i.useState)(!1),A=r()(O,2),j=A[0],x=A[1],I=Object(i.useState)([]),C=r()(I,2),P=C[0],S=C[1],W=Object(i.useState)([]),D=r()(W,2),T=D[0],F=D[1],J=Object(i.useState)([]),V=r()(J,2),M=V[0],z=V[1],H=Object(i.useState)(!1),B=r()(H,2),$=B[0],K=B[1],X=Object(i.useReducer)((function(e,t){var a=t.type,n=t.value;switch(a){case"add":return[].concat(g()(e),[n]);case"cleanup":return[];case"remove":return e.filter((function(e,t){return t!==n}));default:return e}}),[]),G=r()(X,2),Q=G[0],Y=G[1],Z=Object(i.useRef)();Z.current=Q;return Object(i.useEffect)((function(){return function(){Z.current.map((function(e,t){!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")}))}}),[]),Object(i.useEffect)((function(){1!=n&&1!=d||0!=j?0==n&&0==d&&1==j&&(x(!1),Z.current.length>0&&(Z.current.map((function(e,t){!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")})),Y({type:"cleanup"}))):m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/getreplydata/"+e.message.id+"/"+(1==n?"reply":"forward")).then((function(e){x(!0),_(e.data.intro),k(e.data.signature),S(e.data.recipients)}))}),[n,d]),1==e.replyMode&&0==n&&(1==d&&(x(!1),p(!1)),l(!0)),1==e.forwardMode&&0==d&&(1==n&&(x(!1),l(!1)),p(!0)),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-12 mt-2 pt-3 pb-2"},!n&&!d&&s.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Mail actions"},s.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){p(!1),l(!0)}},s.a.createElement("i",{className:"material-icons"},"reply"),"Reply"),s.a.createElement("button",{disabled:1==e.message.response_type,type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return e.noReplyRequired()}},s.a.createElement("i",{className:"material-icons"},"done"),"No reply required"),s.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){l(!1),p(!0)}},s.a.createElement("i",{className:"material-icons"},"forward"),"Forward")),(n||d)&&j&&s.a.createElement("div",{className:"shadow p-2"},M.send_tried&&s.a.createElement(L,{status:M}),s.a.createElement(q,{setRecipients:function(e){return F(e)},mode:1==n?"reply":"forward",message:e.message,recipients:P}),s.a.createElement(h.a,{tinymceScriptSrc:"/design/defaulttheme/js/tinymce/js/tinymce/tinymce.min.js",initialValue:"<p></p>"+y+"<blockquote>"+e.message.body_front+"</blockquote>"+w,onInit:function(){tinyMCE.get("reply-to-mce-"+e.message.id).focus()},id:"reply-to-mce-"+e.message.id,init:{height:320,automatic_uploads:!0,file_picker_types:"image",images_upload_url:WWW_DIR_JAVASCRIPT+"mailconv/uploadimage",templates:WWW_DIR_JAVASCRIPT+"mailconv/apiresponsetemplates/"+e.message.id,paste_data_images:!0,relative_urls:!1,browser_spellcheck:!0,paste_as_text:!0,contextmenu:!1,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor image lhfiles","searchreplace visualblocks code fullscreen","media table paste help","print preview importcss searchreplace autolink save autosave directionality visualblocks visualchars fullscreen media template codesample charmap pagebreak nonbreaking anchor toc advlist lists wordcount textpattern noneditable help charmap emoticons"],toolbar_mode:"wrap",toolbar:"undo redo | fontselect formatselect fontsizeselect | table | paste pastetext | subscript superscript | bold italic underline strikethrough | forecolor backcolor |                             alignleft aligncenter alignright alignjustify | lhfiles insertfile image pageembed template link anchor codesample |                             bullist numlist outdent indent | removeformat permanentpen | charmap emoticons | fullscreen print preview paste code | help"}}),n&&s.a.createElement("div",{className:"float-right"},s.a.createElement("a",{className:"action-image",onClick:function(){l(!1),e.cancelReply()}},s.a.createElement("i",{className:"material-icons"},"delete"))),d&&s.a.createElement("div",{className:"float-right"},s.a.createElement("a",{className:"action-image",onClick:function(){p(!1),e.cancelForward()}},s.a.createElement("i",{className:"material-icons"},"delete"))),s.a.createElement("div",{className:"btn-group mt-1",role:"group","aria-label":"Mail actions"},s.a.createElement("button",{type:"button",disabled:$,className:"btn btn-sm btn-outline-primary",onClick:function(){return t={recipients:T,content:tinyMCE.get("reply-to-mce-"+e.message.id).getContent(),attatchements:Q,mode:1==n?"reply":"forward"},K(!0),void m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apisendreply/"+e.message.id,t).then((function(e){z(e.data),K(!1)})).catch((function(e){K(!1),e.response?400===e.response.status?z(e.response.data):alert("Unhandled error."+e.response.data):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}));var t}},s.a.createElement("i",{className:"material-icons"},"send"),1==$?"Sending...":"Send"),s.a.createElement(U,{moptions:e.moptions,fileAttached:function(e){return Y({type:"add",value:e})},message:e.message})),Q&&Q.length>0&&s.a.createElement("div",{className:"pt-2"},Q.map((function(e,t){return s.a.createElement("button",c()({title:"Click to remove",onClick:function(){return function(e,t){Y({type:"remove",value:t}),!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")}(e,t)},className:"btn btn-sm btn-outline-info mr-1 mb-1"},"title",e.id),e.name)}))))))})),H=s.a.memo((function(e){var t=e.message,a=e.index,n=e.totalMessages,l=e.noReplyRequired,c=e.mode,o=e.addLabel,m=e.moptions,u=Object(i.useState)(!1),v=r()(u,2),g=v[0],h=v[1],b=Object(i.useState)(a+1==n),E=r()(b,2),y=E[0],_=E[1],N=Object(i.useState)(!1),R=r()(N,2),w=R[0],k=R[1],O=Object(i.useState)(!1),A=r()(O,2),j=A[0],x=A[1];Object(i.useEffect)((function(){}),[]);return s.a.createElement("div",{className:"row pb-2 mb-2 border-secondary"+("preview"!==c?" border-top pt-2":" border-bottom")},s.a.createElement("div",{className:"col-7 action-image",onClick:function(){return _(!y)}},s.a.createElement("span",{title:"Expand message "+t.id},s.a.createElement("i",{className:"material-icons"},y?"expand_less":"expand_more")),s.a.createElement("b",null,t.from_name),s.a.createElement("small",null," <",t.from_address,"> "),s.a.createElement("small",{className:t.status&&1!=t.status?t.cls_time?"chat-closed":"chat-active":"chat-pending"},s.a.createElement("i",{className:"material-icons"},"mail_outline"),t.status&&1!=t.status?"Responded":"Pending response")),s.a.createElement("div",{className:"col-5 text-right text-muted"},s.a.createElement("small",{className:"pr-1"},t.subjects&&t.subjects.map((function(e,t){return s.a.createElement("span",{className:"badge badge-info mr-1"},e.name)})),"preview"!==c&&s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{title:"Add/Remove label",onClick:function(){return o(t)},className:"material-icons action-image text-muted"},"label")," |")),s.a.createElement("small",{className:"pr-2"},t.udate_front," | ",t.udate_ago," ago."),"preview"!==c&&s.a.createElement("i",{onClick:function(e){e.stopPropagation(),x(!1),k(!0)},className:"material-icons settings text-muted"},"reply"),s.a.createElement("i",{onClick:function(e){e.stopPropagation(),h(!g)},className:"material-icons settings text-muted"},g?"expand_less":"expand_more"),"preview"!==c&&s.a.createElement("div",{className:"dropdown float-right"},s.a.createElement("i",{className:"material-icons settings text-muted",id:"message-id-"+t.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"more_vert"),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message-id-"+t.id},s.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.stopPropagation(),x(!1),k(!0)}},s.a.createElement("i",{className:"material-icons text-muted"},"reply"),"Reply"),s.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.stopPropagation(),k(!1),x(!0)}},s.a.createElement("i",{className:"material-icons text-muted"},"forward"),"Forward"),s.a.createElement("a",{className:"dropdown-item",target:"_blank",href:WWW_DIR_JAVASCRIPT+"mailconv/mailprint/"+t.id},s.a.createElement("i",{className:"material-icons text-muted"},"print"),"Print"),s.a.createElement("a",{className:"dropdown-item",href:WWW_DIR_JAVASCRIPT+"mailconv/apimaildownload/"+t.id},s.a.createElement("i",{className:"material-icons text-muted"},"cloud_download"),"Download"),s.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return l(t)}},s.a.createElement("i",{className:"material-icons text-muted"},"done"),"No reply required")))),g&&s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Message information"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},s.a.createElement("li",null,s.a.createElement("span",{className:"text-muted"},"from:")," ",s.a.createElement("b",null,t.from_name)," <",t.from_address,">"),s.a.createElement("li",null,s.a.createElement("span",{className:"text-muted"},"to:")," ",t.to_data_front),t.cc_data_front&&s.a.createElement("li",null,s.a.createElement("span",{className:"text-muted"},"cc:")," ",t.cc_data_front),t.bcc_data_front&&s.a.createElement("li",null,s.a.createElement("span",{className:"text-muted"},"bcc:")," ",t.bcc_data_front),s.a.createElement("li",null,s.a.createElement("span",{className:"text-muted"},"reply-to:")," ",t.reply_to_data_front),s.a.createElement("li",null,s.a.createElement("span",{className:"text-muted"},"mailed-by:")," ",t.from_host))),s.a.createElement("div",{className:"col-6"},s.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},t.accept_time_front&&s.a.createElement("li",null,"Accepted at: ",t.accept_time_front),t.plain_user_name&&s.a.createElement("li",null,"Accepted by: ",s.a.createElement("b",null,t.plain_user_name)),t.wait_time&&s.a.createElement("li",null,"Accept wait time: ",t.wait_time_pending),t.lr_time&&t.response_time&&s.a.createElement("li",null,"Response wait time: ",t.wait_time_response),t.lr_time&&s.a.createElement("li",null,"Response type: ",1==t.response_type?"No response required":2==t.response_type?"Our response message":"Responeded by e-mail"),t.interaction_time&&s.a.createElement("li",null,"Interaction time: ",t.interaction_time_duration),t.cls_time&&s.a.createElement("li",null,"Close time: ",t.cls_time_front))))))),y&&s.a.createElement("div",{className:"col-12 mail-message-body pt-2 pb-2"},p()(t.body_front,{replace:function(e){if(e.attribs){Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,delete e.attribs.class),e.name&&"blockquote"===e.name)return e.attribs.style&&(e.attribs.style=(t=e.attribs.style,a={},t.split(";").forEach((function(e){var t=e.split(":"),n=r()(t,2),l=n[0],c=n[1];if(l){var i=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")}(l.trim());a[i]=c.trim()}})),a)),s.a.createElement("blockquote",e.attribs,s.a.createElement(f,null,Object(d.domToReact)(e.children)))}var t,a}}),t.attachments&&t.attachments.length>0&&s.a.createElement("div",{className:"pt-2"},t.attachments.map((function(e){return s.a.createElement("a",{className:"btn btn-sm btn-outline-info mr-1",href:e.download_url,title:e.description},e.name)})))),"preview"!==c&&(a+1==n||w||j)&&s.a.createElement(z,{moptions:m,forwardMode:j,cancelForward:function(e){return x(!1)},cancelReply:function(e){return k(!1)},replyMode:w,lastMessage:a+1==n,message:t,noReplyRequired:function(){return l(t)}}))}));function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function X(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return K({},e,{},t.value);case"update_message":var a=e.messages.findIndex((function(e){return e.id==t.message.id}));return e.messages[a]=t.message,t.conv&&(e.conv=t.conv),e=K({},e);case"update_messages":return t.messages.lmsop=e.lmsop||t.value.lmsop,(e=K({},e,{},t.value)).messages.push(t.messages),e;case"update_history":return e=K({},e,{},t.value),""!=t.history.msg&&e.messages.unshift(t.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}t.default=function(e){Object(i.useRef)(null),Object(i.useRef)(null);var t=Object(i.useRef)(null),a=Object(i.useReducer)(X,{messages:[],operators:[],conv:null,loaded:!1,saving_remarks:!1,old_message_id:0,last_message:"",remarks:"",last_message_id:0,lmsop:0,lgsync:0}),n=r()(a,2),l=n[0],c=n[1],o=function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId+"/(mode)/"+(""!=e.mode?e.mode:"normal")).then((function(t){c({type:"update",value:{conv:t.data.conv,messages:t.data.messages,moptions:t.data.moptions,loaded:!0}}),"preview"!==e.mode&&function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("machat_id",t.join(",")))}catch(e){}}(e.chatId)})).catch((function(e){}))},d=function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+e.url})};Object(i.useEffect)((function(){var t=setTimeout((function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/saveremarks/"+e.chatId,{data:l.remarks}).then((function(e){c({type:"update",value:{saving_remarks:!1}})}))}),500);return function(){return clearTimeout(t)}}),[l.remarks]);Object(i.useEffect)((function(){return o(),function(){!function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1!==t.indexOf(e)&&t.splice(t.indexOf(e),1),localStorage.setItem("machat_id",t.join(","))}catch(e){}}(e.chatId)}}),[]),Object(i.useEffect)((function(){if(1==l.loaded)t.current}),[l.loaded]);var p=Object(u.a)("mail_chat");p.t,p.i18n;return 0==l.loaded?s.a.createElement("span",null,"..."):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"chat-main-left-column "+("preview"==e.mode?"col-12":"col-7")},"preview"!==e.mode&&s.a.createElement("h1",{className:"pb-2"},s.a.createElement("i",{className:"material-icons"},1==l.conv.start_type?"call_made":"call_received"),l.conv.subject),s.a.createElement("div",null,l.messages.map((function(t,a){return s.a.createElement(H,{moptions:l.moptions,mode:e.mode,key:"msg_mail_"+e.chatId+"_"+a+"_"+t.id,totalMessages:l.messages.length,index:a,message:t,noReplyRequired:function(e){return function(e){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apinoreplyrequired/"+e.id).then((function(e){c({type:"update_message",message:e.data.message,conv:e.data.conv})})).catch((function(e){}))}(t)},addLabel:function(e){return function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"mailconv/apilabelmessage/"+e.id,hidecallback:function(){m.a.get(WWW_DIR_JAVASCRIPT+"mailconv/apigetlabels/"+e.id).then((function(e){c({type:"update_message",message:e.data.message})})).catch((function(e){}))}})}(t)}})})))),s.a.createElement("div",{className:"chat-main-right-column "+("preview"==e.mode?"d-none":"col-5")},s.a.createElement("div",{role:"tabpanel"},s.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:t},s.a.createElement("li",{role:"presentation",className:"nav-item"},s.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},s.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),s.a.createElement("li",{role:"presentation",className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"#mail-chat-remarks-"+e.chatId,"aria-controls":"#mail-chat-remarks-"+e.chatId,role:"tab","data-toggle":"tab",title:"Remarks"},s.a.createElement("i",{className:"material-icons mr-0"},"mode_edit")))),s.a.createElement("div",{className:"tab-content"},s.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-remarks-"+e.chatId},s.a.createElement("div",{className:"material-icons pb-1 text-success"+(l.saving_remarks?" text-warning":"")},"mode_edit"),s.a.createElement("div",null,l.conv&&s.a.createElement("textarea",{placeholder:"Enter your remarks here.",onKeyUp:function(e){return t=e.target.value,void c({type:"update",value:{saving_remarks:!0,remarks:t}});var t},class:"form-control mh150",defaultValue:l.conv.remarks}))),s.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},s.a.createElement("div",{className:"pb-2"},s.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e=!1,l.messages.forEach((function(t){2!=t.status&&(e=!0)})),void((0==e||confirm("There is still unresponded messages, are you sure you want to close this conversation?"))&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apicloseconversation/"+l.conv.id).then((function(e){c({type:"update",value:{conv:e.data.conv,messages:e.data.messages}}),document.getElementById("chat-tab-link-mc"+l.conv.id)&&lhinst.removeDialogTabMail("mc"+l.conv.id,$("#tabs"),!0)})).catch((function(e){})));var e}},s.a.createElement("i",{className:"material-icons"},"close"),"Close")),l.conv&&s.a.createElement("table",{className:"table table-sm"},s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"2"},s.a.createElement("i",{className:"material-icons action-image",onClick:function(){return d({url:"mailconv/mailhistory/"+e.chatId})}},"history"),s.a.createElement("a",{className:"material-icons action-image",onClick:function(){return d({url:"mailconv/transfermail/"+e.chatId})},title:"Transfer chat"},"supervisor_account"),s.a.createElement("a",{className:"text-dark material-icons",target:"_blank",href:WWW_DIR_JAVASCRIPT+"mailconv/mailprintcovnersation/"+e.chatId},"print"),l.conv.can_delete&&s.a.createElement("a",{className:"material-icons mr-0",onClick:function(e){confirm("Are you sure?")&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apideleteconversation/"+l.conv.id).then((function(e){document.getElementById("chat-tab-link-mc"+l.conv.id)?lhinst.removeDialogTabMail("mc"+l.conv.id,$("#tabs"),!0):document.location=WWW_DIR_JAVASCRIPT+"mailconv/conversations"})).catch((function(e){}))},title:"Delete chat"},"delete"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Sender"),s.a.createElement("td",null,l.conv.from_name," <",l.conv.from_address,">")),s.a.createElement("tr",null,s.a.createElement("td",null,"Status"),s.a.createElement("td",null,!l.conv.status&&s.a.createElement("span",null,s.a.createElement("i",{className:"material-icons chat-pending"},"mail_outline"),"Pending"),1==l.conv.status&&s.a.createElement("span",null,s.a.createElement("i",{className:"material-icons chat-active"},"mail_outline"),"Active"),2==l.conv.status&&s.a.createElement("span",null,s.a.createElement("i",{className:"material-icons chat-closed"},"mail_outline"),"Closed"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Department"),s.a.createElement("td",null,l.conv.department_name)),s.a.createElement("tr",null,s.a.createElement("td",null,"Received"),s.a.createElement("td",null,l.conv.udate_front)),s.a.createElement("tr",null,s.a.createElement("td",null,"ID"),s.a.createElement("td",null,l.conv.id)),l.conv.accept_time&&s.a.createElement("tr",null,s.a.createElement("td",null,"Accepted at"),s.a.createElement("td",null,l.conv.accept_time_front," | Wait time ",l.conv.wait_time_pending)),l.conv.response_time&&s.a.createElement("tr",null,s.a.createElement("td",null,"Responded at"),s.a.createElement("td",null,l.conv.lr_time_front," | Wait time ",l.conv.wait_time_response)),l.conv.cls_time&&s.a.createElement("tr",null,s.a.createElement("td",null,"Closed at"),s.a.createElement("td",null,l.conv.cls_time_front)),l.conv.interaction_time&&s.a.createElement("tr",null,s.a.createElement("td",null,"Interaction time"),s.a.createElement("td",null,l.conv.interaction_time_duration)),l.conv.priority&&s.a.createElement("tr",null,s.a.createElement("td",null,"Priority"),s.a.createElement("td",null,l.conv.priority)),s.a.createElement("tr",null,s.a.createElement("td",null,"Chat owner"),s.a.createElement("td",null,l.conv.plain_user_name)))))))))}}}]);