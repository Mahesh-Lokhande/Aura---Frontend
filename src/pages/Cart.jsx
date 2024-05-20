import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/cart.css';

export function Cart() {
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];

    return (
        <div className="container">
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.image} className="cart-item-img" alt={item.title} />
                            <div className="cart-item-details">
                                <h5 className="cart-item-title">{item.title}</h5>
                                <p className="cart-item-text">{item.text}</p>
                                <p className="cart-item-price">₹{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}


// // src/pages/Cart.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// export function Cart() {
//     const location = useLocation();
//     const cartItems = location.state?.cartItems || [];

//     return (
//         <div className="container">
//             <h1>Your Cart</h1>
//             {cartItems.length > 0 ? (
//                 <div className="row row-cols-1 row-cols-md-3 g-4">
//                     {cartItems.map((item, index) => (
//                         <div className="col" key={index}>
//                             <div className="card h-100">
//                                 <img src={item.image} className="card-img-top" alt={item.title} />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{item.title}</h5>
//                                     <p className="card-text">{item.text}</p>
//                                     <p className="card-text">₹{item.price}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>Your cart is empty</p>
//             )}
//         </div>
//     );
// }
