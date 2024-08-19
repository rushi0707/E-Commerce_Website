/*
    This Item page is act as a template for creating each product.
    Here we pass dynamic data using props and Item component will create new item.
    Here we pass 5 things--> 1. product id (unique)
                             2. image of product
                             3. name
                             4. old price
                             5. new price
    Here we use props that passed from parent component.

    1. Here we create a navigation link for when we click on specific item image then , it 
       open on product page by using prodcuts unique id..
    2. This navigation route we define in App.jsx 
       <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}></Route>
    3. And we create link here.

    window.scrollTo(0,0) --> is used so that when our page get renderd we always go
                             on top of page.
*/

import './Item.css';
import { Link } from 'react-router-dom';

function Item(props){
    return (

        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img src={props.image}  onClick={window.scrollTo(0,0)} alt="" />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new" id='s'>
                ₹ {props.new_price}
                </div>
                <div className="item-price-old">
                ₹ {props.old_price}
                </div>
            </div>
            <div className="item-prices">
                <div className="item-new"  id='f'>
                    seller :  
                     {props.seller_name}
                </div>
                
            </div>
            <div className="item-prices" >
                <div className="item-new"  >
                    contact :  
                     {props.contact}
                </div>
            </div>
        </div>
    )
}

export default Item;