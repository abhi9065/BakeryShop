import { GrCart } from 'react-icons/gr';
import {AiOutlineHeart} from "react-icons/ai"
import {Link} from "react-router-dom"



export function Navbar(){

  

    return (
        <>

        

        <nav className="main">
       
         <Link className="heading" to={'/productCart'} > COOKIES </Link>
        <input className="input" placeholder="🔎search for products" />


        <ul className="category">

          <li className='list'>
          <Link to={'/cart'}><GrCart/></Link>
          </li>

          <li className="list">
          <Link to={'/wishlist'}><AiOutlineHeart/></Link>
          </li>


          <button className="Btn">Login</button>
        </ul>

    

        
      </nav>
        </>
    )
}