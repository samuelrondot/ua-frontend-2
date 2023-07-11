// React
import React, { FC, useState } from "react"
// Components
import { Video } from "./video"
import Screenshot from 'assets/images/screen2.png'
import axios from "axios"
import { useRouter } from 'next/router';
import { Loader } from 'lucide-react'
type OwnProps = {
    style?: object,
}

export const Hero: FC<OwnProps> = (props) => {
   

    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [country, setCountry] = React.useState("")
   
    const [firstname, setFirstname] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [countrycode, setCountrycode]= React.useState("")
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loginerror, setLoginerror] = React.useState(null)
  
    const router = useRouter()
    const { plan } = router.query;
  




    async function handleRegister  ()  {
        setIsLoading(true)
        const geoInfo: any = await getGeoInfo();
    
    
  
        const user =  {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          locale: geoInfo.countrycode,
        countryname: geoInfo.country
      }
    
      await fetch(`${"http://localhost:80"}/register`, {
        method:"POST",
        credentials: "include",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
     
    
      function Success () {
        setIsLoading(false)
        router.push(`/register/next?plan=${plan}&useremail=${email}`)
      }
    
      function Fail () {
        setIsLoading(false)
        setLoginerror(data.message)
     
      } 
        data.message === "Success" ?   Success (): Fail ()
        
    })
    
   
    
      async function getGeoInfo () {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const data = response.data;
        console.log(data);
        return { country: data.country_name, countrycode: data.country_code };
      } catch (error) {
        console.error(error);
        // Handle the error as needed
      }
    };
    
    }

    return (
        <>
            <section className="bg-white pb-20px tablet:pb-0">
                <header
                    className="w-full flex flex-col relative overflow-hidden pt-40px tablet:pt-80px"
                >
                    <div className="absolute bg-gradient-radial w-full top-[80px] h-full max-h-[80%]" />
                    <div className="flex flex-col items-center z-10 tablet:pt-80px relative px-[10px] tablet:px-24px ">
                        <div
                            className="mb-32px fade-in animation-delay-[1000ms] group rounded-20px bg-tertiary border border-attio-blue-01 border-opacity-0 hover:border-opacity-100 active:border-opacity-100 outline-none ring-attio-blue-main ring-0 hover:ring-[3px] active:ring-[1px] focus:ring-[3px] ring-opacity-0 hover:ring-opacity-30 active:ring-opacity-30 focus:ring-opacity-30 transition-all duration-500 ease-out"
                          
                        >
                            <div className="flex items-center gap-[6px] p-[2px_7px_2px_2px] typography-p6-medium text-typography-light-secondary">
                                <span className="h-[26px] align-middle p-[3px_9px_3px_10px] rounded-20px bg-greyscale-light-12 text-greyscale-light-01">
                                   Get started
                                </span>
                                <div className="flex items-center ">
                                   Start your 14-day free trial
                                    <svg
                                        className="group-hover:translate-x-[3px] group-focus:translate-x-[3px] transition-transform duration-500 ease-out"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.125 5.25L10.875 9L7.125 12.75"
                                            stroke="#2E3238"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                       
                       

                        <div className="register-container height-full">

                            <div className="subcontainer">

                                <img className="registerimage" src="/assets/useartemis.png"/>

                                <h1>Create an account</h1>
                                <p>Enter your email below to create an account</p>
                                <div className="mt-10">
                                <div className="input-flex">
                                    <div className="john-container">
                                  
                                    <input autoComplete="firstname" onChange={(e)=>setFirstname(e.target.value)} className="john" placeholder="John"/>
                                    </div>

                                    <div className="john-container">
                                  
                                  <input autoComplete="lastname" onChange={(e)=>setLastname(e.target.value)} className="john" placeholder="Doe"/>
                                  </div>

                                    
                                </div>


                                <div className="input-flex">
                                    

                                    <div className="john-container-w">
                                  
                                        <input autoComplete="email" onChange={(e)=>setEmail(e.target.value)}  className="john" placeholder="youremail@company.com"/>
                                    </div>

                                    
                                </div>


                                <div className="input-flex">
                                    

                                    <div className="john-container-w">
                                  
                                        <input type="password" onChange={(e)=>setPassword(e.target.value)}  className="john" placeholder="*****"/>
                                    </div>

                                    
                                </div>




                                </div>
                              
                            </div>

                            
                           
                            {loginerror && <p className="error">{loginerror}</p>}
                            <div className="relative z-10 mt-32px flex flex-row justify-center gap-12px pb-10px slide-down animation-delay-[750ms] ">
                           
                            <button
                                
                                className="w-full rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-primary  active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary  active:bg-buttonNew-primary-active  border-[1px] border-buttonNew-primary before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity text-center"
                            >
                                <span className="z-1 flex" onClick={()=> handleRegister()}>{isLoading && <Loader className="mr-2 icn-spinner"/>}Sign up with email</span>
                            </button>


                          
                          
                        </div>

                        <div>
                        <p className="muted">By clicking continue, you agree to our Terms of Service and Privacy Policy. Already have an account ? <a href="https://app.useartemis.co/login">Login instead</a></p>

                     
                    
                        </div>

                        
                        </div>

                      
                       
                    </div>
                </header>
            </section>
        </>
    )
}