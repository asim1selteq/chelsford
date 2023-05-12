import 'bootstrap/dist/css/bootstrap.css'
import "./Newcontact.scss"
// import 'font-awesome/css/font-awesome.min.css'
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter, FaYoutube, MdEmail, MdLocationOn } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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




const Newcontactus = ({
     userCountry,
  messageSent,
  loading,
  error,
  sendMessage,
  makeSendMessageFalse,
}) => {

const mailIcon = getFileSrcFromPublicFolder("mail_icon.svg");
const callIcon = getFileSrcFromPublicFolder("call_icon.svg");
const messageIcon = getFileSrcFromPublicFolder("message_icon.svg");


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
    <div className='col-md-12'>
        <ToastContainer />
        <div className='col-md-12 background_image_contact_us'>
            <div className='col-md-12'>
                <h3 className='text_white_heading'>Get in Touch</h3>
                <div className='row'>
                  <div className='col-md-3'></div>
                  <div className='col-md-6'>
                  <p className='sub_heading'>
                We are looking forward to hearing from you. If you would like to know more information on our courses or you’re not sure which is the right course for you please get in touch with us. Our tutors will be more than happy to help and guide you.
                </p>
                  </div>
                  <div className='col-md-3'></div>
               
                </div>
            </div>
            <div className='container pt-4 px-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md-1 col-2 px-0'>
                                <img className='img-fluid' src="../contactimages/location.png" />
                            </div>
                            <div className='col-md-9 col-10 pt-1'>
                                <p className='address_head mb-0'>Address</p>
                                <p className='address_sub_head'><a href="https://www.google.com/maps/place/50+Mark+Ln,+London+EC3R+7QR,+UK/@51.510027,-0.080195,16z/data=!4m6!3m5!1s0x4876034dd00418d9:0x2e48f1389f2b1ecd!8m2!3d51.5100273!4d-0.0801949!16s%2Fg%2F11b8vcj9jl?hl=en" target="_blank" className="text__a">50 Mark Lane (First Floor),
                                London
                                EC3R 7QR</a></p>
                            </div>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-1 col-2 col-2 px-0'>
                                <img className='img-fluid' src="../contactimages/phone.png" />
                            </div>
                            <div className='col-md-9 col-10 pt-1'>
                                <p className='address_head mb-0'>Phone</p>
                                <p className='address_sub_head'> <a href="tel:0800 955 0054" className="text__a">0800 955 0054</a></p>
                            </div>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-1 col-2 px-0'>
                                <img className='img-fluid' src="../contactimages/message.png" />
                            </div>
                            <div className='col-md-9 col-10 pt-1'>
                                <p className='address_head mb-0'>Email</p>
                                <p className='address_sub_head'> <a href="mailto:team@chelsford.com" className="text__a">team@chelsford.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
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
        <div className='container pt-5 px-5 mt-3 mb-5'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='col-md-12 text-center'>
                        <p className='central_london mb-2'>Tower Hill London</p>
                        <p className='paragraph_central pb-4'> 50 Mark Lane, Floor 1, London, EC3R 7QR</p>
                    </div>
                    <div className='col-md-12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.17380440048!2d-0.08238358444245486!3d51.51002727963545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034dd00418d9%3A0x2e48f1389f2b1ecd!2s50%20Mark%20Ln%2C%20London%20EC3R%207QR%2C%20UK!5e0!3m2!1sen!2s!4v1678188702159!5m2!1sen!2s"  width="100%" height="310" className='g_map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='col-md-4 padding_top_equal'>
                    <div className='col-md-12 px-3'>
                        <div className='row'>
                            <div className='col-md-3 col-3'>
                                <img className='img-fluid' src="../contactimages/underground.png" />
                            </div>
                            <div className='col-md-9 col-9 m-auto pt-3 '>
                            <p className='underground_font'>Closest Tube stations: </p>
                            </div>
                        </div>
                        <div className='row pt-2'>
                            <div className='col-md-2 col-2 text-end px-2'>
                                <img className='img-fluid' src="../contactimages/sman1.png" />
                            </div>
                            <div className='col-md-10 col-10 m-auto pl-0 '>
                            <p className='underground_font1'>Tower Hill (2 Mins) </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-2 text-end px-2'>
                                <img className='img-fluid' src="../contactimages/sman2.png" />
                            </div>
                            <div className='col-md-10 col-10 m-auto pl-0 '>
                            <p className='underground_font1'>Fenchurch Street (4 Mins)</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-2 text-end px-2'>
                                <img className='img-fluid' src="../contactimages/sman3.png" />
                            </div>
                            <div className='col-md-10 col-10 m-auto pl-0 '>
                            <p className='underground_font1'>Monument (5 Mins) </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-2 text-end px-2'>
                                <img className='img-fluid' src="../contactimages/sman4.png" />
                            </div>
                            <div className='col-md-10 col-10 m-auto pl-0 '>
                            <p className='underground_font1'>Bank (9 Mins) </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-2 text-end px-2'>
                                <img className='img-fluid' src="../contactimages/sman5.png" />
                            </div>
                            <div className='col-md-10 col-10 m-auto pl-0 '>
                            <p className='underground_font1'>Temple (10 Mins)</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-2 text-end px-1'>
                                <img className='img-fluid' src="../contactimages/sman6.png" />
                            </div>
                            <div className='col-md-10 col-10 m-auto pl-0 '>
                            <p className='underground_font1'>London Bridge (12 Mins) </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-md-12 background_color_blue'>
        <div className='container pt-4 px-5 pb-4 mt-3'>
            <p className='text_heading_qualified mb-1'>Get Qualified and Start Today</p>
            <p className='sub_heading_text mb-0'>We'll ensure that you reach a high standard of education and are competent in your chosen subject of study so you can move straight into the job industry. Enrol Today!</p>
        </div>
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
  

export default connect(mapStateToProps, mapDispatchToProps) (Newcontactus);