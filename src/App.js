import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard"

const defaultValue =[
  {
    id: 0,
    name: "Product1",
    category: "Category1",
    price: 200,
    image: "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_desert_titanium_pdp_image_position_1__gben_2.png"
  }, 
  { 
    id: 1,
    name: "Product2",
    category: "Category1",
    price: 2200,
    image: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-finish-lineup-geo-240909_big.jpg.large.jpg"
  }, 
];

function App() {
  const [products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
    .finally(() => setLoading(false));
  }, []);
  return (
    <div >
     {loading && <div>Loading...</div>}
  {
    products.map((product) => 
    <ProductCard data={product}/>
    )
  }
  
  </div>

  )
    ;
}

export default App;
