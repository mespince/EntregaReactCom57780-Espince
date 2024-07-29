import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { obtenerProductos } from '../../utils/seedProducts';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        obtenerProductos()
            .then((respuesta) => {
                if (idCategoria) {
                    const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria);
                    setProductos(productosFiltrados);
                } else {
                    setProductos(respuesta);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finalizó la promesa");
            });
    }, [idCategoria]);

    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;

