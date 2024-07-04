import React from 'react';

function Contador({ contador, aumentarContador, disminuirContador }) {
    return (
        <div>
            <button onClick={disminuirContador}>-</button>
            <span>{contador}</span>
            <button onClick={aumentarContador}>+</button>
        </div>
    );
}

export default Contador;
