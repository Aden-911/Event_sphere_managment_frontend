import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const About = () => {
      return (
    <div className="bg-gray-400 min-h-screen">
      {/* Header */}
      <Header/>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Event Sphere Management</h2>
          <p className="text-gray-600 text-lg mb-10">
            Event Sphere Management is a modern event management platform designed to streamline expo and conference experiences for all participants — from organizers and exhibitors to attendees.
          </p>
          <img
            src="https://images.pexels.com/photos/3143850/pexels-photo-3143850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Event Management Illustration"
            className="mx-auto w-half max-w-3xl rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-md leading-relaxed">
              At Event Sphere, our mission is to simplify and modernize the way events are planned, managed, and experienced.
              We empower **Admins** to control every aspect of the event, **Exhibitors** to create engaging booths and sessions, and **Attendees** to explore, interact, and stay informed through a seamless digital experience.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/8349431/pexels-photo-8349431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team Collaboration"
            className="w-full rounded-xl shadow"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 border-t mt-12">
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Event Sphere. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default About;