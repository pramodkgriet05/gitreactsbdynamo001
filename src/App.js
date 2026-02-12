import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import HOME from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Navbar/Login';
import Signup from './Navbar/Createaccount';
import Signin from './shared/signin';
import Resetpassword from './shared/resetpassword';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Productsearch from './products/products';
import Singleproductcomponent from './products/singleproductcomponent';
import Address from './service/address/address';
import Springbootfilecall from './springboot/springbootfile';
import ReadApi from './springboot/ReadApi/ReadpApi';
import Springbootlogin from './springboot/login';
import Springbootforgotpassword from './springboot/forgotpassword';
import Springbootresetpassword from './springboot/resetpassword';
import Homesch from './school/home-sch';
import sch_createaccount from './school/pics/authstd/createaccount';
import Sch_createaccount from './school/pics/authstd/createaccount';
import Sch_login from './school1/auth_login';
import SignUP from './school1/createaccount';
import std_info from './school1/std_info';
import Std_info_records from './school1/std_info_records';
import Std_info_classwise from './school1/Std_info_classwise';
import Std_info_updaterecords from './school1/std_info_records';
import Std_info__c_update from './school1/Std_info_classwise';
import Std_info__v_update from './school1/std_c_v_records';
import add_new_student from './school1/add_new_student';
import Std_info_c1_u from './school1/updateRecords/Std_info_c1_u';
import Std_info_c1_u_pulldata from './school1/Std_info_c1_u_pulldata';
import Std_info_c1_e from './school1/Std_info_c1_e';
import Std_info_c1_u_pulldata_5 from './school1/class/Std_info_c1_u_pulldata_5';
import Sch_Resetpassword from './school1/sch_resetpassword';
import S_resetpassword from './school1/S_resetpassword';
import S_otp from './school1/schotp';
import Std_info_c1_u_pulldata_get from './school1/Std_info_c1_u_pulldata_get';
import Std_info_c1_g_record from './school1/Std_info_c1_g_record';


function App() {
  return (
     
     <Routes>  

        <Route path='/login' element={<Signin />} />
<Route path='/' element={<HOME />} />

<Route path='/createaccount' element={<Signup />} />
<Route path='/logout' element={<HOME />} />
<Route path='/resetpassword' element={<Resetpassword />} />
<Route path='/productsearch' element={<Productsearch />} />
<Route path='/product/:productID' element={<Singleproductcomponent />} />
<Route path='/addaddress' element={<Address />} />
<Route path='/springboot/login' element={<Springbootfilecall />} />
<Route path='/springboot/readApi' element={<ReadApi />} />
<Route path='/springboot/login1' element={<Springbootlogin />} />
<Route path='/springboot/forgotpassword' element={<Springbootforgotpassword />} />
<Route path='/springboot/resetpassword' element={<Springbootresetpassword />} />
<Route path='/homesch' element={<Homesch />} />
<Route path='/sch_createaccount' element={<Sch_createaccount />} />
<Route path='/std_info' element={<std_info />} />
<Route path='/Std_info/updaterecords' element={<Std_info_updaterecords />} />

<Route path='/Std_info/c/update/' element={<Std_info__c_update />} />
<Route path='/Std_info/c/viewrecords' element={<Std_info__v_update />} />
<Route path='/Std_info/c1/u/:stdid' element={<Std_info_c1_u />} />
<Route path='/Std_info/c1/u/pulldata' element={<Std_info_c1_u_pulldata />} />
<Route path='/Std_info/c1/g/record' element={<Std_info_c1_g_record />} />
<Route path='/Std_info/c1/u/pulldata/:classid1' element={<Std_info_c1_u_pulldata_5 />} />
<Route path='/Std_info/c1/u/pulldata/get' element={<Std_info_c1_u_pulldata_get />} />
<Route path='/Std_info/c1/e' element={<Std_info_c1_e />} />

<Route path='/sch/resetpassword' element={<Sch_Resetpassword />} />
<Route path='/sch/resetpasswordlink' element={<S_resetpassword />} />
<Route path='/s/otp/createaccount' element={<S_otp />} />

      
    </Routes>
   
  );
}

export default App;



