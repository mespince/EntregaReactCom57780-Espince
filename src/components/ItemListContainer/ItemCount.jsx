import React, { useState } from 'react';
import './ItemCount.css';

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

const addToCart = () => {
if (stock > 0) {
    onAdd(count);
}
};

return (
<div className="item-count-container">
    <div className="item-count-controls">
    <button onClick={decrement} disabled={count <= 1}>-</button>
    <span className="item-count-number">{count}</span>
    <button onClick={increment} disabled={count >= stock}>+</button>
    </div>
    <button className="item-count-add-button" onClick={addToCart} disabled={stock === 0}>
    Agregar al carrito
    </button>
</div>
);
};

export default ItemCount;




