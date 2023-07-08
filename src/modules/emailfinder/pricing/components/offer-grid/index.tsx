// React
import { FC, useEffect, useState } from "react";
// Components
import { SalesPricingBillingSelector } from "../billing-selector";

const annualDiscountActiveClass = 'opacity-1 translate-x-0'
const annualDiscountInactiveClass = 'opacity-0 translate-x-8px'

type OwnProps = {
    billingPeriod: "monthly" | "annually"
    onChange: (billingPeriod: "monthly" | "annually") => void
}

export const SalesPricingOfferGrid: FC<OwnProps> = (props) => {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")
    const [annualDiscountActive, setAnnualDiscountActive] = useState<boolean>(false)

    useEffect(() => {
        setBillingPeriod(props.billingPeriod)
    }, [props.billingPeriod])

    const _handleBillingPeriodChange = (billingPeriod: "monthly" | "annually") => {
        setBillingPeriod(billingPeriod)

        if (billingPeriod === 'annually') {
            setAnnualDiscountActive(true)
        } else {
            setAnnualDiscountActive(false)
        }
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
                                href="https://app.attio.com/welcome/sign-in"
                                className="border outline-offset-4 rounded-16px w-[212px] border-stroke-light-secondary p-[18px] flex flex-col gap-16px bg-white"
                            >
                                <div className="flex flex-col gap-4px">
                                    <p className="typography-p2-strong text-website-text-primary">
                                        Free
                                    </p>
                                    <div className="font-inter text-[11px] leading-105 text-website-text-tertiary font-medium slashed-zero">
                                        <div className="relative inline-block">
                                            <div className="relative">€0 user/mo billed annually</div>
                                            <div className="opacity-0 top-0 absolute">
                                                €0 user/mo billed monthly
                                            </div>
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
                                href="https://app.attio.com/welcome/sign-in"
                                className="border outline-offset-4 rounded-16px w-[212px] border-stroke-light-secondary p-[18px] flex flex-col gap-16px bg-white"
                            >
                                <div className="flex flex-col gap-4px">
                                    <p className="typography-p2-strong text-website-text-primary">
                                        Plus
                                    </p>
                                    <div className="font-inter text-[11px] leading-105 text-website-text-tertiary font-medium slashed-zero">
                                        <div className="relative inline-block">
                                            {billingPeriod === 'monthly' ? (
                                                <div className="relative"> €34 user/mo billed monthly</div>
                                            ) : (
                                                <div className="relative"> €29 user/mo billed annually</div>
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
                                href="https://app.attio.com/welcome/sign-in"
                                className="border outline-offset-4 rounded-16px w-[212px] border-stroke-light-secondary p-[18px] flex flex-col gap-16px bg-white"
                            >
                                <div className="flex flex-col gap-4px">
                                    <p className="typography-p2-strong text-website-text-primary">
                                        Pro
                                    </p>
                                    <div className="font-inter text-[11px] leading-105 text-website-text-tertiary font-medium slashed-zero">
                                        <div className="relative inline-block">
                                            {billingPeriod === 'monthly' ? (
                                                <div className="relative"> €69 user/mo billed monthly</div>
                                            ) : (
                                                <div className="relative"> €59 user/mo billed annually</div>
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
                                            <div className="relative">€119 user/mo billed annually</div>
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
                    <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                        <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                            Workspace
                        </h3>
                        <div data-orientation="vertical">
                            <table className="table-fixed border-separate w-full desktop:w-auto">
                                <tbody>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Number of seats
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Up to 3
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Unlimited
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Unlimited
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Unlimited
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Number of seats{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:R371rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R171rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                        <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                            Email and calendar
                        </h3>
                        <div data-orientation="vertical">
                            <table className="table-fixed border-separate w-full desktop:w-auto">
                                <tbody>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Email and calendar sync
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2aj2rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                1 account per user
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                1 account per user
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                2 accounts per user
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                3+ accounts per user
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Email and calendar sync
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsj2rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcj2rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4j2rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Email sharing
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2al2rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Individual metadata
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Individual bodies and attachments
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Specific contacts
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Specific contacts
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Email sharing
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsl2rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcl2rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4l2rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Email sending
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                200 sends per month
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                1,000 sends per month
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Unlimited
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Unlimited
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Email sending{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcn2rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4n2rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Bulk email sending
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2ap2rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                10 sends at a time
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                50 sends at a time
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                50 sends at a time
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                50 sends at a time
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Bulk email sending
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsp2rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcp2rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4p2rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Remove &apos;Sent with Attio&apos;
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Remove &apos;Sent with Attio&apos;{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcr2rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4r2rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                        <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                            Data sources
                        </h3>
                        <div data-orientation="vertical">
                            <table className="table-fixed border-separate w-full desktop:w-auto">
                                <tbody>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Communication intelligence
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Essential
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Standard
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Advanced
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Advanced
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Communication intelligence{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:R6b3rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R2b3rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents">
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            First interaction
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Last interaction
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Connection strength
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Strongest connection
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            First email interaction
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Last email interaction
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            First calendar interaction
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Last calendar interaction
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Next calendar interaction
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Company enrichment
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Essential
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Standard
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Standard
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Standard
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Company enrichment{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:R6d3rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R2d3rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents">
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Name
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Description
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Logo
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Category
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Social media
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Location
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Employee count
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            ARR
                                                            <button
                                                                type="button"
                                                                aria-haspopup="dialog"
                                                                aria-expanded="false"
                                                                aria-controls="radix-:R4ol3rhp:"
                                                                data-state="closed"
                                                            >
                                                                <svg
                                                                    height={20}
                                                                    width={20}
                                                                    className="stroke-greyscale-light-07"
                                                                >
                                                                    <use
                                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                        height={20}
                                                                        width={20}
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            People enrichment
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Essential
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Essential
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Essential
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Essential
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    People enrichment{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:R6f3rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R2f3rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents">
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Name
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Description
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Profile picture
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Social media
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="typography-p6-medium flex flex-row gap-24px text-typography-light-secondary">
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[222px]">
                                                            Location
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-between py-[10px] pl-[10px] text-typography-light-quaternary w-[212px]">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                        <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                            Reporting
                        </h3>
                        <div data-orientation="vertical">
                            <table className="table-fixed border-separate w-full desktop:w-auto">
                                <tbody>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Number of reports
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2aj4rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                3 reports
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                15 reports
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                100 reports
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Unlimited
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Number of reports
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsj4rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcj4rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4j4rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Insight reports
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2al4rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Insight reports
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsl4rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcl4rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4l4rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Funnel reports
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2an4rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Funnel reports
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsn4rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcn4rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4n4rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Segment by
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2ap4rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Segment by
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsp4rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcp4rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4p4rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Targets
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2ar4rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Targets
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsr4rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcr4rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4r4rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Historical attributes
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2at4rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Historical attributes
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lst4rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rct4rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4t4rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                        <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                            Chrome extension
                        </h3>
                        <div data-orientation="vertical">
                            <table className="table-fixed border-separate w-full desktop:w-auto">
                                <tbody>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Enrich contacts from LinkedIn
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                10 credits
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                50 credits
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                100 credits
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                500 credits
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Enrich contacts from LinkedIn{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:R375rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R175rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                        <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                            Data model
                        </h3>
                        <div data-orientation="vertical">
                            <table className="table-fixed border-separate w-full desktop:w-auto">
                                <tbody>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Access permissions
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:Rin6rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Fully visible
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Private
                                                <button
                                                    type="button"
                                                    aria-haspopup="dialog"
                                                    aria-expanded="false"
                                                    aria-controls="radix-:Rskn6rhp:"
                                                    data-state="closed"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className="stroke-greyscale-light-07"
                                                    >
                                                        <use
                                                            href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Advanced
                                                <button
                                                    type="button"
                                                    aria-haspopup="dialog"
                                                    aria-expanded="false"
                                                    aria-controls="radix-:Rssn6rhp:"
                                                    data-state="closed"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className="stroke-greyscale-light-07"
                                                    >
                                                        <use
                                                            href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Advanced
                                                <button
                                                    type="button"
                                                    aria-haspopup="dialog"
                                                    aria-expanded="false"
                                                    aria-controls="radix-:Rt4n6rhp:"
                                                    data-state="closed"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className="stroke-greyscale-light-07"
                                                    >
                                                        <use
                                                            href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Access permissions
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R15f76rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:R376rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R176rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                        <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                            Admin
                        </h3>
                        <div data-orientation="vertical">
                            <table className="table-fixed border-separate w-full desktop:w-auto">
                                <tbody>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Payment by invoice
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Payment by invoice{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:R6b7rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R2b7rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="hidden desktop:contents">
                                        <td className="contents">
                                            <table className="contents">
                                                <tbody className="contents" />
                                            </table>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            SAML (SSO)
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    SAML (SSO){" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:R6d7rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R2d7rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                        <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                            Support
                        </h3>
                        <div data-orientation="vertical">
                            <table className="table-fixed border-separate w-full desktop:w-auto">
                                <tbody>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Help center
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Help center{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcj8rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4j8rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Chat and email support
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Chat and email support{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcl8rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4l8rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Priority support
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 7.92308L5.64706 11L13 3"
                                                            className="stroke-brand-light-primary"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Priority support{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcn8rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4n8rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            Migration assistance
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                                aria-controls="radix-:R2ap8rhp:"
                                                data-state="closed"
                                            >
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <use
                                                        href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Free
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                <div className="h-20px flex flex-row items-center">
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 4L4 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4 4L12 12"
                                                            className="stroke-greyscale-light-07"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Plus
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Chat with us
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Pro
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Chat with us
                                            </div>
                                        </td>
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                            <div className="w-[120px] flex-none block desktop:hidden">
                                                Enterprise
                                            </div>
                                            <div className="flex justify-between desktop:contents flex-1">
                                                Chat with us
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                        data-state="closed"
                                        data-orientation="vertical"
                                    >
                                        <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                            <h3
                                                data-orientation="vertical"
                                                data-state="closed"
                                                className="w-full flex-1 flex flex-row items-center justify-between"
                                            >
                                                <div className="flex flex-row gap-[10px]">
                                                    Migration assistance
                                                    <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:R4lsp8rhp:"
                                                        data-state="closed"
                                                    >
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            className="stroke-greyscale-light-07"
                                                        >
                                                            <use
                                                                href="/build/_assets/information-DBLK5HI4.svg#icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </svg>
                                                    </button>{" "}
                                                </div>
                                                <button
                                                    type="button"
                                                    aria-controls="radix-:Rcp8rhp:"
                                                    aria-expanded="false"
                                                    data-state="closed"
                                                    data-orientation="vertical"
                                                    id="radix-:R4p8rhp:"
                                                    className="group flex-grow flex flex-row justify-end"
                                                    data-radix-collection-item=""
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                                    >
                                                        <use
                                                            href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </svg>
                                                </button>
                                            </h3>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}