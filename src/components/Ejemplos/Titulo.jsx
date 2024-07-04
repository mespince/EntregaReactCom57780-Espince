import { useEffect } from "react";



const Titulo = ({ texto, numero, saludar }) => {
    useEffect (() =>{
        return () => {
            console.log("desmontando titulo")
        }
    })
    return (
        <div>
            <p>{texto}</p>
            <p>{numero}</p>
            <button onClick={saludar}> Clickeame </button>
        </div>
    );
    
};
export default Titulo;
