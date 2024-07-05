import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemListContainer/ItemCount';

const ItemDetail = ({ producto }) => {
    const onAdd = (cantidadSeleccionada) => {
        console.log(`Agregado al carrito: ${producto.nombre}, Cantidad: ${cantidadSeleccionada}`);
    };

    return (
        <div className="item-detail">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="detail">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p className="price">${producto.precio}</p>
                <div className="item-count-container">
                    <ItemCount initial={0} stock={10} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;

