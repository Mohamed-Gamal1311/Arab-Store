import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Discounnd from '../Discounnd/Discounnd'
import Homecatogry from '../Homecatogry/Homecatogry'
import Mostseller from '../Mostseller/Mostseller'
import Newclothe from '../Newclothe/Newclothe'
import Slider from '../Slider/Slider'

const Indexhome = (props) => {
    const Navigate=useNavigate()
  useEffect(()=>{
   if(sessionStorage.getItem('email') === ''|| sessionStorage.getItem('email')===null){
     Navigate('/login')
   }
  },[])

    return (
        <div className='Indexhome'>
            <Slider/>
            <Homecatogry />
          <Mostseller />
          <Discounnd />
          <Newclothe/>
        </div>
    )
}

export default Indexhome
