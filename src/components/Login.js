// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); // Hook for navigation

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:5000/api/users/login', {
//                 email,
//                 password,
//             });

//             // Handle successful login
//             alert('Login successful!');
//             console.log(response.data);

//             // Redirect to products landing page
//             navigate('/products');
//         } catch (error) {
//             // Handle errors
//             console.error('Error:', error.response?.data || error.message);
//             alert('Login failed!');
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input 
//                         type="email" 
//                         className="form-control" 
//                         placeholder="Enter email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password</label>
//                     <input 
//                         type="password" 
//                         className="form-control" 
//                         placeholder="Enter password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit" className="btn">Login</button>
//                 <p className="text-center mt-3">
//                     Don't have an account? <Link to="/signup" className='nextlink'>Signup</Link>
//                 </p>
//                 <p className="text-center mt-3">
//                     Forgot your password? <Link to="/forgot-password" className='nextlink'>Reset</Link>
//                 </p>
//             </form>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');  // State to store the selected role
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password,
                role,  // Include the role in the request
            });

            // Handle successful login
            alert(`Login successful as ${role}!`);
            console.log(response.data);

            // Redirect to different pages based on role
            if (role === 'Committee Leader') {
                navigate('/committee-dashboard');  // Redirect to Committee Leader's dashboard
            } else if (role === 'Team Leader') {
                navigate('/team-dashboard');  // Redirect to Team Leader's dashboard
            } else if (role === 'Player') {
                navigate('/player-dashboard');  // Redirect to Player's dashboard
            } else {
                navigate('/products');  // Default landing page
            }
        } catch (error) {
            // Handle errors
            console.error('Error:', error.response?.data || error.message);
            alert('Login failed!');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>

            {/* Role Selection Buttons */}
            <div className="role-selection">
                <button className="btn" onClick={() => setRole('Committee Leader')}>Login as Committee Leader</button>
                <button className="btn" onClick={() => setRole('Team Leader')}>Login as Team Leader</button>
                <button className="btn" onClick={() => setRole('Player')}>Login as Player</button>
            </div>

            {/* Display selected role */}
            {role && <h4 className="mt-3">Selected Role: {role}</h4>}

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">Login</button>
                <p className="text-center mt-3">
                    Don't have an account? <Link to="/signup" className='nextlink'>Signup</Link>
                </p>
                <p className="text-center mt-3">
                    Forgot your password? <Link to="/forgot-password" className='nextlink'>Reset</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;

