import React, { useContext } from 'react'
import { ShoppingContext } from '../../../Context/Context'
import Data from '../../../Data/Data.json'
import Imagecart from './Cart-image/delete.png'
import './Cart.css'


const Cart = () => {
    const { mostsee } = Data
    const { cardItems, removeItem } = useContext(ShoppingContext)
    console.log(mostsee)
    console.log(cardItems)
    var total = 0;
    var price
    return (
        <div className='Cart'>
            <div className='Container'>
                <h1 className='car-title'>عربة التسوق</h1>
                <hr></hr>
                <div className='position-cart'>
                    {mostsee.map((i) => (
                        <div className='cart-con'>

                            {cardItems.map((j) => (
                                <div>

                                    {i.id === j.id &&
                                        <div className='cart-ppp'>
                                            <div className='bill'>
                                                <h1 className='eeeee'> {total += i.price * j.quantity}</h1>
                                            </div>
                                            <div className='cart-cards'>

                                                <div className='text-cart'>
                                                    <h3>{i.title}</h3>

                                                    <div className='quantit'>الكميه: {j.quantity}</div>
                                                    <h3 className='price-cart'>السعر الكلي: {price = i.price * j.quantity}</h3>
                                                    <div className='image-cart'><img src={Imagecart} className='remove' onClick={() => removeItem(i.id)} /></div>
                                                </div>
                                                <div className='image-cont'><img src={i.image} alt="hjj" /></div>
                                            </div>

                                        </div>
                                    }
                                </div>
                            ))}

                        </div>
                    ))}
                    { total > 0?(
                    <div className='total-bill' >
                        <p className='para-cart'> جزء من طلبك مؤهل للشحن المجاني </p>
                        <h5 className='total'> المجموع الكلي:{total}جنيه</h5>
                        <button className='btn-buy'>اتمام عملية الشراء</button>
                    </div>
                    ):
                    <div className='message'> عربةالتسوق فارغه</div>
                    }
                </div>
            </div>


        </div >
    )
}

export default Cart
