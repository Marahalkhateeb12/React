import {useState } from 'react';
function CustomHook(email, password){
const [email1 , setEmail] = useState("marahalkhateeb12@gmail.com");
const [pass , setpass] = useState("marah1234567");
const Handlechange = (e) =>{
   e.preventDefault(); 
    if(email ==email1 && password ==pass)
   {
    return  window.alert('Success Login / Welcome Marah ');
   }else{
    window.alert('Incorrect UserName Or password...Try Again');
   }
}
return(
   [ email1 ,pass , Handlechange]
   )
}
export default CustomHook ;