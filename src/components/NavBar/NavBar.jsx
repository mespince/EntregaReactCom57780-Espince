import React from 'react';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
return (
    <nav className="navbar">
    <Link to="/" className="brand">
        <img
        width={150}
        src="../public/img/descargar.png"
        alt=""
        />
    </Link>

    
    <ul className="categories">
                    <Link to="/categoria/Sushi" className="category">
                        <p>Sushi</p>
                        <div className="img-category">
                            <img
                                src="../public/img/nav.png"
                                alt="Sushi"
                            />
                        </div>
                    </Link>
                

                    <Link to="/categoria/Grill" className="category">
                        <p>Grill</p>
                        <div className="img-category">
                            <img
                                src="../public/img/nav3.png"
                                alt="Grill"
                            />
                        </div>
                    </Link>
                

                
                    <Link to="/categoria/Postre" className="category">
                        <p>Postres</p>
                        <div className="img-category">
                            <img
                                src="../public/img/nav2.png"
                                alt="Postres"
                            />
                        </div>
                    </Link>
                            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;