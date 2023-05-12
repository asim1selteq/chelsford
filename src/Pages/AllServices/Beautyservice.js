import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import "./Allservices.scss"

function Beautyservice() {

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
            <div className='col-md-6 pt-2 padding_handle'>
                <h1 className='text_same' ><b>Beauty Courses</b></h1>
                <h5 className=' line_height pt-3 mb-0 display_pc'>
                Achieve your dreams of working in the most lucrative and glamorous industry around. At Chelsford, our VTCT, internationally recognised beauty trainings will teach you all you need to confidently start a career in the beauty industry. We'll supply you with practical, resources, and course materials.  Moreover, you'll learn everything from therapies to business management and lead you through three levels of training i-e foundation, intermediate, and advanced. Our trainings will give you the confidence to perform treatments in our state-of-the-art clinics.
                </h5>
                <h5 className=' line_height pt-3 mb-0 display_mobile'>
                Achieve your dreams of working in the most lucrative and glamorous industry around. At Chelsford, our VTCT, internationally recognised beauty trainings will teach you all you need to confidently start a career in the beauty industry. We'll supply you with practical, resources, and course materials.
                Moreover, you'll learn everything from therapies to business management and lead you through three levels of training i-e foundation, intermediate, and advanced. Our trainings will give you the confidence to perform treatments in our state-of-the-art clinics.
                    </h5>
                {/* <div className='col-md-12 pt-4 mt-3'>
                    <span className='button_scroll_down'> Scroll Down &nbsp; <span className='border_down_button'> <i class="fas fa-arrow-down"></i> </span> </span>
                </div> */}
            </div>
            <div className='col-md-6 text-center m-auto img_spacing_mob'>
            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/beauty.png' className='img-fluid width_profiles' />
            </div>
        </div>
    </div>
    <div className='col-md-12 margin_negative_top'>
        <div className='col-md-12 text-center'>
            <h1 className='font_text1'><b>Popular Beauty Courses</b></h1>
            {/* <p className='color_text_sub_gray'>Our extensive range of courses are cleverly designed for you to achieve your goals. Some of the most in demand courses we offer.</p> */}
        </div>
        <div className='container px-md-5  mb-5'>
            <div className='row'>
                {/* Card Section 1  */}
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/vtct-level-2-nvq-beauty-therapy"
                            className="hover__linka" >
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/16.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b> NVQ Level 2 Beauty Therapy</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>The first Qualification to become a Beauty Therapist.</b> </h6>
                          <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                          
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/vtct-level-3-nvq-beauty-therapy"
                            className="hover__linka" > 
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/5.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b>NVQ Level 3 Beauty Therapy</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Become a Qualified, Recognised, Insured Beauty Therapist. </b> </h6>
                           <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                         
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/fast-track-vtct-level-3-nvq-beauty-therapy"
                            className="hover__linka" >
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/21.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b> Fast Track VTCT Level 3 NVQ Beauty Therapy</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Become a Qualified, Recognised, Insured Beauty Therapist. </b> </h6>
                            <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                           
                        </div>
                        </Link>
                    </div>
                </div>

                {/* Card Section 2  */}
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/vtct-level-2-and-3-nvq-beauty-therapy"
                            className="hover__linka" >
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/9.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b> VTCT Level 2 and 3 NVQ Beauty Therapy</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>A job-ready qualification combines Level 2 & Level 3 Beauty Therapy.</b> </h6>
                           <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                           
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/vtct-level-2-3-and-4-nvq-beauty-and-laser"
                            className="hover__linka" >
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/17.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b>VTCT Level 2, 3 and 4 NVQ Beauty & Laser</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>A 3-in-1 qualification. In-depth knowledge of Level 2, 3 & 4, Laser & Light.</b> </h6>
                             <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                           
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/vtct-level-2-award-facial-and-skincare"
                            className="hover__linka" >
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/7.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b> VTCT Level 2 Award Facials </b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Knowledge & practical skills in providing Facial Massage & Skincare</b> </h6>
                            <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                          
                        </div>
                        </Link>
                    </div>
                </div>

                {/* Card Section 3  */}
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/vtct-level-3-in-epilation"
                            className="hover__linka" > 
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/15.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b>   VTCT Level 3 in Epilation</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Anatomy of face, theory of Botox & Dermal Fillers</b> </h6>
                           <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                           
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/vtct-level-3-facial-electrotherapy"
                            className="hover__linka" >
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/13.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b> VTCT Level 3 Facial Electrotherapy</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Become a Qualified, Recognised, Insured Beauty Therapist.</b> </h6>
                           <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                           
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/vtct-level-4-skin-blemish-removal"
                            className="hover__linka" > 
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/8.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b>  VTCT Level 4 Skin Blemish Removal</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Learn Advanced techniques to remove Skin tags, Milia & Veins.</b> </h6>
                           <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                            
                        </div>
                        </Link>
                    </div>
                </div>

                {/* {/* Card Section 4  */}
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/cpd-advanced-chemical-peels"
                            className="hover__linka" > 
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/16.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b> CPD Advanced Chemical Peels</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Learn to use Chemical Peels to treat various skin conditions.</b> </h6>
                          <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                           
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/cpd-advanced-plasma-fibroblast"
                            className="hover__linka" >
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/12.png' className='img-fluid img_size_fix' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b> CPD Advanced Plasma Fibroblast</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Learn Plasma Non-Surgical Eye Lift procedure & Wrinkle Removal.</b> </h6>
                           <span className='background_color_button_warning '>Click to Explore <i class="fas fa-arrow-right"></i></span>
                           
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-4 pt-4 px-4'>
                    <div className='col-md-12 card_border pb-3'>
                    <Link
                        to="/course/cpd-microneedling-diploma"
                            className="hover__linka" > 
                        <div className='col-md-12'>
                            <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/chelsfordscards/14.png' className='img-fluid' />
                        </div>
                        <div className='col-md-12 py-3 px-3'>
                            <h3><b> CPD-Microneedling-Diploma</b></h3>
                            <h6 className='col-md-12 color_gray pb-3'> <b>Learn how to improve Scarring, Blemishes & Collagen.</b> </h6>
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

export default Beautyservice