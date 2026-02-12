import axios from "axios"
import { useState } from "react";

function Springbootforgotpassword()
{
    let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:""})

    let[apiresponce_SB, setapiresponce_SB ]=useState({});

   
       const updateName =(e)=>{
        console.log(e.target.value)
        setuserInputdata({...userInputdata, name:e.target.value})

       }  
       
       const updateEmail =(e)=>{
        console.log(e.target.value)
        setuserInputdata({...userInputdata, email:e.target.value})

       }
        const updatePassword =(e)=>{
        console.log(e.target.value)
        setuserInputdata({...userInputdata, password:e.target.value})

       }
        const updateMobile =(e)=>{
        console.log(e.target.value)
        setuserInputdata({...userInputdata, mobile:e.target.value})

       }
       function createaccount()
       {
        //console.log(e)
       }         

     async function createaccount()
  {
           let apires=await axios.post('http://localhost:8080/login2',userInputdata)
            // window.location='http://localhost:8080/login'
            console.log(apires.data)
            setapiresponce_SB({...apires.data})
            console.log(userInputdata)
  }
   async function createaccount()
  {
               try
               {   

          // let apires=await axios.post('http://localhost:8080/sendmessage',userInputdata) 
          let apires=await axios.post('http://localhost:8080/forgotpasswrord',userInputdata)
            // window.location='http://localhost:8080/login'
            console.log(apires.data)
            setapiresponce_SB({...apires.data})
            console.log(userInputdata)
               }
               catch(err)
               {
                console.log(err)
               }
  }
  function Springbootreadapi()
  {
    window.location="/springboot/readApi"
  }

    return(
        <div className="contaniner "> 
                    <div className="row justify-content-center ">
                        <div className="col-4 mt-5">
                               <h1>This is springboot file</h1>
                                            <div className="card ">
                                                    <div className="card -body ">
                                                        <h3>Forgot Password</h3>
                                                             
                                                            <div className='mt-3'>
                                                                    <label><strong>Email</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updateEmail(e)}></input>
                                                            </div>
                                                             
                                                             
                                                        <div className=' d-grid mt-3 md-3'>
                                                        <button className=" btn btn-primary" onClick={e=>createaccount()}>submit</button>
                                                        
                                                        </div>                                                                      
                                                    </div>
                                                </div>
                                                <div>                                                
                                                       <h1>Function called successfully and This Data is from springboot</h1>
                                                        <li>{apiresponce_SB.id}</li>
                                                      Name  <li>{apiresponce_SB.name}</li>
                                                   email     <li>{apiresponce_SB.email}</li>
                                                      password  <li>{apiresponce_SB.password}</li>
                                                     mobile   <li>{apiresponce_SB.mobile}</li>                                                        
                                               </div>
                        
                        </div>
                   </div>
             </div>
                     
                     
         
    )
}
export default Springbootforgotpassword;