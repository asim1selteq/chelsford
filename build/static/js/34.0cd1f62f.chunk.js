(this["webpackJsonpfindanexpert-frontend"]=this["webpackJsonpfindanexpert-frontend"]||[]).push([[34],{1222:function(e,c,r){"use strict";r.d(c,"c",(function(){return o})),r.d(c,"b",(function(){return s})),r.d(c,"a",(function(){return d}));var t=r(23),n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PAYMENT_VOUCHER,i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MARKETING,o=function(e){return Object(t.a)({type:"GET_SERVICES_VOUCHERS",verb:"GET",headers:{contentType:"includeBearer"},endpoint:"".concat(n,"/Voucher/GetActiveVoucherByUserId?id=").concat(e)})},s=function(e,c){return Object(t.a)({type:"GET_SUMMARY_VOUCHERS",verb:"GET",headers:{contentType:"includeBearer"},endpoint:"".concat(i,"/Voucher/GetVoucherByServiceId?userId=").concat(e,"&serviceId=").concat(c)})},d=function(e){return Object(t.a)({type:"GET_HISTORY_VOUCHERS",verb:"GET",headers:{contentType:"includeBearer"},endpoint:"".concat(i,"/Voucher/GetServiceVoucherHistory?userId=").concat(e)})}},1224:function(e,c,r){"use strict";r(142);var t=r(25),n=(r(2),r(1231),r(1));c.a=function(e){var c=e.id,r=e.Url,i=e.isService,o=e.code,s=e.date,d=e.Title,a=e.price,u=e.TitleAsign,l=e.onClick,v=(e.Button,e.currency);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{class:"fae-voucher-card",id:c,onClick:l,children:[Object(n.jsx)("div",{className:"fae-VoucherService-img",style:{backgroundImage:"url(".concat(r,")")},children:Object(n.jsxs)("div",{className:"".concat(i?"service-card-data":"gift-card-data"),children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:["Code : ",o]})}),Object(n.jsx)("li",{children:Object(n.jsx)("span",{children:s})})]}),Object(n.jsxs)("span",{className:"fae-service-prices",children:[v,a]})]})}),Object(n.jsx)("div",{class:"fae-voucher-container",children:Object(n.jsxs)("div",{className:"fae-VoucherCard-titlesett",children:[Object(n.jsx)(t.FAEText,{className:"fae-VoucherCard-title",children:d}),Object(n.jsx)(t.FAEText,{className:"fae-VoucherCard-titleasign",children:u})]})})]})})}},1231:function(e,c,r){},1321:function(e,c,r){},1385:function(e,c,r){"use strict";r.r(c),r.d(c,"default",(function(){return v}));r(9),r(662);var t=r(2),n=r(92),i=r(76),o=r(21),s=r(1222),d=r(1224),a=r(10),u=(r(1321),r(1)),l=Object(a.i)("service_voucher_backgorund.png"),v=Object(n.b)((function(e){var c=e.servicesVouchersPageReducer;return{error:c.error,loading:c.loading,servicesVouchers:c.servicesVouchers,userCountryId:e.defaultReducer.userCountryId}}),(function(e){return Object(i.b)({getServicesVouchers:s.c},e)}))((function(e){var c,r,n=e.getServicesVouchers,i=(e.loading,e.error,e.servicesVouchers),s=e.userCountryId,v=Object(a.h)("userId");Object(t.useEffect)((function(){n(v)}),[n]);return console.log(i,"servicesVouchers?.electronicVouchers"),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"fae--services-vouchers-page-main-container",children:[Object(u.jsx)("div",{className:"fae-serviceVouchersPageTopbtn"}),Object(u.jsxs)("div",{className:"fae-flexcardslist",children:[null===i||void 0===i||null===(c=i.electronicVouchers)||void 0===c?void 0:c.map((function(e,c){return Object(u.jsx)(d.a,{id:c,Url:l,Title:null===e||void 0===e?void 0:e.title,isService:!0,code:null===e||void 0===e?void 0:e.voucherCode,date:null===e||void 0===e?void 0:e.expiryDate.split("T")[0],price:null===e||void 0===e?void 0:e.amount,currency:1==s?"\xa3":null===e||void 0===e?void 0:e.currencySymbol,onClick:function(){return c=e,void o.a.push({state:{services:c},pathname:"/your-vouchers/service-voucher-detail"});var c}})})),0==(null===i||void 0===i||null===(r=i.electronicVouchers)||void 0===r?void 0:r.length)&&Object(u.jsx)("div",{style:{fontWeight:"bold",textAlign:"center",padding:"10rem"},children:" Not Found"})]})]})})}))}}]);
//# sourceMappingURL=34.0cd1f62f.chunk.js.map