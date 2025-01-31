import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/getUsers`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token ? token : '',
          },
          credentials: 'include', // Include cookies for authentication
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          setError('Failed to fetch users');
        }
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/admin/dashboard/${userId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Users List</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
          <th className="py-2 px-4">Sr No</th>
            <th className="py-2 px-4">Username</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b cursor-pointer" onClick={() => handleUserClick(user._id)}>
              <td className="py-3 px-4">{index+1}</td>
              <td className="py-3 px-4">{user.username}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;