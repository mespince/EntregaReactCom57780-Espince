import React, { useState } from 'react';
import './Item.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1);

    const onAdd = (cantidadSeleccionada) => {
        console.log(`Agregado al carrito: ${producto.nombre}, Cantidad: ${cantidadSeleccionada}`);
    };

    return (
        <div className="item">
            <Link to={"/detalle/" + producto.id} className="item-link">
                <img src={producto.imagen} alt={producto.nombre} />
                <span className="more-details">Más detalles</span>
            </Link>
            <div className="item-details">
                <p className="nombre">{producto.nombre}</p>
                <p className="price">${producto.precio}</p>
                <div className="item-count-container">
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};

export default Item;
