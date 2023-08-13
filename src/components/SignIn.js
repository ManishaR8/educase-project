import React from 'react'
import { Link } from 'react-router-dom';
import './styles/SignIn.css';

const SignIn = () => {

  const handleCreateAccount = (event) => {
   
    const name = document.getElementById('first').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
      alert('Please fill in all required fields.');
      event.preventDefault(); 
      return;
    }

    const formData = {
      name,
      email,
    };

    localStorage.setItem('formData', JSON.stringify(formData));

  };
  

  return (
    <div className='sign-in'>
      
      <div className="sign-cont">

          <div className="sign-box">
          <h1>Create your PopX account</h1>
          </div>

          <div className="form-cont">

          <form>

            <div className="name">
              <label htmlFor="first"  style={{color: '#5a00c9'}}>Full name</label>
              <input type="text" placeholder='Enter full name' id="first" />
            </div>

            <div className="phone">

              <label htmlFor="phone" style={{color: '#5a00c9'}} >Phone number</label>
              <input type="text" placeholder='Enter your phone number' id="phone" />

            </div>

            <div className="email">

              <label htmlFor="email" style={{color: '#5a00c9'}}>Email address</label>

              <input 
                type="email" 
                placeholder='Enter email address' 
                id="email"
                autoComplete="username"
                 />

            </div>

            <div className="password">

              <label htmlFor="password" style={{color: '#5a00c9'}}>Password</label>
              <input 
                type="password" 
                placeholder='Enter password' 
                id="password"
                autoComplete="current-password"
                 />

            </div>

            <div className="company">

              <label htmlFor="company" style={{color: '#5a00c9'}}>Company name</label>
              <input type="text" placeholder='Enter Company name' id="company" />

            </div>

            <div className="check-btn"
              style={{position: 'relative',
              left : '7px'}}>

              <label id='check-label' htmlFor="yes-no" style={{color: '#5a00c9',
              position: 'relative',
              left: '0'}}>
                Are you an Agency?</label>
              <div className='input-btn'>
                <input
                  type="radio"
                  id="yes"
                  name="choose"
                  value="yes"
                  
                />
                <label htmlFor="yes"
                 style={{color: '#5a00c9'}}
                 >
                  Yes
                </label>
                <input
                  type="radio"
                  id="no"
                  name="choose"
                  value="no"
                
                />
                <label htmlFor="no" style={{color: '#5a00c9'}}
                >
                  No
                </label>
              </div>
            </div>
          </form>

          </div>

          <div className="createBtn">

          <Link to='/UserPage'>
              <button type='button' id='sign-btn' 
              onClick={handleCreateAccount} >Create Account</button>
          </Link>
          </div>

      </div>

    </div>
  )
}

export default  SignIn;