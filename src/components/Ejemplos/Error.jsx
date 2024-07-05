import React from 'react';
import './Error.css'; 

const Error = () => {
    return (
        <div className="error-container">
            <h2>ERROR 404</h2>
            <p>Plato no encontrado</p>
            <img src="../public/img/tatsugiri.png" alt="Error 404" />
        </div>
    );
};

export default Error;