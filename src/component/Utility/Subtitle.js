import React from 'react'
import { Link } from 'react-router-dom'

import './Subtitle.css'

const Subtitle = ({Title,btntitle}) => {
   
    return (
        
        <div className='title'>
             <div className='Container'>
              <div className='Subtitle-cont'>
           <Link to="/Moreproduct/id">  <button className='btntitle'>
                 {btntitle}
                 </button></Link> 
                 <div className='subtitle'>{Title}</div>
                 
                 </div>
            </div>
        </div>
    )
}

export default Subtitle
