import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />

            </Routes>
        </BrowserRouter>
        // <div className="app">
        //     <NavBar categories={['Sushi', 'Grill', 'Postre']} />
        //     <ItemListContainer saludo="Bienvenido a mi eCommerce" />
        // </div>
    );
}

export default App;
