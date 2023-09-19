import React from 'react'
import './Slider.css'
import Image from './Slider-image/prod4.png'
function Slider() {
    return (
        <div className='slider'>
            <div className='Container'>
                <div className='Parent-sl'>
                    <div className='slider-con'><img src={Image} alt="ssssss" /></div>
                    <div className='para-slider'>خصم يصل الى %50</div>
                </div>
            </div>
        </div>
    )
}

export default Slider
