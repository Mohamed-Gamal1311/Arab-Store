import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../../Context/Context'
import './Signup.css'


const Signup = (props) => {
    const { user } = useContext(ShoppingContext)
    const [userName, setUserName] = useState('')
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const Navigate=useNavigate()
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPost = { id, userName, password };

        if (validation()) {
            fetch("http://localhost:5000/user", {
                method: 'POST',
                body: JSON.stringify(dataPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
                setUserName('')
                setId('')
                setPassword('')
                Navigate('/Login')
            console.log('dataPost');
        }
    }

    const validation = () => {
        let result = true
        user.map(i => {
            if (i.id === id) {
                result = false
                alert('enter valid user')
            }
        })

        return result
    }

    return (
        <div className='sign-up'>
            <div className='Container'>
                <div className='Parent-log'>
                    <h3>تسجيل حساب جديد</h3>
                    <form className='form-sign' onSubmit={handleSubmit} >
                        <input value={userName} type="text" placeholder='اسم المستخدم' required onChange={(e) => setUserName(e.target.value)} />
                        <input value={id} type="email" placeholder='البريد الالكتروني' required onChange={(e) => setId(e.target.value)} />
                        <input value={password} type="password" placeholder='كلمة السر' required onChange={(e) => setPassword(e.target.value)} />
                        <button>تسجيل الدخول</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
