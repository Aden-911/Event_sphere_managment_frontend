// import React from 'react';
// import { useNavigate } from 'react-router-dom';

import Slider from "../Components/Carousel";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const Home = () => {
  // const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />
      <Slider />
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold font-mono text-6xl text-gray-800 mb-4">Effortless Event Management at Your Fingertips</h2>
          <p className="text-gray-600 font-mono text-xl mb-8">
            Welcome to EventSphere Management, your all-in-one solution for planning, organizing, and managing events with absolute ease. Whether you're an admin overseeing operations, an exhibitor setting up booths, or an attendee exploring the event, our platform delivers a seamless experience for everyone. From real-time scheduling and booth assignments to insightful analytics and smooth communication — EventSphere empowers you to create unforgettable events effortlessly.
            Take control. Stay organized. Make every event a success with EventSphere.
          </p>
          <a
            href="/register"
            className="inline-block bg-blue-600 text-white font-mono px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Platform Features</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3142/3142886.png"
                alt="Schedule"
                className="h-20 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2 text-center">Event Scheduling</h4>
              <p className="text-gray-600 text-sm text-center">
                Easily set event times, speakers, and locations with our intuitive scheduler.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                alt="Booth"
                className="h-20 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2 text-center">Booth Management</h4>
              <p className="text-gray-600 text-sm text-center">
                Exhibitors can request, design, and manage booth spaces directly on the platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                alt="Analytics"
                className="h-20 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2 text-center">Real-time Analytics</h4>
              <p className="text-gray-600 text-sm text-center">
                Track attendee engagement, booth visits, and more with live insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
