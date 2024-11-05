import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
      // Optionally, redirect the user or update UI state here
    } catch (error) {
      console.error('Error logging in:', error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
