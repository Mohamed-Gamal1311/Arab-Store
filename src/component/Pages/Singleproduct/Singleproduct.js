import React, { useContext } from 'react'
import Data from '../../../Data/Data.json'
import { useParams } from 'react-router-dom'
import { ShoppingContext } from '../../../Context/Context';
import './Singleproduct.css'

const Singleproduct = (props) => {
    const { id } = useParams();
    const mostse = Data.mostsee.find(p => p.id === +id || p.id === id)
    const { increaseCardQuantity, decreaseCardQuantity, getItemsQuantity, removeItem } = useContext(ShoppingContext)

    return (

        <div className='Single-product'>
            <div className='Container'>
                <div className='Single-product-con'>
                    <div className='text-single'>
                        <div className='title-sin'>{mostse?.title}</div>
                        <div className='rate-sin'><img src={mostse?.rate} /> 4.5</div>
                        <div className='price-sin'>{mostse?.price}:السعر</div>
                        <div className='quantit'>الكميه</div>
                        {getItemsQuantity(mostse.id) > 0 ? (
                            < div className='ppppsin'>
                                <button className='incr' onClick={() => increaseCardQuantity(mostse.id)}> + </button>
                                <span className='get'>  {getItemsQuantity(mostse.id)}</span>
                                <button className='decr' onClick={() => decreaseCardQuantity(mostse.id)} >-</button>
                                <br /><button className='remove' onClick={() => removeItem(mostse.id)} >حذف</button>
                            </div>) :
                            <button onClick={() => increaseCardQuantity(mostse.id)} className='cart-sin' >اضافة الى سلة التسوق</button>

                        }

                    </div>
                    <div className='imagr-single'>
                        <img src={mostse?.image} />
                    </div>
                </div>
                <div className='known'>
                    <h1>:حول هذه السلعه </h1>
                    <p>استمتع بصوت  فائق وواضح وراحه فائقه مع سماعات راس ستوديو مونيتور من وان اوديو</p>
                </div>
            </div>
        </div >
    )
}

export default Singleproduct
