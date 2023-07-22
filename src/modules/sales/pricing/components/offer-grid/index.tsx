// React
import { FC, useEffect, useState, useContext } from "react";
// Components
import { SalesPricingBillingSelector } from "../billing-selector";
import { SalesPricingOfferGridChromeExtension } from "./chrome-extension";
import { SalesPricingOfferGridEmailCalandar } from "./email-calandar";
import { SalesPricingOfferGridDataSources } from "./data-sources";
import { SalesPricingOfferGridDataModel } from "./data-model";
import { SalesPricingOfferGridReporting } from "./reporting";
import { SalesPricingOfferGridWorkspace } from "./workspace";
import { SalesPricingOfferGridSupport } from "./support";
import { SalesPricingOfferGridAdmin } from "./admin";
import Link from "next/link";
import GlobalContext from "context/GlobalContext"


type OwnProps = {
    billingPeriod: "monthly" | "annually"
    onChange: (billingPeriod: "monthly" | "annually") => void
}

export const SalesPricingOfferGrid: FC<OwnProps> = (props) => {

    const gContext = useContext(GlobalContext);


    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")

    useEffect(() => {
        setBillingPeriod(props.billingPeriod)
    }, [props.billingPeriod])

    const _handleBillingPeriodChange = (billingPeriod: "monthly" | "annually") => {
        setBillingPeriod(billingPeriod)
    }

    return (
        <>
            <section className="flex mt-[120px] desktop:mt-[180px] w-full flex-col items-center gap-40px pb-40px">
                <h3 className="typography-h4 desktop:typography-h3-strong text-typography-light-secondary">
                    Compare plans
                </h3>
                <div className="hidden desktop:block sticky z-10 top-72px bg-neutral-light-50 backdrop-blur bg-opacity-90 w-full ">
                    <div className="pb-32px flex flex-col items-center pt-24px gap-[60px]">
                        <div className="flex flex-row gap-24px items-end">
                            <div className="flex flex-col gap-8px pb-[18px]">
                                <label
                                    htmlFor="billing-cycle"
                                    className="text-typography-light-quaternary font-medium font-inter text-[11px] -tracking-0.1px leading-140"
                                >
                                    Billing frequency
                                </label>
                                <SalesPricingBillingSelector
                                    billingPeriod={billingPeriod}
                                    onChange={_handleBillingPeriodChange} />
                            </div>
                            <a
                                href={gContext?.isloggedin ? `https://useartemis.co/register/next?plan=841099&useremail=${gContext?.userinfo?.email}` : "https://useartemis.co/register?plan=841099"}
                                className="border outline-offset-4 rounded-16px w-[212px] border-stroke-light-secondary p-[18px] flex flex-col gap-16px bg-white"
                            >
                                <div className="flex flex-col gap-4px">
                                    <p className="typography-p2-strong text-website-text-primary">
                                        Starter
                                    </p>
                                    <div className="font-inter text-[11px] leading-105 text-website-text-tertiary font-medium slashed-zero">
                                        <div className="relative inline-block">
                                        {billingPeriod === 'monthly' ? (
                                                <div className="relative"> $49 user/mo billed monthly</div>
                                            ) : (
                                                <div className="relative"> $39 user/mo billed annually</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus w-full"
                                >
                                    <span className="z-1 relative">Get started</span>
                                </button>
                            </a>
                            <a
                                href={gContext?.isloggedin ? `https://useartemis.co/register/next?plan=841100&useremail=${gContext?.userinfo?.email}` : "https://useartemis.co/register?plan=841100"}
                                
                                className="border outline-offset-4 rounded-16px w-[212px] border-stroke-light-secondary p-[18px] flex flex-col gap-16px bg-white"
                            >
                                <div className="flex flex-col gap-4px">
                                    <p className="typography-p2-strong text-website-text-primary">
                                        Plus
                                    </p>
                                    <div className="font-inter text-[11px] leading-105 text-website-text-tertiary font-medium slashed-zero">
                                        <div className="relative inline-block">
                                            {billingPeriod === 'monthly' ? (
                                                <div className="relative"> $99 user/mo billed monthly</div>
                                            ) : (
                                                <div className="relative"> $79 user/mo billed annually</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus w-full"
                                >
                                    <span className="z-1 relative">Get started</span>
                                </button>
                            </a>
                            <a
                                href={gContext?.isloggedin ? `https://useartemis.co/register/next?plan=841101&useremail=${gContext?.userinfo?.email}` : "https://useartemis.co/register?plan=841101"}
                                
                                className="border outline-offset-4 rounded-16px w-[212px] border-stroke-light-secondary p-[18px] flex flex-col gap-16px bg-white"
                            >
                                <div className="flex flex-col gap-4px">
                                    <p className="typography-p2-strong text-website-text-primary">
                                        Pro
                                    </p>
                                    <div className="font-inter text-[11px] leading-105 text-website-text-tertiary font-medium slashed-zero">
                                        <div className="relative inline-block">
                                            {billingPeriod === 'monthly' ? (
                                                <div className="relative"> $129 user/mo billed monthly</div>
                                            ) : (
                                                <div className="relative"> $109 user/mo billed annually</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-primary hover:text-buttonNew-primary-hover active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary hover:bg-buttonNew-primary active:bg-buttonNew-primary-active focus:bg-buttonNew-primary-active disabled:bg-buttonNew-primary-disabled border-[1px] border-buttonNew-primary hover:border-buttonNew-primary-hover disabled:border-buttonNew-primary-disabled shadow-buttonNew-primary hover:shadow-buttonNew-primary-hover active:shadow-none focus:shadow-buttonNew-primary-focus disabled:shadow-buttonNew-primary-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity w-full"
                                >
                                    <span className="z-1 relative">Get started</span>
                                </button>
                            </a>
                            <button
                                className="border outline-offset-4 rounded-16px w-[212px] border-stroke-light-secondary p-[18px] flex flex-col gap-16px bg-white"
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:R29jhp:"
                                data-state="closed"
                            >
                                <div className="flex flex-col gap-4px">
                                    <p className="typography-p2-strong text-website-text-primary">
                                        Enterprise
                                    </p>
                                    <div className="font-inter text-[11px] leading-105 text-website-text-tertiary font-medium slashed-zero">
                                        <div className="relative inline-block">
                                            <div className="relative">€259 user/mo billed monthly</div>
                                            <div className="opacity-0 top-0 absolute" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus w-full w-full"
                                >
                                    Talk to sales
                                </div>
                            </button>
                        </div>
                    </div>
                    <hr className="w-[1168px] mx-auto border-b border-stroke-light-navigation" />
                </div>
                <div className="isolate flex flex-col w-full desktop:w-auto gap-40px desktop:gap-0">
                   
                    <SalesPricingOfferGridEmailCalandar />
                    <SalesPricingOfferGridDataSources />
                   
                    <SalesPricingOfferGridChromeExtension />
                   
                   
                    <SalesPricingOfferGridSupport />
                </div>
            </section >
        </>
    )
}