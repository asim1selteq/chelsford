import React from "react";

import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";
import "./Testimonial.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonial() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const list = [
    {
      title: "Testimonial",
      description:
        "Aesthetic Laser Clinic is very well set up to do training as it is a working clinic with excellent facilities. The trainers were very welcoming and friendly which in turn creates a good atmosphere in which to learn. I would recommend them for training and treatments.",
      givenBy: "Sally’s Story",
      youtubeLink: "https://www.youtube.com/embed/XS_ht5XxwRI",
    },
    {
      title: "Testimonial",
      description:
        "I found the training very thorough, very interesting and very informative and helpful. I now am able to carry on lasering using the new techniques that I have learnt and will be quite happy to carry out laser hair removal and skin rejuvenation. I would feel extremely confident.",
      givenBy: "Michelle’s Story",
      youtubeLink: "https://www.youtube.com/embed/b-AvUzcgVNE",
    },
    {
      title: "Testimonial",
      description:
        "After passing this course I was able to set up my own professional laser clinic within 4 weeks I was confident in buying my own equipment, making consent forms, advice sheets and everything else that is needed and I now have a very successful business!",
      givenBy: "Ghazala’s Story",
      youtubeLink: "https://www.youtube.com/embed/lxZYjFnYTV4",
    },
  ];
  return (
    <>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        responsive={responsive}
        className="carousel_container"
      >
        {list.map((item) => (
          <div className="col-md-12 py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1>
                    <b>{item.title}</b>
                  </h1>
                  <p>{item.description}</p>
                  <h4 className="">
                    <b>{item.givenBy}</b>
                  </h4>
                </div>
                <div className="col-md-4">
                  <div className="col-md-12">
                    <iframe
                      height="200px"
                      width="100%"
                      src={item.youtubeLink}
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

{
  /* <div className='testimonials_'>
<Carousel infiniteLoop autoPlay interval={5000} showStatus={false}
>
    <section>
        <div className="testimonials__title">
            <h2><b>Testimonials</b></h2>
        </div>
        <div className='reverse__flex'>
            <div className="sec__width"><iframe height="100%" src="https://www.youtube.com/embed/XS_ht5XxwRI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className='sec__width'>
                <p>
                     Aesthetic Laser Clinic is very well set up to do training as it is a working clinic with excellent facilities. The trainers were very welcoming and friendly which in turn creates a good atmosphere in which to learn. I would recommend them for training and treatments.
                </p>
                <div className="arrows__sec">
                    <a onClick={() => { document.querySelector('.carousel .control-next.control-arrow').click(); }}>
                        <FaAngleLeft color='#007bff' />
                    </a>
                    <span className="clientName">Sally’s Story</span>
                    <a onClick={() => { document.querySelector('.carousel .control-prev.control-arrow').click(); }}>
                        <FaAngleRight color='#007bff' />
                    </a>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div className="testimonials__title">
             <h2><b>Testimonials</b></h2>
        </div>
        <div className='reverse__flex'>
            <div className="sec__width"><iframe height="100%" src="https://www.youtube.com/embed/b-AvUzcgVNE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className='sec__width'>
                <p>
                     After passing this course I was able to set up my own professional laser clinic within 4 weeks I was confident in buying my own equipment, making consent forms, advice sheets and everything else that is needed and I now have a very successful business!
                </p>
                <div className="arrows__sec">
                    <a onClick={() => { document.querySelector('.carousel .control-next.control-arrow').click(); }}>
                        <FaAngleLeft color='#007bff' />
                    </a>
                    <span className="clientName">Ghazala’s Story</span>
                    <a onClick={() => { document.querySelector('.carousel .control-prev.control-arrow').click(); }}>
                        <FaAngleRight color='#007bff' />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="testimonials__title">
             <h2><b>Testimonials</b></h2>
        </div>
        <div className='reverse__flex'>
            <div className="sec__width"><iframe height="100%" src="https://www.youtube.com/embed/lxZYjFnYTV4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className='sec__width'>
                <p>
                     I found the training very thorough, very interesting and very informative and helpful. I now am able to carry on lasering using the new techniques that I have learnt and will be quite happy to carry out laser hair removal and skin rejuvenation. I would feel extremely confident.               
                </p>
                <div className="arrows__sec">
                    <a onClick={() => { document.querySelector('.carousel .control-next.control-arrow').click(); }}>
                        <FaAngleLeft color='#007bff' />
                    </a>
                    <span className="clientName">Michelle’s Story</span>
                    <a onClick={() => { document.querySelector('.carousel .control-prev.control-arrow').click(); }}>
                        <FaAngleRight color='#007bff' />
                    </a>
                </div>
            </div>
        </div>
    </section>
</Carousel>
</div> */
}
