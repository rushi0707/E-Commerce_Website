import './Hero.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.webp';
import { Link } from 'react-router-dom';

function Hero(){

    return (
        <div className="hero">
            <div className="hero-left">
                <h2 id='th'>Your Go-To Hub for Sustainable Living</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p >Reduce,</p>
                        
                    </div>
                    <p id='first'>Reuse,</p>
                    <p id='second'>Revitalize</p>
                </div>
                <div className="hero-latest-btn">
                    <Link to='/sell' style={{ color: 'white' }}>
                        <div>Sell Your Products</div>
                    </Link>

                </div>
            </div>

            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero;