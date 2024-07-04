import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ComponentePadre from './components/Ejemplos/ComponentePadre';
import EjemploContador from './components/Ejemplos/EjemploContador';

function App() {
    return (
        <div className="app">
            <NavBar categories={['Hamburguesas', 'Helados', 'Sándwiches']} />
            <ItemListContainer saludo="Bienvenido a mi eCommerce" />
            
        </div>
    );
}

export default App;
