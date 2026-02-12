export const isEmailValiedsch=(email)=>{

    let emailtest=(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    return emailtest.test(email)

}



export function USER_DATA_VERIFICATION()
{
     let userData=localStorage.getItem("userData")
     
    if(userData==undefined)
    {
        return false
   }
   else
   {
    return true
   }

}

 export const GET_USER_NAME=()=>{

    let userData=localStorage.getItem('userData')
   
    if(userData!=null)
        {
             userData=JSON.parse(userData)
             let userName=userData.UserName
            return userName
        } 
        else
        {
            return null
        }

 }
 export const GET_USER_ID=()=>{

    let userData=localStorage.getItem('userData')
    if(userData!=null)
    {
    userData=JSON.parse(userData)
            return userData.id
    }
    else
    {
        return null
    }

 }