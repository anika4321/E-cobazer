import React from 'react';

const CartSidebar = ({ items, onClose }) => {
    return (
        <div>
            <h2 className="text-xl font-bold">Shopping Items</h2>
            {items.length === 0 ?  (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index} className="flex justify-between py-2">
                            <span>{item.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Close
            </button>
        </div>
    );
};

export default CartSidebar;
