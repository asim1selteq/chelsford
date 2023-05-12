import React from 'react';
import "./slider.scss"

const Slider = ({ data }) => {
    return (
        <div className='gallary'>
            <div className='gallary-slide'>
                {
                    data.map((item, index) => {
                        return (
                            <img className='sliderImg' src={item?.image} alt='no image' key={index} />
                        )
                    })
                }
            </div>

            <div className='gallary-slide'>
                {
                    data.map((item, index) => {
                        return (
                            <img className='sliderImg' src={item?.image} alt='no image' key={index} />
                        )
                    })
                }
            </div>

            <div className='gallary-slide'>
                {
                    data.length > 0 && data.map((item, index) => {
                        return (
                            <img className='sliderImg' src={item?.image} alt='no image' key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider