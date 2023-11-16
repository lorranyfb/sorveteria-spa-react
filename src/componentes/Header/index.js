import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Header = () => (
    <header>
        <div className='limit-section'>

            <img className='logo'src='assets/logo.png'/>

            <nav className='menu'>

                <Link className='menu-link' to='/'>Home</Link>
                <Link className='menu-link' to='/sabores'>Sabores</Link>
                <Link className='menu-link' to='/sobre'>Sobre</Link>

            </nav>
        </div>
    </header>
);

export default Header;