import { useState, useEffect } from "react"; 
import Contador from "./Contador";
import Titulo from "./Titulo";

const EjemploContador = ({ stock }) => {
    const [contador, setContador] = useState(1);
    const [toggle, setToggle] = useState(true);

    //se ejecuta una sola vez, al montar componente
// useEffect(() => {
//     const fetchApi = () => {
//         fetch("https://fakestoreapi.com/products")
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => console.log(data))
//     };
//     fetchApi();
// }, [] )

// useEffect( () => { //llamada de apis, sucripciones a Eventos
//     console.log("1er Use Effect")
// }, [])

// useEffect( () => { // pa' realizar acciones especificas
//     console.log("2do UseEffect")
// }, [contador])

// useEffect( () => { //cada vez q se actualiza , puede servir para operaciones globales de monitoreo o registro.
//     console.log("3er useEffect")
// })



    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };
    const cambiarValorToggle = () => {
        setToggle(!toggle);
    };
    


    return (
        <div><Contador
            contador={contador}
            aumentarContador={aumentarContador}
            disminuirContador={disminuirContador}
        />
        <p>Booleano: {toggle.toString()}</p>
        <button onClick={cambiarValorToggle}>Cambiar valor Toggle</button>
        
        {
            toggle && <Titulo texto="Hola" numero={3}/>
        }
        
        
        </div>
    );
};

export default EjemploContador;
