import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import "./Allservices.scss"

function Laserservices() {

       ///// loading
       const [isLoading, setIsLoading] = useState(true);

       useEffect(() => {
         // simulate an API call or other time-consuming operation
         setTimeout(() => {
           setIsLoading(false);
         }, 3000);
       }, []);
     
     
     
  return (
    <>
    {isLoading ? (
       <div class="col-md-12 height_og_div " role="status"> 
       <img src='../assets/images/loader.GIF' className="img-fluid img_width_loader" />
     </div> 
     
      ):(
        <div className='col-md-12 background_over_flow'>
        <div className='col-md-12 background_color_image '>
            <div className='row '>
                <div className='col-md-6 padding_handle '>
                    <h1 className='text_same  '><b>Laser Training</b></h1>
                    <h5 className=' line_height pt-1 mb-0 display_pc  '>
                    Our laser training is designed to give you a complete grounding in laser procedures.  With over 20 years’ experience in the Laser industry we can help with job placement, setting up a clinic, purchasing of laser equipment, council licensing and ongoing support.  Courses are run in state of the art training facility with heavy emphasis on practical experience. Chelsford is the premier aesthetic training institute where the finest aesthetic trainers in the UK will instill their knowledge to develop your professional skills. All our Laser courses satisfy Insurance, Council and JCCP regulations.
                    </h5>
                    <h5 className=' line_height pt-1 mb-0 display_mobile  '>
                    Our laser training is designed to give you a complete grounding in laser procedures.  With over 20 years’ experience in the Laser industry we can help with job placement, setting up a clinic, purchasing of laser equipment, council licensing and ongoing support.  Courses are run in state of the art training facility with heavy emphasis on practical experience. 
                   Chelsford is the premier aesthetic training institute where the finest aesthetic trainers in the UK will instill their knowledge to develop your professional skills. All our Laser courses satisfy Insurance, Council and JCCP regulations.</h5>
                    {/* <div className='col-md-12 pt-4 mt-3'>
                        <span className='button_scroll_down'> Scroll Down &nbsp; <span className='border_down_button'> <i class="fas fa-arrow-down"></i> </span> </span>
                    </div> */}
                </div>
                <div className='col-md-6 text-center m-auto img_spacing_mob'>
                    {/* <img src='../contactimages/profile.svg' className='img-fluid' /> */}
                    <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/laser.png' className='img-fluid width_profiles' />
                </div>
            </div>
        </div>
        <div className='col-md-12 margin_negative_top'>
            <div className='col-md-12 text-center'>
                <h1 className='font_text1'><b>Popular Laser Courses</b></h1>
                {/* <p className='color_text_sub_gray'>Our extensive range of courses are cleverly designed for you to achieve your goals. Some of the most in demand courses we offer.</p> */}
            </div>
            <div className='container px-md-5  mb-5'>
                <div className='row'>
                <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/laser-practitioner-diploma-vtct"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/l2.png' className='img-fluid' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3 ><b> Laser Practitioner Diploma <br/> VTCT</b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile' > <b>5 Qualifications Including VTCT Level 2 & 3 Beauty & Laser.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>Suitable for complete beginners and for those wishing to change their career. Choose this course if you do not have a Level 2 or Level 3 beauty therapy. This course gives you 3 Qualifications, VTCT Level 2 Facials, VTCT Level 3 Beauty Therapy and VTCT Level 4 Laser and IPL. This is the fastest route to becoming a qualified beauty and laser therapist. </b> </h6>
                              <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/vtct-level-4-laser-and-ipl-treatments"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/23.png' className='img-fluid img_size_fix' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>VTCT NVQ Level 4 Laser & IPL Training</b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>Necessary Qualification to enter the world of Lasers & IPL.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>Necessary foundation qualification if you would like to practice Laser and IPL treatments.  The Level 4 course is recognised by all insurance companies and councils. Qualify to perform Laser hair removal, Pigmented lesion removal, Vein removal, Photo Rejuvenation, IPL Acne, IPL Rosacea and Skin tightening using Laser and IPL devices. </b> </h6>
                                <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/vtct-level-4-laser-and-ipl-treatments-fast-track"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/las2.jpg' className='img-fluid' style={{borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}} />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>VTCT Level 4 Laser And IPL Traning Fast Track</b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>Fast Track Qualification to enter the world of Lasers & IPL.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>Fast Track foundation qualification if you would like to practice Laser and IPL treatments.  The Level 4 course is recognised by all insurance companies and councils. Qualify to perform Laser hair removal, Pigmented lesion removal, Vein removal, Photo Rejuvenation, IPL Acne, IPL Rosacea and Skin tightening using Laser and IPL devices. </b> </h6>
                                <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                                
                            </div>
                            </Link>
                        </div>
                     
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/level-4-laser-and-blemish-removal"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/l7.png' className='img-fluid' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b> Level 4 Laser and Blemish Removal</b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>Online VTCT course essential for all Beauty Therapists.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>VTCT Diploma that qualifies you to become a laser and skin aesthetician. You do not need any previous beauty qualifications. The course covers Laser/IPL Hair removal and skin treatments, Electrolysis Hair Removal, Advanced Blemish Removal and Microdermabrasion. Choose this route if you want to learn Electrolysis Hair Removal and Advanced Blemish Removal. </b> </h6>
                               
                                <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                                
                            </div>
                            </Link>
                        </div>
                    </div>
                  


                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/level-5-laser-tattoo-removal"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/l6.png' className='img-fluid' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>Level 5 Laser Tattoo Removal</b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>Qualification to become a Laser Tattoo removal specialist.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>The only recognised Tattoo Removal Qualification. Great stepping stone from Level 4 Laser and 
Perfect for anyone wanting to add Tattoo Removal to their skills or treatments. Laser tattoo removal is the fastest growing laser procedure on the market. The course will teach you everything you need to know about tattoo removal. </b> </h6>
                                <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                                
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/advanced-laser-diploma"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/l5.png' className='img-fluid' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b> Advanced Laser Diploma</b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>Advance your Laser skills from Fungal Nail to Body Contouring.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>A CPD accredited qualification that gives you knowledge of all Advanced Laser Light and Heat procedures. Get the competitive edge and learn to use the latest Fractional Lasers, Non Ablative Lasers, Radio Frequency devices, HIFU, Fat Freezing, Body Contouring, Fungal Nail Removal, Wart and Verrucae Removal. </b> </h6>
                               <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/fat-freeze-and-body-sculpting"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/l3.png' className='img-fluid' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b> Fat Freeze and Body Sculpting </b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>Covers Ice Lipo, Ultra Sound Cavitation & Radio Frequency.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>This CPD accredited course is perfect for anyone wanting to qualify to perform Laser Light and Heat Body treatments. You will learn how to perform Fat Freezing, Body Contouring, Cellulite Reduction and Skin Tightening using Ice Lipo, Ultra sound cavitation, Radio Frequency and more. You will learn the most advanced procedures in today’s market. </b> </h6>
                               <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>


                    {/* <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/level-4-laser-hair-removal"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='../contactimages/l4.png' className='img-fluid' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b> Level 4 Laser Hair Removal </b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>Knowledge of Laser, IPL & Fitzpatrick Skin Types.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>Necessary Qualification to enter the world of Lasers & IPL.</b> </h6>
                                <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div> */}
                    <div className='col-md-4 pt-4 px-4'>
                        
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/laser-core-of-knowledge"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/l1.png' className='img-fluid' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b> Laser Core of Knowledge</b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>Online course essential for Beauty Therapists.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>Mandatory qualification if you practice Laser and IPL treatments. Our core of knowledge is a simple online course and certificate is posted. Covers all the risks and hazards of class 4 lasers to the eye area. Also covers Laser and IPL wavelength and the minimum requirements of room layout and standards.</b> </h6>
                                <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                                
                            </div>
                            </Link>
                        </div>
                     
                    </div>

                    <div className='col-md-4 pt-4 px-4'>
                        {/* ../contactimages/l8.jpg */}
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/cpd-laser-blemish-removal"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src="https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/l8.jpg" style={{borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}} className='img-fluid' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>CPD laser blemish removal </b></h3>
                                <h6 className='col-md-12 color_gray pb-3 display_mobile'> <b>This CPD accredited course teaches you to remove different types of blemishes using Laser devices. Advanced your skills and add offer blemish removal to your clients.</b> </h6>
                                <h6 className='col-md-12 color_gray pb-3 display_pc'> <b>This CPD accredited course teaches you to remove different types of blemishes using Laser devices. </b> </h6>
                                <span className='background_color_button_warning '>FIND OUT MORE <i class="fas fa-arrow-right"></i></span>
                                
                            </div>
                            </Link>
                        </div>
                     
                    </div>
                 
                </div>
            </div>
        </div>
    </div>
      )}
      
    
   
    </>
  )
}

export default Laserservices