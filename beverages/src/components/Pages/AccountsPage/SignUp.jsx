import React from 'react'
import '../../../css/SignUp.css'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'

export default function SignUp() {
    const navigate = useNavigate()

    function signin(){
        navigate('/signIn')
    }
  return (
    <div className='signup'>
      <h2>Create An Account</h2> 
      <form action="" className='signup-form'>
        <label htmlFor="">First Name</label>
        <input type="text" placeholder='Enter First Name' />
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder='Enter Last Name' />
        <label htmlFor="">Email Address</label>
        <input type="text" placeholder='Enter Email Address' />
        <label htmlFor="">Phone Number</label>
        <input type="text" placeholder='Enter Phone Number' />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Enter Password' />
        <button>Create An Account</button>
      </form>
      <div className="already">
      <p>Already have an Account?</p>
      <button onClick={signin}>Login</button>
      </div>
    </div>
  )
}
