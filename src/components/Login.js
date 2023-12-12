// // Login.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Assume you have a list of registered users stored in localStorage
//     const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
//     const user = registeredUsers.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (user) {
//       // Call the onLogin prop to handle setting the user in App.js state
//       onLogin(user);

//       // Store user in localStorage to persist login
//       localStorage.setItem('loggedInUser', JSON.stringify(user));
//     } else {
//       alert('Invalid credentials. Please check your email and password.');
//     }
//   };
  

//   return (
//     <div>
//       <h2>Login to TAPioca</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email Address:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <Link to="/signup">Sign up here</Link>.
//       </p>
//     </div>
//   );
// };

// export default Login;


// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assume you have a list of registered users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      login(user);

      // Store user in localStorage to persist login
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    } else {
      alert('Invalid credentials. Please check your email and password.');
    }
  };

  return (
    <div>
      <h2>Login to TAPioca</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't already have an account? <Link to="/signup">Sign up here</Link>.
      </p>
    </div>
  );
};

export default Login;
