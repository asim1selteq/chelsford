import React, { useEffect } from 'react';
import './navbar.css';
import { Link } from "react-router-dom"

import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import sitelogo from '../../Assests/sitelogo.png';
import mono from '../../Assests/mono.png';

const Navbar = () => {
  const [mobilenav, setMobilenav] = useState(false);
  const [mblCourse, setMblCourses] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div className='container-fluid sticky_nav pb-0'>
        <div className='row'>
          <div className='col-md-3 pt-1'>
            {scrollY < 100 ?
              <Link className="h-100 w-100 d-flex align-items-center" to="/">
                <img src={sitelogo} alt='No logo' className='img-fluid object-fit-cover' />
              </Link>
              :
              <>
                <div className='row'>
                  <div className='col-md-12 px-4 py-1 invisible'>
                    Hidden text
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 logo_column'>
                    <Link className="d-flex align-items-end" to="/">
                      <img src={sitelogo} alt='No logo' className='img-fluid' />
                    </Link>
                  </div>
                </div>
              </>
            }
          </div>

          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12 d-flex justify-content-end px-4 py-2'>
                <span className='me-3'><Link className="nav-link upper-navbar" to="/franchise">Franchise</Link></span>
                <span className='me-3'><Link className="nav-link upper-navbar" to="/international">International</Link></span>
                <span className='me-3'><Link className="nav-link upper-navbar" to="/about-us">About us</Link></span>

                <span ><Link className="nav-link upper-navbar" to="/account"> &nbsp;
                  <AiOutlineUser className='signin-icon me-1 mb-1 account-icon p-1' />
                  Account
                </Link>
                </span>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12 padding_set_new' >
                <div className='row'>
                  <div className='col-md-9' style={{ height: '35px' }}>
                    <div className='row px-3 h-100'>
                      <div className='col-md-3 dropdown'>
                        <Link className="nav-link multi-menu-link menu-link" to="#">Courses <span className="sr-only">(current)</span></Link>
                        <div className="col-md-12 text-center dropdown-content m-sm-0">
                          <a className="background_div">
                            <span className="button_style_link">
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

                      <div className='col-md-3  menu-link'> <Link className="nav-link" to="/contact-us">Contact <span className="sr-only">(current)</span></Link></div>
                      <div className='col-md-3  menu-link'><Link className="nav-link" to="/events">Events <span className="sr-only">(current)</span></Link></div>
                    </div>
                  </div>
                  <div className='col-md-3 ps-sm-0 text-end'>
                    <p className='mb-0 pt-1'><BsTelephoneFill className='display_icon_none' style={{fontSize:'20px'}}/>&nbsp;&nbsp; 0800 955 0054 &nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* <div className='row'>
              <div className='col-md-12 d-flex justify-content-end px-4 py-2'>
                <span className='me-3'><Link className="nav-link upper-navbar" to="/franchise">Franchise</Link></span>
                <span className='me-3'><Link className="nav-link upper-navbar" to="/international">International</Link></span>
                <span className='me-3'><Link className="nav-link upper-navbar" to="/about-us">About us</Link></span>

                <span ><Link className="nav-link upper-navbar" to="/account"> &nbsp;
                  <AiOutlineUser className='signin-icon me-1 mb-1 account-icon p-1' />
                  Account
                </Link>
                </span>
              </div>
            </div>
        <div className='row navbar_row'>
          <div className='col-md-2 '>
            <Link className="navbar-brand" to="/">
              <img src='./sitelogo.png' alt='No logo' className='img-fluid' />
            </Link>
          </div>
          <div className='col-md-10  ' >
            <div className='row ' >
              <div className='col-md-12 padding_set_new' >
                <div className='row'>
                  <div className='col-md-8'>
                    <div className='row px-3'>
                      <div className='col-md-2 dropdown'>
                        <Link className="nav-link multi-menu-link menu-link" to="#">Courses <span className="sr-only">(current)</span></Link>
                        <div className="col-md-12 text-center dropdown-content m-sm-0">
                          <a className="background_div">
                            <span className="button_style_link">
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
                      <div className='col-md-2  menu-link'> <Link className="nav-link" to="/contact-us">Contact <span className="sr-only">(current)</span></Link></div>
                      <div className='col-md-2  menu-link'><Link className="nav-link" to="/events">Events <span className="sr-only">(current)</span></Link></div>
                    </div>
                  </div>
                  <div className='col-md-4 text-end'>
                    <p className='mb-0 pt-1'><BsTelephoneFill className='display_icon_none' style={{ color: '#d9bd3e' }} />&nbsp;0800 955 0054 &nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>

      <div className='col-md-12 py-2 mobile_navigation'>
        <div className='row'>
          <div className='col-md-6 col-6 px-0'>
            <Link to='/'><img src={sitelogo} alt='No logo' className='img-fluid img_small' /></Link>
          </div>

          <div className='col-md-6 col-6 text-end m-auto' style={{ position: 'relative' }}>
            <span>
              <button className={`btn btn-sm ${mblCourse ? 'active_toggle' : 'inactive_toggle dropdown-toggle'}`} onClick={() => {
                setMobilenav(false);
                setMblCourses(!mblCourse)
              }}>
                {!mblCourse ?
                  "Courses" :
                  <i class="fas fa-times px-1"></i>
                }
              </button>
            </span>&nbsp;
            <span >
              <button className={`btn btn-sm ${mobilenav ? 'active_menu_toggle' : 'inactive_menu_toggle'}`} onClick={() => {
                setMobilenav(!mobilenav);
                setMblCourses(false)
              }}>
                {!mobilenav ?
                  <i class="fas fa-bars"></i> :
                  <i class="fas fa-times"></i>
                }
              </button>
            </span>
          </div>
        </div>

        <div className='col-md-12 mt-3' style={{ borderTop: mobilenav || mblCourse ? '1px solid blue' : '' }}>
          {mobilenav && !mblCourse ?
            (
              <div className='col-md-12 menu_content'>
                <div className='row mbl-header-row'>
                  <div className='col-md-12 col-12 d-flex justify-content-center align-items-center'>
                    <Link to='/'><img className='img-fluid w-auto' src={mono} style={{ height: '70px' }} /></Link>&nbsp;&nbsp;
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 col-12 d-flex justify-content-center align-items-center'>
                    <span className="py-1 px-3 bg_color_golden">Guests</span>
                  </div>
                </div>

                <div className='col-md-12 px-3'>
                  <hr className='px-5' />

                  <Link to='/events' onClick={() => setMobilenav(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>Events</button>
                  </Link>

                  <Link to='/franchise' onClick={() => setMobilenav(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>Franchise</button>
                  </Link>

                  <Link to='/international' onClick={() => setMobilenav(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>International</button>
                  </Link>

                  <Link to='/about-us' onClick={() => setMobilenav(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>About Us</button>
                  </Link>

                  <Link to='/contact-us' onClick={() => setMobilenav(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>Contact Us</button>
                  </Link>

                  <Link to='/account' onClick={() => setMobilenav(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>Login</button>
                  </Link>

                  <Link to='/account' onClick={() => setMobilenav(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>Signup</button>
                  </Link>
                </div>
              </div>
            ) :
            (
              null
            )
          }

          {mblCourse && !mobilenav ?
            (
              <div className='col-md-12 menu_content pt-3'>
                <div className='col-md-12 px-3'>
                  <Link to='/laser-courses' onClick={() => setMblCourses(false)}>
                    <button className='btn btn-primary w-100 background_color_button'>Laser</button>
                  </Link>
                  <Link to='/beauty-courses' onClick={() => setMblCourses(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>Beauty</button>
                  </Link>
                  <Link to='/medical-courses' onClick={() => setMblCourses(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>Medical</button>
                  </Link>
                  <Link to='/online-courses' onClick={() => setMblCourses(false)}>
                    <button className='btn btn-primary w-100 mt-2 background_color_button'>Online</button>
                  </Link>
                </div>
              </div>
            ) :
            (
              null
            )
          }
        </div>
      </div>


    </>
  )
}

export default Navbar