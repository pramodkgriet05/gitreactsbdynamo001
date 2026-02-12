import { useParams } from "react-router-dom"
import Footer from "../Navbar/Footer"
import Nav from "../Navbar/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_CONFIG } from "../constants/Constants"

function Singleproductcomponent()
{
   
  const {productID}=useParams()
  let[singleproductdata, setsingleproductdata]=useState(null)
  let[mainImageb, setmainImageb]=useState("")
  let[quantity, setquantity]=useState(1)
  let[apiresponce_SB, setapiresponce_SB ]=useState({});
  var User_SB = {
    name:"Rakesh",
    email:"Rakesh@gmail.com",
    password:"Rakesh@874",
    mobile:"99225544123"

  }
  useEffect(() =>{

    const getProductdata=async()=>{

      let apiresponce=await axios.get('https://dummyjson.com/products/' +productID)
     

      console.log(apiresponce)
      
      setsingleproductdata({...apiresponce.data})
      setmainImageb(apiresponce.data.images[0])

    }
    getProductdata()
           
  },[])

  async function callspringboot()
  {
     let apires=await axios.post('http://localhost:8080/login1',User_SB)
    // window.location='http://localhost:8080/login'
    console.log(apires.data)
    setapiresponce_SB({...apires.data})
    console.log(User_SB)
  }

    return(
         <div>

    <Nav/>

  <div className="container-fluid">
    <div className="row mt-4">
      <div className="row mt-5">
        <div className="row">
          {
          singleproductdata!=null &&
          <div className="row"> 
          {
            singleproductdata.images.map((product, i) =>(
              <div className="col-1" key={i}>
                 
                  <img src={product} className="img-thumbnail" onMouseOver={e=>setmainImageb(product)}/>
                

              </div>
              
            )) 

          }
          
           </div>
}
           {
            singleproductdata!=null &&
            <div className="col-8">
             <img src={mainImageb} className="img-fluid img-single"/>
             </div>
          }


        </div>


      </div>
      <div className="col-4">
        <ul className="none">
        {
          
          singleproductdata!=null &&
          <div>
           <li> {
          singleproductdata.title
            }</li>
            <li>{singleproductdata.rating}</li>
             
              <li>{singleproductdata.price}</li>
              <li>{singleproductdata.stock}</li>
               <li>{singleproductdata.reviews.rating}</li> 
                <li>{singleproductdata.weight}</li> 
                <li>{apiresponce_SB.name}</li>
                <li>{apiresponce_SB.email}</li>
                <li>{apiresponce_SB.password}</li>
                <li>{apiresponce_SB.mobile}</li>
            </div>
 
        }
        </ul>
       </div>
      
     </div>
     <div className="row mt-3">
        <div className="card">
          <div className="card-body">
            <h5> Add to card</h5>
            <select className="form-control" onChange={ e => setquantity(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="d-grid mt-3">
              <button className="btn btn-warning" onClick={e=>callspringboot()} > call springboot</button>
            </div>



          </div>

        </div>


        
      </div>
     
  </div>
   <Footer/>
   </div>
    )
}
export default Singleproductcomponent