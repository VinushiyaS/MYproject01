// AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUsers() {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login'); // Redirect to login if no token
                    return;
                }

                const response = await axios.get('http://localhost:5000/api/admin/dashboard', {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                navigate('/login'); // Redirect to login if error occurs
            }
        }
        fetchUsers();
    }, [navigate]);

    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <h3>{user.userName}</h3>
                        <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;
