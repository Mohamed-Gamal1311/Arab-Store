import React from 'react'
import Data from '../../../Data/Data.json'
import Subtitle from '../../Utility/Subtitle' 
import Product from '../../Utility/Product/Product'

const Newclothe = (props) => {
    const {mostsee}=Data
    const mostseller=mostsee.filter(i=>i.type==='mostseller')
    return (
        <div>
             <Subtitle Title="الاكثر مبيعا" btntitle="المزيد"/>
            <Product data={mostseller}/>
        </div>
    )
}

export default Newclothe
