import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';
import { obtenerProductos } from '../../data/data';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos()
            .then((respuesta) => {
                setProductos(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finalizó la promesa");
            });
    }, []); // Asegúrate de pasar un array vacío como segundo argumento para que se ejecute solo una vez.

    const handleAddToCart = (count) => {
        console.log(`Se agregarán ${count} items al carrito`);
    };

    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <ItemList productos={productos} />
            <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
        </div>
    );
};

export default ItemListContainer;

