(this["webpackJsonpfindanexpert-frontend"]=this["webpackJsonpfindanexpert-frontend"]||[]).push([[42],{1285:function(e,r,t){},1286:function(e,r,t){},1382:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return f}));var c=t(2),n=t(9),s=t(76),o=t(92),i=t(38),a=t(10),d=t(23),l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,u=function(e){var r=e.industryName,t=e.userCountryId;return Object(d.a)({type:"GET_SERVICES_DATA",headers:{contentType:"includeBearer"},endpoint:"".concat(l,"/Services/GetServices/").concat(r,"/").concat(t),verb:"GET"})},p=t(127),g=(t(1285),t(25)),v=t(32),j=(t(1286),t(1));var b=Object(a.i)("loader.GIF"),O=Object(a.i)("placeholder.jpg"),f=Object(o.b)((function(e){var r=e.servicesPageReducer;return{error:r.error,loading:r.loading,services:r.services,userCountryId:e.defaultReducer.userCountryId}}),(function(e){return Object(s.b)({getServices:u},e)}))((function(e){var r=e.getServices,t=e.services,s=void 0===t?[]:t,o=e.loading,d=(e.error,e.userCountryId),l=e.propsCountryId,u=e.propsIndustryName,f=e.con_padding_props,y=(Object(i.m)().industry,Object(a.c)(u,"-"));if(document.title="Chelsford | ".concat(y),console.log(u,"propsIndustryName"),Object(c.useEffect)((function(){""!==l&&(console.log("-------pppp-------"),console.log(l),console.log("--------------"),r({industryName:y,userCountryId:l}))}),[r,y,d]),o)return Object(j.jsx)(v.FAELoading,{type:"svg",loaderImage:b,height:"630px"});var h=(null===s||void 0===s?void 0:s.length)<4?1==s.length?254:220:254;return console.log(s,"getServices"),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"fae--services-page-container dpb",style:{paddingBottom:f||h},children:!o&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(n.FAEVerticalScrollServices,{className:"fae--services-page-services-container",loading:o,loaderProps:{loaderImage:b,height:"200px",type:"video"},services:Object(p.d)(s.slice(0,4)),primary:!0,placeholder:O}),Object(j.jsx)("div",{className:"cfd-courses-list",children:Object(j.jsx)(n.FAEVerticalScrollServices,{className:"fae--services-page-services-container",loading:o,loaderProps:{loaderImage:b,height:"200px",type:"video"},services:Object(p.d)(s.slice(4,8)),primary:!0,placeholder:O})}),!o&&Array.isArray(s)?0!==(null===s||void 0===s?void 0:s.length)?"":Object(j.jsx)(g.FAEText,{className:"ResultEmpty",subHeading:!0,style:{textAlign:"center"},children:Object(j.jsx)("img",{src:Object(a.i)("result not found-img.png")})}):""]})})})}))}}]);
//# sourceMappingURL=42.826aee4e.chunk.js.map