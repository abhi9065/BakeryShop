import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { fakeFetch } from './../backend/db/products';


export function ProductCart(){

    const {handleClickUpdate } = useContext(CartContext)
    const [products , setProducts] = useState([]);

    const handleData = async()=>{
      try {
        const response = await fakeFetch("https://example.com/api/products")
        if(response.status === 200)
        setProducts(response.data.products)
      } catch (error) {
        setProducts(error)
      }}
    
      
      useEffect(()=>{
        handleData()
      },[])
    

    return(

        <div className="product-page">

        <h1 className="product-heading">Bakery Items</h1>
    

        <div className="product-cart">
           {
            products.map((item) => {

               const {id,src,title,price} = item;
               

               function clickToCart(){
                handleClickUpdate(item)
               }

                return(
                <div key={id} className="product-listing">

                    <Link to={`/product/${id}`}>
                <img className="productcart-image" src={src} alt="not found" />
               <h1>{title}</h1>
              <h3>{price}</h3>
                    </Link>


                   <button onClick={clickToCart}>Add to Cart</button>
                   <button onClick={clickToCart}>Add to Wishlist</button>

                </div>
            )})
           }
    
        </div>
        </div>
    )
}