/*
    We include this context to main.jsx to aceess this data everywhere in application

    Here we create context with name ShopContext.
    Here we have 6 things in our context.
    1.  we pass all_product data to our context.
        where all_product have array of objects where each object have information about product.
        eg--> 
        {
            id:1,
            name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            image:p1_img,
            new_price:50.00,
            old_price:80.50,
        },
    2.  cartItems state --> that is an object which will keep track of all iems in cart
    3.  addToCart function --> add new item in cart (Consume in cart.jsx)
    4.  removeFromCart function --> delete item from cart (Consume in cart.jsx)
    5.  getTotalCartAmount function --> get total amount (Consume in cart.jsx)
    6.  getTotalCartItems function --> show total items in cart box (Consume in Navbar.jsx)

    and we include all childrens i.e.(all components of main.jsx) that means entire App.jsx
    will now access this data using special prop children .

    step.1--> create context
    step.2--> create provider for context and pass value to context.
    step.3--> wrap it in main.jsx on entire App using provider
    step.4--> consume it in Shopcategory.jsx
*/

import { createContext, useState } from "react";
import all_product from '../components/assets/all_product';

// step.1--> create Context
export const ShopContext = createContext(null);

function setDefaultCart(){

    let cart={};
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

// step.2-->create provider with name ShopContextProvider and pass all_prod data to context
function ShopContextProvider({children}){

    let [cartItems,setCartItems]=useState(setDefaultCart());

    function addToCart(itemId){

        let newCart={...cartItems,[itemId]:cartItems[itemId]+1};
        setCartItems(newCart);
    }

    function removeFromCart(itemId){

        let newCart={...cartItems,[itemId]:cartItems[itemId]-1};
        setCartItems(newCart);
    }

    function getTotalCartAmout(){

        let totalAmout=0;
        for(let i=0;i<all_product.length;i++)
        {
            if(cartItems[i]>0)
            {
                const product = all_product.find( (item)=> Number(i)===item.id );
                totalAmout += product.new_price * cartItems[i] ;
            }
        }
        return totalAmout;
    }

    function getTotalCartItems(){
        let totalItems=0;
        for(let i=0;i<all_product.length;i++)
        {
            if(cartItems[i]>0)
            {
                totalItems += cartItems[i];
            }
        }
        return totalItems;
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmout,getTotalCartItems}; 

    return (

        <ShopContext.Provider value={contextValue}>
            {children}  
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;