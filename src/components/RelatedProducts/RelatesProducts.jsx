import data_product from '../assets/data';
import Item from '../Item/Item'
import './RelatedProducts.css';

function RelatedProducts(){

    return (
    <div className= 'relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} seller_name={item.seller_name} contact={item.contact}></Item>
            })}
        </div>

    </div>
)
}
export default RelatedProducts;




