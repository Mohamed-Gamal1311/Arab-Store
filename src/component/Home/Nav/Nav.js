import React, { useContext, useEffect, useState } from 'react'
import './Nav.css'
import Image1 from './Image-Nav/cart.png'
import Image2 from './Image-Nav/logo.png'
import Image3 from './Image-Nav/login.png'
import Image4 from './Image-Nav/open.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../../Context/Context'
function Nav() {
  const [open, close] = useState(false)
  const Navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem('email') === '' || sessionStorage.getItem('email') === null) {
      Navigate('/login')
    }
  }, [])



  return (
    <div className='NAV'>
      <div className='container'>
        <div className='parent'>
          <div className='Content' style={{ left: open ? "0px" : "-400px" }} >
            <div>
              <Link to='/login' onClick={() => open ? close(false) : close(true)} > خروج
                <img src={Image3} alt="sss" /></Link>
            </div>
            <Link className='Cart-logo' to='/cart' onClick={() => open ? close(false) : close(true)}>
              <div  >
                <span>العربه</span>
                <img src={Image1} alt="sss" />
              </div>
            </Link>


          </div >
          <div className='logo'>
            <Link to='/'> <img src={Image2} alt="sss" /></Link>
          </div>
        </div>
        <div className='image' >
          <img src={Image4} alt="jj" onClick={() => open ? close(false) : close(true)} />
        </div>

      </div>

    </div>
  )
}

export default Nav
