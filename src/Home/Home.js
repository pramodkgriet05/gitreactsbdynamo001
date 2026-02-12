import Footer from "../Navbar/Footer";
import Nav from "../Navbar/Navbar";

 function HOME()
 {



  function Springboot()
  { 
    window.location="/springboot/login"

  }
  return(
    <div>

    <Nav/>

  <div className="text-danger">
     HOME
     <button className="btn btn-primary" onClick={e=>Springboot()}>SPRING BOOT create account</button>
     <button className="btn btn-primary" onClick={e=>Springboot()}>SPRING BOOT Read Api</button>


      

  </div>
  
   <Footer/>
   </div>
  )

 }
 export default HOME