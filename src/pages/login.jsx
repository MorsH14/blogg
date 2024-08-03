import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <div className="">
    <div className="login">
     <div className='auth'>
        <h1>Login</h1>
        <form>
          <input required type='text' placeholder='Username' />
          <input required type='password' placeholder='Password' />
          
          <button type='submit'><Link to={"/"} className='link'>Login  </Link> </button>
         
          <span>This is an Error!</span>
        <p>Don't have an account? <a href='/reg'>Sign up</a></p>
        </form>
      </div>
   </div>
   </div>
  )
}

export default Login