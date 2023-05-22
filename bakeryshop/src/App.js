import "./App.css";
import { Navbar } from './pages/Navbar';
import {Routes,Route} from "react-router-dom"
import { HomePage } from "./pages/homePage";
import { Cart } from './pages/cart';
import { Wishlist } from "./pages/wishlist";
import { ProductDetail } from "./pages/productDetail";
import { ProductCart } from './pages/productCart';
import {CategoryItems } from './category/categoryPage';



function App() {


  return (
    <div className="App">

    <Navbar/>

<Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path="/productCart" element={<ProductCart/>}></Route>
<Route path="/cart" element={<Cart/>}></Route>
<Route path="/wishlist" element={<Wishlist/>}></Route>
<Route path="/product/:productId" element={<ProductDetail />}></Route>
<Route path="/categoryCake" element={<CategoryItems/>}></Route>
</Routes>
   

      
    </div>
  );
}

export default App;
