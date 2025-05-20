import React from 'react'
import { Link } from 'react-router-dom';
import SignOutButton from './signOutbtn';

const Header = () => {
    return (
        <header className="bg-blue-300 shadow">
            <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
                <div className="flex items-center justify-center">
                    <a href="/" className="flex items-center">
                        <img src="/logo.png" className="absolute mx-auto w-60 h-60" alt="EventSphere Logo" />
                    </a>
                </div>
                <br></br>
                <h1 className="text-4xl font-bold  text-violet-500">Event<span className='text-amber-400'>Sphere</span> Management</h1>
                <nav className="space-x-6  text-gray-600 font-medium">
                    <a href='/' className="p-2 mx-2 rounded-xl bg-violet-500 text-amber-50 hover:bg-violet-800 hover:text-amber-400">Home</a>
                    <a href="/about" className="p-2 mx-2 rounded-xl bg-violet-500 text-amber-50 hover:bg-violet-800 hover:text-amber-400">About</a>
                    <a href="/login" className="p-2 mx-2 rounded-xl bg-violet-500 text-amber-50 hover:bg-violet-800 hover:text-amber-400">Login</a>
                    <a href="/register" className="p-2 mx-2 rounded-xl bg-violet-500 text-amber-50 hover:bg-violet-800 hover:text-amber-400">Sign Up</a>
                    <SignOutButton />
                </nav>
            </div>
        </header>
    );
}
export default Header;