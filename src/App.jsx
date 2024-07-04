import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div className="app">
            <NavBar categories={['Sushi', 'Grill', 'Postre']} />
            <ItemListContainer saludo="Bienvenido a mi eCommerce" />
        </div>
    );
}

export default App;
