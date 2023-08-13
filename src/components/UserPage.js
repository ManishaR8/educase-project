import React, { useState } from 'react';
import './styles/UserPage.css';
import { Link } from 'react-router-dom';

const UserPage = () => {

    const storedFormData = localStorage.getItem('formData');
    const formData = storedFormData ? JSON.parse(storedFormData) : {};

    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };


  return (
    <div className='user-page'>

        <div className="user-cont">

        <div className="go-btn" style={{padding : '10px'}}>
            <Link to='/'>
            <button type='btn' 
            style={{padding: '8px',
                width: '90px',
                border: '1px solid black',
                outline: 'none',
                background: '#39a0b3',
                color: 'white'
            }}
            >Go Home</button>
            </Link>
        </div>

            <div className="account">
                <h3>Account Settings</h3>
            </div>

            <div className="info-cont">
                <div className="profile-name">
                    <div className="profile">
                    <label htmlFor="imageInput" style={{position: 'inherit'}} >
                {selectedImage ? (
                  <img src={URL.createObjectURL(selectedImage)} alt='' />
                ) : (
                  <img src='/assets/user1.png' alt='' />
                )}
              </label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
                    </div>
                    <div className="name-box">
                        <h3>{formData.name || 'No Data Found'}</h3>
                        <p style={{fontSize: '0.7em'}}>{formData.email}</p>
                    </div>
                </div>

                <div className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum consectetur dolorem. Repellat aspernatur a ab quasi expedita harum rerum quis.
                </div>

            </div>

        </div>

    </div>
  )
}

export default UserPage