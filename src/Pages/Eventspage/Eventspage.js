import React from 'react'
import "./Eventspage.scss"
import { Link } from 'react-router-dom'

function Eventspage() {
  return (
    <div className='container py-4'>
        <div className='row'>
            <div className='col-md-6 m-auto'>
                <h1 className='img_aesthetic_clinic'><b>How to start an Aesthetic Clinic</b></h1>
                <h6>Open your own Aesthetic Clinic offering offering beauty, aesthetic and injectable services to clients. Everything you need to know.</h6>
                <h3 className='col-md-12 mt-3'><b>When and where</b></h3>
                <h6><span className='color_new_icon mt-3'> <i class="fas fa-calendar-week"></i></span> <b className='text_color_event'> Tue, 11 Apr 2023 18:00 - 20:00 BST</b></h6>
                <h6><span className='color_new_icon'> <i class="fas fa-map-marker-alt"></i></span> <b className='text_color_event'> Expert Medical 50 Mark Lane, Floor 1, London, EC3R 7QR</b></h6>
                <a href="https://www.eventbrite.co.uk/e/how-to-start-an-aesthetic-clinic-tickets-601665015257" target='_blank'>
                <button className='btn btn-warning mt-2 btn-lg' style={{backgroundColor:"#D9BD3E", border:"1px solid #D9BD3E"}}>
                    Reserve a spot
                </button>
                </a>
            </div>
            <div className='col-md-6 my-4'>
                <img src='https://1864597015.rsc.cdn77.org/chelsford/images/contactimages/bannerevent.jpeg' className='img-fluid img_style_event'  />
            </div>
        </div>
    </div>
  )
}

export default Eventspage