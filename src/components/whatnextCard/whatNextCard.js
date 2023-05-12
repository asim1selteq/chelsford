import { Link } from "react-router-dom";
// import { getFileSrcFromPublicFolderSpcialLHR } from "../../utils";
import "./whatNextCard.scss";
const WhatNextCard = ({ what_next }) => {
  const whats_next = [
    {
      title: "VTCT Level 5 Laser Tattoo Removal",
      seoUrl: "level-5-laser-tattoo-removal",
      imageUrl: "../contactimages/l6.png",
      detail: "The Only Recognised Tattoo Removal Qualification. Great Stepping Stone From Level 4 Laser And Perfect For Anyone Wanting To Add Tattoo Removal To Their Skills Or Treatments. Laser Tattoo Removal Is The Fastest Growing Laser Procedure On The Market. The Course Will Teach You Everything You Need To Know About Tattoo Removal.",
      detailmob: "Qualification To Become A Laser Tattoo Removal Specialist."
    },
    {
      title: "Laser Skin Resurfacing ",
      seoUrl: "laser-skin-resurfacing-training",
      imageUrl: '../contactimages/chelsfordscards/18.png',
      detail: "CO2 Medical Grade Lasers For Full Skin Ablation, Resurfacing.",
      detailmob: "CO2 Medical Grade Lasers For Full Skin Ablation, Resurfacing.",
    },
    {
      title: "Advanced Laser Diploma",
      seoUrl: "advanced-laser-diploma",
      imageUrl: "../contactimages/l5.png",
      detail: "A CPD Accredited Qualification That Gives You Knowledge Of All Advanced Laser Light And Heat Procedures. Get The Competitive Edge And Learn To Use The Latest Fractional Lasers, Non Ablative Lasers, Radio Frequency Devices, HIFU, Fat Freezing, Body Contouring, Fungal Nail Removal, Wart And Verrucae Removal.",
      detailmob: "Advance Your Laser Skills From Fungal Nail To Body Contouring."
      
    },
    {
      title: "Fat Freeze And Body Sculpting",
      seoUrl: "fat-freeze-and-body-sculpting",
      imageUrl: '../contactimages/l3.png',
      detail: "This CPD Accredited Course Is Perfect For Anyone Wanting To Qualify To Perform Laser Light And Heat Body Treatments. You Will Learn How To Perform Fat Freezing, Body Contouring, Cellulite Reduction And Skin Tightening Using Ice Lipo, Ultra Sound Cavitation, Radio Frequency And More. You Will Learn The Most Advanced Procedures In Today’s Market.",
      detailmob : "Covers Ice Lipo, Ultra Sound Cavitation & Radio Frequency"  
    },
    {
      title: "VTCT Level 4 Laser and Blemish Removal",
      seoUrl: "level-4-laser-and-blemish-removal",
      imageUrl: '../contactimages/l7.png',
      detail: "VTCT Diploma That Qualifies You To Become A Laser And Skin Aesthetician. You Do Not Need Any Previous Beauty Qualifications. The Course Covers Laser/IPL Hair Removal And Skin Treatments, Electrolysis Hair Removal, Advanced Blemish Removal And Microdermabrasion. Choose This Route If You Want To Learn Electrolysis Hair Removal And Advanced Blemish Removal.",
      detailmob : "Online VTCT Course Essential For All Beauty Therapists."  
      
    },
    {
      title: "CPD Advanced Chemical Peels",
      seoUrl: "cpd-advanced-chemical-peels",
      imageUrl: '../contactimages/chelsfordscards/16.png',
      detail: "Learn to use Chemical Peels to treat various skin conditions.",
      detailmob: "Learn to use Chemical Peels to treat various skin conditions.",
    },
    {
      title: "CPD Advanced Microneedling",
      seoUrl: "cpd-microneedling-diploma",
      imageUrl:'../contactimages/chelsfordscards/14.png',
      detail: "Learn how to improve Scarring, Blemishes & Collagen.",
      detailmob: "Learn how to improve Scarring, Blemishes & Collagen.",
    },
    {
      title: "CPD Advanced Plasma Fibroblast",
      seoUrl: "cpd-advanced-plasma-fibroblast",
      imageUrl: '../contactimages/chelsfordscards/12.png',
      detail: "Learn Plasma Non-Surgical Eye Lift procedure & Wrinkle Removal.",
      detailmob: "Learn Plasma Non-Surgical Eye Lift procedure & Wrinkle Removal.",
    },
  ];

  return (
      <div className="container px-md-5  mb-5">
        <div className="row">
          {whats_next.map((item) => (
            <div className="col-md-4 pt-4 px-4">
              <div className="col-md-12 card_border">
                <Link to={`/course/${item.seoUrl}`} className="hover__linka">
                  <div className="col-md-12">
                    <img
                      src={item.imageUrl}
                      style={{
                        borderTopRightRadius: "15px",
                        borderTopLeftRadius: "15px",
                      }}
                      className="img-fluid  w-100"
                    />
                  </div>
                  <div className="col-md-12 py-3 px-3">
                    <h3>
                      <b>{item.title}</b>
                    </h3>
                    <h6 className="col-md-12 color_gray pb-3 display_mobile">
                      {" "}
                      <b>{item.detailmob}</b>{" "}
                    </h6>
                    <h6 className="col-md-12 color_gray pb-3 display_pc">
                      {" "}
                      <b>{item.detail}</b>{" "}
                    </h6>
                    <span className="background_color_button_warning ">
                      FIND OUT MORE <i class="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default WhatNextCard;


// <div className="mt-4 col-md-12 ">
    //   <div className="what-next-card-cont">
    //     {/* card  */}
    //     {what_next?.map((what_next_cont, index) => {
    //       return (
    //         <div className="mx-1 mt-4 next-card-col">
    //           <div
    //             className={`py-2 col-md-12 background_card_color${index + 1}`}
    //           >
    //             <div className="text-center col-md-12">
    //               <img
    //                 className="img-fluid"
    //                 src={getFileSrcFromPublicFolderSpcialLHR(
    //                   "hat" + (index + 1) + ".png"
    //                 )}
    //               />
    //             </div>
    //             <div className="p-0 text-center col-md-12">
    //               <p className="pt-3 p_card1">{what_next_cont?.title}</p>
    //               <p className="p_cards2">{what_next_cont?.detail}</p>
    //             </div>
    //             <div className="px-1 text-right col-md-12">
    //               <p className="p_explore-it">
    //                 <Link to={`/course/${what_next_cont?.seoUrl}`}>
    //                   Explore More <i class="fas fa-angle-right"></i>
    //                 </Link>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>