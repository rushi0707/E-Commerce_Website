/*
    This Component is below the hero component in shop page (Home page).

    Here we use data.json file which have record of some products such as image,name,price.
    we pass this data as prop to create items to Item component.

    eg--> 
    {
        id:1,
        name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        image:p1_img,
        new_price:50.00,
        old_price:80.50,
    },

    Here we use array map method to create Item from each data item in data.json file.
    1. Each item of array return Item
    2. pass 6 props key,id,name,price to Item Component and it will return Item. 
*/

import './Popular.css';
import data_product from '../assets/data';
import Item from '../Item/Item';

function Popular(){

    return (
        <div className="popular">
            <h1>Popular In Women</h1>
            <hr />
            <div className="popular-item">

                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                })}
                
            </div>
        </div>

    );
}

export default Popular;