import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

function CartWidget({ itemCount }) {
    return (
        <div>
            <FaShoppingCart />
            <p>1</p>
        </div>
    );
}

export default CartWidget;