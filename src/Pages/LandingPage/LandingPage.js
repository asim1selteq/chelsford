//libs
import React, { useEffect, useState } from "react"; 
import  "../../components/chelsfordCSS.css"
import PicContainer from "../../components/picContainer/PicContainer"
import SubContainer from "../../components/Sub/SubContainer"
import CetagoryContainer from "../../components/cetagoryContainer/CetagoryContainer"
 
import Collapse from 'react-bootstrap/Collapse';
 import courseDetailContent from '../../statics/courseDetailContent.json'
import {getCookies, getFileSrcFromPublicFolder, getFileSrcFromPublicFolderSpcialLHR, replaceSpaces} from "../../utils"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//src  
import "./LandingPage.scss";  
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Testimonial from "../../components/Testimonial/Testimonial";
import "../ServiceContentPage/contentDetail.css"
import Vedio from "../../components/video/video/Vedio";
import OurPartners from "../../components/OurPartners/OurPartners";
import Aboutuspage from "./Aboutuspage";
import { Link } from "react-router-dom";

 
const LandingPage = ({ 
  getNotificationsList,   
}) => {    
  document.title = "Chelsford | Trainings";
 
    useEffect( async() => {
          window.scrollTo(0, 0);
        }, [ 
    ]);

    function sectionCatHandler(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active-tab";
    } 

  const [contentData, setContentData]= useState([])
  useEffect(()=>{
    const courseContent= courseDetailContent.filter((item)=>item.page_link=="home-page")
    setContentData(courseContent) 
  }, [])
  const {course_information,summary_description, course_module, featur_content, instruction_content, page_link, what_next}= contentData[0] || {}
  const [open, setOpen] = useState(false);

  return (
      <>  
        <div style={{overflowX:"hidden"}}>
         <PicContainer />
          <SubContainer />
          <div className="container pb-5 ">
            <div className="col-md-12 background_card_color_aboutus disp_mob">
          <h2 className="headContenter__text pb-3" >About Us</h2>
           <p className="text-center paraa_graph_text">We are the UK's Most Advanced Aesthetic Training Institution providing Beauty, Laser & Medical Training. 
           Recognised qualifications in Beauty, Laser  and Medical Aesthetics. Our Advanced courses include Laser Body contouring, Tattoo removal, Plasma, Injectables, CO2, Carboxy, PRP, Vaginal Rejuvenation, Botox, Fillers, Meso cocktails and more.  
           We are experts in what we do, so you're pretty much guaranteed to be taught by the best Aesthetic Trainers. 
           Teaching takes place in a running clinic with a heavy emphasis on practical experience. We go beyond the Syllabus, we have treated thousands of patients & will pass our years of expert knowledge onto you. 
           We work with the UK's top Awarding bodies and offer qualifications that are Internationally recognised & satisfy Insurance requirements. 
           We are Experts in Fast Track Education, our Intense courses have been designed cleverly not to compromise on Quality.</p>
           <div className="col-md-12 mt-2 text-center">
            <Link to="/contact-us">
           <button className="btn btn-warning px-5" style={{backgroundColor:"#D9BD3E"}}> Contact Us </button>
           </Link>
           </div>
           </div>
           </div>
           <div className="disp_pc">
           <Aboutuspage />
           </div>
          <CetagoryContainer />
          
          <Vedio/>
         
 
    {/* testimonial section  */}
     <Testimonial />
    {/* // {{-- content page section 6 --}} */}
    <div >
          <OurPartners/>
          </div> 
    <div className="container-fluid learn-more" >
        <div className="row get-qualified">
              <div className="col-md-12">
                <div className="coursesDiscriptionCol">
                    <h2>Chelsford, The Premier Aesthetic Training Institute</h2>
                    <p className="description">We'll ensure that you reach a high standard of education and are competent in your chosen subject of study so you can move straight into the job industry. Enrol Today!</p> 
                </div> 
              </div>
          
            </div>
          </div>  
         
         </div>
       </>
     );
   };




const mapStateToProps = ({ 
  defaultReducer: { userCountryId, userCountry }, 
}) => { 
        return { 
          userCountryId, 
          userCountry, 
        }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(  {      },   dispatch  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

 
