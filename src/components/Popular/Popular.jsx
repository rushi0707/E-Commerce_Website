/*
    This Component is below the hero component in shop page (Home page).

   Here we fetch data from API  and uses recently added 8 ele and show them

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
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

function Popular(){

    const [new_collection,setNew_collection] = useState([]);
    /* Here we fetch data from database using /newcollections API */
    useEffect(()=>{
        fetch('http://localhost:4000/newcollections')
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data));
    },[])

    return (
        <div className="popular">
            <h1>New Collection</h1>
            <hr />
            <div className="popular-item">

                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} seller_name={item.seller_name} contact={item.contact}></Item>
                })}
                
            </div>
        </div>

    );
}

export default Popular;