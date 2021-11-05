import React, { useState } from "react";

const Inicio = () => {
    // Contenido dinámico
    const titulo = "Título inicial";
    const [nombre, setNombre] = useState("Andrés");
    const [numero, setNumero] = useState(0);
    
    const modificarNombre = () => {
        setNombre("Charmander");
        console.log("Modificar nombre");
    };

    const aumentarNumero = () => {
        setNumero(numero + 1);
    }

    const contador = (valor) => {
        setNumero(numero + valor)
    }

    return ( 
        // Para poder importar y usar otro archivo
        <React.Fragment> 
            <h1>Prueba contenido 1</h1> 
            <h2>{titulo}</h2>
            <h2>{nombre}</h2>
            <h2>Número: {numero}</h2>
            <button onClick={modificarNombre}>Editar nombre</button>
            <button onClick={aumentarNumero}>Aumentar número</button>
            <button onClick={() => {
                contador(20);
            }}>Incrementar en 20</button>
        </React.Fragment>
        
    );
}
 
export default Inicio;