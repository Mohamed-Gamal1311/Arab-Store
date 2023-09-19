import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../../Context/Context'

const Login = (props) => {
    const [email ,setEmail]=useState('')
    const [password ,setPassword]=useState('')
    const Navigate=useNavigate()

    useEffect(()=>{
        sessionStorage.clear()
       },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/user/"+email).then((res)=>{
            return res.json();
        }).then((resp)=>{
            if(resp.password ===password && resp.id ===email){
                alert('success')
                Navigate('/')
                sessionStorage.setItem('email',email)
               
            }
            else{
                alert('enter valid data')
            }
        })
    }
    return (
        <div className='Login'>
            <div className='Container'>
                <div className='Parent-log'>
                <h3>تسجيل الدخول</h3>
                <form className='form-log'  onSubmit={handleSubmit} >
                     <input value={email} required onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='البريد الالكتروني' />
                      <input value={password} required onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='كلمة السر' /> 
                    <button>تسجيل الدخول</button>
                    <p>ليس لديك حساب ؟ <Link to='/Signup'>اضغط هنا</Link></p>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login
