import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Offcanvas from "./Offcanvas";
import CartSidebar from "./CartSidebar";

const Card = () => {
    
    const [showCart, setShowCart] = useState(false); 
    const [cartItems, setCartItems] = useState([ 
        { name: 'Item 1', price: 29.99 }, 
        { name: 'Item 2', price: 19.99 },
    ]);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

return (
    <>
        <div onClick={toggleCart} className="relative cursor-pointer">
            <HiOutlineShoppingBag/>
            <div className="cardCounter absolute top-0 right-0 border border-white rounded-full w-[14px] lg:w-[18px] h-[14px] lg:h-[18px] bg-branding-success-dark text-[7px] lg:text-[10px] text-white text-center leading-[12px] lg:leading-[15px]">
                {cartItems.length}
            </div>
        </div>

        <Offcanvas 
            position="right" 
            hideSidebar={() => setShowCart(false)} 
            showSidebar={showCart} 
            heading="Shopping Items"
        >
            <CartSidebar items={cartItems} onClose={() => setShowCart(false)} />
        </Offcanvas>
    </>
  );
}

export default Card;