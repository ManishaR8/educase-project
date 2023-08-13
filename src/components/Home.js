import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='first-page'>
        <div className="home-cont">
          <div className="wrapper">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.</p>

          <div className="button-cont">

          <Link to="/SignIn">
            <button className='btn' id="create-acnt"   type='button'>Create Account</button>
          </Link>

            <Link to="/LogIn">
            <button className='btn' id="register"  type='button'>Already Registered? Login</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Home;