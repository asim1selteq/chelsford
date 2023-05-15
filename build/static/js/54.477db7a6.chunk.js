(this["webpackJsonpfindanexpert-frontend"]=this["webpackJsonpfindanexpert-frontend"]||[]).push([[54],{1229:function(e,t,n){"use strict";var a=n(3),s=n(13),r=n(6),o=n(2),c=n(658),i=n.n(c),u=n(9),l=(n(1230),n(1)),d=["justify","align","className","primary","shadowBoxProps","isRequired","label","getValue","value","disabled","countryCode"];t.a=function(e){var t=e.justify,n=e.align,c=e.className,b=void 0===c?"":c,j=e.primary,p=e.shadowBoxProps,f=e.isRequired,m=e.label,O=e.getValue,g=void 0===O?function(){}:O,v=e.value,h=void 0===v?"":v,x=e.disabled,C=e.countryCode,_=Object(r.a)(e,d),S=Object(o.useState)(""),y=Object(s.a)(S,2),w=y[0],N=y[1],E=function(e){var t=e.code,n=e.number;N(h),n.length>3?g("+".concat(t,"-").concat(n.replace("+","").replace(t,"").replaceAll(" ","").replace(/[^\w\s]/gi,""))):g(n)};return Object(o.useEffect)((function(){N(h)}),[h]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u.FAEContainer,{justify:t,align:n,children:j?Object(l.jsx)(u.FAEShadowBox,Object(a.a)(Object(a.a)({},p),{},{padding:!0,children:Object(l.jsxs)("div",{className:"fae--phone-input-container ".concat(b),children:[Object(l.jsx)(u.FAEText,{important:f&&!0,tertiary:!0,children:m}),Object(l.jsx)(i.a,Object(a.a)({name:"phone","data-cy":"user-phone",defaultCountry:C?C.toLowerCase():"pk",className:b,value:w,disabled:x,disableDropdown:x,onChange:function(e,t){return E({code:t.dialCode,number:e})}},_))]})})):Object(l.jsxs)("div",{className:"fae--select-container ".concat(b),children:[Object(l.jsx)(u.FAEText,{important:f&&!0,tertiary:!0,children:m}),Object(l.jsx)(i.a,Object(a.a)({name:"phone","data-cy":"user-phone",defaultCountry:C||"pk",className:b,variant:"outlined",value:w,disabled:x,disableDropdown:x,onChange:function(e,t){return E({code:t.dialCode,number:e})}},_))]})})})}},1230:function(e,t,n){},1807:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var a=n(107),s=n(181),r=n(13),o=n(6),c=n(2),i=n(1254),u=n(76),l=n(9),d=(n(310),n(10)),b=n(1255),j=(n(1282),n(92)),p=n(142),f=n(1229),m=n(1256),O=n(1);function g(e){var t=e.enterNumberHandler,n=e.handleChangefieldmobileValue,a=e.message,s=void 0===a?"":a,r=e.userCountry,o=void 0===r?"GB":r,c=e.children;return Object(O.jsxs)("form",{onSubmit:t,className:"fae-mobile-entry",children:[Object(O.jsx)("p",{className:"before-submit-text",children:"Enter your mobile number"}),Object(O.jsx)(f.a,{primary:!0,required:!0,getValue:n,shadowBoxProps:{primary:!0},countryCode:o}),""!=s&&Object(O.jsx)("p",{className:"fae-phone-input-error",children:s}),c,Object(O.jsx)("p",{className:"before-submit-text",children:"By proceeding,you consent to get calls, WhatsApp or SMS messages, including by automated means, from Expert and Its affiliates to the number provided."}),Object(O.jsx)(p.FAEButton,{children:"Next"})]})}var v=Object(c.memo)(g),h=n(21);function x(e){var t=e.resendHandler,n=e.phoneNumber,a=e.verifcationCode;return Object(O.jsxs)("div",{className:"fae-verification-stuff",children:[Object(O.jsxs)(l.FAEText,{className:"pb fae-verification-text",children:["Enter the code that was sent to ",Object(O.jsx)("strong",{children:"".concat(n)})]}),Object(O.jsx)(l.FAECodeInput,{getValue:a}),Object(O.jsx)(l.FAEButton,{onClick:t,children:"Resend"})]})}var C=Object(c.memo)(x),_=n(25);var S=n(3);function y(e){var t=e.fieldIcon,n=e.fieldOnChange,a=e.fieldValue,s=e.fieldType;return Object(O.jsxs)("div",{className:"fae-field-box",children:[t&&Object(O.jsx)("img",{src:Object(d.i)(t)}),Object(O.jsx)("input",{type:s,required:!0,onChange:n,value:a,name:"input-field",className:"field-input"})]})}var w=Object(c.memo)(y),N=n(7),E=n(169),I=n(1204),k=n(1203),A=n(531),P=n(1200);function F(e){var t=e.checkedSign,n=e.handleChange,a=void 0===n?function(){}:n,s=(e.handleAgreement,e.checkedStatus,e.InputFieldEmailChange),r=void 0===s?function(){}:s,o=e.InputFieldFNameChange,c=void 0===o?function(){}:o,i=e.InputFieldLNameChange,u=void 0===i?function(){}:i,l=e.submitPInfo,d=void 0===l?function(){}:l,b=Object(N.a)({root:{color:E.a[600],"&$checked":{color:E.a[600]}},checked:{}})((function(e){return Object(O.jsx)(I.a,Object(S.a)({color:"default"},e))}));Object(N.a)({root:{color:E.a[600],"&$checked":{color:E.a[600]}},checked:{}})((function(e){return Object(O.jsx)(k.a,Object(S.a)({color:"default"},e))}));return Object(O.jsxs)("div",{className:"f",children:[Object(O.jsx)(_.FAEText,{subHeading:!0,className:"pb",children:" Profile Information "}),Object(O.jsx)(_.FAEText,{className:"pt pb",children:" First Name"}),Object(O.jsx)(w,{fieldIcon:"user.svg",fieldOnChange:c}),Object(O.jsx)(_.FAEText,{className:"pt pb",children:" Last Name"}),Object(O.jsx)(w,{fieldIcon:"user.svg",fieldOnChange:u}),Object(O.jsx)(_.FAEText,{className:"pt pb",children:" Add your email information"}),Object(O.jsx)(w,{fieldIcon:"mail.svg",fieldType:"email",fieldOnChange:r}),Object(O.jsx)(_.FAEText,{style:{paddingTop:"10px"},children:"Gender"}),Object(O.jsxs)(A.a,{"aria-label":"gender",className:"fae-radio-group-gender",name:"gender1",value:"value",onChange:a,children:[Object(O.jsx)(P.a,{value:"male",control:Object(O.jsx)(b,{checked:"Male"===t,onChange:a,value:"Male",name:"radio-button-demo",inputProps:{"aria-label":"B"}}),label:"Male"}),Object(O.jsx)(P.a,{value:"female",control:Object(O.jsx)(b,{checked:"Female"===t,onChange:a,value:"Female",name:"radio-button-demo",inputProps:{"aria-label":"A"}}),label:"Female"}),Object(O.jsx)(P.a,{value:"other",control:Object(O.jsx)(b,{checked:"other"===t,onChange:a,value:"other",name:"radio-button-demo",inputProps:{"aria-label":"C"}}),label:"Other"})]}),Object(O.jsx)(p.FAEButton,{onClick:d,children:" Confirm "})]})}var M=Object(c.memo)(F),T=n(99),V=n(409),B=n(182),L=["loading","userCountryId","userCountry","checkNumber_response","verifySMS_response","verify_email_response","set_new_pass_response","forgotPassoword_response","update_person_info_response","resendSMS_code_response","sign_in_response","checkMobileNumber","VerifySMSCodeAction","Do_Empty_signup_reducer_OBJECT_Action","forgotPassword","setNewPassword","UpdatePersonInfo","ResendSMSCode","VerifyEmailNewSignup","signInAction","setUserId"];function U(e){var t=e.loading,n=e.userCountryId,u=e.userCountry,b=e.checkNumber_response,f=e.verifySMS_response,g=e.verify_email_response,x=e.set_new_pass_response,_=e.forgotPassoword_response,S=e.update_person_info_response,y=e.resendSMS_code_response,w=e.sign_in_response,N=e.checkMobileNumber,E=e.VerifySMSCodeAction,I=e.Do_Empty_signup_reducer_OBJECT_Action,k=e.forgotPassword,A=e.setNewPassword,P=e.UpdatePersonInfo,F=e.ResendSMSCode,B=e.VerifyEmailNewSignup,U=e.signInAction,R=e.setUserId,D=Object(o.a)(e,L),H=Object(d.i)("account-loader.svg"),J=new URLSearchParams(window.location.search),q=Object(c.useState)(""),G=Object(r.a)(q,2),K=G[0],X=G[1],$=Object(c.useState)(""),W=Object(r.a)($,2),Y=W[0],z=W[1],Q=Object(c.useState)(""),Z=Object(r.a)(Q,2),ee=Z[0],te=Z[1],ne=Object(c.useState)(""),ae=Object(r.a)(ne,2),se=ae[0],re=ae[1],oe=Object(c.useState)(""),ce=Object(r.a)(oe,2),ie=ce[0],ue=ce[1],le=Object(c.useState)("Please missmatching"),de=Object(r.a)(le,2),be=de[0],je=de[1],pe=Object(c.useState)(""),fe=Object(r.a)(pe,2),me=fe[0],Oe=fe[1],ge=Object(c.useState)(!1),ve=Object(r.a)(ge,2),he=ve[0],xe=ve[1],Ce=Object(c.useState)(""),_e=Object(r.a)(Ce,2),Se=_e[0],ye=_e[1],we=Object(c.useState)(!1),Ne=Object(r.a)(we,2),Ee=Ne[0],Ie=Ne[1],ke=Object(c.useState)(!1),Ae=Object(r.a)(ke,2),Pe=(Ae[0],Ae[1],Object(c.useState)("")),Fe=Object(r.a)(Pe,2),Me=Fe[0],Te=Fe[1],Ve=Object(c.useState)(""),Be=Object(r.a)(Ve,2),Le=Be[0],Ue=Be[1],Re=Object(c.useState)(""),De=Object(r.a)(Re,2),He=De[0],Je=De[1],qe=Object(c.useState)(!1),Ge=Object(r.a)(qe,2),Ke=(Ge[0],Ge[1],Object(c.useState)("")),Xe=Object(r.a)(Ke,2),$e=Xe[0],We=Xe[1],Ye=Object(c.useState)(0),ze=Object(r.a)(Ye,2),Qe=ze[0],Ze=ze[1],et=Object(c.useState)({}),tt=Object(r.a)(et,2),nt=tt[0],at=tt[1],st=Object(c.useState)(),rt=Object(r.a)(st,2),ot=rt[0],ct=(rt[1],Object(c.useState)()),it=Object(r.a)(ct,2),ut=it[0],lt=(it[1],Object(c.useState)("")),dt=Object(r.a)(lt,2),bt=dt[0],jt=dt[1],pt=Object(c.useState)(!1),ft=Object(r.a)(pt,2),mt=ft[0],Ot=ft[1],gt=Object(c.useState)(""),vt=Object(r.a)(gt,2),ht=vt[0];vt[1];Object(c.useEffect)((function(){Object(d.n)(b)&&h.a.push("/account")}),[]),Object(c.useEffect)((function(){var e=setInterval((function(){xe(!he)}),1e5);return function(){return clearInterval(e)}}),[he]),console.log(me,"loadToken"),Object(c.useEffect)((function(){6===Se.length&&(E({userId:Y,verificationCode:Se}),ye(""))}),[Se]),Object(c.useEffect)((function(){6===bt.length&&(B({userId:Y,verificationCode:bt}),jt(""))}),[bt]),Object(c.useEffect)((function(){var e;Object(d.n)(b)||z(null===b||void 0===b||null===(e=b.userObject)||void 0===e?void 0:e.id);Object(d.n)(S)||at(S)}),[b,S]),Object(c.useEffect)((function(){-1===(null===b||void 0===b?void 0:b.statusCode)&&(I(),h.a.push("/signupstep=verification-pn")),-2===(null===b||void 0===b?void 0:b.statusCode)&&(Ze(null===b||void 0===b?void 0:b.statusCode),I(),h.a.push("/account?loginstep=last")),-3===(null===b||void 0===b?void 0:b.statusCode)&&(I(),h.a.push("/account?signupstep=verification-pn")),-4===(null===b||void 0===b?void 0:b.statusCode)&&(I(),h.a.push("/account?signupstep=verification-pn")),(0===(null===b||void 0===b?void 0:b.statusCode)||1===(null===b||void 0===b?void 0:b.statusCode)&&!0!==(null===b||void 0===b?void 0:b.error))&&(I(),h.a.push("/account?signupstep=verification-pn")),!0===(null===b||void 0===b?void 0:b.error)&&(Object(d.a)({message:null===b||void 0===b?void 0:b.message,toaster:"error"}),I()),0==(null===_||void 0===_?void 0:_.statusCode)&&(I(),h.a.push("/account?code-verification=forgot-verification")),0==(null===f||void 0===f?void 0:f.statusCode)&&-2==Qe?(I(),h.a.push({pathname:"/reset-password",state:{userId:Y}})):0==(null===f||void 0===f?void 0:f.statusCode)&&-2!==(null===b||void 0===b?void 0:b.statusCode)&&(I(),h.a.push("/account?signupstep=add-password")),0==(null===x||void 0===x?void 0:x.statusCode)&&1==Ee&&(I(),h.a.push("/account?signupstep=profile-information")),0==(null===S||void 0===S?void 0:S.statusCode)&&(I(),h.a.push("/account?signupstep=email-verification")),1==(null===f||void 0===f?void 0:f.error)&&(Object(d.a)({message:null===f||void 0===f?void 0:f.message,toaster:"error"}),I()),1==(null===g||void 0===g?void 0:g.error)&&(Object(d.a)({message:null===f||void 0===f?void 0:f.message,toaster:"error"}),I()),1==(null===y||void 0===y?void 0:y.error)&&(Object(d.a)({message:null===y||void 0===y?void 0:y.message,toaster:"error"}),I()),1==(null===S||void 0===S?void 0:S.error)&&(Object(d.a)({message:null===S||void 0===S?void 0:S.message,toaster:"error"}),I())}),[b,f,_,g,S,x,y]);var xt=D.history.location,Ct=Object(j.c)();Object(c.useEffect)(Object(s.a)(Object(a.a)().mark((function e(){var t,n,r,o,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(d.n)(w)&&(Object(d.n)(g)||!0===g.error)){e.next=16;break}return t=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,Object(d.r)("userId",n);case 3:return e.next=5,Object(d.r)("customer_details",t);case 5:return e.next=7,R(n);case 7:if(setTimeout((function(){V.a.init(Ct)}),300),Object(d.n)(null!==localStorage.getItem("redirectUrl")&&void 0!==localStorage.getItem("redirectUrl")?localStorage.getItem("redirectUrl"):{})){e.next=15;break}return e.next=11,h.a.push({pathname:"".concat(localStorage.getItem("redirectUrl")),state:JSON.parse(localStorage.getItem("stateObject"))});case 11:return e.next=13,localStorage.removeItem("redirectUrl");case 13:e.next=26;break;case 15:return e.next=17,I();case 17:return e.next=19,xt.state;case 19:if(e.t0=e.sent,e.t1=void 0,e.t0===e.t1){e.next=25;break}h.a.push("".concat(xt.state.next)),e.next=26;break;case 25:h.a.push("/");case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=void 0===w||null===w||!1===w||Object(d.n)(w)?nt:w,r=n.statusCode,o=n.message,c=n.customerData,e.next=5,r;case 5:if(e.t1=e.sent,e.t0=0!==e.t1,e.t0){e.next=9;break}e.t0=2==r;case 9:if(!e.t0){e.next=13;break}alert(o),e.next=14;break;case 13:t(c);case 14:return e.next=16,I();case 16:return e.abrupt("return",(function(){I()}));case 17:case"end":return e.stop()}}),e)}))),[w,g]);var _t=Object(c.useCallback)((function(e){Oe(e)}),[he]),St=(Object(c.useMemo)((function(e){je(ie==se?"":"Plase mach your password")}),[ie]),function(e){F({mobileNumber:K.replaceAll("-","").trim(),countryCode:n,userId:Y,email:$e,isEmail:e})});return Object(O.jsxs)(i.b,{reCaptchaKey:"6Lci38kjAAAAAMPlCMX9KYmnuFwh7BLHX6O_j0ch",children:[Object(O.jsx)(i.a,{onVerify:_t,refreshReCaptcha:mt}),Object(O.jsxs)("div",{className:"fae--new-signup-page-container",children:[t&&Object(O.jsx)("div",{className:"fae-signup-loader",children:Object(O.jsx)(l.FAELoading,{type:"svg",loaderImage:H,height:"100vh"})}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"loginlogotop",children:window.screen.width>600?Object(O.jsx)(l.FAEImage,{className:"fae-login-desktop-logo",src:Object(d.i)("expert_logo_full.PNG")}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(l.FAEImage,{className:"fae-mobile-logo",src:Object(d.i)("expert_logo_full.PNG")})})}),Object(O.jsx)("main",{children:"last"==J.get("loginstep")?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.a,{setPasswordValue:function(e){return re(e.target.value)},SubmitPasswordToLogin:function(){h.a.push("/account?signupstep=verification-pn")}}),Object(O.jsx)("button",{className:"fae-forgot-btn",onClick:function(){k({mobileNumber:K,countryCode:n,isMobile:!1,authToken:me})},children:"Forgot Password?"}),Object(O.jsx)(p.FAEButton,{onClick:function(){U(K.replaceAll("-","").trim(),se)},children:"Login"})]}):"verification-pn"==J.get("signupstep")||"forgot-verification"==J.get("code-verification")?Object(O.jsx)(C,{resendHandler:function(){return St(!1)},phoneNumber:K,verifcationCode:ye}):"add-password"==J.get("signupstep")?Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),ie==se&&(null===se||void 0===se?void 0:se.length)>=8?(Ie(!0),A({userId:Y,password:se})):je("Check is your Password 8 digit? OR Check is your password matching?")},children:[Object(O.jsx)(m.a,{setPasswordValue:function(e){return re(e.target.value)},passwordLabel:"Please enter your password"}),Object(O.jsx)("span",{className:"error",children:ot}),Object(O.jsx)(m.a,{setPasswordValue:function(e){return ue(e.target.value)},passwordLabel:"Please confirm your password"}),Object(O.jsx)("span",{className:"error",children:ut}),Object(O.jsx)(l.FAEText,{className:"fae-confirm-Text",children:be}),Object(O.jsx)(p.FAEButton,{children:"Next"})]}):"profile-information"==J.get("signupstep")?Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),P({userId:Y,firstName:Me,lastName:Le,gender:He,emailAddress:$e,dob:""})},children:Object(O.jsx)(M,{InputFieldFNameChange:function(e){return Te(e.target.value)},InputFieldLNameChange:function(e){return Ue(e.target.value)},InputFieldEmailChange:function(e){return We(e.target.value)},checkedSign:He,handleChange:function(e){Je(e.target.value)},emailTypeError:ht})}):"email-verification"==J.get("signupstep")?Object(O.jsx)(C,{resendHandler:function(){return St(!0)},phoneNumber:$e,verifcationCode:jt}):"forgot"==J.get("forgot-password")?Object(O.jsxs)("div",{children:[Object(O.jsx)(m.a,{setPasswordValue:function(e){return re(e.target.value)},passwordLabel:"Please enter your password"}),Object(O.jsx)(m.a,{setPasswordValue:function(e){return ue(e.target.value)},passwordLabel:"Please confirm your password"}),Object(O.jsx)(l.FAEText,{className:"fae-confirm-Text",children:be}),Object(O.jsx)(p.FAEButton,{onClick:function(e){e.preventDefault(),Ie(!0),A({userId:Y,password:se})},children:"Next"})]}):Object(O.jsx)(v,{enterNumberHandler:function(e){Ot((function(e){return!e})),e.preventDefault(),K.length>=14?(te(""),N({mobileNumber:K,countryCode:n,authToken:me})):te("Please complete your phone numbuer")},userCountry:u,handleChangefieldmobileValue:X,message:ee})})]})]}),Object(O.jsx)(T.a,{})]})}var R=Object(j.b)((function(e){var t=e.signUpPageReducer,n=(t.error,t.loading),a=t.checkNumber_response,s=t.verify_email_response,r=t.set_new_pass_response,o=t.forgotPassoword_response,c=t.update_person_info_response,i=t.resendSMS_code_response,u=t.verifySMS_response,l=t.sign_in_response,d=e.defaultReducer;return{loading:n,userCountryId:d.userCountryId,userCountry:d.userCountry,checkNumber_response:a,verify_email_response:s,set_new_pass_response:r,forgotPassoword_response:o,update_person_info_response:c,resendSMS_code_response:i,verifySMS_response:u,sign_in_response:l}}),(function(e){return Object(u.b)({checkMobileNumber:b.f,VerifySMSCodeAction:b.e,ResendSMSCode:b.b,UpdatePersonInfo:b.c,forgotPassword:b.g,setNewPassword:b.j,VerifyEmailNewSignup:b.d,Do_Empty_signup_reducer_OBJECT_Action:b.a,signInAction:b.l,setUserId:B.e},e)}))(Object(c.memo)(U))}}]);
//# sourceMappingURL=54.477db7a6.chunk.js.map