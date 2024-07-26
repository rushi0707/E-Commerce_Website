/*
   
    Whenver we click on any product we go to product.jsx page with productId.
    So Here we use map function to get specific product from all_product.
    Then we pass this 1 product to product display component.
    which will template page to display perticular 1 product on Big scale.

    Folw--> 1.click_on_product --> 2.Product.jsx --> 3.ProductDisplay.jsx

    In each product we have 2 things
    1. curr product 
    2. related products to it.

    This page 1. route defination in --> App.jsx
              2. Navigation Link in  --> Item.jsx 
*/

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts/RelatesProducts";

function Product(){

    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();

    const product=all_product.find((item)=>{
        if(item.id === Number(productId))
            return item;
    })

    return <div>
        <ProductDisplay product={product}></ProductDisplay>
        <RelatedProducts></RelatedProducts>
    </div>
}

export default Product;