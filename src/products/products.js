import { useEffect, useState } from "react";
import Footer from "../Navbar/Footer"
import Nav from "../Navbar/Navbar"
import axios from "axios";
import Singleproduct from "./Singleproduct";

function Productsearch()
{
    let searchkeyword=""
    let queryparameters=new URLSearchParams(window.location.search);

    let[products, setproducts]=useState([])
    searchkeyword=queryparameters.get('keyword')

    useEffect(  ()=> {

        const getProductdata=async()=>{

       // let apiresponce=await axios.get('https://dummyjson.com/products/search?q=' + searchkeyword )
       let apiresponce=await axios.get('https://dummyjson.com/products/search?q=iphone')
         
       setproducts(apiresponce.data.products)
       console.log(apiresponce.data.products)
        
        }
        getProductdata()      

    },[])
    





   return(
    <div>

    <Nav/>
    <div className="container-fluid">
         <div className="row">
                            <div class="col-3"></div>
                             <div class="col-6">
                                {
                                    products.map((product,i)=>(
                                        <Singleproduct data={product}/>
                                    ))
                                }

                             </div>
                           </div>      
                        </div>
   <Footer/>
   </div>
  )
}
export default Productsearch