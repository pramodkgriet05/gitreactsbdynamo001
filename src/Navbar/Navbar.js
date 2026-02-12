import { useState } from "react"
import Signup from "./Createaccount"
 import Login from "./Login"
import { Check_user_login_status } from "../utils/Utils"
import { searchkeywordApi } from "../service/authService"

 function Nav()
 {
    let [seacrhdoropdown, setserchdropdown]=useState(false)
   
   let isUserloggin=Check_user_login_status() 
   let [searchSuggList, setsearchList]=useState([])
   let [inputsuggestion, setinputsuggestion]=useState()
   
   
   const  logoutUser=()=>
   {
        localStorage.clear()     
        window.location="/"
     
   }
   const searchhandler= async(e)=>{
    console.log(e.target.value)
    let userkeyword=e.target.value
    setinputsuggestion(e.target.value)
    if(userkeyword.length>0)
    {
       let apiresponce= await searchkeywordApi({searchWord: userkeyword})
             
       let suggestionlist=apiresponce.data.data     
       let suggestionValue=suggestionlist.map(suggestion =>{
        return suggestion.value      
    })  
         

           setsearchList([...suggestionValue])
           setserchdropdown(true)
          
    }
       }
        const  item=(suggestion)=>{
        setinputsuggestion( suggestion )
        setserchdropdown(false)
        window.location="/productsearch?keyword=" +suggestion
         
     }

    

  

  return(
    
    

        <nav className="navbar bg-body-tertiary navbar-expand-lg">

            <div className="container-fluid">
                
                        <h1 className="navbar-brand">Amazon</h1>
                        <div class="input-group">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action before</a></li>
                                        <li><a class="dropdown-item" href="#">Another action before</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                    <input type="text" class="form-control" onChange={e=>searchhandler(e) } value={inputsuggestion} />
                                    <button class="btn btn-outline-secondary dropdown-toggle" ><i class="bi bi-search"></i></button>
                                    
                                    {
                                        seacrhdoropdown==true &&
                                       <div className="search-dropdown shadow">
                                        {
                                            searchSuggList.map((suggestion, i) =>(
                                            <div key={i} className="suggestion-item" onClick={e => item(suggestion)}>
                                                 {suggestion} 
                                            </div>
                                            ))
                                        }
                                        </div>
                                        
                                     
                                    }
                           </div>
                        <div className="d-flex">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/Home"className="nav-link">Home</a>
                                     </li>
                                    
                                     <li className="nav-item">
                                       
                                        
                                        <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                </button>
                                                {

                                                   isUserloggin ==false &&  
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="/login">Login</a></li>
                                                    <li><a className="dropdown-item" href="/createaccount">new customer <span className="text-primary">start here</span></a></li>
                                                    
                                                </ul>
                                                }
                                                {
                                                isUserloggin ==true &&  
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="/addaddress">Add Address</a></li>
                                                 
                                                     <li><a className="dropdown-item" href="/logout" onClick={e=>logoutUser()}>Logut</a></li>
                                                    
                                                </ul>
                                                }
                                                </div>


                                       
                                     
                                    </li>
                            </ul>

                          
                             
                        </div>
                    </div>
                     
        </nav>
  )

 }
 export default Nav