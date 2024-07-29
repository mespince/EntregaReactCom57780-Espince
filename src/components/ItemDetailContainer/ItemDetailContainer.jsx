import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../../utils/seedProducts.js';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { idProducto } = useParams();

    useEffect(() => {
        obtenerProductos()
            .then(data => {
                const productoFiltrado = data.find(productoData => productoData.id === idProducto);
                setProducto(productoFiltrado);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
    }, [idProducto]);

    return (
        <ItemDetail producto={producto} />
    );
};

export default ItemDetailContainer;
