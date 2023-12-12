import React, { useState } from 'react';

const Signup = ({ onSignUp }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !username || !email || !password || !birthday) {
      alert('Please fill in all fields');
      return;
    }

    onSignUp({ firstname, lastname, username, email, password });

    setFirstname('');
    setLastname('');
    setUsername('');
    setEmail('');
    setPassword('');
    setBirthday('');
  };

  return (
    <div>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
