(this["webpackJsonpfindanexpert-frontend"]=this["webpackJsonpfindanexpert-frontend"]||[]).push([[27,42],{1285:function(e,t,s){},1286:function(e,t,s){},1331:function(e,t,s){},1382:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return g}));var a=s(2),c=s(9),i=s(76),r=s(92),o=s(38),n=s(10),l=s(23),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,h=function(e){var t=e.industryName,s=e.userCountryId;return Object(l.a)({type:"GET_SERVICES_DATA",headers:{contentType:"includeBearer"},endpoint:"".concat(d,"/Services/GetServices/").concat(t,"/").concat(s),verb:"GET"})},j=s(127),b=(s(1285),s(25)),m=s(32),u=(s(1286),s(1));var p=Object(n.i)("loader.GIF"),x=Object(n.i)("placeholder.jpg"),g=Object(r.b)((function(e){var t=e.servicesPageReducer;return{error:t.error,loading:t.loading,services:t.services,userCountryId:e.defaultReducer.userCountryId}}),(function(e){return Object(i.b)({getServices:h},e)}))((function(e){var t=e.getServices,s=e.services,i=void 0===s?[]:s,r=e.loading,l=(e.error,e.userCountryId),d=e.propsCountryId,h=e.propsIndustryName,g=e.con_padding_props,O=(Object(o.m)().industry,Object(n.c)(h,"-"));if(document.title="Chelsford | ".concat(O),console.log(h,"propsIndustryName"),Object(a.useEffect)((function(){""!==d&&(console.log("-------pppp-------"),console.log(d),console.log("--------------"),t({industryName:O,userCountryId:d}))}),[t,O,l]),r)return Object(u.jsx)(m.FAELoading,{type:"svg",loaderImage:p,height:"630px"});var v=(null===i||void 0===i?void 0:i.length)<4?1==i.length?254:220:254;return console.log(i,"getServices"),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"fae--services-page-container dpb",style:{paddingBottom:g||v},children:!r&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(c.FAEVerticalScrollServices,{className:"fae--services-page-services-container",loading:r,loaderProps:{loaderImage:p,height:"200px",type:"video"},services:Object(j.d)(i.slice(0,4)),primary:!0,placeholder:x}),Object(u.jsx)("div",{className:"cfd-courses-list",children:Object(u.jsx)(c.FAEVerticalScrollServices,{className:"fae--services-page-services-container",loading:r,loaderProps:{loaderImage:p,height:"200px",type:"video"},services:Object(j.d)(i.slice(4,8)),primary:!0,placeholder:x})}),!r&&Array.isArray(i)?0!==(null===i||void 0===i?void 0:i.length)?"":Object(u.jsx)(b.FAEText,{className:"ResultEmpty",subHeading:!0,style:{textAlign:"center"},children:Object(u.jsx)("img",{src:Object(n.i)("result not found-img.png")})}):""]})})})}))},1805:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return A}));var a=s(13),c=s(107),i=s(181),r=s(2),o=(s(660),s(10),s(1)),n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BEARER_TOKEN,d=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),s=t[0],d=t[1],h=Object(r.useState)(""),j=Object(a.a)(h,2),b=j[0],m=j[1],u=Object(r.useState)(""),p=Object(a.a)(u,2),x=p[0],g=p[1],O=Object(r.useState)(""),v=Object(a.a)(O,2),A=v[0],f=v[1],N=Object(r.useState)(""),y=Object(a.a)(N,2),R=y[0],E=y[1],C=function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(n,"/Users/contactus"),{method:"POST",headers:{"Content-Type":"application/json",mode:"no-cors",Authorization:"bearer ".concat(l),"Access-Control-Allow-Origin":"*"},body:JSON.stringify(t)});case 3:return s=e.sent,e.abrupt("return",s);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"main__Image__Container",children:[Object(o.jsx)("video",{className:"main__Image__Container desktop-video",muted:!0,style:{cursor:"pointer"},autoPlay:!0,loop:!0,playsInline:!0,type:"video/mp4",width:"100%",height:"100%",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/chelsford-index-banner-video.mp4",alt:"alt"}),Object(o.jsx)("video",{className:"main__Image__Container mobile-video",muted:!0,style:{cursor:"pointer"},autoPlay:!0,loop:!0,playsInline:!0,type:"video/mp4",width:"100%",height:"100%",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/chelsford-home-loader.mp4",alt:"alt"}),Object(o.jsx)("div",{className:"bannerContent2 d-md-block d-none",children:Object(o.jsxs)("div",{className:"form__container",children:[Object(o.jsx)("h1",{className:"form__heading",children:Object(o.jsx)("strong",{children:"Get in Touch"})}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),E("Sending..."),C({customerEmail:b,customerName:x,message:s,subject:A,isChelsford:!0}).then((function(e){E("Message sent, our specialist will contact you shortly."),g(""),m(""),f(""),d(""),setTimeout((function(){E("")}),2e3)}))},className:"form__elements",children:[Object(o.jsxs)("div",{className:"inputDiv",children:[Object(o.jsx)("input",{className:"form__inputs",type:"text",placeholder:"Name",onChange:function(e){g(e.target.value)},value:x,required:!0}),Object(o.jsx)("input",{className:"form__inputs",type:"email",placeholder:"Email",onChange:function(e){m(e.target.value)},value:b,required:!0}),Object(o.jsx)("input",{className:"form__inputs",type:"text",placeholder:"Contact Number",onChange:function(e){f(e.target.value)},value:A,required:!0}),Object(o.jsx)("input",{className:"form__inputs",type:"text",name:"massage",id:"massage",placeholder:"Message",value:s,required:!0,onChange:function(e){d(e.target.value)}})]}),Object(o.jsx)("div",{className:"send__msg__div",children:Object(o.jsxs)("div",{className:"send__button__div",children:[Object(o.jsx)("span",{className:"msg__text",children:"Send Message"}),Object(o.jsx)("button",{className:"send__msg__btn",children:Object(o.jsx)("span",{children:"\u2192"})})]})})]}),""!==R&&Object(o.jsx)("span",{style:{padding:"5px",margin:"5px",color:"green",borderRadius:"5px",width:"100%",textAlignLast:"center",background:"#f7f2f2"},children:R})]})})]})},h=s(12),j=function(){return Object(o.jsxs)("div",{className:"sub__container",children:[Object(o.jsxs)("div",{className:"sub__container__main",children:[Object(o.jsx)("span",{className:"sub__container__main__text",children:Object(o.jsx)("strong",{children:"10%"})}),Object(o.jsx)("span",{style:{color:"#1e185f",top:"5px",fontSize:"20px",position:"relative"},children:"OFF"}),Object(o.jsx)("span",{className:"sub__container__main__text1",style:{color:"#1e185f",marginTop:"8px",paddingTop:"5px",fontSize:"20px"},children:"All Courses"})]}),Object(o.jsxs)("div",{className:"sub__container2",children:[Object(o.jsx)("div",{className:"boxVContainer",children:Object(o.jsxs)(h.Link,{to:"/laser-courses",className:"hover__linka",children:[Object(o.jsxs)("div",{className:"boxV__top",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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"}),Object(o.jsx)("h2",{className:"pt-2 boxV__top__h2",children:"Laser"})]}),Object(o.jsx)("div",{className:"information",children:Object(o.jsx)("p",{className:"information__text",children:"Experts in Aesthetic Laser training since 2008"})})]})}),Object(o.jsx)("div",{className:"boxVContainer",children:Object(o.jsxs)(h.Link,{to:"/medical-courses",className:"hover__linka",children:[Object(o.jsxs)("div",{className:"boxV__top",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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"}),Object(o.jsx)("h2",{className:"pt-2 boxV__top__h2",children:"Medical"})]}),Object(o.jsx)("div",{className:"information",children:Object(o.jsx)("p",{className:"information__text",children:"Get trained by Expert Doctors in Aesthetic treatments"})})]})}),Object(o.jsx)("div",{className:"boxVContainer",children:Object(o.jsxs)(h.Link,{to:"/beauty-courses",className:"hover__linka",children:[Object(o.jsxs)("div",{className:"boxV__top",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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"}),Object(o.jsx)("h2",{className:"pt-2 boxV__top__h2",children:"Beauty"})]}),Object(o.jsx)("div",{className:"information",children:Object(o.jsx)("p",{className:"information__text",children:"Accredited Beauty courses for all levels"})})]})})]})]})},b=(s.p,s(1382),function(){return Object(o.jsx)("div",{className:"CetagoryContainer__main",children:Object(o.jsx)("div",{className:"cetagoryContainer__ro",children:Object(o.jsxs)("div",{className:"contentContainer",children:[Object(o.jsx)("div",{className:"headContenter",children:Object(o.jsx)("h2",{className:"headContenter__text  pb-5",children:"Popular Courses at Chelsford"})}),Object(o.jsx)("div",{className:"col-md-12 px-3 mb-5",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-3 mt-3",children:Object(o.jsxs)(h.Link,{to:"/course/laser-practitioner-diploma-vtct",children:[Object(o.jsx)("div",{className:"col-md-12",style:{boxShadow:"1px 1px 7px 7px rgba(211, 211, 211, 0.449)",borderRadius:"5px",height:"22vh",overflow:"hidden"},children:Object(o.jsx)("img",{style:{borderTopRightRadius:"5px",borderTopLeftRadius:"5px",height:"100%",width:"100%"},className:"img-fluid",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/laser.webp",alt:"laser"})}),Object(o.jsx)("div",{style:{color:"white",backgroundColor:"#1E185F",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"},className:"col-md-12 pt-3 pb-2 text-center",children:Object(o.jsx)("h6",{style:{fontSize:"85%"},children:Object(o.jsx)("b",{children:"Laser Practitioner Diploma VTCT "})})})]})}),Object(o.jsx)("div",{className:"col-md-3 mt-3",children:Object(o.jsxs)(h.Link,{to:"/course/vtct-level-4-laser-and-ipl-treatments",children:[Object(o.jsx)("div",{className:"col-md-12",style:{boxShadow:"1px 1px 7px 7px rgba(211, 211, 211, 0.449)",borderRadius:"5px",height:"22vh",overflow:"hidden"},children:Object(o.jsx)("img",{style:{borderTopRightRadius:"5px",borderTopLeftRadius:"5px",height:"100%",width:"100%"},className:"img-fluid",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/level4.jpg",alt:"level4"})}),Object(o.jsx)("div",{style:{color:"white",backgroundColor:"#1E185F",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"},className:"col-md-12 pt-3 pb-2 text-center",children:Object(o.jsx)("h6",{style:{fontSize:"85%"},children:Object(o.jsx)("b",{children:"VTCT Level 4 Laser and IPL Treatments"})})})]})}),Object(o.jsx)("div",{className:"col-md-3 mt-3",children:Object(o.jsxs)(h.Link,{to:"/course/level-5-laser-tattoo-removal",children:[Object(o.jsx)("div",{className:"col-md-12",style:{boxShadow:"1px 1px 7px 7px rgba(211, 211, 211, 0.449)",borderRadius:"5px",height:"22vh",overflow:"hidden"},children:Object(o.jsx)("img",{style:{borderTopRightRadius:"5px",borderTopLeftRadius:"5px",height:"100%",width:"100%"},className:"img-fluid",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/girltatoo.webp",alt:"girltatoo"})}),Object(o.jsx)("div",{style:{color:"white",backgroundColor:"#1E185F",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"},className:"col-md-12 pt-3 pb-2 text-center",children:Object(o.jsx)("h6",{style:{fontSize:"85%"},children:Object(o.jsx)("b",{children:"VTCT Level 5 Laser Tattoo Removal"})})})]})}),Object(o.jsx)("div",{className:"col-md-3 mt-3",children:Object(o.jsxs)(h.Link,{to:"/course/vtct-level-3-nvq-beauty-therapy",children:[Object(o.jsx)("div",{className:"col-md-12",style:{boxShadow:"1px 1px 7px 7px rgba(211, 211, 211, 0.449)",borderRadius:"5px",height:"22vh",overflow:"hidden"},children:Object(o.jsx)("img",{style:{borderTopRightRadius:"5px",borderTopLeftRadius:"5px",height:"100%",width:"100%"},className:"img-fluid",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/beauty.webp",alt:"beauty"})}),Object(o.jsx)("div",{style:{color:"white",backgroundColor:"#1E185F",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"},className:"col-md-12 pt-3 pb-2 text-center",children:Object(o.jsx)("h6",{style:{fontSize:"85%"},children:Object(o.jsx)("b",{children:"VTCT Level 3 Beauty Therapy "})})})]})}),Object(o.jsx)("div",{className:"col-md-3 mt-3",children:Object(o.jsxs)(h.Link,{to:"/course/medical-aesthetics-diploma",children:[Object(o.jsx)("div",{className:"col-md-12",style:{boxShadow:"1px 1px 7px 7px rgba(211, 211, 211, 0.449)",borderRadius:"5px",height:"22vh",overflow:"hidden"},children:Object(o.jsx)("img",{style:{borderTopRightRadius:"5px",borderTopLeftRadius:"5px",height:"100%",width:"100%"},className:"img-fluid",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/girltatoo.webp",alt:"girltatoo"})}),Object(o.jsx)("div",{style:{color:"white",backgroundColor:"#1E185F",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"},className:"col-md-12 pt-3 pb-2 text-center",children:Object(o.jsx)("h6",{style:{fontSize:"85%"},children:Object(o.jsx)("b",{children:"Medical Aesthetics Diploma "})})})]})}),Object(o.jsx)("div",{className:"col-md-3 mt-3",children:Object(o.jsxs)(h.Link,{to:"/course/foundation-botox-and-dermal-fillers",children:[Object(o.jsx)("div",{className:"col-md-12",style:{boxShadow:"1px 1px 7px 7px rgba(211, 211, 211, 0.449)",borderRadius:"5px",height:"22vh",overflow:"hidden"},children:Object(o.jsx)("img",{style:{borderTopRightRadius:"5px",borderTopLeftRadius:"5px",height:"100%",width:"100%"},className:"img-fluid",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/foundation.jpg",alt:"foundation"})}),Object(o.jsx)("div",{style:{color:"white",backgroundColor:"#1E185F",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"},className:"col-md-12 pt-3 pb-2 text-center",children:Object(o.jsx)("h6",{style:{fontSize:"85%"},children:Object(o.jsx)("b",{children:"Foundation Botox and Dermal Fillers "})})})]})}),Object(o.jsx)("div",{className:"col-md-3 mt-3",children:Object(o.jsxs)(h.Link,{to:"/course/laser-skin-resurfacing-training",children:[Object(o.jsx)("div",{className:"col-md-12",style:{boxShadow:"1px 1px 7px 7px rgba(211, 211, 211, 0.449)",borderRadius:"5px",height:"22vh",overflow:"hidden"},children:Object(o.jsx)("img",{style:{borderTopRightRadius:"5px",borderTopLeftRadius:"5px",height:"100%",width:"100%"},className:"img-fluid",src:"https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/laserskin.webp",alt:"laserskin"})}),Object(o.jsx)("div",{style:{color:"white",backgroundColor:"#1E185F",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"},className:"col-md-12 pt-3 pb-2 text-center",children:Object(o.jsx)("h6",{style:{fontSize:"85%"},children:Object(o.jsx)("b",{children:"CPD Laser Skin Resurfacing "})})})]})})]})})]})})})}),m=s(1330),u=(s(419),s(665),s(1331),s(92)),p=s(76),x=s(426),g=(s(1332),s(633)),O=s(634);var v=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-md-12 background_image_aboutus mb-4 ",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("img",{className:"img-fluid padding_image",src:"https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/cosm.png",alt:"contact-cosm"})}),Object(o.jsxs)("div",{className:"col-md-6 m-auto py-5",children:[Object(o.jsxs)("p",{className:"mb-0 pb-0 font_text",children:["Why Train",Object(o.jsx)("br",{})," with us?"]}),Object(o.jsx)("p",{className:"text_why_with_us pt-2",children:"Let us give you these top reasons why you should train with us:"}),Object(o.jsxs)("ul",{className:"px-3",children:[Object(o.jsx)("li",{className:"color_li",children:"Qualified Trainers"}),Object(o.jsx)("li",{className:"color_li pt-2",children:"Globally Recognised Certificate"}),Object(o.jsx)("li",{className:"color_li pt-2",children:"Fast-track your Career"}),Object(o.jsx)("li",{className:"color_li pt-2",children:"Get Trained in Running Clinics"}),Object(o.jsx)("li",{className:"color_li pt-2",children:"Legal Requirements Satisfied"}),Object(o.jsx)("li",{className:"color_li pt-2",children:"Quality is Our Hallmark"})]})]})]})}),Object(o.jsx)("div",{className:"container mb-4",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("p",{className:"text_para_advance",children:"We are the UK's Most Advanced Aesthetic Training Institution providing Beauty, Laser & Medical Training. Recognised qualifications in Beauty, Laser  and Medical Aesthetics. Our Advanced courses include Laser Body contouring, Tattoo removal, Plasma, Injectables, CO2, Carboxy, PRP, Vaginal Rejuvenation, Botox, Fillers, Meso cocktails and more."}),Object(o.jsx)("p",{className:"text_para_advance",children:"We are experts in what we do, so you're pretty much guaranteed to be taught by the best Aesthetic Trainers. Teaching takes place in a running clinic with a heavy emphasis on practical experience. We go beyond the Syllabus, we have treated thousands of patients & will pass our years of expert knowledge onto you. We work with the UK's top Awarding bodies and offer qualifications that are Internationally recognised & satisfy Insurance requirements."}),Object(o.jsx)("p",{className:"text_para_advance",children:"We are Experts in Fast Track Education, our Intense courses have been designed cleverly not to compromise on Quality."})]}),Object(o.jsx)("div",{className:"col-md-6 text-center image_top_mar_neg",children:Object(o.jsx)("img",{src:"https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/agirl.png",className:"img-fluid img_width_landing",alt:"contact-girl"})})]})})]})},A=Object(u.b)((function(e){var t=e.defaultReducer;return{userCountryId:t.userCountryId,userCountry:t.userCountry}}),(function(e){return Object(p.b)({},e)}))((function(e){e.getNotificationsList;document.title="Chelsford | Trainings",Object(r.useEffect)(Object(i.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.scrollTo(0,0);case 1:case"end":return e.stop()}}),e)}))),[]);var t=Object(r.useState)([]),s=Object(a.a)(t,2),n=s[0],l=s[1];Object(r.useEffect)((function(){var e=m.filter((function(e){return"home-page"==e.page_link}));l(e)}),[]);var u=n[0]||{},p=(u.course_information,u.summary_description,u.course_module,u.featur_content,u.instruction_content,u.page_link,u.what_next,Object(r.useState)(!1)),A=Object(a.a)(p,2);A[0],A[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:{overflowX:"hidden"},children:[Object(o.jsx)(d,{}),Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"container pb-5 ",children:Object(o.jsxs)("div",{className:"col-md-12 background_card_color_aboutus disp_mob",children:[Object(o.jsx)("h2",{className:"headContenter__text pb-3",children:"About Us"}),Object(o.jsx)("p",{className:"text-center paraa_graph_text",children:"We are the UK's Most Advanced Aesthetic Training Institution providing Beauty, Laser & Medical Training. Recognised qualifications in Beauty, Laser  and Medical Aesthetics. Our Advanced courses include Laser Body contouring, Tattoo removal, Plasma, Injectables, CO2, Carboxy, PRP, Vaginal Rejuvenation, Botox, Fillers, Meso cocktails and more. We are experts in what we do, so you're pretty much guaranteed to be taught by the best Aesthetic Trainers. Teaching takes place in a running clinic with a heavy emphasis on practical experience. We go beyond the Syllabus, we have treated thousands of patients & will pass our years of expert knowledge onto you. We work with the UK's top Awarding bodies and offer qualifications that are Internationally recognised & satisfy Insurance requirements. We are Experts in Fast Track Education, our Intense courses have been designed cleverly not to compromise on Quality."}),Object(o.jsx)("div",{className:"col-md-12 mt-2 text-center",children:Object(o.jsx)(h.Link,{to:"/contact-us",children:Object(o.jsx)("button",{className:"btn btn-warning px-5",style:{backgroundColor:"#D9BD3E"},children:" Contact Us "})})})]})}),Object(o.jsx)("div",{className:"disp_pc",children:Object(o.jsx)(v,{})}),Object(o.jsx)(b,{}),Object(o.jsx)(g.a,{}),Object(o.jsx)(x.a,{}),Object(o.jsx)("div",{children:Object(o.jsx)(O.a,{})}),Object(o.jsx)("div",{className:"container-fluid learn-more",children:Object(o.jsx)("div",{className:"row get-qualified",children:Object(o.jsx)("div",{className:"col-md-12",children:Object(o.jsxs)("div",{className:"coursesDiscriptionCol",children:[Object(o.jsx)("h2",{children:"Chelsford, The Premier Aesthetic Training Institute"}),Object(o.jsx)("p",{className:"description",children:"We'll ensure that you reach a high standard of education and are competent in your chosen subject of study so you can move straight into the job industry. Enrol Today!"})]})})})})]})})}))}}]);
//# sourceMappingURL=27.32c4f886.chunk.js.map