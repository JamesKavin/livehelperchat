(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[2],{133:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),l=a(4),i=a.n(l),r=a(5),o=a.n(r),c=a(6),m=a.n(c),d=a(1),u=a.n(d),h=a(7),p=a.n(h),b=a(9),f=a.n(b),g=a(0),v=a.n(g),E=a(11),N=a.n(E),w=a(13),y=function(e){function t(e){var a;return s()(this,t),a=o()(this,m()(t).call(this,e)),f()(u()(a),"state",{mail:null,success:"",errors:null,sending:!1}),f()(u()(a),"dismissModal",(function(){a.props.toggle()})),a.sendMail=a.sendMail.bind(u()(a)),a.emailRef=v.a.createRef(),a}return p()(t,e),i()(t,[{key:"sendMail",value:function(e){var t=this;this.setState({sending:!0}),N.a.post(window.lhcChat.base_url+"widgetrestapi/sendmailsettings/"+this.props.chatId+"/"+this.props.chatHash+"/(action)/send",{email:this.state.mail}).then((function(e){0==e.data.error?t.props.toggle():(t.setState({sending:!1}),t.setState({errors:e.data.result}))})),e&&e.preventDefault()}},{key:"componentDidMount",value:function(){var e=this;N.a.get(window.lhcChat.base_url+"widgetrestapi/sendmailsettings/"+this.props.chatId+"/"+this.props.chatHash).then((function(t){e.setState({mail:t.data}),e.emailRef.current&&e.emailRef.current.focus()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.t;return v.a.createElement(v.a.Fragment,null,null!==this.state.mail&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"fade modal-backdrop show"}),v.a.createElement("div",{role:"dialog",id:"dialog-content","aria-modal":"true",className:"fade modal show d-block",tabIndex:"-1"},v.a.createElement("div",{className:"modal-dialog modal-lg"},v.a.createElement("div",{className:"modal-content"},v.a.createElement("div",{className:"modal-header pt-1 pb-1 pl-2 pr-2"}," ",v.a.createElement("h4",{className:"modal-title",id:"myModalLabel"},v.a.createElement("span",{className:"material-icons"},""),t("button.mail")),v.a.createElement("button",{type:"button",className:"close float-right","data-dismiss":"modal",onClick:this.dismissModal,"aria-label":"Close"},v.a.createElement("span",{"aria-hidden":"true"},"×"))),v.a.createElement("div",{className:"modal-body"},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-12"},this.state.errors&&v.a.createElement("div",{className:"mb-0",dangerouslySetInnerHTML:{__html:this.state.errors}}),v.a.createElement("div",{className:"mb-0"},v.a.createElement("form",{onSubmit:this.sendMail},v.a.createElement("input",{className:"form-control form-group form-control-sm",ref:this.emailRef,required:"required",type:"email",defaultValue:this.state.mail,onChange:function(t){return e.setState({mail:t.target.value})},placeholder:t("chat.enter_email"),title:t("chat.enter_email")}),v.a.createElement("div",{className:"btn-group",role:"group","aria-label":"..."},v.a.createElement("button",{type:"submit",disabled:this.state.sending,className:"btn btn-secondary btn-sm"},t("button.send")),v.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:this.dismissModal},t("button.cancel")))))))))))))}}]),t}(g.PureComponent);t.default=Object(w.b)()(y)}}]);
//# sourceMappingURL=2.47d76d589e2dffda7af3.js.map