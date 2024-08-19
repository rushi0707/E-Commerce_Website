
/*
    Here we create table with Heading --> Product,title,price,total and remove.
    and In table we get all these information for each product.

    How we fetch items in cart.jsx ?
    1. First we will use the context which we created in ShopContext.jsx
       and when we click add to cart we increment the count of that item in CartItem object. Which will strore { item:itemCount }

       For that Here we consume the context created in ShopContext.jsx
       i.e --> const {all_product,cartItems,removeFromCart} = useContext(ShopContext);

    2.  Now Here we use array map() method in which we put 1 condition that
        if any item count>0 Then show it in cart.jsx

    3. And when we click on cross icon then deleteFromCart() method gets called.
*/

import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from '../assets/cart_cross_icon.png';
import all_product from "../assets/all_product";
import './CartItems.css';

function CartItems(){
    const {all_product,cartItems,removeFromCart,getTotalCartAmout}=useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Seller</p>
                <p>Contact</p>
                <p>Remove</p>
            </div>
            <hr />
            
            {all_product.map((item)=>{
                if(cartItems[item.id]>0)
                {
                    return <div>
                    <div className="cartitems-format  cartitems-format-main">
                        <img src={item.image} alt="" className=' carticon-product-icon' />
                        <p>{item.name}</p>
                        <p>${item.new_price}</p>
                        <p>{item.seller_name}</p>
                        <p>{item.contact}</p>
                        <img src={remove_icon} onClick={()=>{removeFromCart(item.id)}} className="cartitems-remove-icon" alt=""/>
                    </div>
                    <hr />
                </div>
                }
            return null;
            })}
        
            <div className="cartitems-down">
                <div className="cartitems-total">
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total Price</h3>
                            <h3>${getTotalCartAmout()}</h3>
                        </div>
                    <button>
                        Procced To Checkout
                    </button>
                </div>
            </div>

</div>
    )
}
export default CartItems;