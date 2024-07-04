import React from 'react';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';

function NavBar({ categories }) {
    return (
        <nav className="navbar">
            <div className="brand">
                <img width={100} src="https://seeklogo.com/images/P/pedidos-ya-logo-70D1FA3532-seeklogo.com.png" alt="Logo de Pedidos Ya" />
                <p>Pedidos CoderYa</p>
            </div>
            <ul>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;