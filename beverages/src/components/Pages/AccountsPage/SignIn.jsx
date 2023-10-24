import React from 'react'
import '../../../css/SignIn.css'
import { Link } from 'react-router-dom'
import google from '../../../img/googlelogo.png'
import apple from '../../../img/applelogo.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';


export default function SignIn() {
  return (
    <div className='sign-in'>
      <h2>Sign In</h2> 
      <form action="" className='signIn-form'>
        <label htmlFor="">Email Address</label>
        <input type="text" placeholder='Enter Email Address' />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Password'/>            
        <button>Login</button>
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
