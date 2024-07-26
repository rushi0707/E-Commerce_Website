/*
    ********* ProductDisplay is Template page Like Item ********

    Item.jsx is used to create product in smaller size .
    and ProductDisplay is used to create Product in Bigger size . 

    The navigation for ProductDisplay page is create in Item.jsx

    Because when we create on any item then it goes to product and then ProductDisplay
    
*/

import { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../context/ShopContext';

function ProductDisplay({product}){

    let {addToCart}=useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
            
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt close-fitting and a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <button onClick={()=>addToCart(product.id)}>
                    ADD TO CART
                </button>
                    
            </div>

</div>
    )
}

export default ProductDisplay;