/*
    In ShopCategory componenet we get 2 props
    
    1 when we click on men , then "men" and its image passed as prop 
    2 when we cliked on women , "women" and its image passed as prop 
    3. same with kid.

    Now we have all data of product in "all_product.jsx" file.
    so we use array map method and sort data according to category passed in prop.
    1. men
    2. women
    3. kid
    and return all items of perticular category on their respective pages.
       
*/

import { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item';

function ShopCategory(props){

    const {all_product} = useContext(ShopContext);

    return (

        <div className="shop-category">

            <img className='shopcategory-banner' src={props.banner} alt="" />

            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span>
                    out of 36 Products
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>

            <div className="shopcategory-products">

                { all_product.map( (item,i) => {
                    
                    if(props.category===item.category)
                    {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} seller_name={item.seller_name} contact={item.contact}></Item>
                    }

                    else
                    {
                        return null;
                    }
                })}
            </div>
            
            <div className="shopcategory-loadmore">
                Explore-More
            </div>

        </div>
    )
}

export default ShopCategory;