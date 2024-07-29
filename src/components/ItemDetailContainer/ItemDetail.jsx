import React, { useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemListContainer/ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto }) => {
    const { agregarProducto } = useContext(CartContext);

    const onAdd = (contador) => {
        const productoCarrito = {
            ...producto,
            cantidad: contador 
        };
    
        agregarProducto(productoCarrito);
    
        console.log(`Agregado al carrito: ${productoCarrito}, Cantidad: ${contador}`);
    };
    

    return (
        <div className="item-detail">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="detail">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p className="price">${producto.precio}</p>
                <div className="item-count-container">
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;


