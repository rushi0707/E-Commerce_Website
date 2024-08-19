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

function ProductDisplay({ product = {} }) {
    let { addToCart } = useContext(ShopContext);

    // Destructure with default values to avoid undefined errors
    const { image = '', name = 'Product Name', old_price = 0, new_price = 0 ,seller_name='' , contact='' } = product;

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={image} alt={name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{name}</h1>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                   Seller : {seller_name}
                </div>
                <div className="productdisplay-right-description">
                   Contact : {contact}
                </div>
                <button onClick={() => addToCart(product.id)}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default ProductDisplay;