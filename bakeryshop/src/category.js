import { useState } from "react"
import { fakeFetch } from './../backend/db/products';

export function CategoryItems(){

  const [filterChoice , setFilterChoice] = useState([])
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

  const filterData = () => {
      if(filterChoice === 'cakes')
      return products.filter(data => data.category.includes('cakes'))
       if(filterChoice === 'cookies')
       return products.filter(data => data.category.includes('cookies'))
       if(filterChoice === 'cupcake')
       return products.filter(data => data.category.includes('cupcake'))
    
       return products
    }
    
    
    const filteredData = filterData()


    return(
      <>

      <section className='category-cake-image'>

      <article>
        <img style={{width:'100%' , height:'100%'}} src={"https://imgcdn.floweraura.com/DSC_8700.jpg"} alt="not found" />
       <p><button className='homepage-cake-link'onClick={()=>setFilterChoice('cakes')}> cake </button> </p> 
      </article>

    <article>
    <img style={{width:'35%', height:'100%'}} src="https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg" alt="not found" />
    <p> <button className='homepage-cake-link' onClickCapture={() => {setFilterChoice('cookies')}}> cookies </button> </p> 
    </article>

    <article>
    <img  style={{width:'48%', height:'100%'}} src="https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg" alt="not found" />
    <p> <button className='homepage-cake-link' onClick={() =>{setFilterChoice('cupcake')}}> cupcake </button> </p> 
    </article>


     </section>

      <div className="categorypage-items">
     {
        filteredData.map(data=>(
            <div className="category-listing">
            <img className="categoryCart-image" src={data.src} alt="not found" />
            </div>
        ))
     }

     </div>
  
        </>
    )
}