(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[2],{129:function(t,e,a){"use strict";a.r(e);var i,n=a(8),r=a.n(n),s=a(3),o=a.n(s),p=a(4),c=a.n(p),h=a(5),d=a.n(h),l=a(6),g=a.n(l),u=a(1),f=a.n(u),m=a(7),w=a.n(m),v=a(0),b=a.n(v),_=a(12),I=a(27),C=(a(45),a(13)),y=a(10),D=a(2),E=a(41);function O(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}var j=Object(_.b)((function(t){return{chatwidget:t.chatwidget}}))(i=function(t){function e(t){var a;return o()(this,e),(a=d()(this,g()(e).call(this,t))).state={},a.props.dispatch(Object(y.h)({department:a.props.chatwidget.get("department"),theme:a.props.chatwidget.get("theme"),mode:a.props.chatwidget.get("mode"),online:0})),a.handleSubmit=a.handleSubmit.bind(f()(a)),a.handleContentChange=a.handleContentChange.bind(f()(a)),a.handleContentChangeCustom=a.handleContentChangeCustom.bind(f()(a)),a}return w()(e,t),c()(e,[{key:"handleSubmit",value:function(t){var e=this.state;e.jsvar=this.props.chatwidget.get("jsVars"),e["captcha_"+this.props.chatwidget.getIn(["captcha","hash"])]=this.props.chatwidget.getIn(["captcha","ts"]),e.tscaptcha=this.props.chatwidget.getIn(["captcha","ts"]),e.user_timezone=D.a.getTimeZone(),e.URLRefer=window.location.href.substring(window.location.protocol.length),e.r=this.props.chatwidget.get("ses_ref"),""!=this.props.chatwidget.get("operator")&&(e.operator=this.props.chatwidget.get("operator")),null!==this.props.chatwidget.get("priority")&&(e.priority=this.props.chatwidget.get("priority"));var a=D.a.getCustomFieldsSubmit(this.props.chatwidget.getIn(["customData","fields"]));null!==a&&(e=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(Object(a),!0).forEach((function(e){r()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},e,{},a));var i={department:this.props.chatwidget.get("department"),theme:this.props.chatwidget.get("theme"),mode:this.props.chatwidget.get("mode"),vid:this.props.chatwidget.get("vid"),fields:e};this.props.dispatch(Object(y.n)(i)),t.preventDefault()}},{key:"handleContentChange",value:function(t){var e=this,a=this.state;a[t.id]=t.value,this.setState(a),"DepartamentID"==t.id&&this.props.chatwidget.getIn(["offlineData","department","departments"]).size>0&&this.props.chatwidget.getIn(["offlineData","department","departments"]).map((function(a){a.get("value")==t.value&&1==a.get("online")&&(e.props.dispatch({type:"dep_default",data:t.value}),e.props.dispatch({type:"onlineStatus",data:!0}))}))}},{key:"componentDidMount",value:function(){D.a.prefillFields(this)}},{key:"handleContentChangeCustom",value:function(t){this.props.dispatch({type:"CUSTOM_FIELDS_ITEM",data:{id:t.field.get("index"),value:t.value}})}},{key:"componentDidUpdate",value:function(t,e,a){document.getElementById("id-container-fluid")&&D.a.sendMessageParent("widgetHeight",[{height:document.getElementById("id-container-fluid").offsetHeight+40}])}},{key:"render",value:function(){var t=this,e=this.props.t;if(!0===this.props.chatwidget.getIn(["offlineData","fetched"])&&!0===this.props.chatwidget.getIn(["offlineData","disabled"]))return b.a.createElement("div",{className:"alert alert-danger m-2",role:"alert"},e("start_chat.cant_start_a_chat"));if(this.props.chatwidget.get("offlineData").has("fields"))var a=this.props.chatwidget.getIn(["offlineData","fields"]).map((function(e){return b.a.createElement(I.a,{chatUI:t.props.chatwidget.get("chat_ui"),isInvalid:t.props.chatwidget.hasIn(["validationErrors",e.get("identifier")]),attrPrefill:{attr_prefill_admin:t.props.chatwidget.get("attr_prefill_admin"),attr_prefill:t.props.chatwidget.get("attr_prefill")},defaultValueField:t.state[e.get("name")]||e.get("value"),onChangeContent:t.handleContentChange,field:e})}));else a="";if(this.props.chatwidget.getIn(["customData","fields"]).size>0)var i=this.props.chatwidget.getIn(["customData","fields"]).map((function(e){return b.a.createElement(I.a,{chatUI:t.props.chatwidget.get("chat_ui"),key:e.get("identifier"),isInvalid:t.props.chatwidget.hasIn(["validationErrors",e.get("identifier")]),defaultValueField:e.get("value"),onChangeContent:t.handleContentChangeCustom,field:e})}));else i="";return 0==this.props.chatwidget.get("processStatus")||1==this.props.chatwidget.get("processStatus")?b.a.createElement("div",{className:"container-fluid",id:"id-container-fluid"},this.props.chatwidget.hasIn(["chat_ui","operator_profile"])&&b.a.createElement("div",{className:"pt-2",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","operator_profile"])}}),b.a.createElement("p",{className:"pb-1 mb-0 pt-2 font-weight-bold offline-intro",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","offline_intro"])}}),b.a.createElement("form",{onSubmit:this.handleSubmit},b.a.createElement("div",{className:"row pt-2"},a,i,this.props.chatwidget.hasIn(["offlineData","department"])&&b.a.createElement(E.a,{defaultValueField:this.state.DepartamentID,setDefaultValue:this.props.chatwidget.get("departmentDefault"),onChangeContent:this.handleContentChange,isInvalid:this.props.chatwidget.hasIn(["validationErrors","department"]),departments:this.props.chatwidget.getIn(["offlineData","department"])})),b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-12 pb-3"},b.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-sm"},this.props.chatwidget.getIn(["chat_ui","custom_start_button"])||e("start_chat.leave_a_message")))))):2==this.props.chatwidget.get("processStatus")?b.a.createElement("div",{className:"container-fluid",id:"id-container-fluid"},b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-12"},b.a.createElement("p",null,this.props.chatwidget.getIn(["chat_ui","thank_feedback"])||e("start_chat.thank_you_for_feedback"))))):void 0}}]),e}(v.Component))||i;e.default=Object(C.b)()(j)}}]);