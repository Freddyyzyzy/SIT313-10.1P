// src/Components/AuthPage.jsx
import React, { useState } from 'react';
import LoginForm from '../Components/SignUpANDLogin/Login';
import SignupForm from '../Components/SignUpANDLogin/Signup';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{isLogin ? 'Welcome Back!' : 'Join Us!'}</h1>
      <div style={styles.toggleLink} onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
      </div>
      <div style={styles.formContainer}>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
    color: '#333',
  },
  toggleLink: {
    marginBottom: '20px',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  formContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default AuthPage;
