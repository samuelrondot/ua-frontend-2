// React
import React, {useEffect, FC, useState, useContext } from "react"
// Components
import { Video } from "./video"
import Screenshot from 'assets/images/screen2.png'
import axios from "axios"
import { useRouter } from 'next/router';
import GlobalContext from "context/GlobalContext";

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
  
    const gContext = useContext<any>(GlobalContext)
  
    const Router = useRouter()

    const { useremail, plan } = Router.query;


    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.paddle.com/paddle/paddle.js";
        script.onload = () => {
          // Paddle functions go here
          Paddle.Setup({ 
            vendor: 153221,
            eventCallback: function(data: any) {
      
              console.log(data)
              //...
              if (data.event === 'Checkout.Complete') {
                  
                  fpr('referral',{email: data.eventData.user.email,uid: data.eventData.user.id})
                  dataLayer.push({'event': 'checkoutSuccess'});
                  window.gtag('event','checkoutSuccess')
            
                  window.location.href = 'https://app.useartemis.co/register/next'
              }
            } });
          Paddle.Checkout.open({
            
            method: 'inline', // set to `inline`
            email: useremail,
            product: plan,
           // replace with a product ID or plan ID
    
            allowQuantity: false,
    
            disableLogout: true,
    
            frameTarget: 'checkout-container', // className of your checkout <div>
    
            frameInitialHeight: 450, // `450` or above
    
            frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;' // `min-width` must be set to `286px` or above with checkout padding off; `312px` with checkout padding on.
    
          });
        };
    
        document.body.appendChild(script);
    
        // Cleanup function to remove the script when the component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    /*
    useEffect(() => {
   
        Paddle.Setup({ 
          vendor: 153221,
          eventCallback: function(data: any) {
    
            console.log(data)
            //...
            if (data.event === 'Checkout.Complete') {
                
                fpr('referral',{email: data.eventData.user.email,uid: data.eventData.user.id})
                dataLayer.push({'event': 'checkoutSuccess'});
                window.gtag('event','checkoutSuccess')
          
                window.location.href = 'https://app.useartemis.co/'
            }
          } })

          Paddle.Checkout.open({
            
                    method: 'inline', // set to `inline`
                    email: gContext?.userinfo?.email,
                    product: plan,
                   // replace with a product ID or plan ID
            
                    allowQuantity: false,
            
                    disableLogout: true,
            
                    frameTarget: 'checkout-container', // className of your checkout <div>
            
                    frameInitialHeight: 450, // `450` or above
            
                    frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;' // `min-width` must be set to `286px` or above with checkout padding off; `312px` with checkout padding on.
            
                  });
    
    
        
          
      }, [])
      */

  
   


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
                                   Upgrade
                                </span>
                                <div className="flex items-center ">
                                   Turn on your lead machine
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

                                <h1>Get started</h1>
                                <p className="mb-10">You are one step away from starting your lead machine !</p>
                           
                              
                              
                            </div>


                            <div className="checkout-container">

                            </div>
                            
                           


                        
                        </div>

                      
                       
                    </div>
                </header>
            </section>
        </>
    )
}