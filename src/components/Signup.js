import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css'
import { bt, trackSignedUpEvent } from '../zetaTracking';

const Signup = ({ onSignUp }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [optIn, setOptIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !username || !email || !password || !birthday) {
      alert('Please fill in all fields');
      return;
    }

    // Call the onSignUp prop to handle user registration
    onSignUp({ firstname, lastname, username, email, password, birthday, optIn});

    // Track the signed-up event with Zeta
    try {
      // Use the globally defined bt function
      bt('track', 'signed_up', { email });

      // You can add additional logic after tracking the event if needed
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
    setOptIn(false);
  };

  return (
    <div className='signup'>
      <h2>Sign Up To TAPioca</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
          <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
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

        <label>
          <input
            type='checkbox'
            checked={optIn}
            onChange={() => setOptIn(!optIn)} />
            Opt-in to personalized emails about our fantastic TAPioca products. 
        </label>
        <p>See our Privacy Policy for more details or to opt-out at any time.

<br></br>
add a checkbox here. if they do not check the box then they cannot submit Please contact me via email
<br></br>

By clicking Complete account, I agree that I have read and accepted the Terms of Use and Privacy Policy.</p>
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login" id='login-here'>Login here</Link>.
      </p>
    
    </div>
  );
};

export default Signup;
