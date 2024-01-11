import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';
import { trackSignedUpEvent } from '../contexts/zetaTracking.js';

const Signup = ({ onSignUp }) => {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [birthday, setBirthday] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [optIn, setOptIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!first_name || !last_name || !username || !email || !password || !birthday) {
      alert('Please fill in all fields');
      return;
    }

    // Call the onSignUp prop to handle user registration
    onSignUp({ first_name, last_name, username, email, password, birthday, gender, optIn });

    trackSignedUpEvent({
      email,
      name: `${first_name} ${last_name}`,
      first_name,
      last_name,
      gender,
      birthday,
      password,
    });


    // Clear form fields
    setFirst_name('');
    setLast_name('');
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
            <input type="text" value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
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

        <div className='terms-and-conditions'>
          <div className='checkbox-opt-in-notice'>
            <input
              type='checkbox'
              checked={optIn}
              onChange={() => setOptIn(!optIn)}
            />
            <p> Opt-in to personalized emails about our fantastic TAPioca products. </p>
          </div>
            <p>See our Privacy Policy for more details or to opt-out at any time. </p>  
        </div>

        <div className='submit-button'>
          <button type="submit" id='submit-signup-button'>Sign Up</button>
        </div>
      </form>

      <p>
        Already have an account? <Link to="/login" id='login-here'>Login here</Link>.
      </p>

    </div>
  );
};

export default Signup;
