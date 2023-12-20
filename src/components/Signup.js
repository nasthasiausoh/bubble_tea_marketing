import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css'

const Signup = ({ onSignUp }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [optIn, setOptIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !username || !email || !password || !birthday) {
      alert('Please fill in all fields');
      return;
    }

    // Call the onSignUp prop to handle user registration
    onSignUp({ firstname, lastname, username, email, password, birthday, gender, optIn});

        // Trigger Zeta tracking
        try {
          // Use the globally defined bt function
          bt('track', 'signed_up', { email, firstname, lastname, gender, birthday, username, password });
        } catch (error) {
          console.error('Error tracking signed-up event:', error);
        }

    // Clear form fields
    setFirstname('');
    setLastname('');
    setUsername('');
    setEmail('');
    setPassword('');
    setBirthday('');
    setGender('');
    setOptIn(false);
  };

  const handleBirthdayChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  
    if (input.length <= 8) {
      // Ensure the length does not exceed 8 characters
      const formattedBirthday = input.replace(/(\d{4})(\d{0,2})(\d{0,2})/, '$1-$2-$3');
      setBirthday(formattedBirthday);
    }
  };
  

  return (
    <div className='signup'>
      <h1>Sign Up To TAPioca</h1>
      <form onSubmit={handleSubmit}>
        <div>

        <label id='gender-field-signup'>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />

          <label>
              First Name:
              <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </label>
          <br />
          <label>
              Last Name:
              <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </label>
        </div>
         <br />

         <label>
          Email Address:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />

        <label>
          Birthday (YYYY-MM-DD):
          <input type="text" value={birthday} onChange={handleBirthdayChange} />
        </label>
        <br />

        <br></br>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />

        <div className='checkbox-opt-in-notice'> 
            <input
              type='checkbox'
              checked={optIn}
              onChange={() => setOptIn(!optIn)} />
             
          
          <p> Opt-in to personalized emails about our fantastic TAPioca products. <br></br> <br></br>See our Privacy Policy for more details or to opt-out at any time. </p>
        </div>

        <br></br>
        <div className='submit-button'>
        <button type="submit" id='submit-signup-button' >Sign Up</button>
        </div>
      </form>

      <p>
        Already have an account? <Link to="/login" id='login-here'>Login here</Link>.
      </p>
    
    </div>
  );
};

export default Signup;
