import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingContext } from '../../../Context/Context'
import './Moreproduct.css'
const Moreproduct = (props) => {
    const {product}=useContext(ShoppingContext)
   const [record,setRecord]=useState(product)
   const Filter =(e)=>{
    setRecord(product.filter(f=>f.title.toLowerCase().includes(e.target.value)))
   }
    return (
        <div className='moreproduct'>
            <div className='Container'>
          <div className='search-bar'>
            <input type="text" placeholder='ادخل اسم المنتج'  onChange={Filter}/>
            </div>
            
            <div className='cards-search'>
                {record.map(i=>(
                  
                <Link to={`/Singleproduct/${i.id}` } className='card-s'>
                    
                    <div className='image-search'><img src={i.image}/></div>
                    <h3>{i.title}</h3>
                    <div className='fav-price'>
                    <div className='fav-search'><img src={i.favor} alt="sssss"/></div>
                    <p>جنيه{i.price}</p></div>

                </Link>
              
            ))}</div>
            </div>
        </div>
    )
}

export default Moreproduct
