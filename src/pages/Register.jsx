import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Use Firebase to create a new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Successfully registered, you can access the user info like this:
      const user = userCredential.user;
      console.log('Registered successfully:', user);
      alert('User registered successfully!');
      // Optionally, you can redirect or update the UI here
    } catch (error) {
      console.error('Error registering:', error);
      alert(error.message); // Show error message to the user
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
