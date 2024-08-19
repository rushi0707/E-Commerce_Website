/*
    We use Navbar and Footer inside App.jsx so that they will be available on 
    entire application.
*/

import './Footer.css';
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/linkedin.png';
import whatsapp_icon from '../assets/whatsapp_icon.png'
import heart from '../assets/heart.png'

function Footer(){

    return (

        <div className="footer">

            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>ReuseHub</p>
            </div>

            <div className="footer-social-icon">

                <div className="footer-icon-container">
                    <a href="https://www.instagram.com/__rushi__0707" target="_blank" rel="noopener noreferrer">
                        <img src={instagram_icon} alt="Instagram" />
                    </a>
                </div>

                <div className="footer-icon-container">
                    <a href="https://www.linkedin.com/in/rushikeshkhiste07/" target="_blank" rel="noopener noreferrer">
                        <img src={pintester_icon} alt="Instagram" />
                    </a>
                </div>
               
                <div className="footer-icon-container">
                    <a href="https://www.instagram.com/__rushi__0707" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp_icon} alt="Instagram" />
                    </a>
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>
                Made With ❤️ by Rushikesh
                </p>
            </div>
        </div>

    )
}

export default Footer;