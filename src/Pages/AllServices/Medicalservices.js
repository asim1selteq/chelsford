import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import "./Allservices.scss"

function Medicalservices() {
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
            <div className='row'>
                <div className='col-md-6 padding_handle pt-3'>
                    <h1 className='text_same'><b>Medical Courses</b></h1>
                    <h5 className=' line_height pt-3 mb-0 display_pc'>
                    Want a career that's demanding & financially rewarding? At Chelsford, we teach you everything you need to embrace a career in a lucrative medical aesthetics industry. Our medical courses will help you become a competent, confident, and well-rounded professional.  Our qualified instructors routinely review our courses, ensuring you stay current on recent technologies and techniques. You don't have to worry about mastering every last detail - our experienced professionals are ready to help you out whenever there is a problem.
                    </h5>
                    <h5 className=' line_height pt-3 mb-0 display_mobile'>
                    Want a career that's demanding & financially rewarding? At Chelsford, we teach you everything you need to embrace a career in a lucrative medical aesthetics industry. Our medical courses will help you become a competent, confident, and well-rounded professional. 
                    Our qualified instructors routinely review our courses, ensuring you stay current on recent technologies and techniques. You don't have to worry about mastering every last detail - our experienced professionals are ready to help you out whenever there is a problem.
                        </h5>
                    {/* <div className='col-md-12 pt-4 mt-3'>
                        <span className='button_scroll_down'> Scroll Down &nbsp; <span className='border_down_button'> <i class="fas fa-arrow-down"></i> </span> </span>
                    </div> */}
                </div>
                <div className='col-md-6 text-center m-auto img_spacing_mob'>
                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/medical.png' className='img-fluid width_profiles' />
                </div>
            </div>
        </div>
        <div className='col-md-12 margin_negative_top'>
            <div className='col-md-12 text-center'>
                <h1 className='font_text1'><b>Popular Medical Treatment</b></h1>
                {/* <p className='color_text_sub_gray'>Our extensive range of courses are cleverly designed for you to achieve your goals. Some of the most in demand courses we offer.</p> */}
            </div>
            <div className='container px-md-5  mb-5'>
                <div className='row'>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/medical-aesthetics-diploma"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/12.png' className='img-fluid img_size_fix' />

                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>Medical Aesthetics Diploma </b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>Advanced Aesthetic Procedures from Injectables, PRP & CO2.</b> </h6>
                                <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                                
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/foundation-botox-and-dermal-fillers"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/2.png' className='img-fluid img_size_fix'/>
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>Foundation Botox & Dermal Fillers </b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>Learn Advanced Injectable techniques to rejuvenate the skin.</b> </h6>
                                <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/advanced-botox-and-dermal-fillers"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/22.png' className='img-fluid img_size_fix' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b> Advanced Botox & Dermal Fillers</b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>5 Qualifications Including VTCT Level 2 & 3 Beauty & Laser.</b> </h6>
                                <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>


                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/advanced-dermal-fillers"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/7.png' className='img-fluid img_size_fix'/>
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b> Advanced Dermal Fillers</b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>5 Qualifications Including VTCT Level 2 & 3 Beauty & Laser.</b> </h6>
                              <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/prp-advanced-treatments"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/20.png' className='img-fluid img_size_fix' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>  PRP Advanced Treatments </b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>Learn to use PRP techniques for Hair, Skin & Dark Eyes.</b> </h6>
                                <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/laser-skin-resurfacing-training"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/18.png' className='img-fluid img_size_fix' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>  Laser Skin Resurfacing Training </b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>CO2 Medical grade lasers for full skin ablation, resurfacing.</b> </h6>
                                 <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>


                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/intimate-laser-rejuvenation"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/19.png' className='img-fluid img_size_fix' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3><b>  Intimate Laser Rejuvenation Training </b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>Qualify to perform Medical Vaginal Tightening & Rejuvenation.</b> </h6>
                               <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)}
    </>
  )
}

export default Medicalservices