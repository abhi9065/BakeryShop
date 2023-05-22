import { AiOutlineMail } from 'react-icons/ai';
import {BsInstagram} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
// import { Link } from 'react-router-dom';
// import { products } from '../backend/db/products';
import { CategoryItems } from '../category/categoryPage';

export function HomePage(){
      

    return(
        <>


        <div>
        <img className="image" src="https://media.istockphoto.com/id/1369757844/photo/tasty-raspberry-cupcakes-ready-to-eat.jpg?s=1024x1024&w=is&k=20&c=uHmGzBQx4ALWAGYe3hQeamkKwb29kZQYKvhq2VkhL4E="/>
        </div>
    

       <div>
       <CategoryItems/>
       </div>
         
        
      <footer className='footer'>

      <li className='social-link'>
       <a className='anchoor' href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGsmhSGRnKMtbfDNVPhXqSqmtdG"><AiOutlineMail/></a>
      </li>

      <li className='social-link'>
       <a className='anchoor' href="https://www.instagram.com/abhishek______._jain/"><BsInstagram/></a>
      </li>

      <li className='social-link'>
       <a className='anchoor' href="https://twitter.com/Abhishe75672967"><FiTwitter/></a>
      </li>


      </footer>
      
        </>
    )
}