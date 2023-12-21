import React, { useState, } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const authContext = useAuth();   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user.email;
      console.log('Login successful!', user);

      localStorage.setItem('authToken', userCredential.accessToken); 
      authContext.login(); 
      navigate('/');
      setLoginSuccess(true);
      setTimeout(() => {
        navigate('/'); 
      }, 15000);  
    } catch (error) {
      const errorMessage = error.message;
      console.error('Sign-in error:', errorMessage);
    }
  };

  const handleSignUpClick = () => {
    navigate('/SignUp');
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleLogin}>
        {loginSuccess && <p>User successfully signed in!</p>}
        <h1>Welcome to the MovieBox!</h1>
        <h2>Login to view our catalog of top-rated movies</h2>
        <label>
          Email:
          <input
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">
          Login
        </button>
        <p>
          Don't have an account yet,{' '}
          <span onClick={handleSignUpClick} style={{ cursor: 'pointer', color: 'blue' }}>
            Sign up here!
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;