import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import API from '../Utils/api';



function ExhibitorDashboard() {

  const [user, setUser] = useState(null);


  useEffect(() => {
    const fetchInfo = async () => {
      try {

        const res = await API.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        // console.log("Fetched users:", res.data);
        setUser(res.data);
      } catch (err) {
        console.error(`Failed to fetch users: ${err}`);
      }
    };

    fetchInfo();
  }, []);


  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
            Hello {user?.username || 'Exhibitor'}, Ready to Exhibit?
          </h1>

          {/* Profile Info */}
          <div className="bg-white shadow rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">Your Company Profile</h2>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>
            <p><strong>Company:</strong> {user?.companyName || "Tech Innovators Inc."}</p>
          </div>

          {/* Assigned Booths */}
          <div className="bg-white shadow rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-purple-700">Assigned Booths</h2>
            <ul className="space-y-3">
              <li className="p-4 border rounded-lg hover:bg-purple-50 transition">
                <h3 className="font-semibold text-lg">Tech Expo 2025 - Booth B14</h3>
                <p className="text-sm text-gray-600">Location: Main Hall | Date: June 15</p>
              </li>
            </ul>
          </div>

          {/* Product Showcase */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-700">Showcase Your Products</h2>
            <p className="mb-4 text-sm text-gray-600">Upload and manage product materials for display at events.</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Upload Product Material
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExhibitorDashboard;
