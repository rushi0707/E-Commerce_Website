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
/*
    Here we fetch all product data directly from Databse using /allproducts API  
*/

import { createContext, useEffect, useState } from "react";

// step.1--> create Context
export const ShopContext = createContext(null);

function setDefaultCart(){

    let cart={};
    for(let i=0;i<300+1;i++){
        cart[i]=0;
    }
    return cart;
}

// step.2-->create provider with name ShopContextProvider and pass all_prod data to context
function ShopContextProvider({children}){

    // state which stores all_product data fetch from API  /allproducts.
    let [all_product,setAll_Product] = useState([]);
    // state for cartItms
    let [cartItems,setCartItems]=useState(setDefaultCart());

    // Here we fetch all product data directly from Databse using /allproducts API 
    // And Here we also fetch cart data for perticular user that currently loged in 
    useEffect(()=>{

        fetch('http://localhost:4000/allproducts').then((response)=>response.json()).then((data)=>setAll_Product(data))

        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            // Perform the fetch request to add item to the server-side cart
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', // Correct header for expected JSON response
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: "",
            })
            .then((res) => res.json())
            .then((data) =>setCartItems(data))
            
        }

    },[])

    // first check which user currently login then fetch data using /addtocart API declraed in index.js and then store item in cart 
    function addToCart(itemId) {
        // Update cart items locally
        setCartItems((prev) => {
            // Check if the item is already in the cart
            if (prev[itemId]) {
                return prev; // If it exists, return the current state without changes
            }
            return {
                ...prev,
                [itemId]: 1, // Add the item with a quantity of 1
            };
        });
    
        // Check for auth token in local storage
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            // Perform the fetch request to add item to the server-side cart
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', // Correct header for expected JSON response
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                // Optionally, handle server response data here
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
        } else {
            console.warn('No auth token found in local storage');
            // Optionally, redirect to login or notify the user
        }
    }
    

    function removeFromCart(itemId){

        let newCart={...cartItems,[itemId]:cartItems[itemId]-1};
        setCartItems(newCart);

        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            // Perform the fetch request to add item to the server-side cart
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', // Correct header for expected JSON response
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                // Optionally, handle server response data here
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
        } else {
            console.warn('No auth token found in local storage');
            // Optionally, redirect to login or notify the user
        }

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