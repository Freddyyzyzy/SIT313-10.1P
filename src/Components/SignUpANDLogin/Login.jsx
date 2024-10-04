// src/Components/Forms/LoginForm.jsx
import React, { useState } from 'react';
import { auth, googleProvider } from '../../Config/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Logged in successfully');
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log('Logged in with Google successfully');
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Login</h2>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Log In</button>
      <button type="button" onClick={handleGoogleLogin} style={styles.googleButton}>
        Log In with Google
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  googleButton: {
    padding: '10px',
    backgroundColor: '#db4437',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LoginForm;
