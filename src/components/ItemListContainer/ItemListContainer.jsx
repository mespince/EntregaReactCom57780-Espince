import React from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';

const ItemListContainer = ({ saludo }) => {
    const handleAddToCart = (count) => {
        console.log(`Se agregarán ${count} items al carrito`);
    };

    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
        </div>
    );
};

export default ItemListContainer;
