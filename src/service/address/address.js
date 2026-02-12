import { useEffect, useState } from "react"
import Footer from "../../Navbar/Footer"
import Nav from "../../Navbar/Navbar"
import AddNewaddress from "./addaddress"
import { viewaddressapi } from "../authService"
import { getloggedinuserID } from "../../utils/Utils"
import Singleaddress from "./singleaddress"

function Address()
{

    let[showaddress, setshowadress]=useState(false)
    let[addressdata, setaddressdata]=useState([])
    let[saveadress, setsaveadress]=useState( false )
    
     useEffect(()=>{ 

        const getaddressapi=async()=>
        {
           let apireponce=await viewaddressapi({userId:getloggedinuserID()}) 
           console.log(apireponce)
            
            setaddressdata([...apireponce.data.data])

        }
        getaddressapi() 




    },[])

    const addnewaddress=(data)=>
    {
        let tempdata=addressdata
        tempdata.push(data)
        setsaveadress([...tempdata])
    }

   



   

     
    return(
        <div>
            <Nav/>
                <div className="container mt-10">
                    <div className="row">
                        <div className="col-3"></div>
                          
                            <div className="col-6  mt-10">
                            <button className="btn btn-success " onClick={e=>{setshowadress(true)}}> Add New Address</button>
                            {
                            showaddress==true &&
                            <div>
                                <AddNewaddress addnewaddress={addnewaddress} />
                                </div>
                             }
                           
                         </div>
                        
                          <div className="col-3">
                             <button className="btn btn-success " onClick={e=>{setsaveadress(true)}}> Save Address</button>
                            {
                            saveadress==true &&
                            <div>                       
                             <Singleaddress address1={addressdata}  />
                            </div>
                             }
                            </div>
                        
                    </div>
                     
                </div>
            <Footer/>        
        </div>
    )
}
export default Address