import myHeader from "../../components/images/Rectangle.png"
import cart from "../../components/images/cart-icon.png"
import phone from "../../components/images/phone.png"
import "../chelsfordCSS.css"
import { FaBars } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"
import { FcPhone } from "react-icons/fc"
import { Link, useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className="modal__backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close()
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation()
        }}
      >
        <button onClick={close}>Close</button>
        {children}
      </div>
    </div>
  ) : null
}

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [toggle4, setToggle4] = useState(false)
  const [toggle5, setToggle5] = useState(false)
  const [toggle6, setToggle6] = useState(false)
  document?.querySelector(".fae--navbar-items-section-container")?.addEventListener("click", () => {
    console.log("clicked")
    // document.querySelector(".hover__div").style.display=="none"? document.querySelector(".hover__div").style.display="none": document.querySelector(".hover__div").style.display="none";
    setToggle3(false)
  })


  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setToggle1(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const location = useLocation();

  useEffect(() => {
    console.log('Location changed', toggle1);
    // change the navbar view state here
    if (toggle1 == true) {
      setToggle1(!toggle1)
    }
    if (toggle2 || toggle4 || toggle5 || toggle6) {
      setToggle2(false)
      setToggle5(false)
      setToggle6(false)
      setToggle4(false)
    }
  }, [location]);


  return (
    <div className="header__main" ref={menuRef}>
      <div className="header__img">
        <Link to="/">
          <img
            className="header__logo"
            src={myHeader}
            alt="header logo"
            width="314.1px"
            height="91.89px"
          />
        </Link>
      </div>
      <div className="short_tab">
        <div className="courses__tab__container">
          <div className="courses__tab">
            <div onClick={() => { document.querySelector(".hover__div").style.display == "none" ? document.querySelector(".hover__div").style.display = "initial" : document.querySelector(".hover__div").style.display = "none"; setToggle3(!toggle3) }}>
              <span className="short__heading">Courses</span>
            </div>
          </div>
          <div className="portal__tab">
            {/* <a href="/" className="portal__nav__link">
              <span className="portal__short__heading">Portal</span>
            </a> */}
          </div>
        </div>
      </div>
      {toggle && (
        <div id="myDiv" className="short_tab_expand">
          <ul className="short_tab_ul">
            <li className="short_tab_li">
              <a className="short_a_li" href="/about">
                About
              </a>
            </li>
            <li className="short_tab_li">
              <Link className="short_a_li" href="/contact-us">
                Contact
              </Link>
            </li>

          </ul>
          <ul className="short_tab_ul">
            <li className="short_tab_li">
              <a className="short_a_li" href="tel:0800 955 0054">
                <i className="short__i__phone">
                  <FcPhone />
                  0800 955 0054
                </i>
              </a>
            </li>
            <li className="short_tab_li">
              <a
                className="short_a_li"
                href="https://chelsford.com/login/student" >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="header-secion" style={{ width: "100%", position: "relative" }}>
        <div className="sub__headers">

        </div>

        <ul className="hover__div text-center">
          {toggle1 && (
            <div className="col-md-12 hover__container text-center">
              <div className="hover__row text-center">
                <div className="hover__colomn text-center">
                  <Link
                    to="/laser-courses"
                    className="hover__linka"
                  ><h3 className="hover__heading">Laser</h3>
                  </Link>
                  <Link
                    to="/beauty-courses"
                    className="hover__linka"
                  > <h3 className="hover__heading">Beauty</h3>
                  </Link>
                  <Link
                    to="/medical-courses"
                    className="hover__linka"
                  > <h3 className="hover__heading">Medical</h3>
                  </Link>
                  <Link
                    to="/online-courses"
                    className="hover__linka"
                  > <h3 className="hover__heading">Online</h3>
                  </Link>
               
                </div>


               
              </div>
            </div>
          )}
        </ul>
        {toggle3 && (
          <div className="mobile__navbar">
            <div className="mobile_navbar_container">
              <div className="mobile_navbar_row">
                <div className="mobile_navbar_button__section">
                  <Link
                    to="/laser-courses"
                    className="hover__linka"
                  >
                    <button
                    // onClick={() =>{
                    //    setToggle4(false)
                    //    setToggle5(false)
                    //    setToggle6(false)
                    //    setToggle2(!toggle2)}}
                    >
                      <div
                        className="navBar2_buttons"
                        id="laserBtnTab"
                        data-toggle="collapse"
                        data-target=".dropdown-laser-menu-mobile"
                        onClick={() => setToggle3(!toggle3)}
                      >
                        Laser
                      </div>
                    </button>
                  </Link>
                  <Link
                    to="/beauty-courses"
                    className="hover__linka"
                    onClick={() => setToggle3(!toggle3)}
                  >
                    <button
                    // onClick={() =>{
                    //   setToggle2(false)
                    //   setToggle5(false)
                    //   setToggle6(false)
                    //   setToggle4(!toggle4)}}

                    >

                      <div
                        className="navBar2_buttons"
                        id="beautyBtnTab"
                        data-toggle="collapse"
                        data-target=".dropdown-laser-menu-mobile"
                        aria-expanded="true" >
                        Beauty
                      </div>
                    </button>
                  </Link>
                  <Link
                    to="/medical-courses"
                    className="hover__linka"
                    onClick={() => setToggle3(!toggle3)}
                  >
                    <button
                    // onClick={() => {
                    //   setToggle2(false)
                    //   setToggle4(false) 
                    //   setToggle6(false) 
                    //   setToggle5(!toggle5)}}
                    >
                      <div
                        className="navBar2_buttons"
                        id="medicalBtnTab"
                        data-toggle="collapse"
                        data-target=".dropdown-laser-menu-mobile"
                        aria-expanded="true"
                      >
                        Medical
                      </div>
                    </button>
                  </Link>
                  <Link
                    to="/online-courses"
                    className="hover__linka"
                    onClick={() => setToggle3(!toggle3)}
                  >
                    <button
                    //   onClick={() =>{
                    //   setToggle2(false)
                    //   setToggle4(false)
                    //   setToggle5(false)
                    //   setToggle6(!toggle6)
                    // }}
                    >
                      <div
                        className="navBar2_buttons"
                        id="medicalBtnTab"
                        data-toggle="collapse"
                        data-target=".dropdown-laser-menu-mobile"
                        aria-expanded="true"
                      >
                        Online
                      </div>
                    </button>
                  </Link>
                  <Link
                    to="/events"
                    className="hover__linka"
                    onClick={() => setToggle3(!toggle3)}
                  >
                    <button
                    //   onClick={() =>{
                    //   setToggle2(false)
                    //   setToggle4(false)
                    //   setToggle5(false)
                    //   setToggle6(!toggle6)
                    // }}
                    >
                      <div
                        className="navBar2_buttons"
                        id="medicalBtnTab"
                        data-toggle="collapse"
                        data-target=".dropdown-laser-menu-mobile"
                        aria-expanded="true"
                      >
                        Events
                      </div>
                    </button>
                  </Link>
                </div>
                <div className="mobile_navbar_column">
                  {toggle2 && (
                    <ul className="custom_mob_nav_sub_item dropdown_laser_menu_mob_ul">
                      <Link
                        to="/laser-courses"
                        className="hover__linka"
                      > <h3 className="hover__heading">Laser</h3>
                      </Link>


                   
                    </ul>
                  )}
                  {toggle4 && (
                    <ul className="dropdown_laser_menu_mob_ul">
                      <Link
                        to="/beauty-courses"
                        className="hover__linka"
                      >    <h3 className="hover__heading">Beauty</h3>
                      </Link>
                    
                    </ul>
                  )}
                  {toggle5 && (
                    <ul className="dropdown_laser_menu_mob_ul">
                      <Link
                        to="/medical-courses"
                        className="hover__linka"
                      > <h3 className="hover__heading">Medical</h3>
                      </Link>

                     
                    </ul>
                  )}
                  {toggle6 && (
                    <ul className="dropdown_laser_menu_mob_ul">
                      <Link
                        to="/online-courses"
                        className="hover__linka"
                      >  <h3 className="hover__heading">Online</h3>
                      </Link>
                      
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="sub__header2">
          <ul className="navbar">
            {/* <button onClick={(e) => {e.preventDefault(); setToggle1(!toggle1)}} className="courses__text">Courses</button> */}


            <div className="dropdown ">
              <button className="dropbtn pl-4">&nbsp;&nbsp;&nbsp;&nbsp;Courses</button>
              <div className="col-md-12 text-center  dropdown-content">
                <a className="background_div">
                  <span className=" button_style_link">
                    <Link
                      to="/laser-courses"
                      className="hover__linka"
                    ><h3 className="hover__heading pb-3">Laser</h3>
                    </Link>
                  </span>

                </a>
                <a className="background_div">
                  <span className="button_style_link">
                    <Link
                      to="/beauty-courses"
                      className="hover__linka"
                    > <h3 className="hover__heading pb-3">Beauty</h3>
                    </Link>
                  </span>

                </a>
                <a className="background_div">
                  <span className="button_style_link">
                    <Link
                      to="/medical-courses"
                      className="hover__linka"
                    > <h3 className="hover__heading pb-3">Medical</h3>
                    </Link>
                  </span>

                </a>
                <a className="background_div">
                  <span className="button_style_link">
                    <Link
                      to="/online-courses"
                      className="hover__linka"
                    > <h3 className="hover__heading pb-3">Online</h3>
                    </Link>
                  </span>
                </a>
              </div>
            </div>


            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/events" className="courses__text">Events</a>
            <a href="/contact-us" className="courses__text">Contact</a>
            <a href="/franchise" className="courses__text">Franchise</a>
            <a href="/international" className="courses__text">International</a>

            {/* <a href="/listing"  className="courses__text">Models</a> */}

            <div className="phone__logo__No px-3">
              
              <p className="phone__no"><img
                className="phone__logo"
                src={phone}
                alt="header logo"
                width="15.99px"
                height="15.99px"
              />&nbsp;+0800 955 0054</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
