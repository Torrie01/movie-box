import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MoviesDetails from './Components/MoviesDetails';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { AuthProvider, useAuth } from './Components/AuthContext'; 
import './index.css';

function App() {
  const { login, isAuthenticated  } = useAuth(); 

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      login(); // Set authentication state to true
    }
  }, [login]);
  // const { isAuthenticated, login } = useAuth(); 

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
