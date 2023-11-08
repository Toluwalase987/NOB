import React from 'react'
import '../../../css/Reset.css'
import { Link } from 'react-router-dom'

export default function Reset() {
  return (
    <div className='reset'>
            <h2>Reset Password</h2>
        <form className='signIn-form'>
            <input type="email" placeholder='Email' />
            <button>Reset Password</button>
            <div className="other-links">
                <Link className='change' to="/signIn">Login</Link>
                <Link className='change' to="/signup">Sign Up</Link>
            </div>
        </form>
    </div>
  )
}
