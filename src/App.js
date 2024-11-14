import { ProductCard } from "./components/ProductCard"

const products=[
  {
    id: 0,
    name: "Product1",
    category: "Category1",
    price: 200,
    img: "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_desert_titanium_pdp_image_position_1__gben_2.png"
  }, 
  { 
    id: 1,
    name: "Product2",
    category: "Category1",
    price: 2200,
    img: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-finish-lineup-geo-240909_big.jpg.large.jpg"
  }, 
];

function App() {
  return (
    <div >
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
