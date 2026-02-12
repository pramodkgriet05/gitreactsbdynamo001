import { useEffect, useState } from "react"
import { addaddressapi, viewaddressapi } from "../authService"
import { getloggedinuserID } from "../../utils/Utils"

function AddNewaddress({addnewaddress})
{

   


    let[Address, setaddress]=useState({name:'', mobile:'',address1:'',city:'',State:'',country:'',pincode:'',latlong:''})

       
          const handleInputaddress=async()=>
         {
              let apiresponce= await  addaddressapi(Address)
                console.log(apiresponce.data.data)
                addnewaddress(apiresponce.data.data)
         
         }
         





 

    return(
        <div className="card shadow-sm mt-3">    
        <div className="card-body">
            <h2 className="card-title>">Add New Address</h2>
            <div className="mt-2">
                 <div className="mt-2 mb-2 ">
                    <button className="btn btn-primary mt-3"  >Use My location</button>
                </div>
                <div>
                <label>Name</label>
                <input type="text" className="form-control" onChange={e=>setaddress({...Address, name:e.target.value})}></input>
                </div>
                <div>
                <label>Mobile</label>
                <input type="text" className="form-control" onChange={e=>setaddress({...Address, mobile:e.target.value})}></input>
                </div>
                <div>
                     <label>Address1</label>
                <input type="text" className="form-control" onChange={e=>setaddress({...Address, address1:e.target.value})}></input>
                </div>
                <label>city</label>
                <input type="text" className="form-control" onChange={e=>setaddress({...Address, city:e.target.value})}></input>
                </div>
                <div>
                <label>state</label>
                <input type="text" className="form-control" onChange={e=>setaddress({...Address, state:e.target.value})}></input>
                </div>
                <div>
                <label>country</label>
                <input type="text" className="form-control" onChange={e=>setaddress({...Address, country:e.target.value})}></input>
                </div>
                <div>
                <label>pincode</label>
                <input type="text" className="form-control" onChange={e=>setaddress({...Address, pincode:e.target.value})}></input>
                </div>
                
                <div>
                    <button className="btn btn-primary mt-3" onClick={e=>handleInputaddress()}>Add Address</button>
                </div>
            
            </div>
 
        </div>
 
         
    )
}
export default AddNewaddress