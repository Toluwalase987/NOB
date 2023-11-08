import React, { useState } from 'react'
import '../../../css/SignIn.css'
import { Link } from 'react-router-dom'
import google from '../../../img/googlelogo.png'
import apple from '../../../img/applelogo.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';


export default function SignIn() {
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = ()=>{
    setIsActive(true)
    //Action

    setTimeout(()=>{
      setIsActive(false)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className='sign-in'>
      <h2>Sign In</h2> 
      <form action="" className='signIn-form'>
        <label htmlFor="">Email Address</label>
        <input type="email" placeholder='Enter Email Address' />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Enter Password'/>    
        <Link to="/reset" className='reset-link'>Forgot Password?</Link>        
        <button onClick={handleLogin} disabled={isLoading}>
          {isLoading ? (<div className='spinning-loader'></div>) : 'Login'}
        </button>
        <h6>OR</h6>
        <div className="google">
            <p><FcGoogle/>Login with Google</p>
        </div>
        <div className="apple">
            <p><FaApple/>Login with Apple</p>
        </div>
      </form>
      <Link to="/signup" className='signin-link'>Don't have an account? Sign Up</Link>
    </div>
  )
}
