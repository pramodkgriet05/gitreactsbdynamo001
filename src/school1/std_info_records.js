 import profile_pic from "../school/pics/profile_pic.jpg"
 import dance1 from  "../school/pics/dance.jpg"
 import sports1 from "../school/pics/sports.jpg"
import Add_new_student from "./add_new_student"
import { useState } from "react"
import { GET_USER_NAME } from "./utilils"
 


function Std_info_updaterecords()
{
    let userName=GET_USER_NAME()
               
    if(userName==null)
      {
        window.location="/homesch"
      }
    ///Std_info/viewrecords
    let[addstudent,setaddstudent]=useState(false)
    let[stdinfo, setstdinfo]=useState({img1:"",id:"",Name:"",Standardandsection:"",gender:"",DOB:"",DOJ:"",Address:"",Mobile:"",Father:"",Gaurdien:"",classTeacher:"",Other:""})
    let[o_std_details, seto_std_details]=useState(false)
    let[message, setmessage]=useState(false)
    let[img1, setimg1]=useState("")

    function createStd()
    {
        console.log("id",stdinfo.id)
        console.log("name",stdinfo.Name)
        console.log("Standardandsection",stdinfo.Standardandsection)
        console.log("gender",stdinfo.gender)
        console.log("DOB",stdinfo.DOB)
        console.log("DOJ",stdinfo.DOJ)
        console.log("Address",stdinfo.Address)
        console.log("Mobile",stdinfo.Mobile)
        console.log("Father",stdinfo.Father)
        console.log("Gaurdien",stdinfo.Gaurdien)
        console.log("classTeacher",stdinfo.classTeacher)
        console.log("Other",stdinfo.Other)
        setmessage(false)
        seto_std_details(true)
    }
    function SendApi()
    {
        console.log("cal api")
        setmessage(true)
        window.location="/Std_info/c1/u"
    }
 
                     function showconformdata(data)
                    {
                        setstdinfo(data)
                        seto_std_details(true)
                     }
    

    return(
        <div className="container">
            <div className="row mt-5 ">
                <h1>St'Martins school</h1>
                <div className="col-4">
                    <h1>  </h1>
                    <h1>Conform Details</h1>
                    
                        {
                            message==true && 
                            <div>
                                <h2 className="text-success">success </h2>
                                    <h2 className="text-success">record saved</h2>
                                </div>
                        
                        }
                   
                     {
                        o_std_details==true &&
                       <div>
                            
                           {/* <img src={URL.createObjectURL(stdinfo.img1)}/><br/> */}
                            Name={stdinfo.Name}<br/>
                            id={stdinfo.id}<br/>
                            Standardandsection={stdinfo.Standardandsection}<br/>
                            gender={stdinfo.gender}<br/>
                            DOB={stdinfo.DOB}<br/>
                            DOJ={stdinfo.DOJ}<br/>
                            Address={stdinfo.Address}<br/>
                            Mobile={stdinfo.Mobile}<br/>
                            Father={stdinfo.Father}<br/>
                            Gaurdien={stdinfo.Gaurdien}<br/>
                            classTeacher={stdinfo.classTeacher}<br/>
                            Other={stdinfo.Other}<br/>
                            
                            <button className="btn btn-warning  d-grid mt-3" type="button" onClick={e=>SendApi()}> SAVE</button>


                       </div>
                    }
                    
                    
               </div>
                     {
                        <Add_new_student rece_data={showconformdata}/>
                     }
                           <div className="row mt-5 ">
                                <div className="col-4">
                                    </div>
                                    <div className="col-4">
                                      <h3  >Class wise  recods</h3>
                             
                                            <div className="card"  style={{width: '18rem'}} >
                                                <img src={profile_pic} className="  profile_pic1 shadow " alt="..."/>
                                                        <div className="card-body">
                                                            <h5 className="card-title">Student Details</h5>
                                                            
                                                            <a href="#" className="btn btn-primary">Click Here</a>
                                                        </div>
                                            </div>
                              
                                    </div>

                                <div className="col-4">

                            
                                 </div>



                               </div>
                            
                    
                
            </div>
        </div>


         
    )
}
export default Std_info_updaterecords

 