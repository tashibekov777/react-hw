
import "./index.css";
export function ProductCard(props){
    const {image, category, title, price}= props.data;
    return (
        
    <div className="product-card"> 
  <img width="200" src={img} alt=""/>
  <div>{category}</div>
  <h4>{title}</h4>
  <div>{price}</div>
        </div>
    );
}