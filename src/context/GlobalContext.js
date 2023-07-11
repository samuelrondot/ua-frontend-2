import React, { useState, useEffect } from "react";
import { baseurl } from "env";
import  { useRouter } from "next/router";


const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {

 

  const [isloggedin, setIsloggedin] = useState(false)

  const [toogle, setToogle] = useState(false)
  const [userinfo, setUserinfo] = useState(null)
  const [dashtab, setDashtab] = useState('Prospecting')
  const [listtab, setListtab] = useState('List')


  const router = useRouter()
  async function fetchDashboard () {

    fetch(`${baseurl}/dashboard`, {
        method:"GET",
        credentials: "include",
    })

    .then(res => res.json())

    .then(data => {
        function SuccessfullCreation () {
          
            setUserinfo(data.user)
            
          
        }
        SuccessfullCreation()
        
    })
   }


   


useEffect(() => {

    fetch(`${baseurl}/isAuth`, {
      credentials: "include",
        method:"GET",
       
    })

    .then(res => res.json())

    .then(data => {
        function SuccessfullCreation () {
          setIsloggedin(true)
          console.log(data)
            fetchDashboard()
        }
        data.isLoggedIn === false ? setIsloggedin(false): SuccessfullCreation()
        
    })


    
   
   
}, [router.pathname,toogle])


async function logout () {
  localStorage.removeItem("token")
  setToogle(!toogle)
  router.push('/')
  //console.log(localStorage)
 
}


  

  return (
    <GlobalContext.Provider
      value={{
       
        logout,
        toogle,
        setToogle,
        userinfo,
        setUserinfo,
        dashtab,
        setDashtab,
        isloggedin,
        setIsloggedin,
        listtab,
        setListtab
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
