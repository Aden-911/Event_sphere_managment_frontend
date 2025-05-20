import React, { useState } from 'react';
import axios from 'axios';
import API from '../Utils/api';
import Header from '../Components/Header';
import { Footer } from 'flowbite-react';


const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // NEW


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true)

    try {
      const res = await API.post('auth/forget-password', {
        email,
      });
      setMessage(res.data.message);
      console.log("Reset Link has been sended to your email");
      setLoading(false)
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Reset Your Password</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Enter your Email</label>
                <input
                  id="email"
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                {loading ? 'Sending...' : 'Send password reset link'}
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ForgetPassword;
