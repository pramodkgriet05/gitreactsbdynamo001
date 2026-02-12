import { useState } from 'react'
import amazonlogo from '../image/amazon.png'
import { Check_user_login_status, isEmailValied } from '../utils/Utils'
import { SIGNIN_ERROR_MESSGAE } from '../constants/errormessage'
import { signinApi } from '../service/authService'
function Signin()
{
     let isUserloggin=Check_user_login_status() 
        if(isUserloggin==true)
        {
           
            window.location="/"
           
        }

    let[signinData, setsigninData]=useState({email:'',password:''})
    let[signinDataError, setsigninDataerror]=useState({email:'false', password:'false', apierror:''})
    let hasError=false

   const LoginDatavalidation= async()=>{

                let tempErrors={...setsigninDataerror}

                console.log(isEmailValied(signinData.email))

               // let email1="pramodk.griet05.com"
             //   console.log(email1)

                if(isEmailValied(signinData.email)==false){
                        tempErrors={...tempErrors, email:true} 
                        hasError=true
                    // console.log("true:"+tempErrors.email)

                }
                else{
                        tempErrors=  {...tempErrors, email:false}
                        //console.log("false:"+tempErrors.email)

                }
                     setsigninDataerror({...tempErrors})
        


                    if(signinData.password.length<6)
                        
                    {
                        tempErrors={...tempErrors, password: true}
                        hasError=true

                    } 
                    else{
                         tempErrors={...tempErrors, password: false}

                    }
                    setsigninDataerror({...tempErrors})
                    if(hasError==false)
                    {
                        alert("call API")
                         try
                         {
                         let apiResponce= await signinApi({...signinData})
                         setsigninDataerror({...signinDataError,  apierror:true})
                         if(apiResponce.data.result=="success")
                         {
                         localStorage.setItem("userData", JSON.stringify(apiResponce.data.data))
                          localStorage.setItem("authorization", apiResponce.headers)
                          window.location='/'
                         }
                        }
                         catch(error){
                            
                         }
                        

                    }
                   
                       
 


    }



    return(
        <div className="contaniner "> 
            <div className="row justify-content-center  ">
                <div className="col-4  ">
                    <div className='text-center'>
                    <img src={amazonlogo} className="logo mt-5  md-5"/>
                    </div>
                     

                
                <div className="card ">
                    <div className="card -body ">
                        <h2>Login</h2>
                        
                        <div className='mt-3'>
                                <label><strong>Email</strong></label>
                                <input type="text" className='form-control' placeholder='Email' onChange={e=>setsigninData({...signinData, email:e.target.value})} ></input>
                                <div className='text-danger'> { signinDataError.email==true && SIGNIN_ERROR_MESSGAE.email  }</div>                          
                        </div>
                        <div className='mt-3'>
                        <label><strong>password</strong></label>
                        <input type="password" className='form-control' placeholder='password'onChange={e=>setsigninData({...signinData, password:e.target.value})}></input>
                        <div className='text-danger'>{signinDataError.password==true && SIGNIN_ERROR_MESSGAE.password}</div>
                        <p className='text text-danger'><i class="bi bi-info text-primary">password must b6 6 charecters</i></p>
                        
                        </div>
                        <div className=' d-grid mt-3 md-3'>
                            <button className='btn btn-warning' onClick={e=>LoginDatavalidation()}>SUBMIT</button>
                            <a href="/resetpassword">Reset Password</a>
                        </div>
                        <div className='text-danger'>{signinDataError.apierror==true && " Invalied Login creditials  "}</div>
                         
                    </div>
                    </div>
                </div>
            </div>



           
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <div className='text-center'>
                            <a href="conditions apply ms-3">Conditions apply</a>
                             <a href="conditions apply ms-3">Conditions apply</a>
                              <a href="conditions apply ms-3">Conditions apply</a>
                        </div>
                        <p className='text-center'>@ 1996-2025, Amazon.com</p>


                    </div>
                </div>
        </div>



    )

}
export default Signin