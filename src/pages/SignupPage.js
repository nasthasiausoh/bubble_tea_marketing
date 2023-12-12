import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../components/Signup';

const SignupPage = ({onSignUp}) => {
  return (
    <div>
      <Signup onSignUp={onSignUp}/>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default SignupPage;
