(this["webpackJsonpfindanexpert-frontend"]=this["webpackJsonpfindanexpert-frontend"]||[]).push([[70],{1824:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return w}));var r=s(107),n=s(181),o=s(13),a=s(6),c=s(2),i=s(1254),u=s(76),d=s(9),l=(s(310),s(10)),p=s(1255),b=(s(1282),s(92)),j=s(21),f=s(1256),_=s(142),O=s(99),g=s(409),m=s(182),x=s(38),S=s(1),v=["loading","userCountryId","checkNumber_response","verifySMS_response","verify_email_response","set_new_pass_response","forgotPassoword_response","update_person_info_response","resendSMS_code_response","sign_in_response","checkMobileNumber","VerifySMSCodeAction","Do_Empty_signup_reducer_OBJECT_Action","forgotPassword","setNewPassword","UpdatePersonInfo","ResendSMSCode","VerifyEmailNewSignup","signInAction","setUserId"];function h(e){var t=e.loading,s=(e.userCountryId,e.checkNumber_response,e.verifySMS_response,e.verify_email_response,e.set_new_pass_response),u=(e.forgotPassoword_response,e.update_person_info_response,e.resendSMS_code_response,e.sign_in_response),p=(e.checkMobileNumber,e.VerifySMSCodeAction,e.Do_Empty_signup_reducer_OBJECT_Action),m=(e.forgotPassword,e.setNewPassword),h=(e.UpdatePersonInfo,e.ResendSMSCode,e.VerifyEmailNewSignup,e.signInAction,e.setUserId),w=Object(a.a)(e,v),y=Object(l.i)("loader_forcomponent.svg"),I=(new URLSearchParams(window.location.search),Object(c.useState)("")),N=Object(o.a)(I,2),A=N[0],P=(N[1],Object(c.useState)("")),k=Object(o.a)(P,2),E=k[0],C=k[1],M=Object(c.useState)(""),U=Object(o.a)(M,2),F=U[0],T=U[1],V=Object(c.useState)("Please missmatching"),R=Object(o.a)(V,2),J=R[0],L=R[1],B=Object(c.useState)(""),D=Object(o.a)(B,2),G=(D[0],D[1]),q=Object(c.useState)(!1),z=Object(o.a)(q,2),K=z[0],W=z[1],Z=Object(c.useState)(!1),H=Object(o.a)(Z,2),Q=H[0],X=(H[1],Object(c.useState)({})),Y=Object(o.a)(X,2),$=Y[0],ee=(Y[1],Object(c.useState)()),te=Object(o.a)(ee,2),se=te[0],re=(te[1],Object(c.useState)()),ne=Object(o.a)(re,2),oe=ne[0],ae=(ne[1],Object(x.l)());Object(c.useEffect)((function(){var e=setInterval((function(){W(!K)}),2e4);return function(){return clearInterval(e)}}),[K]),Object(c.useEffect)((function(){var e;0==(null===s||void 0===s?void 0:s.statusCode)&&0==Q&&j.a.push({pathname:"/account?signupstep=profile-information",state:{userId:null===ae||void 0===ae||null===(e=ae.state)||void 0===e?void 0:e.userId}});return 1==(null===s||void 0===s?void 0:s.statusCode)&&Object(l.a)({message:void 0!==(null===s||void 0===s?void 0:s.message)&&(null===s||void 0===s?void 0:s.message),toaster:"error"}),function(){p()}}),[s]);var ce=w.history.location,ie=Object(b.c)();Object(c.useEffect)(Object(n.a)(Object(r.a)().mark((function e(){var t,o,a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(l.n)(u)&&Object(l.n)(s)&&Object(l.n)($)){e.next=17;break}return console.log("sign_in_response"),t=function(){var e=Object(n.a)(Object(r.a)().mark((function e(t){var s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.id,e.next=3,Object(l.r)("userId",s);case 3:return e.next=5,Object(l.r)("customer_details",t);case 5:return e.next=7,h(s);case 7:if(setTimeout((function(){g.a.init(ie)}),300),Object(l.n)(null!==localStorage.getItem("redirectUrl")&&void 0!==localStorage.getItem("redirectUrl")?localStorage.getItem("redirectUrl"):{})){e.next=15;break}return e.next=11,j.a.push({pathname:"".concat(localStorage.getItem("redirectUrl")),state:JSON.parse(localStorage.getItem("stateObject"))});case 11:return e.next=13,localStorage.removeItem("redirectUrl");case 13:e.next=26;break;case 15:return e.next=17,p();case 17:return e.next=19,ce.state;case 19:if(e.t0=e.sent,e.t1=void 0,e.t0===e.t1){e.next=25;break}j.a.push("".concat(ce.state.next)),e.next=26;break;case 25:j.a.push("/");case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=s.statusCode,a=s.message,c=s.customerData,e.next=6,o;case 6:if(e.t1=e.sent,e.t0=0!==e.t1,e.t0){e.next=10;break}e.t0=2==o;case 10:if(!e.t0){e.next=14;break}alert(a),e.next=15;break;case 14:t(c);case 15:return e.next=17,p();case 17:return e.abrupt("return",(function(){return p()}));case 18:case"end":return e.stop()}}),e)}))),[s]);var ue=Object(c.useCallback)((function(e){G(e)}),[K]);Object(c.useMemo)((function(e){L(F==E?"":"Plase mach your password")}),[F]);return Object(S.jsxs)(i.b,{reCaptchaKey:"6LfR7U0jAAAAAFOkVZiFzhUq2d2T57juuM8bkI4P",children:[Object(S.jsx)(i.a,{onVerify:ue,refreshReCaptcha:!1}),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"fae--new-signup-page-container",children:[t&&Object(S.jsx)(d.FAELoading,{type:"svg",loaderImage:y,height:"630px"}),!t&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"loginlogotop",children:window.screen.width>600?Object(S.jsx)(d.FAEImage,{className:"fae-login-desktop-logo",src:Object(l.i)("expert_logo_full.PNG")}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.FAEImage,{className:"fae-mobile-logo",src:Object(l.i)("expert_logo_full.PNG")}),Object(S.jsx)(d.FAETitle,{className:"fae-mobile-login-title",label:"Expert",logo:Object(l.i)("title_logo.svg")}),Object(S.jsx)(d.FAEText,{className:"fae-aaa-text",children:"AnyService AnyTime AnyWhere"})]})}),Object(S.jsx)("main",{children:Object(S.jsxs)("form",{onSubmit:function(){null!==E&&void 0!==E&&E.length&&m({userId:A,password:E})},children:[Object(S.jsx)(f.a,{setPasswordValue:function(e){return C(e.target.value)},passwordLabel:"Please enter your password"}),Object(S.jsx)("span",{className:"error",children:se}),Object(S.jsx)(f.a,{setPasswordValue:function(e){return T(e.target.value)},passwordLabel:"Please confirm your password"}),Object(S.jsx)("span",{className:"error",children:oe}),Object(S.jsx)(d.FAEText,{className:"fae-confirm-Text",children:J}),Object(S.jsx)(_.FAEButton,{children:"Next"})]})})]})]})}),Object(S.jsx)(O.a,{})]})}var w=Object(b.b)((function(e){var t=e.signUpPageReducer,s=(t.error,t.loading),r=t.checkNumber_response,n=t.verify_email_response,o=t.set_new_pass_response,a=t.forgotPassoword_response,c=t.update_person_info_response,i=t.resendSMS_code_response,u=t.verifySMS_response,d=t.sign_in_response;return{loading:s,userCountryId:e.defaultReducer.userCountryId,checkNumber_response:r,verify_email_response:n,set_new_pass_response:o,forgotPassoword_response:a,update_person_info_response:c,resendSMS_code_response:i,verifySMS_response:u,sign_in_response:d}}),(function(e){return Object(u.b)({checkMobileNumber:p.f,VerifySMSCodeAction:p.e,ResendSMSCode:p.b,UpdatePersonInfo:p.c,forgotPassword:p.g,setNewPassword:p.j,VerifyEmailNewSignup:p.d,Do_Empty_signup_reducer_OBJECT_Action:p.a,signInAction:p.l,setUserId:m.e},e)}))(Object(c.memo)(h))}}]);
//# sourceMappingURL=70.c0a5ba2b.chunk.js.map