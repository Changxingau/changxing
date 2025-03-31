import React from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar({ click }) {
    return (
        <div className='Navbar'>
            <nav>
                <a href="#" style={{ display: "flex" }}>
                    <img src="/logo.svg" alt="logo" style={{ width: 92 }} />
                </a>
                <ul>
                    <li><a href="#features">Solutions</a></li>
                    <li><a href="#solutions">Services</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
                <div className="toggle">
                    <a href="#join" className="wait">Contact US</a>
                    <i onClick={click}>
                        <box-icon name='menu' color="white"></box-icon>
                    </i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
