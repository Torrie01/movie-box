// eslint-disable-next-line
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Components/Firebase';
import { useNavigate, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Account created successfully!', user);
        setSignupSuccess(true); 
        setTimeout(() => {
          navigate('/login'); 
        }, 12000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
 
 
  return (
    <div className='SignUp-container'>
      <form onSubmit={handleSignUp}>
        {signupSuccess && <p>Account created successfully!</p>}
        <h1>Create an Account</h1>
        <label>
          FirstName:
          <input
            type="text"
            placeholder='Enter your firstname'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          LastName:
          <input
            type="text"
            placeholder='Enter your lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </label>
        <br />
        <button type="submit">
          Register
        </button>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;