 import { useState } from 'react'
import amazonlogo from '../image/amazon.png'
import { isEmailValied } from '../utils/Utils'
import { SIGNIN_ERROR_MESSGAE } from '../constants/errormessage'
import { resetpasswordApi } from '../service/authService'



function Resetpassword()
{


    let[email, setemail]=useState("")
    let[emailError, setemailError]=useState({email: false, apiError: false})
    let[ApiMsg, setApiMsg]=useState("")

    const handleresetpassword= async()=>{
       
        let tempError={...emailError}
        let hasError=false
       console.log(email)
        console.log(isEmailValied(email))

       if(isEmailValied(email)==false)
        {
           tempError={...tempError, email:true} 
           hasError=true
            
        }
        else
        {
            tempError=  {...tempError, email:false}
           
        }
        setemailError({...tempError})
        if(hasError==false)
             
        {  try{
            let apiresponce=await resetpasswordApi({email:email})
            setemailError({...emailError, apiError:false})
            console.log(apiresponce)
            if(apiresponce.data.result=="success")
            {
                setApiMsg(apiresponce.data.message)
               
            }
        }catch(error)
        {
            setApiMsg(" ")
            setemailError({...emailError, apiError:true})

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
                        <h2>Reset Password</h2>
                        
                        <div className='mt-3'>
                                <label><strong>Email</strong></label>
                                <input type="text" className='form-control' placeholder='Email' onChange={e=>setemail(e.target.value)}   ></input>
                                <div className='text-danger'> {emailError.email==true &&  SIGNIN_ERROR_MESSGAE.email} </div>                          
                        </div>
                         
                        <div className=' d-grid mt-3 md-3'>
                            <button className='btn btn-warning' onClick={e=>handleresetpassword()}  >Reset Password</button>
                                                    </div>
                        <div className='text-danger'> {emailError.apiError==true && "Email is not register with us"}</div>
                        <div className='text-success'> {ApiMsg}</div>
                         
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
export default Resetpassword