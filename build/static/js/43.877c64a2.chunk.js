(this["webpackJsonpfindanexpert-frontend"]=this["webpackJsonpfindanexpert-frontend"]||[]).push([[43],{1246:function(e,n,t){"use strict";t.d(n,"h",(function(){return c})),t.d(n,"i",(function(){return a})),t.d(n,"f",(function(){return u})),t.d(n,"j",(function(){return s})),t.d(n,"b",(function(){return p})),t.d(n,"g",(function(){return O})),t.d(n,"m",(function(){return y})),t.d(n,"l",(function(){return T})),t.d(n,"k",(function(){return l})),t.d(n,"c",(function(){return f})),t.d(n,"a",(function(){return m})),t.d(n,"d",(function(){return S})),t.d(n,"e",(function(){return v}));var r=t(23),o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL_2,d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PAYMENT_VOUCHER,c=function(e){var n=e.cartId,t=e.serviceId,i=e.userId,d=e.voucherCode,c=e.isFreeConsultation,a=e.selectedSessions,u=e.countryId,s=e.discountCodeResp,p=e.discountCodeAmount,O=e.isTraining,y=e.is_service;return Object(r.a)({type:"GET_SUMMARY_DATA",verb:"POST",headers:{contentType:"includeBearer"},endpoint:"".concat(o,"/CalculateSummary"),payload:JSON.stringify({countryId:u,serviceId:t,userId:i,isService:!0,cartId:n,VoucherCode:d,isFreeConsultation:c,session:a,devicePlatform:"web",deviceName:"web",discountCode:s,discountCodeAmount:p,isTraining:O,is_service:y})})},a=function(e){var n=e.serviceId,t=e.userId;return Object(r.a)({type:"GET_VOUCHER_LIST",verb:"GET",headers:{contentType:"includeBearer"},endpoint:"".concat(o,"/Voucher/GetVoucherList/").concat(t,"/").concat(n)})},u=function(e){var n=e.cartId,t=e.paymentAmount,o=e.stripePaymentMethodId,i=e.userCountryId,c=e.bookingId,a=e.voucherCode,u=e.userCurrencyCode,s=e.transactionId,p=e.userId;return Object(r.a)({type:"SAVE_BOOKING",verb:"POST",headers:{contentType:"includeBearer"},endpoint:"".concat(d,"/Payment/CapturePayment"),payload:JSON.stringify({bookingId:c,cartId:n,countryId:i,currency:u,paymentAmount:t,returnUrl:"".concat("localhost"==document.domain?"https://expert-dev.findanexpert.net/paymentverification":-1!==document.domain.indexOf("findanexpert")?"https://".concat(document.domain,"/paymentverification"):"https://www.expert.one/paymentverification"),stripePaymentMethodId:o,transactionId:s,userId:p,voucherCode:a})})},s=function(e){var n=e.paymentAmount,t=e.stripePaymentMethodId,o=e.userCountryId,d=e.email,c=e.bookingId,a=e.isReferralUsed,u=e.isTreatmentOfferUsed,s=e.cartId,p=e.voucherCode,O=e.selectedSessions,y=e.userCurrencyCode;return Object(r.a)({type:"SAVE_BOOKING",verb:"POST",headers:{contentType:"includeBearer"},endpoint:"".concat(i,"/Payment/Cod"),payload:JSON.stringify({stripepaymentmethodId:t,bookingid:c,serviceproviderid:0,currency:y,paymentamount:n,referralbonusused:a,isfreetreatmentused:u,isocode:o,email:d,cartId:s,VoucherCode:p,numberOfSession:O})})},p=function(e){var n=e.paymentAmount,t=e.stripePaymentMethodId,o=e.bookingId,i=e.cartId,c=e.userCurrencyCode,a=e.userId;return Object(r.a)({type:"HOLD_PAYMENT",verb:"POST",headers:{contentType:"includeBearer"},endpoint:"".concat(d,"/Payment/HoldPayment"),payload:JSON.stringify({bookingId:o,cartId:i,currency:c,paymentAmount:n,paymentMethodId:t,returnUrl:"".concat("localhost"==document.domain?"https://expert-dev.findanexpert.net/paymentverification":-1!==document.domain.indexOf("findanexpert")?"https://".concat(document.domain,"/paymentverification"):"https://www.expert.one/paymentverification"),userId:a})})},O=function(e){var n=e.amount,t=e.cartId,o=e.chargeId,d=(e.distance,e.isCaptured),c=e.isReferralReceiver,a=(e.latitude,e.longitude,e.numberOfSessions,e.providerIds,e.referralBonusUsed),u=e.userId,s=e.voucherCode,p=(e.serviceVenu,e.bookingDate,e.bookingTime,e.duration,e.serviceId),O=e.trainingStartTime,y=e.trainingStartDate;return Object(r.a)({type:"CREATE_BOOKING",verb:"POST",headers:{contentType:"includeBearer"},endpoint:"".concat(i,"/Booking/CreateBookingTraining"),payload:JSON.stringify({amount:n,cartId:t,chargeId:o,isCaptured:d,isReferralReceiver:c,referralBonusUsed:a,userId:u,voucherCode:s,bookingDate:y,bookingTime:O,serviceId:p})})},y=function(){return{type:"SET_SAVE_BOOKING_RESPONSE_TO_EMPTY"}},T=function(){return{type:"SET_HOLD_PAYMENT_RESPONSE_TO_EMPTY"}},l=function(){return{type:"SET_CREATEBOOKING_PAYMENT_RESPONSE_TO_EMPTY"}},f=function(e){var n=e.tempBookingId,t=e.cartId,o=e.userId;return Object(r.a)({type:"SALES_ORDER",verb:"POST",headers:{contentType:"includeBearer"},payload:JSON.stringify({tempBookingId:n,cartId:t,userId:o}),endpoint:"".concat(i,"/SalesOrder/SalesOrder")})},m=function(e){var n=e.salesOrderNumber,t=e.cartId,o=e.bookingId,d=e.userId,c=e.providerId;return Object(r.a)({type:"SALES_GET_INVOICE",verb:"POST",headers:{contentType:"includeBearer"},payload:JSON.stringify({salesOrderNumber:n,cartId:t,bookingId:o,userId:d,providerId:c}),endpoint:"".concat(i,"/SalesOrder/Getinvoice")})},S=function(e){var n=e.userid,t=e.serviceid,o=e.discountcode,d=e.currentdate,c=e.countryid,a=e.numberofsession,u=e.referraldiscount;return Object(r.a)({headers:{contentType:"includeBearer"},type:"APPLY_DISCOUNT_CODE",verb:"POST",payload:JSON.stringify({userid:isNaN(n)?n:JSON.parse(n),serviceid:t,discountcode:o,currentdate:d,countryid:c,numberofsession:a,referraldiscount:u}),endpoint:"".concat(i,"/CalculateSummary/redeemdiscountcode")})},v=function(){return{type:"SET_DIDSCOUNT_CODE_OBJ_TO_EMPTY"}}},1325:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return d}));var r=t(23),o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,i=function(e,n,t){return Object(r.a)({type:"THREE_D_SECURE",headers:{contentType:"includeBearer"},endpoint:"".concat(o,"/Payment/DoPayment/").concat(e,"/").concat(n,"/").concat(t),verb:"GET"})},d=function(e){var n=e.countryId,t=e.cartid,i=e.bookingId;return Object(r.a)({type:"GET_THANKYOU_BOOKING",headers:{contentType:"includeBearer"},endpoint:"".concat(o,"/Booking/ThankYouBooking?CountryId=").concat(n),verb:"POST",payload:JSON.stringify({cartId:t,bookingId:i})})}},1776:function(e,n,t){},1847:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return T}));var r=t(9),o=t(2),i=t(92),d=t(38),c=t(76),a=t(21),u=t(1325),s=t(1246),p=(t(1776),t(32)),O=t(10),y=t(1),T=Object(i.b)((function(e){var n=e.thankyouBookingPageReducter,t=n.ThankYouBookingResponse,r=n.error,o=n.loading,i=e.defaultReducer,d=i.userCountryId;i.userCountry,i.userCurrencyCode;return{error:r,loading:o,ThankYouBookingResponse:t,userCountryId:d}}),(function(e){return Object(c.b)({thankYouBookingAction:u.a,setCreateBookingResponseToEmpty:s.k},e)}))((function(e){var n=e.thankYouBookingAction,t=e.ThankYouBookingResponse,i=e.userCountryId,c=e.setCreateBookingResponseToEmpty,u=e.loading,s=Object(d.l)().state,T=s.message,l=s.bookingId,f=(s.bookingDate,s.bookingTime,s.serviceName,s.cartid);return console.log(s,"state kkk"),Object(o.useEffect)((function(){return n({countryId:i,cartid:f,bookingId:l}),function(){return c()}}),[]),console.log(t,"ThankYouBookingResponse"),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"fae--thank-you-page-container",children:[u&&Object(y.jsx)(p.FAELoading,{loaderImage:Object(O.i)("loader.GIF"),type:"svg",height:"300px"}),!u&&Object(y.jsxs)("div",{className:"fae--thank-you-page-wrapper dpt dpb",children:[Object(y.jsx)(r.FAEText,{className:"fae--thank-you-text",children:"Thank You!"}),Object(y.jsx)(r.FAEText,{className:"fae--thank-you-message",children:T}),Object(y.jsxs)("div",{className:"fae--thank-you-card",children:[Object(y.jsx)(r.FAEText,{className:"fae--thank-you-service-name",children:null===t||void 0===t?void 0:t.serviceName}),Object(y.jsxs)("div",{className:"fae--thank-you-page-booking-detail",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(r.FAEText,{paragraph:!0,secondary:!0,children:"Booking Confirmation Number"}),Object(y.jsx)(r.FAEText,{children:null===t||void 0===t?void 0:t.bookingId})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(r.FAEText,{paragraph:!0,secondary:!0,children:"Booking Date & Time"}),Object(y.jsxs)("div",{style:{display:"flex",gap:"50px"},children:[Object(y.jsx)(r.FAEText,{children:null===t||void 0===t?void 0:t.bookingDate}),Object(y.jsx)(r.FAEText,{children:null===t||void 0===t?void 0:t.bookingTime})]})]})]})]}),Object(y.jsx)(r.FAEButton,{onClick:function(){return a.a.push("/your-bookings/upcoming")},children:"See your Bookings"})]})]})})}))}}]);
//# sourceMappingURL=43.877c64a2.chunk.js.map