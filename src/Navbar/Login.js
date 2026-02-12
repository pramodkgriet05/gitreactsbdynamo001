import { useState } from "react"

function Login()
{

    let[modalclasses, setmodalclasses] =useState("modal display-none")
    let isModelopen=false

    function handleloginbutton()
    {
        if(isModelopen==false)
        {
            setmodalclasses("modal display-block")
            isModelopen=true
        }
        else
        {
        setmodalclasses("display-none")
            isModelopen=false
        }
    }



   

    return(

        <div>
             <button className="btn btn-warning ms-3" onClick={e=>handleloginbutton()}>LOGIN</button>
             
                    <div className={modalclasses}  >
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={e=>handleloginbutton()}></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
       

     
    )
} 
export default Login