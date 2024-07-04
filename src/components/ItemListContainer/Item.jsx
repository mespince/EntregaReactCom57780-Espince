const Item = ({ producto }) => { 
    return (
        <div>
            <img src={producto.imagen} width={200} alt=""/>
            <p>{producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
        </div>
    );
};

export default Item;

