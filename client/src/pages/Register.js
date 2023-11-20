import React, { useState } from 'react'
import Button from '../components/Button'
import '../styles/register.css'
import axios from 'axios'

function Register() {
    const [userReg,setUserReg] = useState({})
    const register = () => {
        axios.post("/register" , userReg).then((response)=>{
            console.log(response)
        }).catch((err)=>console.log(err))   
    }
    return (
        <div className='register'>
            <h1 style={{fontSize:"3rem" , margin:"0"}}>NEW ACCOUNT</h1>
          <div className='register-info'>
            <h3>Username :</h3>
            <input type="text" onChange={(e)=>setUserReg({...userReg , username : e.target.value})}/>
            <h3>Email Address :</h3>
            <input type="text" onChange={(e)=>setUserReg({...userReg , email : e.target.value})}/>
            <h3>Password :</h3>
            <input type="text" onChange={(e)=>setUserReg({...userReg , password : e.target.value})}/>
          </div>
            <Button name = "CREATE ACCOUNT" color = "white" fn={register()} ></Button>
        </div>
  )
}

export default Register