import React from 'react';
import './Header.css';
import logo from './assects/Tesla.png'

function Header() {
    return ( 
    <div className="header">
        <div className="header_logo">
            <img  className="header_logo_tesla"
            src={logo} alt="Tesla Logo"/>
        </div>
        
        <div className="header_center">
            <p>MODEL S</p>
            <p>MODEL 3</p>
            <p>MODEL X</p>
            <p>MODEL Y</p>
            <p>SOLAR ROOF</p>
            <p>SOLAR PANELS</p>
        </div>

        <div className="header_right">
            <p>SHOP</p>
            <p>TESLA ACCOUNT</p>
        </div>
    </div>
    )
}

export default Header