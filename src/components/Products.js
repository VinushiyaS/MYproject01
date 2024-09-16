// // // // Products.js
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // function Products() {
// // //     const [products, setProducts] = useState([]);

// // //     useEffect(() => {
// // //         async function fetchProducts() {
// // //             try {
// // //                 const response = await axios.get('http://localhost:5000/api/products');
// // //                 setProducts(response.data);
// // //             } catch (error) {
// // //                 console.error('Error fetching products:', error);
// // //             }
// // //         }
// // //         fetchProducts();
// // //     }, []);

// // //     return (
// // //         <div className="container">
// // //             <div className="my">
// // //             <h2><btn>Auction</btn></h2>
// // //             </div>
// // //             <ul>
// // //                 {products.map(product => (
// // //                     <li key={product._id}>
// // //                         <h3>{product.name}</h3>
// // //                         <p>{product.description}</p>
// // //                         <p>Price: {product.price}</p>
// // //                         <p>Quantity: {product.quantity}</p>
// // //                     </li>
// // //                 ))}
// // //             </ul>
// // //         </div>
// // //     );
// // // }

// // // export default Products;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function Products() {
// //     const [products, setProducts] = useState([]);
// //     const [showLoginOptions, setShowLoginOptions] = useState(false);
// //     const [loginType, setLoginType] = useState('');

// //     useEffect(() => {
// //         async function fetchProducts() {
// //             try {
// //                 const response = await axios.get('http://localhost:5000/api/products');
// //                 setProducts(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching products:', error);
// //             }
// //         }
// //         fetchProducts();
// //     }, []);

// //     const handleAuctionClick = () => {
// //         setShowLoginOptions(true);
// //     };

// //     const handleLoginClick = (type) => {
// //         setLoginType(type);
// //     };

// //     const renderLoginForm = () => {
// //         return (
// //             <div>
// //                 <h3>Login as {loginType}</h3>
// //                 <form>
// //                     <div>
// //                         <label>Username:</label>
// //                         <input type="text" name="username" />
// //                     </div>
// //                     <div>
// //                         <label>Password:</label>
// //                         <input type="password" name="password" />
// //                     </div>
// //                     <button type="submit">Login</button>
// //                 </form>
// //             </div>
// //         );
// //     };

// //     return (
// //         <div className="container">
// //             <div className="my">
// //                 <h2>
// //                     <button onClick={handleAuctionClick}>Auction</button>
// //                 </h2>
// //             </div>
// //             {showLoginOptions && (
// //                 <div>
// //                     <button onClick={() => handleLoginClick('Committee Leader')}>Login as Committee Leader</button>
// //                     <button onClick={() => handleLoginClick('Team Leader')}>Login as Team Leader</button>
// //                     <button onClick={() => handleLoginClick('Player')}>Login as Player</button>
// //                 </div>
// //             )}
// //             {loginType && renderLoginForm()}
// //             <ul>
// //                 {products.map(product => (
// //                     <li key={product._id}>
// //                         <h3>{product.name}</h3>
// //                         <p>{product.description}</p>
// //                         <p>Price: {product.price}</p>
// //                         <p>Quantity: {product.quantity}</p>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // }

// // export default Products;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Products() {
//     const [products, setProducts] = useState([]);
//     const [showLoginOptions, setShowLoginOptions] = useState(false);
//     const [loginType, setLoginType] = useState('');
//     const [showPaymentForm, setShowPaymentForm] = useState(false);

//     useEffect(() => {
//         async function fetchProducts() {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         }
//         fetchProducts();
//     }, []);

    // const handleAuctionClick = () => {
//         setShowLoginOptions(true);
//     };

//     const handleLoginClick = (type) => {
//         setLoginType(type);
//         if (type === 'Committee Leader') {
//             setShowPaymentForm(true);
//         } else {
//             setShowPaymentForm(false);
//         }
//     };

//     const renderLoginForm = () => {
//         return (
//             <div>
//                 <h3>Login as {loginType}</h3>
//                 <form>
//                     <div>
//                         <label>Username:</label>
//                         <input type="text" name="username" />
//                     </div>
//                     <div>
//                         <label>Password:</label>
//                         <input type="password" name="password" />
//                     </div>
//                     <button type="submit">Login</button>
//                 </form>
//                 {loginType === 'Committee Leader' && renderPaymentForm()}
//             </div>
//         );
//     };

