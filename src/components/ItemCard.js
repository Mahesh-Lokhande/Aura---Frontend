import React from 'react';

function ItemCard({ image, title, text,price, addToCart  }) {

    // const handleAddToCart = () => {
    //     addToCart({ title, price }); // Pass item details as arguments
    // };
    const handleAddToCart = () => {
        addToCart({ image, title, text, price });
    };
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <p className="card-text">₹{price}</p>
                    <br />
                    <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
