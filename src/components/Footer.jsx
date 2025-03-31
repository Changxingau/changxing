import React from 'react';

// CSS
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='Block'>
            <footer>
                <div className="footerFlex">
                    <div>
                        <a href="#" style={{ display: "flex", width: "fit-content" }}>
                            <img src="/logo.svg" alt="logo" style={{ width: 92 }} />
                        </a>
                      <span>A leading Security service provider committed to embedding robust security into products and services, helping you build reliable, resilient, and efficient digital infrastructures.</span>
                    </div>
                    <div className='footerLinks'>
                        <ul>
                            <li>Product</li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#solutions">Solutions</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                        <ul>
                            <li>Socials</li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerFlexTwo">
                    <p className='copyright'>© 2025 <span>Changxing Initiative</span>. All Rights Reserved.</p>
                    <div>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
