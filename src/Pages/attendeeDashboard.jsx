import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


function AttendeeDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Welcome, {user?.username || 'Attendee'} 🎉
          </h1>

          {/* Profile Card */}
          <div className="bg-white shadow rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-700">Upcoming Events</h2>
            <ul className="space-y-3">
              <li className="p-4 border rounded-lg hover:bg-green-50 transition">
                <h3 className="font-semibold text-lg">Tech Expo 2025</h3>
                <p className="text-sm text-gray-600">June 15, 2025 – Expo Center, NYC</p>
              </li>
              <li className="p-4 border rounded-lg hover:bg-green-50 transition">
                <h3 className="font-semibold text-lg">StartUp Connect</h3>
                <p className="text-sm text-gray-600">July 8, 2025 – Silicon Valley</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AttendeeDashboard;
