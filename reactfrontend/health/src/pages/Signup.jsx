import React, { useState } from 'react';

const API_BASE_URL = "https://mindinghealthbackend5-63fccc1580dc.herokuapp.com";


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/accounts/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        setMessage('User created successfully');
      } else {
        const data = await response.json();
        setMessage(data.error || 'Signup failed');
      }
    } catch (error) {
      setMessage('Error occurred during signup');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-bgColor"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-bgColor"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-bgColor"
            />
          </div>
          
          <button type="submit" className="w-full bg-bgColor text-white py-2 rounded-lg hover:bg-bgColor transition duration-300">
            Sign Up
          </button>
        </form>
        
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
