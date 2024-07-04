import React, { useState } from 'react';
import './Item.css'; 

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="item-count-container">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
