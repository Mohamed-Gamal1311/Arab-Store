import React from 'react'
import imagedis from './Image-disc/laptops.png'
import './Discounnd.css'

const Discounnd = (props) => {
    return (
        <div className='Disc'>
            <div className='container'>
               <div className='disc-cont'>
                <div className='image-disc'><img src={imagedis}/></div>
                <div className='text-disc'><p>خصم يصل الى % 30 على اجهزة اللاب توب</p></div>
               </div>
            </div>
        </div>
    )
}

export default Discounnd
