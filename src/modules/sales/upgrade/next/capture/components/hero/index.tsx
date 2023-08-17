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


    const [subtotal, setSubtotal] = React.useState(0)
    const [tax, setTax] = React.useState(0)
    const [taxrate, setTaxrate] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const [currency, setCurrency] = React.useState("")
    const [recurringPrice, setRecurringPrice] = React.useState(0)
    const [recurringInterval, setRecurringInterval] = React.useState("")
    const [productname, setProductname] = React.useState("")
    const [productid, setProductid] = React.useState(0)
    const [quantity, setQuantity] = React.useState(1)
    const [trialDays, setTrialDays] = React.useState(0)
    const [grossprice, setGrossprice] = React.useState(0)

    console.log(total, tax, subtotal, currency, recurringPrice, recurringInterval, productname, productid, quantity, trialDays, taxrate, grossprice)
   


    function updatePrices(data : any) {

        setSubtotal(data.eventData.checkout.prices.customer.total - data.eventData.checkout.prices.customer.total_tax)
        setTotal(data.eventData.checkout.prices.customer.total)
        setTax(data.eventData.checkout.prices.customer.total_tax)
        setCurrency(data.eventData.checkout.prices.customer.currency)
        setRecurringPrice(data.eventData.checkout.recurring_prices.customer.total)
        setRecurringInterval(data.eventData.checkout.recurring_prices.interval.type)
        setProductname(data.eventData.product.name)
        setProductid(data.eventData.product.id)
        setQuantity(data.eventData.product.quantity)
        setTrialDays(data.eventData.checkout.prices.customer.items[0].display_recurring_price.trial_days)
        setGrossprice(data.eventData.checkout.prices.customer.items[0].display_recurring_price.line_price.gross)
        setTaxrate(data.eventData.checkout.prices.customer.items[0].display_price.tax_rate)
    }
  

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.paddle.com/paddle/paddle.js";
        script.onload = () => {
          
          Paddle.Setup({ 
            vendor: 153221,
            //vendor: 7439,
            
            eventCallback: function(data: any) {
               if(data?.eventData?.checkout?.prices?.customer?.total){
                updatePrices(data);
               }
               
             
              //...
              if (data.event === 'Checkout.Complete') {
                  
                  fpr('referral',{email: data.eventData.user.email,uid: data.eventData.user.id})
                  dataLayer.push({'event': 'checkoutSuccess'});
                  window.gtag('event','checkoutSuccess')
            
                  window.location.href = 'https://app.useartemis.co/register/next'
              }
            } });
            //Paddle.Environment.set('sandbox');





            
          Paddle.Checkout.open({
            
            method: 'inline', // set to `inline`
            email: useremail,
            product: plan,
           // replace with a product ID or plan ID
    
            allowQuantity: false,
    
            disableLogout: true,
    
            frameTarget: 'checkout-container', // className of your checkout <div>
    
            frameInitialHeight: 450, // `450` or above
    
            frameStyle: 'width:100%; min-width:412px;  border: none; border-radius: 10px; padding: 15px ' // `min-width` must be set to `286px` or above with checkout padding off; `312px` with checkout padding on.
    
          });
        };
    
        document.body.appendChild(script);
    
        // Cleanup function to remove the script when the component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }, []);

   
  
   


    return (
        <>
            <section className="bg-white pb-20px tablet:pb-0">
                <header
                    className="w-full flex flex-col relative overflow-hidden "
                >
                    <div className="absolute bg-gradient-radial w-full h-full max-h-[80%]" />
                    <div className="flex flex-col items-center z-10 tablet:pt-80px relative px-[10px] tablet:px-24px ">
                       
                       

                        <div className="register-container-checkout height-full flex  justify-evenly">

                         
                              

                                <div className="p-10 checkout-detail-width">

                                <div
                            className="mb-32px fade-in animation-delay-[1000ms] group rounded-20px bg-tertiary border border-attio-blue-01 border-opacity-0 hover:border-opacity-100 active:border-opacity-100 outline-none ring-attio-blue-main ring-0 hover:ring-[3px] active:ring-[1px] focus:ring-[3px] ring-opacity-0 hover:ring-opacity-30 active:ring-opacity-30 focus:ring-opacity-30 transition-all duration-500 ease-out"
                          
                        >
                            <div className="flex items-center gap-[6px] p-[2px_7px_2px_2px] typography-p6-medium text-typography-light-secondary">
                                <span className="h-[26px] align-middle p-[3px_9px_3px_10px] rounded-20px bg-greyscale-light-12 text-greyscale-light-01">
                                   Get started
                                </span>
                                <div className="flex items-center ">
                                   
                                Turn on your lead machine
                                   
                                </div>
                            </div>
                        </div>


                                    <h2>Your subscription</h2>
                                    <p className="typography-p5-medium text-typography-light-tertiary">{productname} {currency === "USD" ? "$" : currency}{trialDays > 0 ? grossprice : total}/month</p>
                                    {
                                        trialDays > 0 &&  <p className="typography-p5-medium text-typography-light-tertiary">{trialDays}-day free trial</p>
                                    }
                                    <div className="flex space-between mt-10">
                                        <div>
                                        <h2 className="mt-20px mx-auto typography-p3-medium tablet:typography-p2-medium text-typography-light-secondary ">Subtotal</h2>
                                        </div>

                                        <div>
                                        <h2 className="mt-20px mx-auto max-tablet:px-[14px] typography-p3-medium tablet:typography-p2-medium text-typography-light-secondary max-w-[550px]  slide-down animation-delay-[300ms]">{currency === "USD" ? "$" : currency}{subtotal ? subtotal?.toFixed(2) : null}/month</h2> 
                                        </div>


                                    </div>

                            


                                    <div className="flex space-between  mt-7">
                                        <div>
                                        <h2 className="mt-20px mx-auto max-tablet:px-[14px] typography-p3-medium tablet:typography-p2-medium text-typography-light-secondary max-w-[550px]  slide-down animation-delay-[300ms]">Taxes</h2>
                                        </div>

                                        <div>
                                        <h2 className="mt-20px mx-auto max-tablet:px-[14px] typography-p3-medium tablet:typography-p2-medium text-typography-light-secondary max-w-[550px]  slide-down animation-delay-[300ms]">{currency === "USD" ? "$" : currency}{tax ? tax : null}/month</h2> 
                                        </div>


                                    </div>

                                    <div className="bordercustom"></div>


                                    <div className="flex space-between  mt-7">
                                        <div>
                                        <h2 className="mt-20px mx-auto max-tablet:px-[14px] typography-p3-medium tablet:typography-p2-medium text-typography-light-secondary max-w-[550px]  slide-down animation-delay-[300ms]">Total</h2>
                                        </div>

                                        <div>
                                        <h2 className="mt-20px mx-auto max-tablet:px-[14px] typography-p3-medium tablet:typography-p2-medium text-typography-light-secondary max-w-[550px]  slide-down animation-delay-[300ms]">{currency === "USD" ? "$" : currency}{total}/month</h2> 
                                        </div>


                                    </div>


                                    {
                                        trialDays > 0 &&  <p className="flex items-center typography-p5-medium text-typography-light-tertiary mt-10"> <svg
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
                                    </svg>Due today : ${total}</p>
                                    }
                                   
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