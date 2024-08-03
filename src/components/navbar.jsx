import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <a href='/'>MorsHBlog</a>
        </div>
        <div className="links">
          <div className="">
          <a href='/'>Art</a>
          </div>
          <div className="">
          <a href='/'>Science</a>
          </div>
          <div className="">
          <a href='/'>Technology</a>
          </div>
          <div className="">
          <a href='/'>Design</a>
          </div>
          <div className="">
          <a href='/'>Food</a>
          </div>
          </div>

          <div className="navRight">
          <div className="">
          <span>Morsh</span>
          </div>
          <div className="link">
            <Link to={"/login"} className='link'>
            <span>logout</span>
            </Link>
          
          </div>
          <div>
          <span  className="writeBtn">            <Link to={"/write"} className='writeLink'>
          write </Link></span>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar