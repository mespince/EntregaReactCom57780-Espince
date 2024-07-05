import React from 'react';
import './Item.css';

const Item = ({ producto }) => {
    return (
        <div className="item">
            <img src={producto.imagen} alt={producto.nombre} />
            <p className="nombre">{producto.nombre}</p>
            <p className="price">PRECIO: ${producto.precio}</p>
            <div className="item-count-container">
                <button>-</button>
                <span>1</span>
                <button>+</button>
                <button className="add-to-cart">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default Item;
