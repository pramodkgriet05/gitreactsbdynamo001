


import { useState } from "react";
import Springbootlogin from "../springboot/login";
import Sch_createaccount from "./pics/authstd/createaccount";
import labpic from "./pics/lab.jpg"
import { isEmailValied } from "../utils/Utils";
import SignUP from "../school1/createaccount";
import Signin from "../shared/signin";
import Sch_login from "../school1/auth_login";
import axios from "axios";
import { GET_USER_NAME } from "../school1/utilils";
function Homesch()
{   
  
    let[datadynamoDB, setdatadynamoDB]=useState("")
  let checksignIn=GET_USER_NAME()
  if(checksignIn!=null)
  {
    window.location="/Std_info"
  }
 
 

  
    let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:""})
    let[errorData, seterrorData]=useState({e_name:"",e_email:"",e_mobile:"",e_password:""})
      let[createAccountb, setcreateAccount]=useState(false) 
     let[signin_check, setSignIn]=useState(false)
       let[succ_info, setsucc_info]=useState()
       let[createAccountbb, setcreateAccountbb]=useState(false) 
       let[signUP_check, setsignUP_check]=useState(false)
    // let createAccountb=true
    let noerrors=0
    let noerrors1=0
    let[apiresponce_SB, setapiresponce_SB ]=useState({});

    async function data_child(data)
    {
        
       console.log("form child component",data)
       setcreateAccount(false)
       setcreateAccountbb(true)
       setsucc_info(data)
      
    }
    function setcreateAccount1()
    {
        setcreateAccount(true)
       setcreateAccountbb(false)
        setsignUP_check(false)

    }
    function setSignIn1()
    {
         setcreateAccount(false)
         
         setcreateAccountbb(false)
         setsignUP_check(true)
        
    }
    async function validateemail001()

        {
            try
            {
              let apidata5= await axios.post('http://13.233.74.60:8080/hello5', datadynamoDB)
                  console.log(apidata5)
              // let apidata5= await axios.post('http://localhost:8080/hello5', datadynamoDB)
                                // console.log(apidata5)
              // let apidata4= await axios.get('http://localhost:8080/hello1')
              
              // console.log(apidata4)
               // let apidata5= await axios.get('http://13.233.74.60:8080/hello')
               // console.log(apidata5)


        
          // let apidata3= await axios.post('http://13.233.74.60:8080/s/r/1', datadynamoDB)
         //   console.log(apidata3)
            }
            catch(e)
            {
                console.log(e)

            }
           

        }
        async function validateemail0022()
            {
                try{
                 //let apidata4= await axios.get('http://localhost:8080/hello1')
                // console.log(apidata4)
                // let apidata5= await axios.get('http://13.233.74.60:8080/hello1')
                  let apidata5= await axios.get('http://13.233.74.60:8080/hello1')
                 console.log(apidata5)         

                }
                catch(e)
                {
                    console.log(e)
                }

            }
    
       
           
         
             


     
    ////<img src={labpic} className="img-lab"></img>
    return(
         <div className="container">
            <div className="row mt-5 ">
                <h1>St'Martins school</h1>
               <div className="col-8 mt-5 text-center">  
                <img src={labpic} className="img-lab justify-content-center"></img>
                </div> 
                
                <div className="col-4 justify-content-center">  
                   
              <h1 className="text-center">New user</h1>
               <button className="btn btn-primary ms-3 text-center" onClick={e=>{setcreateAccount1(true )}}>create account</button>
              
               <button className="btn btn-primary ms-3 text-center" onClick={e=>{ setSignIn1(true )}}>Login</button>
                {
                     createAccountbb==true &&
                <div>
                    <br/>
                     <br/>
                     <h5>login to your email:</h5>
               <h3 className="text-success"> "{succ_info }"</h3>
              <h5> to complete Signup process.</h5>
                </div>
                }
              {
                
                createAccountb==true &&

                <SignUP data_P={data_child}/>
                                                         
              }  
                    
              
               {
                signUP_check==true &&
                <Sch_login/>
              }
              


                                                        
                                                        </div>
                                                                     
                                                    </div>
                  <div>
                    <button className='btn btn-warning mt-3' onClick={e=>validateemail001()}>Dyanmodb</button>
                             <button className='btn btn-warning mt-3' onClick={e=>validateemail0022()}>hello1</button>
                              <input type="text" className='form-control' placeholder='Email' onChange={e=>setdatadynamoDB({...datadynamoDB, id:e.target.value})}></input>
                                <input type="text" className='form-control' placeholder='Email' onChange={e=>setdatadynamoDB({...datadynamoDB, name:e.target.value})}></input>
                                <input type="text" className='form-control' placeholder='Email' onChange={e=>setdatadynamoDB({...datadynamoDB, email:e.target.value})}></input>
                                {datadynamoDB.id}
                               </div>
                               </div>
                               
                               
 
            
    )
}
export default Homesch;