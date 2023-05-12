import React from 'react'
import "./LandingPage.scss"

function Aboutuspage() {
  return (
    <>
    <div className='col-md-12 background_image_aboutus mb-4 ' >
        <div className='row'>
            <div className='col-md-6'>
                <img className='img-fluid padding_image' src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/cosm.png' alt='contact-cosm'/>
            </div>
            <div className='col-md-6 m-auto py-5'>
                <p className='mb-0 pb-0 font_text'>Why Train<br/> with us?</p>
                <p className='text_why_with_us pt-2'>Let us give you these top reasons why you should train with us:</p>
                <ul className='px-3'>
                    <li className='color_li'>Qualified Trainers</li>
                    <li className='color_li pt-2'>Globally Recognised Certificate</li>
                    <li className='color_li pt-2'>Fast-track your Career</li>
                    <li className='color_li pt-2'>Get Trained in Running Clinics</li>
                    <li className='color_li pt-2'>Legal Requirements Satisfied</li>
                    <li className='color_li pt-2'>Quality is Our Hallmark</li>
                </ul>
            </div>
        </div>
        
    </div>
    <div className='container mb-4'>
    <div className='row'>
            <div className='col-md-6'>
                <p className='text_para_advance'>
                We are the UK's Most Advanced Aesthetic Training Institution providing Beauty, Laser & Medical Training. Recognised qualifications in Beauty, Laser  and Medical Aesthetics. Our Advanced courses include Laser Body contouring, Tattoo removal, Plasma, Injectables, CO2, Carboxy, PRP, Vaginal Rejuvenation, Botox, Fillers, Meso cocktails and more. 
                </p>
                <p className='text_para_advance'>
                We are experts in what we do, so you're pretty much guaranteed to be taught by the best Aesthetic Trainers. Teaching takes place in a running clinic with a heavy emphasis on practical experience. We go beyond the Syllabus, we have treated thousands of patients & will pass our years of expert knowledge onto you.
We work with the UK's top Awarding bodies and offer qualifications that are Internationally recognised & satisfy Insurance requirements.
                </p>
                <p className='text_para_advance'>
                We are Experts in Fast Track Education, our Intense courses have been designed cleverly not to compromise on Quality.
                </p>
                


            </div>
            <div className='col-md-6 text-center image_top_mar_neg'>
                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/agirl.png' className='img-fluid img_width_landing' alt='contact-girl'/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Aboutuspage