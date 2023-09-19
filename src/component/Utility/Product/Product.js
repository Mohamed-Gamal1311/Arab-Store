import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'


const Product = ({data}) => {
    return (
        <div className='container'>
            <div className='Home-most '>
                {data.map((i)=> (
                    <Link to={`/Singleproduct/${i.id}` } className='card-most' key={i.id}>
                        <div className='image-most'><img src={i.image} alt="ssss" /></div>
                        <div className='fav'><img src={i.favor} alt="sssss"/></div>
                        <h4 className='title'>{i.title}</h4>
                            <div className='price-rate'>
                             <p className='price'>{i.price}جنيه</p>
                             <div><span>4.5</span> <img src={i.rate} alt="jjjjjjjj"/></div>
                         </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Product
