import React from 'react';

// CSS
import "../styles/Sidebar.css";

function Sidebar({ effect, click }) {
    return (
        <div className={effect ? "Sidebar show" : "Sidebar"}>
            <ul>
                <li><a href="#features" onClick={click}>Solutions</a></li>
                <li><a href="#solutions" onClick={click}>Services</a></li>
                <li><a href="#team" onClick={click}>Team</a></li>
                <li><a href="#faq" onClick={click}>FAQ</a></li>
            </ul>
        </div>
    )
}

export default Sidebar
