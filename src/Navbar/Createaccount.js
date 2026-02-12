
import { useState } from 'react'
import amazonlogo from '../image/amazon.png'
import { isEmailValied, Check_user_login_status } from '../utils/Utils'
import { SIGNUP_ERROR_MESSGAE } from '../constants/errormessage'
import { signinApi, signupApi } from '../service/authService'
import { Await } from 'react-router-dom'
function Signup()
{     
     
   /* let isUserloggin=Check_user_login_status() 
    if(isUserloggin==true)
    {
       
        window.location="/"
       
    }*/


   

    const[signupData, setsignupData]=useState({
        name:'', email:'', password:''

    })

    const[signupdataError, setsignupdataError]=useState({name:false,email:false,password:false})
    const updateName=(e)=>{
        console.log(e.target.value ,{...signupData})
      setsignupData({...signupData, name:e.target.value})
         

    }
    const updateEmail=(e)=>{
        setsignupData({...signupData, email:e.target.value})
    }
    const updatePassword=(e)=>{
        setsignupData({...signupData, password:e.target.value})
    }

    let tempError={signupdataError}
    let hasError=false

    const handleSignup= async ()=>{
        alert("Signup Clicked:")
        console.log(signupData)

        if(signupData.name.length<3)
        {
             console.log("error") 
             hasError=true
           tempError={...tempError, name:true}
            
        }
        else
        {
           tempError={...tempError, name:false}
          
        }
        if(isEmailValied(signupData.email)==false)
        {
            hasError=true
            tempError={...tempError, email:true}

        }
        else{
            tempError={...tempError, email:false}

        }

        if(signupData.password.length<3)
        {
            hasError=true
            tempError={...tempError, password:true}
        }
        else{
            tempError={...tempError, password:false}

        }
        if(hasError==false)
        {
            let apireponse=  await signupApi({...signupData})
             if(apireponse.data.result=="success")
            {
                
             localStorage.setItem("trackingID", 15)
             localStorage.setItem("userData", JSON.stringify(apireponse.data.data))
             localStorage.setItem("token", apireponse.headers)
            // localStorage.setItem("trackingID", 15)
             window.location="/"
            }
                   
        }
        else
        {
            alert("Dont call API")
        }
     
        setsignupdataError({...tempError})
        console.log(signupdataError)
         console.log(hasError)
    }
 



    return(
        <div className="contaniner "> 
            <div className="row justify-content-center ">
                <div className="col-4 ">
                    <div className='text-center'>
                      <img src={amazonlogo} className="logo mt-5  md-5"/>
                    </div>
                                     
                  <div className="card ">
                    <div className="card -body ">
                        <h3>Create Account</h3>
                        <div className='mt-3'>
                        <label><strong>Name</strong></label>
                        <input type="text" className='form-control' placeholder='Full Name' onChange={e => updateName(e)}></input>
                        <div className='text-danger'>
                            {signupdataError.name==true &&  SIGNUP_ERROR_MESSGAE.name}

                             
                        </div>
                        </div >
                        <div className='mt-3'>
                        <label><strong>Email</strong></label>
                        <input type="text" className='form-control' placeholder='Email' onChange={e => updateEmail(e)}></input>
                        <div className='text-danger'>
                            {signupdataError.email==true && SIGNUP_ERROR_MESSGAE.email}

                             
                        </div>
                        </div>
                        <div className='mt-3'>
                        <label><strong>password</strong></label>
                        <input type="password" className='form-control' placeholder='password' onChange={e => updatePassword(e)}></input>
                        <div className='text-danger'>
                            {signupdataError.password==true && SIGNUP_ERROR_MESSGAE.password}

                             
                        </div>
                        <p className='text text-danger'><i class="bi bi-info text-primary">password must b6 6 charecters</i></p>

                        <p className='mt-4'> To verifiy your number, we will send you a text message with a temporary code. Message and data tates my apply  </p>

                        </div>
                        <div className=' d-grid mt-3 md-3'>
                            <button className='btn btn-warning' onClick={ e=> handleSignup()} >create account</button>
                        </div>

                         
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
export default Signup