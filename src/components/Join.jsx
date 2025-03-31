import React from 'react';

// CSS
import "../styles/Join.css";

function Join() {
    return (
        <div className='Block joinBlock' id='join'>
            <center><p className='subHead' style={{ position: "relative", zIndex: 2 }}>Contact US</p></center>
            <center><p className="heading" style={{ position: "relative", zIndex: 2 }}>Enter Your Email <br /><span style={{ color: "#ffffffb3" }}>Be the first to get in touch</span></p></center>

            <form className='list'> 
                <input type="email" placeholder='Enter your email' required />
                <button type="submit">Contact US</button>
            </form>
        </div>
    )
}

export default Join
