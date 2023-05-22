import { useParams } from "react-router-dom"
import { ProductDetailCard } from "./productdetailcard"
import { fakeFetch } from './../backend/db/products';

export function ProductDetail(){

    const { productId } = useParams()
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


       const product = products.find(data =>data.id === productId)

    return(
        
        <div className="productDetail-page">

        <h1>here {productId}</h1>
          
        <ProductDetailCard {...product}/>
          

        </div>
    )
}