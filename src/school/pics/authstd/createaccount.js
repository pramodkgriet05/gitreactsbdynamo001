import axios from "axios"
import { useEffect, useState } from "react";

function Sch_createaccount()
{
    let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:""})
    let[errorData, seterrorData]=useState({e_name:"",e_email:"",e_mobile:"",e_password:""})

    let[apiresponce_SB, setapiresponce_SB ]=useState({});
    let[token, settoken]=useState("")
     

   
       const updateName =(e)=>{
       // console.log(e.target.value)
        setuserInputdata({...userInputdata, name:e.target.value})

       }  
       
       const updateEmail =(e)=>{
      //  console.log(e.target.value)
        setuserInputdata({...userInputdata, email:e.target.value})

       }
        const updatePassword =(e)=>{
        //console.log(e.target.value)
        setuserInputdata({...userInputdata, password:e.target.value})

       }
        const updateMobile =(e)=>{
      //  console.log(e.target.value)
        setuserInputdata({...userInputdata, mobile:e.target.value}) 

       }
       async function createAccount()
    {
       
        if(userInputdata.name.length<=3)
        {
            //console.log("Minimum three chareters")
            seterrorData({...errorData, e_name:"Min 3 char"})
            //noerrors++;
          //  console.log(userInputdata.name)
         console.log("the error")
        }
        
       /* if(validateEmail(email))
        { 
            setEmailError(" ")
 
        }
        else
        {
            setEmailError("Email Invalide ")
            noerrors++;

        }
        if(mobile.length==10)
        {
            setMobileError(" ")
            
        }
        else
        {
            
         setMobileError("mobile is INvalied")
         noerrors++;
         
                }

                if(password.length<=8)
                {
                    setPasswordError("Enter min 8 charecters")
                     noerrors++;
                }
                else{
                    setPasswordError("")
                   
                }
                 
        console.log(noerrors)
        if(noerrors==0)
        {
            console.log(" calling api", noerrors)
            var apiinputData={
                'name':name,'email':email, 'mobile':mobile, 'password':password }
                console.log(apiResponce)
                var apiResponce= await axios.post('https://api.softwareschool.co/auth/signup ',apiinputData )
                console.log(apiResponce.data.result)
                if(apiResponce.data.result=="SUCCESS")
                {
                    setapiSuccessmsg(apiResponce.data.result)
                    setapiSuccessmsg("")
                  
                }
                else
                {
                    setapiErrormsg(apiResponce.data.result)
                    setapiSuccessmsg("")
                  
                }
            }*/


    }      

     async function createaccount()
  { 
           try
           {
           let apires=await axios.post('http://localhost:8080/login',userInputdata)
            // window.location='http://localhost:8080/login'
            console.log(apires)
            console.log(apires.data)
            setapiresponce_SB({...apires.data})
            console.log(userInputdata)
            console.log(apires.data.data.token)
             console.log(apires.data.data.userdata.id)
             console.log(apires.headers['clear'])
             settoken(apires.data.data.token)
             localStorage.setItem("userID", apires.data.data.userdata.id)
             localStorage.setItem("token",apires.data.data.token)
            // config.headers.authorization=localStorage.getItem("token")

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
                                                        <h3>Login</h3>
                                                             
                                                            <div className='mt-3'>
                                                                    <label><strong>Email</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updateEmail(e)}></input>
                                                                    <div className="text-danger">
                                                                        {errorData.e_name}

                                                                    </div>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Password</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updatePassword(e)}></input>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Email</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updateEmail(e)}></input>
                                                            </div>
                                                            <div className='mt-3'>
                                                                    <label><strong>Password</strong></label>
                                                                    <input type="text" className='form-control' placeholder='Email' onChange={e => updatePassword(e)}></input>
                                                            </div>
                                                             
                                                        <div className=' d-grid mt-3 md-3'>
                                                        <button className=" btn btn-primary" onClick={e=>createAccount()}>submit</button>
                                                        
                                                        </div>                                                                      
                                                    </div>
                                                </div>
                                                <div>                                                
                                                       <h1>Function called successfully and This Data is from springboot</h1>
                                                        <li>{apiresponce_SB.id}</li>
                                                      Name  <li>{apiresponce_SB.name}</li>
                                                   email     <li>{apiresponce_SB.email}</li>
                                                      password  <li>{apiresponce_SB.password}</li>
                                                     mobile   <li>{apiresponce_SB.mobile}{token}</li>                                                        
                                               </div>
                        
                        </div>
                   </div>
             </div>
                     
                     
         
    )
}
export default Sch_createaccount;