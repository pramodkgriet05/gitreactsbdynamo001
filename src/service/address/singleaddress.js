import { deleteaddaddress } from "../authService"


 
function Singleaddress({address1}){

  let userID=""

    console.log("This is next page address:",address1)

    function edit_address(e)
    {
      alert ("edit function call")
      console.log(e)

    }

    async function delete_address(e)
    {
    alert("delete function call")
    console.log(e)
    userID=e
    let apiresponce= await  deleteaddaddress(userID)
    console.log(apiresponce)
    console.log(address1)
          
    }




    return(
        <div>
                    {

                            address1.map((address, i) =>(
                              <div>  {address.id} {address.name} {address.name} 
                              {address.mobile} {address.flat} {address.city}{address.country} 
                              {address.state} {address.pincode}

                              <button className="btn btn-primary" onClick={e=> edit_address(address.id)}>EDIT</button>
                              <button className="btn btn-primary"onClick={e=> delete_address(address.id)} >Delete</button>
                              </div>
                              

                            ))

                           }
                           </div>
    )
}
export default Singleaddress