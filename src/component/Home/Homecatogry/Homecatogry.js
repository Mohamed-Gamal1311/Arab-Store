import React from 'react'
import Subtitle from '../../Utility/Subtitle'
import Data from '../../../Data/Data.json'
import './Homecatogry.css'
const Homecatogry = (props) => {

    return (
        <div>
            <Subtitle Title="التصنيفات" btntitle="المزيد"/>
            <div className='container'>
                <div className='Homecat'>
           {Data.Catogrycard.map(i=>(
            <div className='cards'>
                <div className='imagee'><img src={i.image} alt="ddd"/> </div>
                <h5>{i.title}</h5>
            </div>
           ))}
           </div>
        </div>
        </div>
    )
}

export default Homecatogry
