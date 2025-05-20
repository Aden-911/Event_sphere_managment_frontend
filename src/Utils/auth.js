export const signOut = () => {
  localStorage.removeItem('token'); // or sessionStorage.removeItem()
  localStorage.removeItem('user');  // if you're storing user data
  window.location.href = '/login';  // redirect to login
};
