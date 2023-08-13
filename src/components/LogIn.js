import React from 'react'
import { Link } from 'react-router-dom';

const LogIn = () => {
  
  return (
    <div className='log-in'>
      
      <div className="log-cont">

          <div className="log-box">
          <h1>Signin to your PopX account</h1>
          <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.</p>
          </div>

          <div className="form-btn">
            
            <div className="email">

            <label for="first">First name</label>
            <input type="text" placeholder='Enter email address'/>

            </div>

            <div className="password">
              
            <label for="first">Password</label>
            <input type="password" placeholder='Enter password'/>

            </div>

            

            <div className="btn-cont">

              <Link to='/UserPage'>
              <button type='btn' id='log-btn'>Login</button>
              </Link>
            </div>

          </div>

      </div>

    </div>
  )
}

export default LogIn;