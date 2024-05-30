import LoginFrom from "./LoginFrom" ;
import Logout from "./Logout";
import { useRecoilState } from "recoil";
import { stLogin } from "./StAtom";

import { useEffect, useState } from "react";
export default function Login() {
  const [user, setUser] = useState() ;
  const [isLogin, setIsLogin] = useRecoilState(stLogin) ;

  const handleLogin = (userIn) => {
    localStorage.setItem('user', userIn) ;      
    setUser(userIn) ;
    setIsLogin(true) ;
  }

  const handleLogout = () => {
    localStorage.removeItem('user') ;      
    setUser(null) ;
    setIsLogin(false) ;
  }

  useEffect(()=>{
    const tmUser = localStorage.getItem('user') ;
   
    if (tmUser) {
      setUser(tmUser) ;
      setIsLogin(true) ;
    }
    else  setIsLogin(false) ;

  }, []) ;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      { user ? <Logout user={user} onLogout ={handleLogout} /> 
             : <LoginFrom onLogin={handleLogin} />
      }       
    </div>
  )
}
