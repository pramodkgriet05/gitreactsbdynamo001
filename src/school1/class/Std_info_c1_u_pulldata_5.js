import { useParams } from "react-router-dom"
import Std_info_c1_u_pulldata from "../Std_info_c1_u_pulldata"
import Std_info_c1_u_pulldata_get from "../Std_info_c1_u_pulldata_get"

 
function Std_info_c1_u_pulldata_5()
{
    const {classid1}=useParams()
    console.log(classid1)
    return( 
    
       <div className="container">
        <div className="row">
            <div className="col-12">
        <Std_info_c1_u_pulldata_get classid={classid1}/>
        </div>
        </div>

       </div>
    )
}
export default Std_info_c1_u_pulldata_5