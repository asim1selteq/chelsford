(this["webpackJsonpfindanexpert-frontend"]=this["webpackJsonpfindanexpert-frontend"]||[]).push([[51],{1284:function(e,o,n){"use strict";n.d(o,"b",(function(){return d})),n.d(o,"a",(function(){return s}));var i=n(23),t=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PAYMENT_JDS,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL_2),c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PAYMENT_VOUCHER,d=function(e){var o=e.userId,n=e.firstName,t=e.surname,d=e.expirationYear,s=e.expirationMonth,l=e.cardNumber,a=e.cvv,r=e.city,p=e.country,x=e.line1,v=e.line2,b=e.state,j=e.postalCode;return Object(i.a)({type:"ADD_ONETIME_CARD_DATA",verb:"POST",headers:{contentType:"includeBearer"},endpoint:"".concat(c,"/OneTimePayment/SavePaymentMethod"),payload:JSON.stringify({userId:o,cardOwnerFirstName:n,cardOwnerLastName:t,cardNumber:l,expirationYear:d,expirationMonth:s,cvv:a,billingAddress:{city:r,country:p,line1:x,line2:v,state:b,postalCode:j}})})},s=function(e){var o=e.BookingId,n=e.CustomerId;return Object(i.a)({type:"SALES_ORDER_INVOICE",verb:"GET",headers:{contentType:"includeBearer"},endpoint:"".concat(t,"/SalesOrder/Invoice?BookingId=").concat(o,"&CustomerId=").concat(n)})}},1395:function(e,o,n){},1801:function(e,o,n){"use strict";n.r(o);var i=n(3),t=n(2),c=n(9),d=(n(310),n(1395),n(21)),s=n(10),l=n(92),a=n(76),r=n(1284),p=n(1);o.default=Object(l.b)((function(e){var o=e.salesOrderinvoiceRedcuer,n=o.error,i=o.loading,t=o.salesOrderinvoice,c=e.defaultReducer;c.userCountryId,c.userCountry,c.userCurrencyCode;return{error:n,loading:i,salesOrderinvoice:t}}),(function(e){return Object(a.b)({SalesOrderInvoiceAction:r.a},e)}))((function(e){var o,n,l,a,r,x,v,b,j,u,O,m,T,y,g,h,f,E,S,A,N,_,F,B,C=e.loading,P=e.SalesOrderInvoiceAction,I=e.salesOrderinvoice,R=void 0===I?{}:I,w=new URLSearchParams(window.location.search).get("BookingId"),D=new URLSearchParams(window.location.search).get("CustomerId");Object(t.useEffect)((function(){var e=document.getElementsByTagName("body")[0];e.className=e.className+" payment-method",P({BookingId:encodeURIComponent(w.replaceAll(" ","+")),CustomerId:encodeURIComponent(D.replaceAll(" ","+"))})}),[]);var W=Object(s.i)("loader.GIF"),z="Unpaid"==(null===R||void 0===R||null===(o=R.response)||void 0===o?void 0:o.paymentStatus)?"#FBE5E6":"#5fdf5a33",U="Unpaid"==(null===R||void 0===R||null===(n=R.response)||void 0===n?void 0:n.paymentStatus)?"#db0406":"#5FDF5A";return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(c.FAEContainer,{style:{backgroundColor:"#f7f7f7"},children:[C&&Object(p.jsx)(c.FAELoading,{className:"paymentlink-loader",type:"svg",loaderImage:W,height:"700px"}),!C&&Object(p.jsxs)("div",{className:"fae-paynow-container",children:[Object(p.jsxs)("div",{className:"fae-paynow-logo",children:[Object(p.jsx)(c.FAEImage,{src:Object(s.i)("expert_logo.PNG")}),Object(p.jsx)("h1",{children:"Expert"})]}),2!==R.code&&0==(null===R||void 0===R?void 0:R.error)?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"fae-paynow-card-above",children:[Object(p.jsxs)("div",{className:"fae-paynow-invoice",children:[Object(p.jsx)(c.FAEText,{style:{color:"#bcbcbc",paddingTop:"5px",paddingBottom:"5px"},children:"invoice ID."}),Object(p.jsx)(c.FAEText,{style:{fontSize:"14px",fontWeight:"bold"},children:null===R||void 0===R||null===(l=R.response)||void 0===l?void 0:l.invoiceNumber})]}),Object(p.jsxs)("div",{className:"fae-paynow-created-on",children:[Object(p.jsx)(c.FAEText,{style:{color:"#bcbcbc",paddingTop:"5px",paddingBottom:"5px"},children:"Created on"}),Object(p.jsx)(c.FAEText,{style:{fontSize:"14px",fontWeight:"bold"},children:null===R||void 0===R||null===(a=R.response)||void 0===a?void 0:a.createdDate})]})]}),Object(p.jsxs)("div",{className:"fae-paynow-card",children:[Object(p.jsxs)("div",{className:"fae-paynow-card-top",style:{backgroundColor:z},children:[Object(p.jsxs)("div",{className:"fae-paynow-invoice",children:[Object(p.jsx)(c.FAEText,{style:{color:U,paddingTop:"5px",paddingBottom:"5px"},children:null===R||void 0===R||null===(r=R.response)||void 0===r?void 0:r.paymentStatus}),Object(p.jsxs)(c.FAEText,{style:{fontSize:"20px",fontWeight:"bold"},children:[null===R||void 0===R||null===(x=R.response)||void 0===x?void 0:x.currencySymbol,null===R||void 0===R||null===(v=R.response)||void 0===v?void 0:v.subTotal]})]}),Object(p.jsxs)("div",{className:"fae-paynow-created-on",children:[Object(p.jsx)(c.FAEText,{style:{color:"#bcbcbc",paddingTop:"5px",paddingBottom:"5px"},children:"Payable By"}),Object(p.jsx)(c.FAEText,{style:{fontSize:"14px",fontWeight:"bold"},children:null===R||void 0===R||null===(b=R.response)||void 0===b?void 0:b.payableBy})]})]}),Object(p.jsxs)("div",{className:"fae-paynow-invoice-form",style:{margin:"15px",borderBottom:"2px solid #eeeeee"},children:[Object(p.jsx)(c.FAEText,{style:{color:"#bcbcbc",paddingTop:"5px",paddingBottom:"5px"},children:"invoice Form"}),Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",fontWeight:"bold"},children:null===R||void 0===R||null===(j=R.response)||void 0===j?void 0:j.businessName}),Object(p.jsxs)("div",{className:"fae-invoice-icons",children:[Object(p.jsx)(c.FAEImage,{className:"fae-addPhoneIcon-img",src:Object(s.i)("icons/phone.PNG")})," ",Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",color:"#6c6c6c"},children:null===R||void 0===R||null===(u=R.response)||void 0===u?void 0:u.businessAddress})]}),Object(p.jsxs)("div",{className:"fae-invoice-icons",children:[Object(p.jsx)(c.FAEImage,{className:"fae-addPhoneIcon-img",src:Object(s.i)("icons/location.PNG")})," ",Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",paddingBottom:"15px",color:"#6c6c6c"},children:null===R||void 0===R||null===(O=R.response)||void 0===O?void 0:O.businessPhone})]})]}),Object(p.jsxs)("div",{className:"fae-paynow-invoice-form",style:{margin:"15px",borderBottom:"2px solid #eeeeee"},children:[Object(p.jsx)(c.FAEText,{style:{color:"#bcbcbc",paddingTop:"5px",paddingBottom:"5px"},children:"invoice To"}),Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",fontWeight:"bold"},children:null===R||void 0===R||null===(m=R.response)||void 0===m?void 0:m.userName}),Object(p.jsxs)("div",{className:"fae-invoice-icons",children:[Object(p.jsx)(c.FAEImage,{className:"fae-addPhoneIcon-img",src:Object(s.i)("icons/location.PNG")})," ",Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",paddingBottom:"15px",color:"#6c6c6c"},children:null===R||void 0===R||null===(T=R.response)||void 0===T?void 0:T.customerAddress})]}),"                    "]}),Object(p.jsxs)("div",{className:"fae-paynow-invoice-desc",style:{margin:"15px",borderBottom:"2px solid #eeeeee"},children:[Object(p.jsxs)("div",{className:"fae-paynow-description",children:[Object(p.jsx)(c.FAEText,{style:{color:"#bcbcbc",paddingTop:"5px",paddingBottom:"5px"},children:"Description"}),Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",fontWeight:"bold"},children:null===R||void 0===R||null===(y=R.response)||void 0===y?void 0:y.serviceName}),Object(p.jsxs)(c.FAEText,{style:{fontSize:"14px",paddingTop:"5px",paddingBottom:"15px",color:"#6c6c6c"},children:[" Number of Sessions ",null===R||void 0===R||null===(g=R.response)||void 0===g?void 0:g.numberOfSessions]})]}),Object(p.jsxs)("div",{className:"fae-paynow-price",children:[Object(p.jsx)(c.FAEText,{style:{color:"#bcbcbc",paddingTop:"5px",paddingBottom:"5px"},children:"Price"}),Object(p.jsxs)(c.FAEText,{style:{fontSize:"16px"},children:[null===R||void 0===R||null===(h=R.response)||void 0===h?void 0:h.currencySymbol,null===R||void 0===R||null===(f=R.response)||void 0===f?void 0:f.price]})]})]}),Object(p.jsxs)("div",{className:"fae-paynow-invoice-desc",style:{margin:"15px",borderBottom:"2px solid #eeeeee"},children:[Object(p.jsxs)("div",{className:"fae-paynow-description",children:[Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",paddingBottom:"5px",color:"#6c6c6c"},children:"Sub Total"}),Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",paddingBottom:"5px",color:"#6c6c6c"},children:"Discount"}),Object(p.jsx)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",paddingBottom:"15px",color:"#6c6c6c"},children:"Tax"})]}),Object(p.jsxs)("div",{className:"fae-paynow-price",children:[Object(p.jsxs)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",paddingBottom:"5px",color:"#6c6c6c"},children:[null===R||void 0===R||null===(E=R.response)||void 0===E?void 0:E.currencySymbol,null===R||void 0===R||null===(S=R.response)||void 0===S?void 0:S.subTotal]}),Object(p.jsxs)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",paddingBottom:"15px",color:"#6c6c6c",textAlign:"end"},children:[null===R||void 0===R||null===(A=R.response)||void 0===A?void 0:A.discount,"%"]}),Object(p.jsxs)(c.FAEText,{style:{fontSize:"16px",paddingTop:"5px",paddingBottom:"5px",color:"#6c6c6c",textAlign:"end"},children:[null===R||void 0===R||null===(N=R.response)||void 0===N?void 0:N.tax,"%"]})]})]}),Object(p.jsxs)("div",{className:"fae-paynow-invoice-desc",style:{margin:"15px"},children:[Object(p.jsx)("div",{className:"fae-paynow-description",children:Object(p.jsx)(c.FAEText,{style:{fontSize:"18px",paddingTop:"5px",paddingBottom:"15px",color:"black",fontWeight:"bold"},children:"Total to Pay"})}),Object(p.jsx)("div",{className:"fae-paynow-price",children:Object(p.jsxs)(c.FAEText,{style:{fontSize:"18px",paddingTop:"5px",paddingBottom:"15px",color:"black",fontWeight:"bold"},children:[null===R||void 0===R||null===(_=R.response)||void 0===_?void 0:_.currencySymbol,null===R||void 0===R||null===(F=R.response)||void 0===F?void 0:F.subTotal]})})]})]}),"Unpaid"==(null===R||void 0===R||null===(B=R.response)||void 0===B?void 0:B.paymentStatus)&&Object(p.jsx)(c.FAEButton,{onClick:function(){var e;d.a.push({pathname:"/payment-selection",state:Object(i.a)(Object(i.a)({},null===R||void 0===R?void 0:R.response),{},{generalBookingId:null===R||void 0===R||null===(e=R.response)||void 0===e?void 0:e.bookingId})})},className:"fae-pay-process-btn",children:"Pay Now"})]}):Object(p.jsxs)(c.FAEText,{style:{fontSize:"16px",paddingTop:"10rem",paddingBottom:"11rem",color:"#6c6c6c",textAlign:"center",fontWeight:"bold"},children:[" ",Object(s.d)(R.message)]})]})]})})}))}}]);
//# sourceMappingURL=51.d43eb505.chunk.js.map