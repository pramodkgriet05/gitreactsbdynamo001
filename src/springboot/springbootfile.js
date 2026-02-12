import axios from "axios"
import { useState } from "react";

function Springbootfilecall()
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
           try
           {
          //let apires=await axios.post('http://localhost:8080/login1',userInputdata)//ReactJs Integration
           let apires=await axios.post('http://localhost:8080/createaccount',userInputdata)//VEJpaVcreateaccount
           
            // window.location='http://localhost:8080/login'
            console.log(apires.data)
            setapiresponce_SB({...apires.data})
            console.log(userInputdata)
          }
           catch(ex)
         {
           console.log(ex)
          }
  }
  function Springbootreadapi() 
  {
    window.location="/springboot/readApi"
  }
  function Springbootlogin1()
  {
    window.location="/springboot/login1"
  }
   function Springbootforgotpassword()
  {
    window.location="/springboot/forgotpassword"
  }
  function Springbootresetpassword()
  {
    window.location="/springboot/resetpassword" 

  }

    return(
        <div className="contaniner "> 
                    <div className="row justify-content-center ">
                        <div className="col-4 mt-5">
                               <h1>This is springboot file</h1>
                                            <div className="card ">
                                                    <div className="card -body ">
                                                        <h3>Create Account</h3>
                                                            <div className='mt-3'>
                                                                    <label><strong>Name</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Full Name' onChange={e => updateName(e)}></input>
                                                                    <div className='text-danger'>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Email</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updateEmail(e)}></input>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Password</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updatePassword(e)}></input>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Mobile</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updateMobile(e)}></input>
                                                            </div>
                                                        <div className=' d-grid mt-3 md-3'>
                                                        <button className=" btn btn-primary" onClick={e=>createaccount()}>create account</button>
                                                        <button className="btn btn-primary" onClick={e=>Springbootreadapi()}>SPRING BOOT Read Api</button>Springbootlogin1
                                                        <button className="btn btn-primary" onClick={e=>Springbootlogin1()}>SPRING BOOT Login 1</button> 
                                                        <button className="btn btn-primary" onClick={e=>Springbootforgotpassword()}>Forgot Password</button>
                                                         <button className="btn btn-primary" onClick={e=>Springbootresetpassword()}>reset Password</button>
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
             </div>
                     
                     
         
    )
}
export default Springbootfilecall;