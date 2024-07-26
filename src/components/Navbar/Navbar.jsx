/*
    In App.jsx we define a Route and Here we add navigation links to that Routes.
    1. Here we declare 1 state which will keep track of list item.
       In each list item when we click on it state is changed to item name using setMenu().
    2. In each list item we pass a Link for navigation.
    3. Also uses hr tag for styling . for active item we create <hr> below it.
*/

/*
    We use Navbar and Footer inside App.jsx so that they will be available on 
    entire application.
*/

import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import './Navbar.css';
import { useContext, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from '../assets/nav_dropdown.png';

function Navbar(){

    // Here we will create a state that will help to go to different itms of navbar
    // when click on shop menu state will be changed to shop 
    // and we will use ternary operator when we click on perticular item then hr tag will appers below it for styling on active item.

    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);

    const menuRef=useRef();
    function dropdown(e){
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
     


    return (

        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>FashionFlare</p>
            </div>

            <img  className='nav-dropdown' onClick={dropdown} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}>
                    <Link to='/' className='link'> 
                        Shop {menu==="shop" ? <hr/> :<></>} 
                    </Link>
                </li>
                <li onClick={()=>{setMenu("men")}}>
                    <Link to='/men' className='link'> 
                        Men  {menu==="men" ? <hr/> : <></>}
                    </Link>
                </li>
                <li onClick={()=>{setMenu("women")}}> 
                    <Link to='/women' className='link'> 
                        Women {menu==="women" ? <hr/> : <></>}
                    </Link>
                </li>
                <li onClick={()=>{setMenu("kid")}}>
                    <Link to='/kid' className='link'> 
                        Kids {menu==="kid" ? <hr/> : <></>} 
                    </Link>
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login' ><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );

}

export default Navbar;