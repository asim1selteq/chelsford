import React, { useEffect } from 'react';
import './International.scss';
import Vedio from '../../components/video/video/Vedio';
import Testimonial from '../../components/Testimonial/Testimonial';
import OurPartners from '../../components/OurPartners/OurPartners';
import { useState } from 'react';
import { bindActionCreators } from "redux";
import {
    FAEText,
    FAEButton,
    FAEDialogueBox,
    FAELoading,
    FAETextField,
  } from "@findanexpert-fae/components";

//src
import {
  makeSendMessageFalse,
  sendMessage,
} from "../../redux/actions/contactUsPageActions";
import {
  getFileSrcFromPublicFolder,
  getUniqueData,
  validateInput,
} from "../../utils";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { connect } from "react-redux";

const APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const bearer = process.env.REACT_APP_BEARER_TOKEN

const International = ({
    userCountry,
    messageSent,
    loading,
    error,
    sendMessage,
    makeSendMessageFalse,
}) => {
    document.title = "Chelsford | Contact Us";
  const phoneNumber = userCountry === "PK" ? "0518900207" : "+442070997738";
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [subject, setSubject] = useState("");
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [errorFields, setErrorFields] = useState([]);
  useEffect(() => {
    if (messageSent) {
      setOpen(true);
      setContent("Message sent, our specialist will contact you shortly.");
      toast.success("Your message has been sent we will get back to you shortly");
    }
  }, [messageSent]);
  const handleSubmit = (e) => {
    e.preventDefault();
    errorFields.some((e) => e.error === true)
      ? alert(errorFields.find((e) => e.error === true).message)
      : sendMessage({ subject, email, customerName, message });
  };

  console.log(customerName);
    return (
        <div className='col-md-12 g-0' style={{ overflowX: "hidden" }}>
            <div className="col-md-12 background_img"
                style={{ backgroundImage: "url('internationalimages/intBanner.jpg')" }}
            >
                <div className="row">
                    <div className="col-md-8">
                    </div>
                    <div className="py-5 col-md-4 ">
                        <div className="container px-5 pt-5">
                        {loading && (
              <FAELoading
                loaderImage={getFileSrcFromPublicFolder("loader.GIF")}
                type="svg"
                height="300px"
              />
            )}
             {!loading && (
                        <form onSubmit={handleSubmit}>
                        <div className='col-md-12 bg-white border_set px-1'>
                         <div className='col-md-12 text-center'>
                        <p className='send_message pt-3'>Send Message</p>
                        </div>
                        <div className='col-md-12 px-1 pb-1'>
                        <FAETextField
                        class="form-control input_message"
                         required
                         placeholder="Name"
                         type="text"
                         primary
                         shadowBoxProps={{ primary: true }}
                         getValue={(value) => {
                           setCustomerName(value);
                           setErrorFields(
                             getUniqueData(
                               [
                                 {
                                   id: 1,
                                   error:
                                     value === ""
                                       ? false
                                       : !validateInput(
                                           "^[a-zA-Z](([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                                           value,
                                         ),
                                   message:
                                     "Name can not have special characters and numbers!",
                                 },
                                 ...errorFields,
                               ],
                               "id",
                             ),
                           );
                         }}
                         error={(value) =>
                           value !== "" &&
                           !validateInput(
                             "^[a-zA-Z](([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                             value,
                           )
                         }
                         errorMessage={"Can not have special characters and numbers!"}
                         className='form-control input_message'  />
                        </div>
                        <div className='col-md-12 px-1 pb-1'>
                        <FAETextField 
                         primary
                         shadowBoxProps={{ primary: true }}
                         required
                         getValue={setEmail}
                        className='form-control input_message' placeholder='Email' type="email" />
                        </div>
                        <div className='col-md-12 px-1 pb-1'>
                        <FAETextField
                        primary
                        shadowBoxProps={{ primary: true }}
                        required
                        getValue={(value) => {
                          setSubject(value);
                          setErrorFields(
                            getUniqueData(
                              [
                                {
                                  id: 2,
                                  error:
                                    value === ""
                                      ? false
                                      : !validateInput(
                                          "^[a-zA-Z](([',. -][a-zA-Z ])?[a-zA-Z0-9]*)*$",
                                          value,
                                        ),
                                  message: "Subject can not have special characters!",
                                },
                                ...errorFields,
                              ],
                              "id",
                            ),
                          );
                        }}
                        error={(value) =>
                          value !== "" &&
                          !validateInput(
                            "^[a-zA-Z](([',. -][a-zA-Z ])?[a-zA-Z0-9]*)*$",
                            value,
                          )
                        }
                        errorMessage={"Can not have special characters!"}
                        className='form-control input_message' placeholder='Subject' type="text" />
                        </div>
                        <div className='col-md-12 px-1 pb-2'>
                        <FAETextField 
                          primary
                          shadowBoxProps={{ primary: true }}
                          required
                          getValue={(value) => {
                            setMessage(value);
                            setErrorFields(
                              getUniqueData(
                                [
                                  {
                                    id: 3,
                                    error:
                                      value === ""
                                        ? false
                                        : !validateInput(
                                            "^[a-zA-Z](([',. -][a-zA-Z ])?[a-zA-Z0-9]*)*$",
                                            value,
                                          ),
                                    message: "Message can not have special characters!",
                                  },
                                  ...errorFields,
                                ],
                                "id",
                              ),
                            );
                          }}
                          error={(value) =>
                            value !== "" &&
                            !validateInput(
                              "^[a-zA-Z](([',. -][a-zA-Z ])?[a-zA-Z0-9]*)*$",
                              value,
                            )
                          }
                          errorMessage={"Can not have special characters!"}
                        className='form-control input_message' placeholder='Message' type="text"  />
                        </div>
                        </div>
                        <div className='col-md-12 text-end pt-2'>
                         <button type='submit' className='button_background' >   <img className='img-fluid' src='../contactimages/messagee.png' /></button>
                        </div>
                        </form>
             )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 text-center col-md-12 background_color_blue">
                <p className="pb-0 mb-0">
                    <span className="percent">International Intakes Open</span>
                </p>
            </div>

            <div className="col-md-12 background_color_of_inter"></div>

            <div className="py-5 col-md-12 background_neg_mar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="px-4 pt-4 mt-3 text-center col-md-12 background_card_style">
                                <img className="img-fluid image_width_of_card" src="internationalimages/ico1.png" />
                                <p className="pt-2 pb-3 mb-0 card_head">Laser Treatment</p>
                                <p className="pb-0 mb-0 card_sub_head">Experts In Aesthetic Laser Training Since 2008 </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="px-4 pt-4 mt-3 text-center col-md-12 background_card_style">
                                <img className="img-fluid image_width_of_card" src="internationalimages/ico2.png" />
                                <p className="pt-2 pb-3 mb-0 card_head">Medical Services</p>
                                <p className="pb-0 mb-0 card_sub_head">Get Trained By Expert Doctors In Aesthetic Treatments</p>
                            </div></div><div className="col-md-4"><div className="px-4 pt-4 mt-3 text-center col-md-12 background_card_style">
                                <img className="img-fluid image_width_of_card" src="internationalimages/ico3.png" />
                                <p className="pt-2 pb-3 mb-0 card_head">Beauty Services</p>
                                <p className="pb-0 mb-0 card_sub_head">Accredited Beauty Courses For All Levels</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 background_image_about"
                style={{ backgroundImage: "url('internationalimages/inter3.png')" }}
            >
                <div className="pt-4 row">
                    <div className="col-md-6">
                        <img className="img-fluid" src="internationalimages/inter1.png" />
                    </div>
                    <div className="m-auto col-md-6">
                        <div className="py-5 col-md-12 ">
                            <div className="py-5 col-md-12 background_aboutus">
                                <div className="col-md-12">
                                    <p className="px-4 heading_train">Why Train with us?</p>
                                    <div className="px-4 col-md-12 border_left_aoutus">
                                        <p className="give_you_top">Let us give you these top reasons why you should train with us:</p>
                                        <ul className="give_you_top">
                                            <li>Qualified Trainers</li>
                                            <li>Globally Recognised Certificate</li>
                                            <li>Fast-track your Career</li>
                                            <li>Get Trained in Running Clinics</li>
                                            <li>Legal Requirements Satisfied</li>
                                            <li>Quality is Our Hallmark</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 col-md-12 background_uk">
                <div className="row">
                    <div className="m-auto col-md-6">
                        <div className="container color_text_ibnter">
                            <img className="pb-4 img-fluid image_width_line" src="internationalimages/line.png" />
                            <p>We are the UK's Most Advanced Aesthetic Training Institution providing Beauty, Laser &amp; Medical Training. Recognised qualifications in Beauty, Laser and Medical Aesthetics. Our Advanced courses include Laser Body contouring, Tattoo removal, Plasma, Injectables, CO2, Carboxy, PRP, Vaginal Rejuvenation, Botox, Fillers, Meso cocktails and more.</p><p>We are experts in what we do, so you're pretty much guaranteed to be taught by the best Aesthetic Trainers. Teaching takes place in a running clinic with a heavy emphasis on practical experience. We go beyond the Syllabus, we have treated thousands of patients &amp; will pass our years of expert knowledge onto you. We work with the UK's top Awarding bodies and offer qualifications that are Internationally recognised &amp; satisfy Insurance requirements.</p><p>We are Experts in Fast Track Education, our Intense courses have been designed cleverly not to compromise on Quality.
                            </p>
                        </div>
                    </div>
                    <div className="text-center col-md-6">
                        <img className="img-fluid" src="internationalimages/inter2.png" />
                    </div>
                </div>
            </div>

            <div className="pt-3 text-center col-md-12">
                <p className="pop_heading">Popular Courses for International Students</p>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="my-3 col-md-3">
                        <a className="link_style_none" href="/course/laser-core-of-knowledge">
                            <div className="col-md-12" style={{ boxShadow: 'rgba(211, 211, 211, 0.447) 1px 1px 7px 7px', borderRadius: '5px', height: '22vh', overflow: 'hidden' }}>
                                <img className="img-fluid" src="internationalimages/3.png" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px', objectFit: 'cover', height: '22vh', width: '100%' }} />
                            </div>
                            <div className="pt-3 pb-2 text-center col-md-12" style={{ color: 'white', backgroundColor: 'rgb(30, 24, 95)', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                                <h6 style={{ fontSize: '85%' }}><b>Laser Core Of Knowledge</b>
                                </h6>
                            </div>
                        </a>
                    </div>
                    <div className="my-3 col-md-3">
                        <a className="link_style_none" href="/course/level-3-anatomy-and-physiology-vtct">
                            <div className="col-md-12" style={{ boxShadow: 'rgba(211, 211, 211, 0.447) 1px 1px 7px 7px', borderRadius: '5px', height: '22vh', overflow: 'hidden' }}>
                                <img className="img-fluid w-100" src="internationalimages/4.png" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px', objectFit: 'cover', height: '22vh', width: '100%}}' }} />
                            </div>
                            <div className="pt-3 pb-2 text-center col-md-12" style={{ color: 'white', backgroundColor: 'rgb(30, 24, 95)', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                                <h6 style={{ fontSize: '85%' }}>
                                    <b>Level 3 Anatomy &amp; Physiology VTCT </b>
                                </h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
            <div className='col-md-12 mt-4 mb-4'>
            <Vedio/>
            </div>
            <div className='col-md-12 mt-4 mb-4'>
            <Testimonial />
            </div>
            <div className='col-md-12 mt-4 mb-4'>
            <OurPartners/>
            </div>
            <div className='col-md-12 background_last text-center py-5'>
                <h1 className='golden_text'><b>Chelsford, The Premier Aesthetic Training Institute</b></h1>
                <h6 className='mb-0 sub_line_head'>We'll ensure that you reach a high standard of education and are competent in your chosen subject of study<br/> so you can move straight into the job industry. Enrol Today!</h6>
            </div>
        </div>
    )
}

const mapStateToProps = ({
    contactUsPageReducer: { messageSent, loading, error },
    defaultReducer: { userCountry },
  }) => ({
    userCountry,
    messageSent,
    loading,
    error,
  });
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        sendMessage,
        makeSendMessageFalse,
      },
      dispatch,
    );
  };
  

export default connect(mapStateToProps, mapDispatchToProps) (International)