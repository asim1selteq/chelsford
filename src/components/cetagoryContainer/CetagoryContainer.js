import { Link } from "react-router-dom"
import image from "../../components/images/image.png"
import ServicesPage from "../../Pages/ServicesPage"
import "../chelsfordCSS.css"



const CetagoryContainer = () => {
  return (
    <div className="CetagoryContainer__main">
      <div className="cetagoryContainer__ro">
        <div className="contentContainer">
          <div className="headContenter">
            <h2 className="headContenter__text  pb-5">Popular Courses at Chelsford</h2>
            {/* <p className="headContenter__text2">
              Our extensive range of courses are cleverly designed for you to
              achieve your goals. Some of the most in demand courses we offer.
            </p> */}
          </div>
          {/* <ServicesPage con_padding_props={1}   propsCountryId={1} propsIndustryName={"Laser-Training"}/> */}
          <div className="col-md-12 px-3 mb-5">
            <div className="row">

              {/* new cards  */}

              <div className="col-md-3 mt-3">
                <Link to="/course/laser-practitioner-diploma-vtct">
                  <div className="col-md-12" style={{ boxShadow: "1px 1px 7px 7px rgba(211, 211, 211, 0.449)", borderRadius: "5px", height: "22vh", overflow: "hidden" }}>
                    <img style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px", height: '100%', width: '100%' }} className="img-fluid" src="https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/laser.webp" alt="laser" />
                  </div>
                  <div style={{ color: "white", backgroundColor: "#1E185F", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }} className="col-md-12 pt-3 pb-2 text-center">
                    <h6 style={{ fontSize: "85%" }} ><b>Laser Practitioner Diploma VTCT </b></h6>
                  </div>
                </Link>
              </div>

              {/* new cards  */}

              <div className="col-md-3 mt-3">
                <Link to="/course/vtct-level-4-laser-and-ipl-treatments">
                  <div className="col-md-12" style={{ boxShadow: "1px 1px 7px 7px rgba(211, 211, 211, 0.449)", borderRadius: "5px", height: "22vh", overflow: "hidden" }}>
                    <img style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px", height: '100%', width: '100%' }} className="img-fluid" src="https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/level4.jpg" alt="level4" />
                  </div>
                  <div style={{ color: "white", backgroundColor: "#1E185F", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }} className="col-md-12 pt-3 pb-2 text-center">
                    <h6 style={{ fontSize: "85%" }} ><b>VTCT Level 4 Laser and IPL Treatments</b></h6>
                  </div>
                </Link>
              </div>

              {/* new cards  */}

              <div className="col-md-3 mt-3">
                <Link to="/course/level-5-laser-tattoo-removal">
                  <div className="col-md-12" style={{ boxShadow: "1px 1px 7px 7px rgba(211, 211, 211, 0.449)", borderRadius: "5px", height: "22vh", overflow: "hidden" }}>
                    <img style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px", height: '100%', width: '100%' }} className="img-fluid" src="https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/girltatoo.webp" alt="girltatoo" />
                  </div>
                  <div style={{ color: "white", backgroundColor: "#1E185F", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }} className="col-md-12 pt-3 pb-2 text-center">
                    <h6 style={{ fontSize: "85%" }} ><b>VTCT Level 5 Laser Tattoo Removal</b></h6>
                  </div>
                </Link>
              </div>

              {/* new cards  */}

              <div className="col-md-3 mt-3">
                <Link to="/course/vtct-level-3-nvq-beauty-therapy">
                  <div className="col-md-12" style={{ boxShadow: "1px 1px 7px 7px rgba(211, 211, 211, 0.449)", borderRadius: "5px", height: "22vh", overflow: "hidden" }}>
                    <img style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px", height: '100%', width: '100%' }} className="img-fluid" src="https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/beauty.webp" alt="beauty" />
                  </div>
                  <div style={{ color: "white", backgroundColor: "#1E185F", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }} className="col-md-12 pt-3 pb-2 text-center">
                    <h6 style={{ fontSize: "85%" }} ><b>VTCT Level 3 Beauty Therapy </b></h6>
                  </div>
                </Link>
              </div>

              {/* new cards  */}

              <div className="col-md-3 mt-3">
                <Link to="/course/medical-aesthetics-diploma">
                  <div className="col-md-12" style={{ boxShadow: "1px 1px 7px 7px rgba(211, 211, 211, 0.449)", borderRadius: "5px", height: "22vh", overflow: "hidden" }}>
                    <img style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px", height: '100%', width: '100%' }} className="img-fluid" src="https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/girltatoo.webp" alt="girltatoo" />
                  </div>
                  <div style={{ color: "white", backgroundColor: "#1E185F", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }} className="col-md-12 pt-3 pb-2 text-center">
                    <h6 style={{ fontSize: "85%" }} ><b>Medical Aesthetics Diploma </b></h6>
                  </div>
                </Link>
              </div>

              {/* new cards  */}

              <div className="col-md-3 mt-3">
                <Link to="/course/foundation-botox-and-dermal-fillers">
                  <div className="col-md-12" style={{ boxShadow: "1px 1px 7px 7px rgba(211, 211, 211, 0.449)", borderRadius: "5px", height: "22vh", overflow: "hidden" }}>
                    <img style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px", height: '100%', width: '100%' }} className="img-fluid" src="https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/foundation.jpg" alt="foundation" />
                  </div>
                  <div style={{ color: "white", backgroundColor: "#1E185F", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }} className="col-md-12 pt-3 pb-2 text-center">
                    <h6 style={{ fontSize: "85%" }} ><b>Foundation Botox and Dermal Fillers </b></h6>
                  </div>
                </Link>
              </div>

              {/* new cards  */}

              <div className="col-md-3 mt-3">
                <Link to="/course/laser-skin-resurfacing-training">
                  <div className="col-md-12" style={{ boxShadow: "1px 1px 7px 7px rgba(211, 211, 211, 0.449)", borderRadius: "5px", height: "22vh", overflow: "hidden" }}>
                    <img style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px", height: '100%', width: '100%' }} className="img-fluid" src="https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/laserskin.webp" alt="laserskin" />
                  </div>
                  <div style={{ color: "white", backgroundColor: "#1E185F", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }} className="col-md-12 pt-3 pb-2 text-center">
                    <h6 style={{ fontSize: "85%" }} ><b>CPD Laser Skin Resurfacing </b></h6>
                  </div>
                </Link>
              </div>

              {/* new cards  */}

              {/* <div className="col-md-3 mt-3">
              <Link to="/course/cpd-laser-blemish-removal">
              <div className="col-md-12" style={{boxShadow:"1px 1px 7px 7px rgba(211, 211, 211, 0.449)", borderRadius:"5px",height:"22vh",overflow:"hidden"}}>
                <img style={{borderTopRightRadius:"5px", borderTopLeftRadius:"5px", height:'100%', width:'100%'}} className="img-fluid" src="https://1864597015.rsc.cdn77.org/chelsford/images/assets/images/blemish.webp" alt="blemish"/>
              </div>
              <div style={{color:"white", backgroundColor:"#1E185F", borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}} className="col-md-12 pt-3 pb-2 text-center">
                <h6 style={{fontSize:"85%"}} ><b>VTCT Level 4 Skin Blemish Removal</b></h6>
              </div>
              </Link>
            </div> */}





            </div>
          </div>
          {/* <div className="home_Feature">
            <div role="listbox">
              <div className="item">
                <div className="custom__carosal__row">
                  <div className="all__row">
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home_Feature2">
            <div role="listbox">
              <div className="item">
                <div className="custom__carosal__row">
                  <div className="all__row">
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className="row__col">
                      <div className="rom__img">
                        <img
                          className="row__images"
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className="content_box_feature">
                          <span className="feature_title">
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className="feature_price">£3330</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default CetagoryContainer
