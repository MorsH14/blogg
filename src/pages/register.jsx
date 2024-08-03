import React from 'react'

const Register = () => {
  return (
    <div className="login">
     <div className='auth'>
        <h1>Register</h1>
        <form>
          <input required type='text' placeholder='Username' />
          <input required type='password' placeholder='Password' />
          <input required type='email' placeholder='Email' />
          <button type='submit'>Register</button>
          <span>This is an Error!</span>
        <p>Already have an account? <a href='/login'>Sign In</a></p>

        </form>
      </div>
   </div>
  )
}

export default Register