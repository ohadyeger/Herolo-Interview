(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{122:function(e,t){},248:function(e,t){},262:function(e,t,a){e.exports=a(430)},430:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(42),c=a.n(l),s=a(251),i=a(52),o=a(44),u=a(69),m=a(61),d=a(74),h=a(73),p=a(122),b=a.n(p),E=a(29),g="EMAILS_LOAD",f="EMAILS_LOAD_SUCC",v="EMAILS_LOAD_FAIL",S="REMOVE_EMAIL",j="REMOVE_EMAIL_SUCC",O="REMOVE_EMAIL_FAIL";var I={loadEmails:function(){return{type:g,uri:"/api/email/getall"}},loadEmailsSuccess:function(e){return{type:f,emails:e}},loadEmailsFail:function(e){return{type:v,err_msg:e}},removeEmail:function(e){return{type:S,uri:"/api/email/delete/"+e}},removeEmailSuccess:function(e){return{type:j,emails:e}},removeEmailFail:function(e){return{type:O,err_msg:e}}},C=a(165),y=a(440),M=a(447),F=a(121),w=a(78),k=a(446),x=a(441),R=function(e,t){return function(){return t.setState({confirmOpen:!0,confirmId:e})}},_=function(e,t){return r.a.createElement(C.a,null,t.map((function(t,a){return t?r.a.createElement(y.a,{key:a},r.a.createElement(M.a,null,r.a.createElement(F.a,null,r.a.createElement(w.a,{name:"mail"}),"Subject: ",t.subject),r.a.createElement(F.a,null,"From: ",t.senderId),r.a.createElement(F.a,null,"To: ",t.receiverId),r.a.createElement(k.a,{size:"mini",negative:!0,onClick:R(t._id,e)},"Remove")),r.a.createElement("p",null,"Message:"),r.a.createElement(C.a,null,t.message),r.a.createElement(x.a,{section:!0})):[]})))},A=a(445),L=a(252),P=a(443),T=a(442),D=a(449),H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).openRemoveEmailModal=function(e){return function(t){n.setState({chosenEmail:n.props.emails[e]._id,remove_email_modal:!0})}},n.getReceivedMessages=function(e){return n.props.emails.filter(function(e){return function(t){return t.senderId===e}}(e))},n.getSentMessages=function(e){return n.props.emails.filter(function(e){return function(t){return t.receiverId===e}}(e))},n.state={id:-1,remove_email_modal:!1,chosenEmail:null,confirmOpen:!1,confirmResult:"",confirmId:-1,deleteFail:!1,deleteSucc:!1},n.handleIdChange=n.handleIdChange.bind(Object(E.a)(n)),n.getReceivedMessages=n.getReceivedMessages.bind(Object(E.a)(n)),n.getSentMessages=n.getSentMessages.bind(Object(E.a)(n)),n.openRemoveEmailModal=n.openRemoveEmailModal.bind(Object(E.a)(n)),n.closeRemoveEmailModal=n.closeRemoveEmailModal.bind(Object(E.a)(n)),n.removeEmail=n.removeEmail.bind(Object(E.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.loadEmails(),console.log(this.state),this.setState()}}]),Object(m.a)(a,[{key:"handleIdChange",value:function(e){this.setState({id:e.target.value})}},{key:"closeRemoveEmailModal",value:function(e){this.setState({remove_email_modal:!1})}},{key:"removeEmail",value:function(){var e=this;return function(){e.setState({confirmOpen:!1}),e.props.removeEmail(e.state.confirmId)}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.deleteSucc?r.a.createElement(A.a,{positive:!0},r.a.createElement(A.a.Header,null,"Delete Completed Successfully"),r.a.createElement("p",null,"Go to your ",r.a.createElement("b",null,"Compose Email Page")," to add a new message.")):[],this.props.deleteFail?r.a.createElement(A.a,{negative:!0},r.a.createElement(A.a.Header,null,"Deleting Message Failed"),r.a.createElement("p",null,"Please try again later.")):[],r.a.createElement("div",null,r.a.createElement(L.a,{columns:"three"},r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Column,null,r.a.createElement(P.a,{content:"Are you sure you want to delete this email?",size:"mini",open:this.state.confirmOpen,onCancel:function(){return e.setState({confirmResult:"cancelled",confirmOpen:!1})},onConfirm:this.removeEmail()}))))),r.a.createElement(L.a,{columns:"three",divided:!0,centered:!0},r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Column,null,r.a.createElement(T.a,{onSubmit:this.handleSubmit},r.a.createElement(T.a.Field,null,r.a.createElement("label",null,"Insert ID"),r.a.createElement("input",{type:"number",value:this.state.id,className:"form-control",onChange:this.handleIdChange,placeholder:"receiver id"}))),r.a.createElement(C.a,null,r.a.createElement(D.a,{panes:[{menuItem:"Received",render:function(){return r.a.createElement(D.a.Pane,null,_(e,e.getReceivedMessages(e.state.id)))}},{menuItem:"Sent",render:function(){return r.a.createElement(D.a.Pane,null,_(e,e.getSentMessages(e.state.id)))}}]}))))))}}]),a}(r.a.Component),U=Object(i.b)((function(e,t){return{emails:e.emails.get("emails"),deleteSucc:e.emails.get("deleteSucc"),deleteFail:e.emails.get("deleteFail")}}),(function(e){return{loadEmails:function(){e(I.loadEmails())},removeEmail:function(t){e(I.removeEmail(t))}}}))(H),N="COMPOSE_FORM_SUBMIT",G="COMPOSE_FORM_SUBMIT_SUCC",z="COMPOSE_FORM_SUBMIT_FAIL";var B={submitCompose:function(e){return{type:N,uri:"/api/email/write",compose:e}},submitComposeSuccess:function(e){return{type:G,compose:e}},submitComposeFail:function(e){return{type:z,err_msg:e}}},J=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={subject:"",message:"",senderId:-1,receiverId:-1,submitSucc:!1,submitFail:!1},n.handleSubjectChange=n.handleSubjectChange.bind(Object(E.a)(n)),n.handleContentChange=n.handleContentChange.bind(Object(E.a)(n)),n.handleSenderIdChange=n.handleSenderIdChange.bind(Object(E.a)(n)),n.handleReceiverIdChange=n.handleReceiverIdChange.bind(Object(E.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(E.a)(n)),n.resetForm=n.resetForm.bind(Object(E.a)(n)),n}return Object(m.a)(a,[{key:"resetForm",value:function(){this.setState({subject:"",message:"",senderId:-1,receiverId:-1})}},{key:"handleSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"handleContentChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSenderIdChange",value:function(e){this.setState({senderId:e.target.value})}},{key:"handleReceiverIdChange",value:function(e){this.setState({receiverId:e.target.value})}},{key:"handleSubmit",value:function(e){var t={subject:this.state.subject,message:this.state.message,senderId:this.state.senderId,receiverId:this.state.receiverId};this.props.submitNewEmail(t),console.log("submitted new email")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{columns:"three",divided:!0,centered:!0},r.a.createElement(L.a.Row,null,r.a.createElement(L.a.Column,null,r.a.createElement(C.a,null,this.props.submitSucc?r.a.createElement(A.a,{positive:!0},r.a.createElement(A.a.Header,null,"New Message Submitted Successfully"),r.a.createElement("p",null,"Go to your ",r.a.createElement("b",null,"Manage Emails Page")," to see your message.")):[],this.props.submitFail?r.a.createElement(A.a,{negative:!0},r.a.createElement(A.a.Header,null,"New Message Submission Failed"),r.a.createElement("p",null,"Please try again later.")):[],r.a.createElement(T.a,{onSubmit:this.handleSubmit},r.a.createElement(T.a.Group,{widths:"equal"},r.a.createElement(T.a.Input,{type:"number",fluid:!0,label:"Sender ID",placeholder:"to",error:this.state.senderId<1,onChange:this.handleSenderIdChange,value:this.state.senderId}),r.a.createElement(T.a.Input,{type:"number",fluid:!0,label:"Receiver ID",placeholder:"from",error:this.state.receiverId<1,onChange:this.handleReceiverIdChange,value:this.state.receiverId})),r.a.createElement(T.a.Group,{widths:"equal"},r.a.createElement(T.a.Input,{fluid:!0,label:"subject",placeholder:"subject",error:""===this.state.subject,onChange:this.handleSubjectChange,value:this.state.subject})),r.a.createElement(T.a.TextArea,{label:"Message",placeholder:"compose your message here...",style:{minHeight:100},onChange:this.handleContentChange,value:this.state.message,rows:5,error:""===this.state.message}),r.a.createElement(T.a.Input,{type:"submit",value:"Submit",disabled:!(this.state.subject&&this.state.message&&this.state.senderId>0&&this.state.receiverId>0)})),r.a.createElement("br",null))))))}}]),a}(r.a.Component),V=Object(i.b)((function(e,t){return{submitFail:e.composeForm.get("submitFail"),submitSucc:e.composeForm.get("submitSucc")}}),(function(e){return{submitNewEmail:function(t){return e(B.submitCompose(t))}}}))(J),q=a(120),W=a(21),K=a(250),Q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(q.a,{basename:"/Herolo-Interview"},r.a.createElement(y.a,null,r.a.createElement("div",{style:{height:"100%",backgroundImage:"url(".concat("https://herolo.co.il/portfolio-background-new2.2fef25b1c7370a4cff57.jpg",")"),backgroundSize:"cover",backgroundRepeat:"yes",resizeMode:"stretch"}},r.a.createElement("div",{style:{height:"7%"}},r.a.createElement(K.a,{fixed:"top",inverted:!0,style:{height:"7%"}},r.a.createElement(K.a.Item,{header:!0,as:"a",href:"/"},r.a.createElement(w.a,{name:"home"}),"Herolo Full Stack Assignment"),r.a.createElement(K.a.Item,{header:!0,as:"a",href:"/compose"},r.a.createElement(w.a,{name:"compose"}),"Compose Email Page"),r.a.createElement(K.a.Item,{header:!0,as:"a",href:"/manage"},r.a.createElement(w.a,{name:"mail"}),"Manage Emails Page"))),r.a.createElement("section",{style:{height:"93%",width:"100%"}},r.a.createElement(W.c,{style:{height:"100%",width:"100%"}},r.a.createElement(W.a,{exact:!0,path:""},"Welcome"),r.a.createElement(W.a,{exact:!0,path:"/compose"},r.a.createElement(V,null)),r.a.createElement(W.a,{exact:!0,path:"/manage"},r.a.createElement(U,null)))))))}}]),a}(r.a.Component),X=Object(i.b)((function(e,t){return{}}),(function(e){return{loadUserEventHandler:function(t){e(b.a.loadUserEventHandler(t))},authenticate:function(t){return e(b.a.authenticate(t))},logout:function(){return e(b.a.logout())}}}))(Q),Y=a(248),Z=a.n(Y),$=a(428).Map,ee={app:$({}),emails:$({emails:[],deleteSucc:!1,deleteFail:!1}),composeForm:$({submitSucc:!1,submitFail:!1})},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee.composeForm,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return console.log("Email sent!"),e=e.set("submitSucc",!0);case z:return console.log("Email sending failed!"),e=e.set("submitFail",!0);default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee.emails,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return console.log("Reducer: emails",t.emails),e=e.set("emails",t.emails);case v:return console.log("email load failed"),e=e.set("deleteFail",!0);case j:return console.log(t),e=(e=e.set("emails",t.emails)).set("deleteSucc",!0),console.log("Reducer: email removed"),e;case O:return console.log("email remove failed"),e;default:return e}},ne=Object(o.c)({app:Z.a,emails:ae,composeForm:te}),re=a(25),le=a.n(re),ce=a(26),se=le.a.mark(ie);function ie(){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),se)}var oe=ie,ue=le.a.mark(de),me=le.a.mark(he);function de(e){var t;return le.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ce.b)(fetch,e.uri,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.compose)});case 3:return t=a.sent,a.next=6,Object(ce.c)(B.submitComposeSuccess(t));case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(ce.c)(B.submitComposeFail(a.t0.message));case 12:case"end":return a.stop()}}),ue,null,[[0,8]])}function he(){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.d)(N,de);case 2:case"end":return e.stop()}}),me)}var pe=he,be=le.a.mark(fe),Ee=le.a.mark(ve),ge=le.a.mark(Se);function fe(e){var t,a;return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ce.b)(fetch,e.uri,{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=n.sent,n.next=6,Object(ce.b)([t,"json"]);case 6:return a=n.sent,n.next=9,Object(ce.c)(I.loadEmailsSuccess(a));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(ce.c)(I.loadEmailsFail(n.t0.message));case 15:case"end":return n.stop()}}),be,null,[[0,11]])}function ve(e){var t,a;return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ce.b)(fetch,e.uri,{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:return t=n.sent,n.next=6,Object(ce.b)([t,"json"]);case 6:return a=n.sent,n.next=9,Object(ce.c)(I.removeEmailSuccess(a));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(ce.c)(I.removeEmailFail(n.t0.message));case 15:case"end":return n.stop()}}),Ee,null,[[0,11]])}function Se(){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.d)(g,fe);case 2:return e.next=4,Object(ce.d)(S,ve);case 4:case"end":return e.stop()}}),ge)}var je=Se,Oe=le.a.mark(Ie);function Ie(){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.a)([oe(),pe(),je()]);case 2:case"end":return e.stop()}}),Oe)}var Ce=Object(s.a)(),ye=Object(o.e)(ne,Object(o.a)(Ce));Ce.run(Ie),c.a.render(r.a.createElement(i.a,{store:ye},r.a.createElement(q.a,null,r.a.createElement(X,null))),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.d6034826.chunk.js.map