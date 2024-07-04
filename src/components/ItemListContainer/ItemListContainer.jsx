import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { obtenerProductos } from '../../data/data';

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
    }, []);

    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
