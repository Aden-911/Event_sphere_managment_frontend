import React from 'react';

function SignOutButton() {
  const isLoggedIn = localStorage.getItem('token'); // or check 'user'

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  if (!isLoggedIn) return null; // Don't show the button if not logged in

  return (
    <button
      onClick={handleSignOut}
      className="p-2 mx-2 rounded-xl bg-violet-500 text-amber-50 hover:bg-violet-800 hover:text-amber-400"
    >
      Sign Out
    </button>
  );
}

export default SignOutButton;
