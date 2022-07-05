import {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { userContext } from './userContext';
import { useContext } from 'react';

 const useAuth = (useremail, userpassword)=>{
   const { user, message, setMessage, isLoggedIn,  setIsLoggedIn } = useContext(userContext);
 
   const handelLogout = (e) => {
      e.preventDefault();
      setIsLoggedIn(false);
      setMessage('you logged out');
  }

  const handelSubmit = (e) => {
      e.preventDefault();
      if (useremail === user.username && userpassword === user.password) {
        window.alert('Success Login / Welcome Marah ');
          setIsLoggedIn(true);
          setMessage('you are Loged in ');
      } else {
        window.alert('Incorrect UserName Or password...Try Again');
      }
  }
   return [message,handelSubmit,handelLogout]
}
export default useAuth ;