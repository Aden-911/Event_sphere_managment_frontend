import React, { useEffect, useState } from 'react';
import API from '../Utils/api';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ConfrmDel from '../Components/ConfirmDel';
import ConfrmUpdate from '../Components/ConfirmUpt';

const AdminDashboard = () => {
  const [user, setUser] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openUpdtModal, setopenUpdateModal] = useState(false);
  const [userIdToUpdate, setUserIdToUpdate] = useState("");
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const openDeleteModal = (userId) => {
    console.log("Opening delete modal for:", userId, typeof userId);
    setUserIdToDelete(userId);
    setOpenModal(true);
  };
  const handleDelete = async (userId) => {
    console.log("Delete clicked for", userId);
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      console.log("Deleting ID:", userIdToDelete, typeof userIdToDelete);
      await API.delete(`/admin/users/${userIdToDelete}`, config);
      setUser(user.filter((u) => u._id !== userIdToDelete));
    } catch (err) {
      console.error('Delete failed:', err);
    } finally {
      setOpenModal(false);
      setUserIdToDelete(null);
    }
  };
    const openUpdateModal = (userId) => {
    console.log("Opening update modal for:", userId);
    setUserIdToUpdate(userId);
    setopenUpdateModal(true);
  };
  const handleChangeRole = async () => {
    console.log("Update role clicked for", userIdToUpdate);
    const newRole = prompt("Enter new role (admin, exhibitor, attendee):");
    if (!['admin', 'exhibitor', 'attendee'].includes(newRole)) {
      alert('Invalid role');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await API.put(`/admin/users/${userIdToUpdate}/role`, { role: newRole }, config);

      // Refresh users after change
      setUser(user.map((u) => u._id === userIdToUpdate ? res.data.user : u));
    } catch (err) {
      console.error('Role change failed:', err);
    }finally {
      setopenUpdateModal(false);
      setUserIdToUpdate("");
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await API.get('/admin/users', config);
        // console.log("Fetched users:", res.data);
        setUser(res.data);
      } catch (err) {
        console.error(`Failed to fetch users: ${err}`);
      }
    };

    fetchUsers();
  }, [])

  const attendees = user.filter((u) => u.role === 'attendee');
  const exhibitors = user.filter((u) => u.role === 'exhibitor');
  const admins = user.filter((u) => u.role === 'admin');

  return (
    <>
      <Header />

      <ConfrmUpdate
        open={openUpdtModal}
        onClose={() => setopenUpdateModal(false)}
        onConfirm={handleChangeRole}
      />

      <ConfrmDel
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDelete}
      />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Admin Dashboard</h1>

        {/* Admin Table */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Admins</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead>
                <tr className="bg-blue-100 text-left text-gray-700 font-medium">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((u) => (
                  <tr key={u._id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{u.username}</td>
                    <td className="py-2 px-4">{u.email}</td>
                    <td className="py-2 px-4">{u.role}</td>
                    <td className="py-2 px-4 space-x-2">
                      <button
                        onClick={() => openDeleteModal(u._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => openUpdateModal(u._id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Change Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Attendees Table */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Attendees</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead>
                <tr className="bg-green-100 text-left text-gray-700 font-medium">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {attendees.map((u) => (
                  <tr key={u._id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{u.username}</td>
                    <td className="py-2 px-4">{u.email}</td>
                    <td className="py-2 px-4">{u.role}</td>
                    <td className="py-2 px-4 space-x-2">
                      <button
                        onClick={() => openDeleteModal(u._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => openUpdateModal(u._id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Change Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Exhibitors Table */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Exhibitors</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead>
                <tr className="bg-purple-100 text-left text-gray-700 font-medium">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {exhibitors.map((u) => (
                  <tr key={u._id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{u.username}</td>
                    <td className="py-2 px-4">{u.email}</td>
                    <td className="py-2 px-4">{u.role}</td>
                    <td className="py-2 px-4 space-x-2">
                      <button
                        onClick={() => openDeleteModal(u._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => openUpdateModal(u._id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Change Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
