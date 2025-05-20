import React, { useState } from 'react';
import API from '../Utils/api';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'attendee',
    companyName: '',
    boothNumber: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debug line

    try {
      // const { confirmPassword, ...dataToSend } = formData; // exclude confirmPassword from request

      const res = await API.post('/auth/register', formData);

      const { token, redirectPath, role } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      console.log(`User role: ${role}, redirecting to: ${redirectPath}`);

      setTimeout(() => {
        navigate(redirectPath);
      }, 50);

      // Redirect based on role
      // if (user.role === 'admin') navigate('/admin-dashboard');
      // else if (user.role === 'attendee') navigate('/attendee-dashboard');
      // else if (user.role === 'exhibitor') navigate('/exhibitor-dashboard');
    } catch (err) {
      console.error('Registration error:', err.response || err.message);
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="role">Role</label>
              <select
                id="Role"
                name="role"
                placeholder="What is your role?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="attendee">Attendee</option>
                <option value="exhibitor">Exhibitor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

             {formData.role === 'exhibitor' && (
            <>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.companyName}
                onChange={handleChange}
                required
              />

              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Available Floors</label>
              <input
                type="text"
                name="boothNumber"
                placeholder="How many floors you have available?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.boothNumber}
                onChange={handleChange}
                required
              />
            </>
          )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );

};

export default Register;
