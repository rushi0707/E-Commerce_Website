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
                <p>ReuseHub</p>
            </div>

            <img  className='nav-dropdown' onClick={dropdown} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}>
                    <Link to='/' className='link'> 
                        Shop {menu==="shop" ? <hr/> :<></>} 
                    </Link>
                </li>
                <li onClick={()=>{setMenu("electronics")}}>
                    <Link to='/electronics' className='link'> 
                    Electronics  {menu==="electronics" ? <hr/> : <></>}
                    </Link>
                </li>
                <li onClick={()=>{setMenu("appliances")}}> 
                    <Link to='/appliances' className='link'> 
                    Appliances {menu==="appliances" ? <hr/> : <></>}
                    </Link>
                </li>
                <li onClick={()=>{setMenu("sports")}}>
                    <Link to='/sports' className='link'> 
                    Sports Equipment {menu==="sports" ? <hr/> : <></>} 
                    </Link>
                </li>
                <li onClick={()=>{setMenu("others")}}>
                    <Link to='/others' className='link'> 
                    Others {menu==="others" ? <hr/> : <></>} 
                    </Link>
                </li>
            </ul>

            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?
                <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login' ><button>Login</button></Link>}
                
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>

            </div>
        </div>
    );

}

export default Navbar;