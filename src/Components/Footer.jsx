import React from 'react'

const Footer = () => {
    return(
        <footer className="bg-white py-6 border-t">
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Event Sphere. All rights reserved.
        </div>
      </footer>
    );
}

export default Footer;