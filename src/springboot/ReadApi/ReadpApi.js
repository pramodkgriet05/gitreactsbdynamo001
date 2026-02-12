 import axios from "axios"
 import { useState } from "react";
 
 function ReadApi()
 {
     let[userInputdata, setuserInputdata]=useState({name:"",email:"",mobile:"",password:""})
 
     let[apiresponce_SB, setapiresponce_SB ]=useState({});
     let[apiUserData, setapiUserData]=useState({});

     let[updatepassword_db, setupdatepassword_db ]=useState({id:"",password:""});
     //let[updatePassword_db, setupdatePassword_db ]=useState();
    // let[delete_db, setdelete_db ]=useState();
    let   id;
     let[read_db, setread_db ]=useState({});
 
    
        const updateName =(e)=>{
         console.log(e.target.value)
         setuserInputdata({...userInputdata, name:e.target.value})
 
        }  
        
        const updateEmail =(e)=>{
         console.log(e.target.value)
         setuserInputdata({...userInputdata, email:e.target.value})
 
        }
         const updatePassword1 =(e)=>{
         console.log(e.target.value)
         setuserInputdata({...userInputdata, mobile:e.target.value})
 
        }
         
        function createaccount()
        {
         //console.log(e)
        }         
 
      async function createaccount()
   {
            let apires=await axios.post('http://localhost:8080/login1',userInputdata)
             // window.location='http://localhost:8080/login'
             console.log(apires.data)
             setapiresponce_SB({...apires.data})
             console.log(userInputdata)
   }
     const updateId =(e)=>{
         console.log(e.target.value)
         console.log(e)
        setupdatepassword_db({...updatepassword_db, id:e.target.value})
 
        }  
        const updatePassword=(e)=>{
             console.log(e.target.value)
             console.log(e)
             setupdatepassword_db({...updatepassword_db, password:e.target.value})

        }
        const delete_fun=(e)=>
        {
            id=e.target.value

        }
        const getuserdetailsID =(e)=>
        {
              setread_db(e.target.value)

        }

     function updateIDAPI_call()
   {
       
         console.log( updatepassword_db)
                   console.log(read_db)
                   console.log(id)
   } 
    async function updatePasswordApi()
    {
        console.log(updatepassword_db)
       let apires=await axios.post('http://localhost:8080/update/password', updatepassword_db)
        console.log(apires)
    }
    async function getuserdetailsID1()
    {
           let apires=await axios.get('http://localhost:8080/getuserdetails/99', read_db) 
         //  window.location='http://localhost:8080/getuserdetails/05'
           setapiUserData({...apires.data})
           console.log(apires.data)

    }

    /*async function updateIDAPI_call()
    {
         let apires=await axios.get('http://localhost:8080/deleteuser/06', delete_db) 
        // window.location= 'http://localhost:8080/getuserdetails/05'
         console.log(delete_db)

    }*/
   async function updateIDAPI_call()
    {
         let apires=await axios.get('http://localhost:8080/deleteuser', id) 
        // window.location= 'http://localhost:8080/getuserdetails/05'
         console.log(id)

    }
     function springbootcreateaccount()
  {
    window.location="/springboot/login"
  }
    
 
     return(
         <div className="contaniner "> 
                     <div className="row justify-content-center ">
                         <div className="col-4 mt-5">
                                <h1>This is springboot file</h1>
                                             <div className="card ">
                                                     <div className="card -body ">
                                                         <h3>Retrived Info</h3>
                                                         
                                                             <div className='mt-3'>
                                                                     <label><strong>Id</strong></label>
                                                                     <input type="text" className='form-control' placeholder='Id Name' value={apiUserData.id} ></input>
                                                                      
                                                             </div>
                                                     
                                                             <div className='mt-3'>
                                                                     <label><strong>Name</strong></label>
                                                                     <input type="text" className='form-control' placeholder='Full Name' value={apiUserData.name}></input>
                                                                      
                                                             </div>
                                                             <div className='mt-3'>
                                                                     <label><strong>Email</strong></label>
                                                                     <input type="text" className='form-control' placeholder='Email' value={apiUserData.email}></input>
                                                             </div>
                                                             <div className='mt-3'>
                                                                     <label><strong>Mobile</strong></label>
                                                                     <input type="text" className='form-control' placeholder='Mobile' value={apiUserData.mobile}></input>
                                                             </div>
                                                              </div>
                                                             </div>


                                                            <div className="row">
                                                                <div class="col-4">
                                                                    <h3>Read Delete update</h3>
                                                                    <div className='mt-3'>
                                                                     <label><strong>Id</strong></label>
                                                                     <input type="text" className='form-control' placeholder='Id Name' onChange={e=>updateId(e)} ></input>
                                                                     <label><strong>password</strong></label>
                                                                     <input type="text" className='form-control' placeholder='password'  onChange={e=>updatePassword(e)} ></input>
                                                                     <button className=" btn btn-primary" onClick={e=>updatePasswordApi()}>Update</button>
                                                                  </div>
                                                                  <div className='mt-3'>
                                                                     <label><strong>Delete</strong></label>
                                                                     <input type="text" className='form-control' placeholder='Id Name' onChange={e=>delete_fun(e)} ></input>
                                                                     <button className=" btn btn-primary" onClick={e=>updateIDAPI_call()}>Delete</button>
                                                                  </div>
                                                                  <div className='mt-3'>
                                                                     <label><strong>Get Records</strong></label>
                                                                     <input type="text" className='form-control' placeholder='Id Name'onChange={e=>getuserdetailsID(e)} ></input>
                                                                     <button className=" btn btn-primary" onClick={e=>getuserdetailsID1()}>Get record</button>
                                                                     <button className=" btn btn-primary" onClick={e=>springbootcreateaccount()}>springbootcreate account</button>

                                                                     
                                                                  </div>
                                                                  


                                                                </div>

                                                            </div>
                                                                                                                          
                                                    
                                                 <div>                                                
                                                        <h1>Function called successfully and This Data is from springboot</h1>
                                                         <li>{apiresponce_SB.id}</li>
                                                         <li>{apiresponce_SB.name}</li>
                                                         <li>{apiresponce_SB.email}</li>
                                                         <li>{apiresponce_SB.password}</li>
                                                         <li>{apiresponce_SB.mobile}</li>                                                        
                                                </div>
                                                <div>                                                
                                                        <h1>Function called successfully and This Data is from springboot</h1>
                                                         <li>{apiUserData.id}</li>
                                                         <li>{apiUserData.name}</li>
                                                         <li>{apiUserData.email}</li>
                                                         <li>{apiUserData.password}</li>
                                                         <li>{apiUserData.mobile}</li>                                                        
                                                </div>
                          </div>
                         </div>
                    </div>
               
                      
                      
          
     )
 }
 export default ReadApi;