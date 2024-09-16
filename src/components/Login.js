import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (role === 'Committee Leader' && !paymentCompleted) {
            alert('Please complete the payment to continue.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password,
                role,
            });

            alert(`Login successful as ${role}!`);
            console.log(response.data);

            if (role === 'Committee Leader') {
                navigate('/committee-dashboard');
            } else {
                navigate('/user-dashboard');
            }
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Login failed!');
        }
    };

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        setPaymentCompleted(selectedRole !== 'Committee Leader');
    };

    const handlePayment = () => {
        // Simulate payment process
        setPaymentCompleted(true);
        alert('Payment successful!');
    };

    const renderPaymentForm = () => (
        <div className="payment-form">
            <h4>Payment Required for Committee Leader</h4>
            <div className="form-group">
                <label>Card Number:</label>
                <input type="text" className="form-control" placeholder="Enter card number" />
            </div>
            <div className="form-group">
                <label>Expiry Date:</label>
                <input type="text" className="form-control" placeholder="Enter expiry date" />
            </div>
            <div className="form-group">
                <label>CVV:</label>
                <input type="password" className="form-control" placeholder="Enter CVV" />
            </div>
            <button type="button" className="btn" onClick={handlePayment}>Pay Now</button>
        </div>
    );

    return (
        <div className="container">
            <h2>Login</h2>
            <div className="role-selection">
                <button 
                    className={`btn ${role === 'Committee Leader' ? 'selected' : ''}`} 
                    onClick={() => handleRoleSelection('Committee Leader')}
                >
                    Login as Committee Leader
                </button>
                <button 
                    className={`btn ${role === 'User' ? 'selected' : ''}`} 
                    onClick={() => handleRoleSelection('User')}
                >
                    Login as User
                </button>
            </div>

            {role && <h4 className="mt-3">Selected Role: {role}</h4>}

            {role === 'Committee Leader' && !paymentCompleted && renderPaymentForm()}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        required
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
