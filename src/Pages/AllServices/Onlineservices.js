import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import "./Allservices.scss"

function Onlineservices() {
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
                    <h1 className='text_same'><b>Online Courses</b></h1>
                    <h5 className=' line_height pt-3  mb-0 display_pc'>
                    Join the growing ranks of successful laser and medical practitioners by enrolling in one of our introductory, intermediate, or advanced Online Training Courses. Our online courses cover the fundamental skills you will need at every stage of your career, from setting up and operating a laser to troubleshooting. You'll also learn about how lasers are used and gain an understanding of their unique applications in the beauty industry.
                    </h5>
                    <h5 className=' line_height pt-3  mb-0 display_mobile'>
                    Join the growing ranks of successful laser and medical practitioners by enrolling in one of our introductory, intermediate, or advanced Online Training Courses. Our online courses cover the fundamental skills you will need at every stage of your career, from setting up and operating a laser to troubleshooting. 
                    You'll also learn about how lasers are used and gain an understanding of their unique applications in the beauty industry.
                        </h5>
                    {/* <div className='col-md-12 pt-4 mt-3'>
                        <span className='button_scroll_down'> Scroll Down &nbsp; <span className='border_down_button'> <i class="fas fa-arrow-down"></i> </span> </span>
                    </div> */}
                </div>
                <div className='col-md-6 text-center img_spacing_mob m-auto'>
                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/online.png' className='img-fluid width_profiles' />
                </div>
            </div>
        </div>
        <div className='col-md-12 margin_negative_top'>
            <div className='col-md-12 text-center'>
                <h1 className='font_text1'><b>Popular Online Courses</b></h1>
                {/* <p className='color_text_sub_gray'>Our extensive range of courses are cleverly designed for you to achieve your goals. Some of the most in demand courses we offer.</p> */}
            </div>
            <div className='container px-md-5  mb-5'>
                <div className='row'>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/laser-core-of-knowledge"
                                className="hover__linka" >
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/3.png' className='img-fluid img_size_fix' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3 ><b> Laser Core Of Knowledge </b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>5 Qualifications Including VTCT Level 2 & 3 Beauty & Laser.</b> </h6>
                                <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                               
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-4 px-4'>
                        <div className='col-md-12 card_border pb-3'>
                        <Link
                            to="/course/level-3-anatomy-and-physiology-vtct"
                                className="hover__linka" > 
                            <div className='col-md-12'>
                                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/20.png' className='img-fluid img_size_fix' />
                            </div>
                            <div className='col-md-12 py-3 px-3'>
                                <h3 ><b> Level 3 Anatomy & Physiology VTCT</b></h3>
                                <h6 className='col-md-12 color_gray pb-3'> <b>5 Qualifications Including VTCT Level 2 & 3 Beauty & Laser.</b> </h6>
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

export default Onlineservices