//     const renderPaymentForm = () => {
//         return (
//             <div>
//                 <h4>Payment Required for Committee Leader</h4>
//                 <form>
//                     <div>
//                         <label>Card Number:</label>
//                         <input type="text" name="cardNumber" />
//                     </div>
//                     <div>
//                         <label>Expiry Date:</label>
//                         <input type="text" name="expiryDate" />
//                     </div>
//                     <div>
//                         <label>CVV:</label>
//                         <input type="password" name="cvv" />
//                     </div>
//                     <button type="submit">Pay Now</button>
//                 </form>
//             </div>
//         );
//     };

//     return (
//         <div className="container">
//             <div className="my">
//                 <h2>
//                     <button onClick={handleAuctionClick}>Auction</button>
//                 </h2>
//             </div>
//             {showLoginOptions && (
//                 <div>
//                     <button onClick={() => handleLoginClick('Committee Leader')}>Login as Committee Leader</button>
//                     <button onClick={() => handleLoginClick('Team Leader')}>Login as Team Leader</button>
//                     <button onClick={() => handleLoginClick('Player')}>Login as Player</button>
//                 </div>
//             )}
//             {loginType && renderLoginForm()}
//             <ul>
//                 {products.map(product => (
//                     <li key={product._id}>
//                         <h3>{product.name}</h3>
//                         <p>{product.description}</p>
//                         <p>Price: {product.price}</p>
//                         <p>Quantity: {product.quantity}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Products;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
    const [products, setProducts] = useState([]);
    const [showLoginOptions, setShowLoginOptions] = useState(false);
    const [loginType, setLoginType] = useState('');
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [showTeamLeaderDashboard, setShowTeamLeaderDashboard] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);

    const handleAuctionClick = () => {
        setShowLoginOptions(true);
    };

    const handleLoginClick = (type) => {
        setLoginType(type);
        if (type === 'Committee Leader') {
            setShowPaymentForm(true);
            setShowTeamLeaderDashboard(false);
        } else if (type === 'Team Leader') {
            setShowPaymentForm(false);
            setShowTeamLeaderDashboard(true);
        } else {
            setShowPaymentForm(false);
            setShowTeamLeaderDashboard(false);
        }
    };

    const renderLoginForm = () => {
        return (
            <div>
                <h3>Login as {loginType}</h3>
                <form>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {loginType === 'Committee Leader' && renderPaymentForm()}
                {loginType === 'Team Leader' && showTeamLeaderDashboard && renderTeamLeaderDashboard()}
            </div>
        );
    };

    const renderPaymentForm = () => {
        return (
            <div>
                <h4>Payment Required for Committee Leader</h4>
                <form>
                    <div>
                        <label>Card Number:</label>
                        <input type="text" name="cardNumber" />
                    </div>
                    <div>
                        <label>Expiry Date:</label>
                        <input type="text" name="expiryDate" />
                    </div>
                    <div>
                        <label>CVV:</label>
                        <input type="password" name="cvv" />
                    </div>
                    <button type="submit">Pay Now</button>
                </form>
            </div>
        );
    };

    const renderTeamLeaderDashboard = () => {
        return (
            <div>
                {/* <h4>Team Leader Dashboard</h4>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Position</th>
                            <th>Points</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example Data - Replace with dynamic data as needed */}
                        {/* <tr>
                            <td>Player 1</td>
                            <td>Batsman</td>
                            <td>150</td>
                            <td><button>Edit</button></td>
                        </tr>
                        <tr>
                            <td>Player 2</td>
                            <td>Bowler</td>
                            <td>200</td>
                            <td><button>Edit</button></td>
                        </tr>
                        <tr>
                            <td>Player 3</td>
                            <td>All-Rounder</td>
                            <td>180</td>
                            <td><button>Edit</button></td>
                        </tr>
                    </tbody>
                </table> */} 
            </div>
        );
    };

    return (
        <div className="container">
            <div className="my">
                <h2>
                    <button onClick={handleAuctionClick}>Auction</button>
                </h2>
            </div>
            {showLoginOptions && (
                <div>
                    <button onClick={() => handleLoginClick('Committee Leader')}>Login as Committee Leader</button>
                    <button onClick={() => handleLoginClick('Team Leader')}>Login as Team Leader</button>
                    <button onClick={() => handleLoginClick('Player')}>Login as Player</button>
                </div>
            )}
            {loginType && renderLoginForm()}
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
