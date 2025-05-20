import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminDashboard from './Pages/adminDashboard';
import AttendeeDashboard from './Pages/attendeeDashboard';
import ExhibitorDashboard from './Pages/exhibitorDashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Pages/Home';
import About from './Pages/About';
import ForgetPassword from './Pages/PasswordForget';
import ResetPassword from './Pages/PasswordReset';


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/reset-password/:token' element={<ResetPassword/>}/>
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['attendee']} />}>
          <Route path="/attendeeDashboard" element={<AttendeeDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['exhibitor']} />}>
          <Route path="/exhibitorDashboard" element={<ExhibitorDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
