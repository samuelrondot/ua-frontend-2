// React
import { FC, useEffect, useState, useContext } from "react"
// Components
import { SalesPricingBillingSelector } from "../billing-selector"
import Router, { useRouter } from 'next/router'
import Link from "next/link"
import GlobalContext from "context/GlobalContext"

const annualDiscountActiveClass = 'opacity-1 translate-x-0'
const annualDiscountInactiveClass = 'opacity-0 translate-x-8px'

type OwnProps = {
    billingPeriod: "monthly" | "annually"
    onChange: (billingPeriod: "monthly" | "annually") => void
}

export const SalesPricingHero: FC<OwnProps> = (props) => {


    const gContext = useContext(GlobalContext);


    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")
    const [annualDiscountActive, setAnnualDiscountActive] = useState<boolean>(false)

    useEffect(() => {
        setBillingPeriod(props.billingPeriod)
    }, [props.billingPeriod])

    useEffect(() => {
        props.onChange(billingPeriod)
    }, [billingPeriod])

    const router = useRouter()
    
   
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
            <header
                className="w-full flex flex-col relative overflow-hidden pt-40px tablet:pt-80px"
            >
                <div className="absolute left-0 top-0 w-full absolute w-[400%] left-[-150%] right-[-150%] tablet:w-full tablet:left-[0] tablet:right-[0] z-0 top-[90px] flex justify-center">
                    <div className="absolute bg-gradient-radial w-[137%] h-[398px] top-[-144px] left-[-268px]" />
                    <svg
                        width={1440}
                        height={1200}
                        viewBox="0 0 1440 1200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M72,0 Q72,0 72,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M144,0 Q144,0 144,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M216,0 Q216,0 216,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M288,0 Q288,0 288,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M360,0 Q360,0 360,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M432,0 Q432,0 432,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M504,0 Q504,0 504,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M576,0 Q576,0 576,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M648,0 Q648,0 648,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M720,0 Q720,0 720,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M792,0 Q792,0 792,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M864,0 Q864,0 864,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M936,0 Q936,0 936,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M1008,0 Q1008,0 1008,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M1080,0 Q1080,0 1080,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M1152,0 Q1152,0 1152,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M1224,0 Q1224,0 1224,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M1296,0 Q1296,0 1296,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M1368,0 Q1368,0 1368,1200"
                            stroke="#E4E7EB"
                            strokeWidth={1}
                            strokeOpacity={1}
                        />
                        <path
                            d="M0,45 Q0,45 1440,45"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,90 Q0,90 1440,90"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,135 Q0,135 1440,135"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,180 Q0,180 1440,180"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,225 Q0,225 1440,225"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,270 Q0,270 1440,270"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,315 Q0,315 1440,315"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,360 Q0,360 1440,360"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,405 Q0,405 1440,405"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,450 Q0,450 1440,450"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,495 Q0,495 1440,495"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,540 Q0,540 1440,540"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,585 Q0,585 1440,585"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,630 Q0,630 1440,630"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,675 Q0,675 1440,675"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,720 Q0,720 1440,720"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,765 Q0,765 1440,765"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,810 Q0,810 1440,810"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,855 Q0,855 1440,855"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,900 Q0,900 1440,900"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,945 Q0,945 1440,945"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,990 Q0,990 1440,990"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,1035 Q0,1035 1440,1035"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,1080 Q0,1080 1440,1080"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,1125 Q0,1125 1440,1125"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                        <path
                            d="M0,1170 Q0,1170 1440,1170"
                            stroke="#E4E7EB"
                            strokeOpacity={1}
                            strokeWidth={1}
                        />
                    </svg>
                </div>
                <div className="absolute bg-gradient-radial w-full top-[80px] h-full max-h-[100%]" />
                <div className="flex flex-col items-center z-10 tablet:pt-80px relative px-[10px] tablet:px-24px ">
                    <h1 className="font-gilroy font-bold text-40px leading-120 -tracking-0.3px tablet:typography-h1-strong text-typography-light-primary pb-8px tablet:pb-16px">
                        Start Your Lead Machine Today
                    </h1>
                    <h2 className="typography-p4-medium tablet:typography-p2-medium text-typography-light-tertiary text-center">
                        Pick up the plan that fit your needs.
                        <br />
                        Cancel at any time.
                        <br />
                    </h2>
                    <div className="h-40px desktop:h-[60px]" />
                    <section className="flex flex-col gap-[40px] w-full px-24px desktop:px-0 desktop:w-auto items-center pb-24px">
                        <SalesPricingBillingSelector
                            billingPeriod={billingPeriod}
                            onChange={_handleBillingPeriodChange}
                        />

                        <div className="flex flex-col w-full tablet:max-w-[1156px] desktop:w-[1156px] phablet:grid phablet:grid-cols-4 content-center gap-12px desktop:gap-24px">
                            <div
                             
                                className="group transition-transform duration-300 transform-gpu desktop:hover:-translate-y-4px translate-y-0 rounded-16px border-stroke-light-primary border p-24px phablet:p-[18px] tablet:pb-[16px] flex flex-col items-stretch justify-start gap-24px outline-offset-4 text-left bg-white text-typography-light-primary shadow-pricingCard-standard"
                            >
                                <div className="hidden desktop:block desktop:h-[50px]">
                                    <svg
                                        width={40}
                                        height={43}
                                        viewBox="0 0 40 43"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transform-gpu -rotate-[7deg] group-hover:rotate-0 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition duration-300"
                                    >
                                        <mask id="path-1-inside-1_223_59390" fill="white">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M38.138 11.1303L26.1642 2.1998C26.1642 2.1998 26.138 2.18095 26.1213 2.17007L24.4886 0.951159C23.274 0.046224 21.6529 -0.14091 20.2626 0.458524L4.66362 7.18417C3.27334 7.7836 2.29654 9.09084 2.12079 10.5952L1.88627 12.6192C1.8827 12.6388 1.87844 12.6708 1.87844 12.6708L0.15232 27.5081C0.06808 28.2617 0.184156 29.0194 0.477823 29.7005C0.771489 30.3816 1.24275 30.9862 1.84858 31.4423L6.13349 34.6354L6.13221 34.6467L15.3678 41.5388C15.6794 41.7711 16.0157 41.9591 16.3673 42.1016C17.4484 42.5538 18.685 42.5619 19.7848 42.0877L35.262 35.4146C36.3618 34.9404 37.2049 34.0357 37.6182 32.9391C37.756 32.5856 37.8501 32.212 37.8951 31.826L39.2236 20.379L39.2145 20.3722L39.8342 15.0644C39.9185 14.3108 39.8024 13.5531 39.5087 12.872C39.215 12.1909 38.7438 11.5864 38.138 11.1303ZM15.1534 38.6021L3.1629 29.6608L3.15783 29.663C2.56365 29.22 2.25026 28.4931 2.33819 27.762L4.05922 12.9269L4.06349 12.8949C4.06637 12.8876 4.07213 12.8731 4.06994 12.868C4.14601 12.3048 4.56046 12.0658 4.74313 11.987C4.92579 11.9083 5.39423 11.7666 5.86477 12.1183L17.7193 20.9675C18.392 21.4671 18.7492 22.2957 18.6558 23.1256C18.6544 23.1503 18.6494 23.1946 18.6494 23.1946L16.9496 37.8277C16.8823 38.4113 16.4526 38.6568 16.275 38.7334C16.0974 38.8099 15.629 38.9516 15.1534 38.6021Z"
                                            />
                                        </mask>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M38.138 11.1303L26.1642 2.1998C26.1642 2.1998 26.138 2.18095 26.1213 2.17007L24.4886 0.951159C23.274 0.046224 21.6529 -0.14091 20.2626 0.458524L4.66362 7.18417C3.27334 7.7836 2.29654 9.09084 2.12079 10.5952L1.88627 12.6192C1.8827 12.6388 1.87844 12.6708 1.87844 12.6708L0.15232 27.5081C0.06808 28.2617 0.184156 29.0194 0.477823 29.7005C0.771489 30.3816 1.24275 30.9862 1.84858 31.4423L6.13349 34.6354L6.13221 34.6467L15.3678 41.5388C15.6794 41.7711 16.0157 41.9591 16.3673 42.1016C17.4484 42.5538 18.685 42.5619 19.7848 42.0877L35.262 35.4146C36.3618 34.9404 37.2049 34.0357 37.6182 32.9391C37.756 32.5856 37.8501 32.212 37.8951 31.826L39.2236 20.379L39.2145 20.3722L39.8342 15.0644C39.9185 14.3108 39.8024 13.5531 39.5087 12.872C39.215 12.1909 38.7438 11.5864 38.138 11.1303ZM15.1534 38.6021L3.1629 29.6608L3.15783 29.663C2.56365 29.22 2.25026 28.4931 2.33819 27.762L4.05922 12.9269L4.06349 12.8949C4.06637 12.8876 4.07213 12.8731 4.06994 12.868C4.14601 12.3048 4.56046 12.0658 4.74313 11.987C4.92579 11.9083 5.39423 11.7666 5.86477 12.1183L17.7193 20.9675C18.392 21.4671 18.7492 22.2957 18.6558 23.1256C18.6544 23.1503 18.6494 23.1946 18.6494 23.1946L16.9496 37.8277C16.8823 38.4113 16.4526 38.6568 16.275 38.7334C16.0974 38.8099 15.629 38.9516 15.1534 38.6021Z"
                                            className="fill-white group-hover:fill-brand-light-green transition duration-300"
                                        />
                                        <path
                                            d="M26.1642 2.1998L26.4564 1.79399L26.4631 1.799L26.1642 2.1998ZM38.138 11.1303L38.4369 10.7294L38.4387 10.7308L38.138 11.1303ZM26.1213 2.17007L25.8487 2.58925L25.8352 2.58042L25.8222 2.57073L26.1213 2.17007ZM24.4886 0.951159L24.7873 0.550215L24.7877 0.550497L24.4886 0.951159ZM20.2626 0.458524L20.4606 0.917665L20.2626 0.458524ZM4.66362 7.18417L4.46566 6.72503L4.66362 7.18417ZM2.12079 10.5952L1.62412 10.5377L1.62417 10.5372L2.12079 10.5952ZM1.88627 12.6192L2.38295 12.6768L2.38109 12.6928L2.37819 12.7087L1.88627 12.6192ZM1.87844 12.6708L1.38172 12.613L1.38283 12.6047L1.87844 12.6708ZM0.15232 27.5081L-0.344592 27.4525L-0.34433 27.4503L0.15232 27.5081ZM0.477823 29.7005L0.01868 29.8985L0.477823 29.7005ZM1.84858 31.4423L1.5498 31.8432L1.54784 31.8417L1.84858 31.4423ZM6.13349 34.6354L6.43226 34.2345L6.66298 34.4064L6.63025 34.6923L6.13349 34.6354ZM6.13221 34.6467L5.83316 35.0474L5.60275 34.8754L5.63545 34.5898L6.13221 34.6467ZM15.3678 41.5388L15.069 41.9397L15.0688 41.9396L15.3678 41.5388ZM16.3673 42.1016L16.5551 41.6382L16.5603 41.6404L16.3673 42.1016ZM19.7848 42.0877L19.5868 41.6286L19.7848 42.0877ZM35.262 35.4146L35.46 35.8737L35.262 35.4146ZM37.6182 32.9391L37.1503 32.7628L37.1523 32.7576L37.6182 32.9391ZM37.8951 31.826L38.3918 31.8837L38.3917 31.8839L37.8951 31.826ZM39.2236 20.379L39.5233 19.9788L39.7534 20.1511L39.7203 20.4367L39.2236 20.379ZM39.2145 20.3722L38.9149 20.7725L38.6846 20.6L38.7179 20.3142L39.2145 20.3722ZM39.8342 15.0644L40.3311 15.12L40.3308 15.1224L39.8342 15.0644ZM39.5087 12.872L39.0496 13.07L39.5087 12.872ZM3.1629 29.6608L2.96491 29.2017L3.23019 29.0873L3.46179 29.26L3.1629 29.6608ZM15.1534 38.6021L14.8573 39.0051L14.8545 39.003L15.1534 38.6021ZM3.15783 29.663L3.35581 30.1221L3.09054 30.2365L2.85895 30.0638L3.15783 29.663ZM2.33819 27.762L2.83486 27.8196L2.83461 27.8217L2.33819 27.762ZM4.05922 12.9269L3.56248 12.8693L3.56361 12.8608L4.05922 12.9269ZM4.06349 12.8949L3.56788 12.8288L3.57601 12.7678L3.59869 12.7106L4.06349 12.8949ZM4.06994 12.868L3.61075 13.0659L3.55588 12.9385L3.57444 12.8011L4.06994 12.868ZM4.74313 11.987L4.94109 12.4462L4.94109 12.4462L4.74313 11.987ZM5.86477 12.1183L5.56567 12.519L5.56544 12.5188L5.86477 12.1183ZM17.7193 20.9675L17.4212 21.369L17.4202 21.3682L17.7193 20.9675ZM18.6558 23.1256L18.1566 23.0977L18.1573 23.0836L18.1589 23.0696L18.6558 23.1256ZM18.6494 23.1946L19.1463 23.2502L19.1461 23.2523L18.6494 23.1946ZM16.9496 37.8277L16.4529 37.7704L16.4529 37.77L16.9496 37.8277ZM16.275 38.7334L16.473 39.1925L16.473 39.1925L16.275 38.7334ZM26.4631 1.799L38.4369 10.7295L37.839 11.5311L25.8653 2.6006L26.4631 1.799ZM26.3938 1.75089C26.4103 1.76157 26.4272 1.77339 26.4366 1.78001C26.4421 1.78383 26.4468 1.7872 26.4502 1.78964C26.4519 1.79086 26.4533 1.79188 26.4544 1.79263C26.4549 1.793 26.4553 1.79331 26.4557 1.79355C26.4558 1.79367 26.456 1.79377 26.4561 1.79385C26.4562 1.79389 26.4562 1.79393 26.4562 1.79396C26.4563 1.79398 26.4563 1.79399 26.4563 1.79401C26.4563 1.79401 26.4563 1.79402 26.4563 1.79403C26.4563 1.79403 26.4563 1.79403 26.4563 1.79404C26.4564 1.79404 26.4564 1.79404 26.1642 2.1998C25.872 2.60555 25.872 2.60555 25.872 2.60556C25.872 2.60556 25.872 2.60556 25.872 2.60556C25.872 2.60557 25.872 2.60557 25.8721 2.60558C25.8721 2.60559 25.8721 2.60559 25.8721 2.6056C25.8721 2.60561 25.8721 2.60562 25.8721 2.60563C25.8721 2.60564 25.8721 2.60563 25.8721 2.60561C25.872 2.60557 25.8719 2.60546 25.8717 2.6053C25.8712 2.60498 25.8705 2.60444 25.8695 2.60373C25.8674 2.60228 25.8646 2.60026 25.8614 2.59802C25.8582 2.59573 25.855 2.59352 25.8522 2.59163C25.8492 2.58954 25.8481 2.58886 25.8487 2.58925L26.3938 1.75089ZM24.7877 0.550497L26.4204 1.76941L25.8222 2.57073L24.1895 1.35182L24.7877 0.550497ZM20.0647 -0.000617687C21.6184 -0.670519 23.4289 -0.461885 24.7873 0.550215L24.1898 1.3521C23.1191 0.554333 21.6874 0.388699 20.4606 0.917665L20.0647 -0.000617687ZM4.46566 6.72503L20.0647 -0.000617732L20.4606 0.917665L4.86158 7.64331L4.46566 6.72503ZM1.62417 10.5372C1.82073 8.85467 2.91194 7.39493 4.46566 6.72503L4.86158 7.64331C3.63474 8.17228 2.77235 9.32701 2.61742 10.6532L1.62417 10.5372ZM1.3896 12.5617L1.62412 10.5377L2.61747 10.6528L2.38295 12.6768L1.3896 12.5617ZM1.87844 12.6708C1.38283 12.6047 1.38283 12.6047 1.38283 12.6047C1.38283 12.6047 1.38283 12.6047 1.38283 12.6047C1.38283 12.6047 1.38283 12.6046 1.38283 12.6046C1.38284 12.6046 1.38284 12.6046 1.38285 12.6046C1.38285 12.6045 1.38286 12.6044 1.38287 12.6044C1.38289 12.6042 1.38291 12.6041 1.38294 12.6039C1.38299 12.6035 1.38306 12.6029 1.38315 12.6023C1.38332 12.601 1.38356 12.5993 1.38385 12.5972C1.38442 12.593 1.38522 12.5873 1.38618 12.5807C1.38782 12.5693 1.39085 12.5489 1.39436 12.5297L2.37819 12.7087C2.37832 12.708 2.37809 12.7093 2.37752 12.713C2.37699 12.7163 2.37642 12.7201 2.37586 12.724C2.3753 12.7279 2.37481 12.7313 2.37447 12.7338C2.3743 12.735 2.37418 12.7359 2.3741 12.7365C2.37407 12.7368 2.37404 12.7369 2.37403 12.737C2.37403 12.7371 2.37402 12.7371 2.37403 12.7371C2.37403 12.737 2.37403 12.737 2.37404 12.737C2.37404 12.737 2.37404 12.737 2.37404 12.737C2.37404 12.737 2.37404 12.7369 2.37404 12.7369C2.37404 12.7369 2.37405 12.7369 2.37405 12.7369C2.37405 12.7369 2.37405 12.7369 1.87844 12.6708ZM-0.34433 27.4503L1.38179 12.613L2.37509 12.7286L0.648971 27.5659L-0.34433 27.4503ZM0.01868 29.8985C-0.309195 29.138 -0.438531 28.293 -0.344584 27.4525L0.649225 27.5636C0.574691 28.2304 0.677508 28.9008 0.936965 29.5025L0.01868 29.8985ZM1.54784 31.8417C0.87222 31.3331 0.346556 30.6589 0.01868 29.8985L0.936965 29.5025C1.19642 30.1043 1.61328 30.6393 2.14931 31.0428L1.54784 31.8417ZM5.83472 35.0363L1.54981 31.8432L2.14734 31.0413L6.43226 34.2345L5.83472 35.0363ZM5.63545 34.5898L5.63674 34.5785L6.63025 34.6923L6.62896 34.7035L5.63545 34.5898ZM15.0688 41.9396L5.83316 35.0474L6.43125 34.2459L15.6669 41.1381L15.0688 41.9396ZM16.1795 42.565C15.7888 42.4067 15.4152 42.1978 15.069 41.9397L15.6667 41.138C15.9436 41.3444 16.2425 41.5115 16.5551 41.6382L16.1795 42.565ZM19.9828 42.5469C18.7556 43.076 17.3778 43.0663 16.1744 42.5629L16.5603 41.6404C17.519 42.0414 18.6144 42.0479 19.5868 41.6286L19.9828 42.5469ZM35.46 35.8737L19.9828 42.5469L19.5868 41.6286L35.0641 34.9555L35.46 35.8737ZM38.086 33.1155C37.626 34.3361 36.6872 35.3446 35.46 35.8737L35.0641 34.9555C36.0365 34.5362 36.7838 33.7352 37.1503 32.7628L38.086 33.1155ZM38.3917 31.8839C38.3417 32.3128 38.2371 32.7279 38.084 33.1207L37.1523 32.7576C37.2748 32.4433 37.3585 32.1113 37.3985 31.7681L38.3917 31.8839ZM39.7203 20.4367L38.3918 31.8837L37.3984 31.7684L38.7269 20.3214L39.7203 20.4367ZM39.5142 19.972L39.5233 19.9788L38.924 20.7793L38.9149 20.7725L39.5142 19.972ZM40.3308 15.1224L39.7112 20.4302L38.7179 20.3142L39.3376 15.0065L40.3308 15.1224ZM39.9679 12.674C40.2957 13.4345 40.4251 14.2795 40.3311 15.12L39.3373 15.0089C39.4118 14.3421 39.309 13.6717 39.0496 13.07L39.9679 12.674ZM38.4387 10.7308C39.1143 11.2395 39.64 11.9136 39.9679 12.674L39.0496 13.07C38.7901 12.4682 38.3733 11.9333 37.8372 11.5297L38.4387 10.7308ZM3.46179 29.26L15.4523 38.2013L14.8545 39.003L2.864 30.0616L3.46179 29.26ZM2.95984 29.2039L2.96491 29.2017L3.36088 30.1199L3.35581 30.1221L2.95984 29.2039ZM2.83461 27.8217C2.76824 28.3736 3.00494 28.9253 3.45671 29.2622L2.85895 30.0638C2.12235 29.5146 1.73227 28.6126 1.84177 27.7023L2.83461 27.8217ZM4.55589 12.9845L2.83486 27.8196L1.84152 27.7044L3.56255 12.8693L4.55589 12.9845ZM4.5591 12.961L4.55483 12.993L3.56361 12.8608L3.56788 12.8288L4.5591 12.961ZM4.52914 12.6702C4.58534 12.8006 4.56884 12.9161 4.56631 12.9361C4.56126 12.976 4.55255 13.0073 4.54821 13.0221C4.53926 13.0524 4.52858 13.0785 4.52829 13.0792L3.59869 12.7106C3.60128 12.7041 3.59492 12.7192 3.58903 12.7393C3.58621 12.7488 3.57871 12.7751 3.57422 12.8106C3.57191 12.8288 3.56915 12.8589 3.57108 12.8961C3.57287 12.9309 3.5797 12.9938 3.61075 13.0659L4.52914 12.6702ZM4.94109 12.4462C4.8249 12.4963 4.60691 12.6279 4.56544 12.9349L3.57444 12.8011C3.6851 11.9817 4.29602 11.6353 4.54516 11.5279L4.94109 12.4462ZM5.56544 12.5188C5.30632 12.3251 5.05625 12.3965 4.94109 12.4462L4.54516 11.5279C4.79532 11.42 5.48214 11.2081 6.1641 11.7178L5.56544 12.5188ZM17.4202 21.3682L5.56567 12.519L6.16387 11.7176L18.0184 20.5669L17.4202 21.3682ZM18.1589 23.0696C18.2325 22.4158 17.9502 21.7618 17.4212 21.369L18.0174 20.5661C18.8338 21.1724 19.2659 22.1755 19.1526 23.1815L18.1589 23.0696ZM18.6494 23.1946C18.1525 23.1391 18.1525 23.1391 18.1525 23.1391C18.1525 23.1391 18.1525 23.1391 18.1525 23.1391C18.1525 23.1391 18.1525 23.1391 18.1525 23.1391C18.1525 23.1392 18.1525 23.1392 18.1525 23.1392C18.1525 23.1392 18.1525 23.1392 18.1525 23.1392C18.1525 23.1392 18.1525 23.1392 18.1525 23.1391C18.1525 23.1389 18.1526 23.1386 18.1526 23.1382C18.1527 23.1373 18.1529 23.1359 18.1531 23.1341C18.1535 23.1305 18.154 23.1254 18.1546 23.1198C18.1551 23.1141 18.1556 23.1086 18.1561 23.1038C18.1565 23.0984 18.1566 23.0966 18.1566 23.0977L19.155 23.1535C19.1536 23.1777 19.1511 23.2044 19.1496 23.2189C19.1488 23.2275 19.148 23.2351 19.1474 23.2405C19.1471 23.2433 19.1469 23.2455 19.1467 23.2472C19.1466 23.248 19.1465 23.2487 19.1465 23.2492C19.1464 23.2494 19.1464 23.2496 19.1464 23.2498C19.1464 23.2499 19.1464 23.25 19.1464 23.25C19.1464 23.25 19.1464 23.2501 19.1464 23.2501C19.1463 23.2501 19.1463 23.2501 19.1463 23.2501C19.1463 23.2501 19.1463 23.2502 19.1463 23.2502C19.1463 23.2502 19.1463 23.2502 18.6494 23.1946ZM16.4529 37.77L18.1528 23.1369L19.1461 23.2523L17.4463 37.8854L16.4529 37.77ZM16.0771 38.2742C16.1883 38.2263 16.4159 38.091 16.4529 37.7704L17.4463 37.885C17.3487 38.7316 16.7169 39.0873 16.473 39.1925L16.0771 38.2742ZM15.4495 38.1992C15.7158 38.3949 15.9692 38.3207 16.0771 38.2742L16.473 39.1925C16.2257 39.2992 15.5423 39.5084 14.8573 39.0051L15.4495 38.1992Z"
                                            className="fill-greyscale-light-09 group-hover:fill-brand-light-green transition duration-300"
                                            mask="url(#path-1-inside-1_223_59390)"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-12px pb-4px">
                                    <h3 className="typography-p1-strong">Starter</h3>
                                    <div>
                                    <div className="flex flex-row items-start gap-8px">
                                            <div className="typography-h3-strong">
                                                <div className="relative inline-block">
                                                    {billingPeriod === 'monthly' ? (
                                                        <div className="relative">$49</div>
                                                    ) : (
                                                        <div className="relative">$39</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start pt-[6px]">
                                                <p className={`text-[11px] font-medium tracking-165 flex items-center text-center -tracking-0.2px rounded-6px px-[6px] py-[2px] text-typography-light-quaternary bg-greyscale-light-04 translate-x-8px transition duration-200 delay-200 ${annualDiscountActive ? annualDiscountActiveClass : annualDiscountInactiveClass}`}>
                                                    -20%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-[11px] leading-120 font-medium text-typography-light-tertiary">
                                            per user/month, billed{" "}
                                            <div className="relative inline-block">
                                                {billingPeriod === 'monthly' ? (
                                                    <div className="relative"> monthly</div>
                                                ) : (
                                                    <div className="relative"> annually</div>
                                                )}
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="text-typography-light-secondary">
                                    <p className="typography-p6-strong mb-12px">For small teams</p>
                                    <ul className="flex flex-col gap-12px typography-p6-medium">
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            2000 enrichment credits
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            4 running campaigns
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            10 campaign actions / day
                                        </li>
                                       
                                    </ul>
                                </div>
                                <button
                                    className="rounded-12px  inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus mt-auto"
                                >
                                    <a className=" z-1 relative " href={gContext?.isloggedin ? `https://useartemis.co/register/next?plan=841099&useremail=${gContext?.userinfo?.email}` : "https://useartemis.co/register?plan=841099"}  >Start for free</a>
                                </button>
                            </div>
                            <div
                               
                                className="group transition-transform duration-300 transform-gpu desktop:hover:-translate-y-4px translate-y-0 rounded-16px border-stroke-light-primary border p-24px phablet:p-[18px] tablet:pb-[16px] flex flex-col items-stretch justify-start gap-24px outline-offset-4 text-left bg-white text-typography-light-primary shadow-pricingCard-standard"
                            >
                                <div className="hidden desktop:block desktop:h-[50px]">
                                    <svg
                                        width={50}
                                        height={50}
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="rotate-6 group-hover:rotate-0 origin-top-left transition duration-300"
                                    >
                                        <g clipPath="url(#clip0_223_59411)">
                                            <mask id="path-1-inside-1_223_59411" fill="white">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.01407 10.8638L19.1182 2.11087C19.1182 2.11087 19.1447 2.09241 19.1616 2.08178L20.8121 0.887079C22.0399 0.0001535 23.6635 -0.163052 25.0448 0.45682L40.543 7.41178C41.9243 8.03165 42.8817 9.35316 43.0352 10.86L43.2399 12.8872C43.2431 12.9069 43.2469 12.9389 43.2469 12.9389L44.754 27.8C44.8272 28.5548 44.6999 29.3107 44.3962 29.9874C44.0926 30.6641 43.6124 31.2616 42.9999 31.7088L38.6684 34.8383L38.6695 34.8496L29.3333 41.6049C29.0183 41.8325 28.6793 42.0155 28.3256 42.1528C27.238 42.5891 26.0014 42.5789 24.9087 42.0886L9.53155 35.1879C8.43887 34.6975 7.60926 33.7804 7.21216 32.6779C7.07961 32.3224 6.99098 31.9475 6.9517 31.5609L5.79214 20.0955L5.8013 20.0889L5.25998 14.7725C5.18686 14.0177 5.3141 13.2618 5.61778 12.5851C5.92146 11.9084 6.40158 11.3109 7.01407 10.8638ZM29.5912 38.6716L41.7123 29.9081L41.7173 29.9104C42.318 29.4761 42.642 28.754 42.5649 28.0217L41.0628 13.1628L41.059 13.1308C41.0563 13.1235 41.0507 13.1088 41.053 13.1038C40.9852 12.5395 40.5744 12.2944 40.3929 12.213C40.2114 12.1315 39.7451 11.9829 39.2694 12.3276L27.2857 21.0011C26.6057 21.4907 26.2363 22.3139 26.3175 23.1451C26.3185 23.1698 26.3228 23.2142 26.3228 23.2142L27.8066 37.8708C27.8653 38.4553 28.2913 38.7071 28.4678 38.7863C28.6442 38.8655 29.1105 39.0141 29.5912 38.6716Z"
                                                />
                                            </mask>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.01407 10.8638L19.1182 2.11087C19.1182 2.11087 19.1447 2.09241 19.1616 2.08178L20.8121 0.887079C22.0399 0.0001535 23.6635 -0.163052 25.0448 0.45682L40.543 7.41178C41.9243 8.03165 42.8817 9.35316 43.0352 10.86L43.2399 12.8872C43.2431 12.9069 43.2469 12.9389 43.2469 12.9389L44.754 27.8C44.8272 28.5548 44.6999 29.3107 44.3962 29.9874C44.0926 30.6641 43.6124 31.2616 42.9999 31.7088L38.6684 34.8383L38.6695 34.8496L29.3333 41.6049C29.0183 41.8325 28.6793 42.0155 28.3256 42.1528C27.238 42.5891 26.0014 42.5789 24.9087 42.0886L9.53155 35.1879C8.43887 34.6975 7.60926 33.7804 7.21216 32.6779C7.07961 32.3224 6.99098 31.9475 6.9517 31.5609L5.79214 20.0955L5.8013 20.0889L5.25998 14.7725C5.18686 14.0177 5.3141 13.2618 5.61778 12.5851C5.92146 11.9084 6.40158 11.3109 7.01407 10.8638ZM29.5912 38.6716L41.7123 29.9081L41.7173 29.9104C42.318 29.4761 42.642 28.754 42.5649 28.0217L41.0628 13.1628L41.059 13.1308C41.0563 13.1235 41.0507 13.1088 41.053 13.1038C40.9852 12.5395 40.5744 12.2944 40.3929 12.213C40.2114 12.1315 39.7451 11.9829 39.2694 12.3276L27.2857 21.0011C26.6057 21.4907 26.2363 22.3139 26.3175 23.1451C26.3185 23.1698 26.3228 23.2142 26.3228 23.2142L27.8066 37.8708C27.8653 38.4553 28.2913 38.7071 28.4678 38.7863C28.6442 38.8655 29.1105 39.0141 29.5912 38.6716Z"
                                                className="fill-white group-hover:fill-brand-light-yellow transition duration-300"
                                            />
                                            <path
                                                d="M19.1182 2.11087L18.8321 1.70079L18.8253 1.7057L19.1182 2.11087ZM7.01407 10.8638L6.72108 10.4586L6.71926 10.4599L7.01407 10.8638ZM19.1616 2.08178L19.4279 2.50494L19.4416 2.49631L19.4548 2.48681L19.1616 2.08178ZM20.8121 0.887079L20.5193 0.481772L20.5189 0.482049L20.8121 0.887079ZM25.0448 0.45682L24.8401 0.912992L25.0448 0.45682ZM40.543 7.41178L40.3382 7.86796L40.543 7.41178ZM43.0352 10.86L43.5327 10.8097L43.5326 10.8093L43.0352 10.86ZM43.2399 12.8872L42.7424 12.9374L42.744 12.9535L42.7467 12.9695L43.2399 12.8872ZM43.2469 12.9389L43.7444 12.8884L43.7435 12.8801L43.2469 12.9389ZM44.754 27.8L45.2517 27.7518L45.2515 27.7496L44.754 27.8ZM44.3962 29.9874L43.9401 29.7827L44.3962 29.9874ZM42.9999 31.7088L43.2928 32.114L43.2948 32.1126L42.9999 31.7088ZM38.6684 34.8383L38.3756 34.4331L38.1423 34.6016L38.1709 34.8881L38.6684 34.8383ZM38.6695 34.8496L38.9626 35.2547L39.1956 35.0861L39.167 34.7999L38.6695 34.8496ZM29.3333 41.6049L29.6262 42.0101L29.6264 42.0099L29.3333 41.6049ZM28.3256 42.1528L28.1446 41.6867L28.1394 41.6888L28.3256 42.1528ZM24.9087 42.0886L24.704 42.5447L24.9087 42.0886ZM9.53155 35.1879L9.32684 35.6441L9.32684 35.6441L9.53155 35.1879ZM7.21216 32.6779L7.68261 32.5085L7.68066 32.5033L7.21216 32.6779ZM6.9517 31.5609L6.45423 31.6112L6.45426 31.6114L6.9517 31.5609ZM5.79214 20.0955L5.49846 19.6908L5.26574 19.8597L5.29467 20.1458L5.79214 20.0955ZM5.8013 20.0889L6.09498 20.4935L6.32788 20.3245L6.29873 20.0382L5.8013 20.0889ZM5.25998 14.7725L4.7623 14.8207L4.76255 14.8232L5.25998 14.7725ZM5.61778 12.5851L5.16161 12.3804L5.16161 12.3804L5.61778 12.5851ZM41.7123 29.9081L41.917 29.4519L41.6534 29.3337L41.4193 29.5029L41.7123 29.9081ZM29.5912 38.6716L29.8813 39.0789L29.8842 39.0768L29.5912 38.6716ZM41.7173 29.9104L41.5126 30.3665L41.7762 30.4848L42.0103 30.3156L41.7173 29.9104ZM42.5649 28.0217L42.0674 28.0719L42.0677 28.074L42.5649 28.0217ZM41.0628 13.1628L41.5604 13.1125L41.5594 13.104L41.0628 13.1628ZM41.059 13.1308L41.5556 13.072L41.5483 13.0109L41.5265 12.9534L41.059 13.1308ZM41.053 13.1038L41.5091 13.3086L41.566 13.182L41.5494 13.0442L41.053 13.1038ZM40.3929 12.213L40.5976 11.7568L40.5976 11.7568L40.3929 12.213ZM39.2694 12.3276L39.5626 12.7327L39.5628 12.7325L39.2694 12.3276ZM27.2857 21.0011L27.5778 21.4069L27.5788 21.4062L27.2857 21.0011ZM26.3175 23.1451L26.817 23.1246L26.8165 23.1105L26.8151 23.0965L26.3175 23.1451ZM26.3228 23.2142L25.8251 23.2624L25.8253 23.2646L26.3228 23.2142ZM27.8066 37.8708L28.3041 37.8208L28.3041 37.8204L27.8066 37.8708ZM18.8253 1.7057L6.72108 10.4586L7.30705 11.2689L19.4112 2.51603L18.8253 1.7057ZM18.8952 1.65862C18.8787 1.66906 18.8616 1.68063 18.8521 1.6871C18.8466 1.69085 18.8418 1.69415 18.8383 1.69653C18.8366 1.69773 18.8351 1.69872 18.8341 1.69946C18.8336 1.69982 18.8331 1.70013 18.8328 1.70036C18.8326 1.70048 18.8325 1.70058 18.8324 1.70066C18.8323 1.7007 18.8323 1.70073 18.8322 1.70076C18.8322 1.70078 18.8322 1.70079 18.8321 1.70081C18.8321 1.70081 18.8321 1.70082 18.8321 1.70083C18.8321 1.70083 18.8321 1.70083 18.8321 1.70084C18.8321 1.70084 18.8321 1.70084 19.1182 2.11087C19.4044 2.52089 19.4044 2.5209 19.4044 2.5209C19.4044 2.5209 19.4044 2.5209 19.4044 2.52091C19.4044 2.52091 19.4044 2.52092 19.4043 2.52092C19.4043 2.52093 19.4043 2.52094 19.4043 2.52094C19.4043 2.52096 19.4043 2.52097 19.4043 2.52097C19.4043 2.52098 19.4043 2.52098 19.4043 2.52096C19.4044 2.52091 19.4045 2.52081 19.4047 2.52065C19.4052 2.52033 19.406 2.5198 19.407 2.51911C19.409 2.51769 19.4119 2.51571 19.4151 2.51352C19.4184 2.51128 19.4216 2.50912 19.4244 2.50727C19.4275 2.50522 19.4285 2.50455 19.4279 2.50494L18.8952 1.65862ZM20.5189 0.482049L18.8684 1.67675L19.4548 2.48681L21.1053 1.29211L20.5189 0.482049ZM25.2496 0.000647845C23.7059 -0.692094 21.8925 -0.510185 20.5193 0.481773L21.1049 1.29238C22.1873 0.510492 23.6212 0.36599 24.8401 0.912992L25.2496 0.000647845ZM40.7477 6.95561L25.2496 0.000647801L24.8401 0.912992L40.3382 7.86796L40.7477 6.95561ZM43.5326 10.8093C43.3609 9.12403 42.2913 7.64835 40.7477 6.95561L40.3382 7.86796C41.5572 8.41496 42.4024 9.58229 42.5378 10.9106L43.5326 10.8093ZM43.7373 12.837L43.5327 10.8097L42.5377 10.9102L42.7424 12.9374L43.7373 12.837ZM43.2469 12.9389C43.7435 12.8801 43.7435 12.8801 43.7435 12.8801C43.7435 12.8801 43.7435 12.8801 43.7435 12.8801C43.7435 12.8801 43.7435 12.88 43.7435 12.88C43.7435 12.88 43.7434 12.88 43.7434 12.88C43.7434 12.8799 43.7434 12.8798 43.7434 12.8798C43.7434 12.8796 43.7434 12.8795 43.7434 12.8793C43.7433 12.8789 43.7432 12.8783 43.7432 12.8777C43.743 12.8764 43.7428 12.8747 43.7425 12.8726C43.742 12.8684 43.7413 12.8627 43.7405 12.8561C43.739 12.8447 43.7363 12.8242 43.733 12.8049L42.7467 12.9695C42.7466 12.9688 42.7468 12.97 42.7473 12.9737C42.7478 12.977 42.7483 12.9808 42.7488 12.9848C42.7493 12.9886 42.7497 12.9921 42.75 12.9946C42.7502 12.9958 42.7503 12.9967 42.7503 12.9973C42.7504 12.9975 42.7504 12.9977 42.7504 12.9978C42.7504 12.9978 42.7504 12.9978 42.7504 12.9978C42.7504 12.9978 42.7504 12.9978 42.7504 12.9978C42.7504 12.9978 42.7504 12.9978 42.7504 12.9977C42.7504 12.9977 42.7504 12.9977 42.7504 12.9977C42.7504 12.9977 42.7504 12.9977 42.7504 12.9977C42.7504 12.9977 42.7504 12.9977 43.2469 12.9389ZM45.2515 27.7496L43.7444 12.8884L42.7495 12.9893L44.2566 27.8505L45.2515 27.7496ZM44.8524 30.1921C45.1915 29.4366 45.3333 28.5936 45.2517 27.7518L44.2564 27.8482C44.3211 28.5161 44.2084 29.1848 43.9401 29.7827L44.8524 30.1921ZM43.2948 32.1126C43.9778 31.614 44.5134 30.9476 44.8524 30.1921L43.9401 29.7827C43.6718 30.3806 43.2471 30.9093 42.7051 31.3049L43.2948 32.1126ZM38.9612 35.2436L43.2928 32.114L42.7071 31.3035L38.3756 34.4331L38.9612 35.2436ZM39.167 34.7999L39.1659 34.7886L38.1709 34.8881L38.172 34.8993L39.167 34.7999ZM29.6264 42.0099L38.9626 35.2547L38.3764 34.4445L29.0402 41.1998L29.6264 42.0099ZM28.5065 42.6189C28.8995 42.4664 29.2762 42.263 29.6262 42.0101L29.0404 41.1996C28.7604 41.402 28.4591 41.5647 28.1446 41.6867L28.5065 42.6189ZM24.704 42.5447C25.9232 43.0919 27.301 43.1025 28.5117 42.6169L28.1394 41.6888C27.1749 42.0756 26.0795 42.0659 25.1134 41.6324L24.704 42.5447ZM9.32684 35.6441L24.704 42.5447L25.1134 41.6324L9.73626 34.7317L9.32684 35.6441ZM6.74175 32.8474C7.18379 34.0747 8.10759 35.0969 9.32684 35.6441L9.73626 34.7317C8.77016 34.2982 8.03473 33.4862 7.68258 32.5085L6.74175 32.8474ZM6.45426 31.6114C6.49791 32.041 6.59639 32.4576 6.74367 32.8526L7.68066 32.5033C7.56283 32.1872 7.48406 31.854 7.44913 31.5103L6.45426 31.6114ZM5.29467 20.1458L6.45423 31.6112L7.44916 31.5105L6.2896 20.0452L5.29467 20.1458ZM5.50762 19.6842L5.49846 19.6908L6.08581 20.5002L6.09498 20.4935L5.50762 19.6842ZM4.76255 14.8232L5.30387 20.1395L6.29873 20.0382L5.7574 14.7219L4.76255 14.8232ZM5.16161 12.3804C4.82255 13.1359 4.68076 13.979 4.76231 14.8207L5.75765 14.7243C5.69295 14.0565 5.80564 13.3877 6.07395 12.7898L5.16161 12.3804ZM6.71926 10.4599C6.03621 10.9586 5.50066 11.6249 5.16161 12.3804L6.07395 12.7898C6.34225 12.1919 6.76695 11.6632 7.30887 11.2676L6.71926 10.4599ZM41.4193 29.5029L29.2983 38.2664L29.8842 39.0768L42.0052 30.3133L41.4193 29.5029ZM41.922 29.4542L41.917 29.4519L41.5076 30.3643L41.5126 30.3665L41.922 29.4542ZM42.0677 28.074C42.1259 28.6268 41.8811 29.175 41.4244 29.5052L42.0103 30.3156C42.7549 29.7773 43.1582 28.8812 43.0621 27.9693L42.0677 28.074ZM40.5654 13.2131L42.0674 28.0719L43.0624 27.9714L41.5603 13.1125L40.5654 13.2131ZM40.5625 13.1896L40.5663 13.2216L41.5594 13.104L41.5556 13.072L40.5625 13.1896ZM40.5969 12.8989C40.5386 13.0286 40.5534 13.1444 40.5557 13.1645C40.5601 13.2045 40.5684 13.236 40.5725 13.2508C40.581 13.2813 40.5913 13.3075 40.5916 13.3082L41.5265 12.9534C41.524 12.9467 41.5301 12.962 41.5357 12.9821C41.5384 12.9917 41.5455 13.0181 41.5495 13.0537C41.5516 13.072 41.5539 13.1021 41.5514 13.1394C41.5491 13.1741 41.5413 13.237 41.5091 13.3086L40.5969 12.8989ZM40.1882 12.6691C40.3036 12.7209 40.5196 12.8557 40.5566 13.1634L41.5494 13.0442C41.4509 12.2232 40.8451 11.8679 40.5976 11.7568L40.1882 12.6691ZM39.5628 12.7325C39.8248 12.5427 40.0737 12.6178 40.1882 12.6691L40.5976 11.7568C40.349 11.6453 39.6654 11.4232 38.976 11.9228L39.5628 12.7325ZM27.5788 21.4062L39.5626 12.7327L38.9763 11.9226L26.9925 20.5961L27.5788 21.4062ZM26.8151 23.0965C26.7511 22.4416 27.0431 21.7919 27.5778 21.4069L26.9935 20.5953C26.1683 21.1896 25.7214 22.1862 25.8198 23.1937L26.8151 23.0965ZM26.3228 23.2142C26.8205 23.166 26.8205 23.166 26.8205 23.1661C26.8205 23.1661 26.8205 23.1661 26.8205 23.1661C26.8205 23.1661 26.8205 23.1661 26.8205 23.1661C26.8205 23.1661 26.8205 23.1661 26.8205 23.1661C26.8205 23.1661 26.8205 23.1662 26.8205 23.1662C26.8205 23.1662 26.8205 23.1661 26.8205 23.166C26.8204 23.1659 26.8204 23.1656 26.8204 23.1651C26.8203 23.1643 26.8202 23.1629 26.82 23.1611C26.8197 23.1574 26.8192 23.1523 26.8187 23.1467C26.8182 23.1411 26.8178 23.1355 26.8175 23.1307C26.8171 23.1253 26.817 23.1236 26.817 23.1246L25.8179 23.1657C25.8189 23.1898 25.8211 23.2166 25.8223 23.2312C25.823 23.2398 25.8237 23.2473 25.8242 23.2528C25.8245 23.2555 25.8247 23.2578 25.8248 23.2594C25.8249 23.2603 25.825 23.2609 25.825 23.2614C25.825 23.2617 25.8251 23.2619 25.8251 23.2621C25.8251 23.2622 25.8251 23.2622 25.8251 23.2623C25.8251 23.2623 25.8251 23.2624 25.8251 23.2624C25.8251 23.2624 25.8251 23.2624 25.8251 23.2624C25.8251 23.2624 25.8251 23.2624 25.8251 23.2624C25.8251 23.2624 25.8251 23.2624 26.3228 23.2142ZM28.3041 37.8204L26.8202 23.1639L25.8253 23.2646L27.3092 37.9211L28.3041 37.8204ZM28.6725 38.3301C28.562 38.2805 28.3364 38.1419 28.3041 37.8208L27.3091 37.9207C27.3943 38.7687 28.0207 39.1337 28.2631 39.2425L28.6725 38.3301ZM29.3011 38.2644C29.032 38.4561 28.7796 38.3782 28.6725 38.3301L28.2631 39.2425C28.5088 39.3528 29.189 39.572 29.8813 39.0789L29.3011 38.2644Z"
                                                className="fill-greyscale-light-09 group-hover:fill-brand-light-yellow transition duration-300"
                                                mask="url(#path-1-inside-1_223_59411)"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_223_59411">
                                                <rect width={50} height={50} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-12px pb-4px">
                                    <h3 className="typography-p1-strong">Plus</h3>
                                    <div>
                                        <div className="flex flex-row items-start gap-8px">
                                            <div className="typography-h3-strong">
                                                <div className="relative inline-block">
                                                    {billingPeriod === 'monthly' ? (
                                                        <div className="relative">$99</div>
                                                    ) : (
                                                        <div className="relative">$79</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start pt-[6px]">
                                                <p className={`text-[11px] font-medium tracking-165 flex items-center text-center -tracking-0.2px rounded-6px px-[6px] py-[2px] text-typography-light-quaternary bg-greyscale-light-04 translate-x-8px transition duration-200 delay-200 ${annualDiscountActive ? annualDiscountActiveClass : annualDiscountInactiveClass}`}>
                                                    -20%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-[11px] leading-120 font-medium text-typography-light-tertiary">
                                            per user/month, billed{" "}
                                            <div className="relative inline-block">
                                                {billingPeriod === 'monthly' ? (
                                                    <div className="relative"> monthly</div>
                                                ) : (
                                                    <div className="relative"> annually</div>
                                                )}
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="text-typography-light-secondary">
                                    <p className="typography-p6-strong mb-12px">For growing teams</p>
                                    <ul className="flex flex-col gap-12px typography-p6-medium">
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            7000 enrichment credits
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                           6 running campaigns
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            30 campaign actions / day
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                           AI for LinkedIn Invites
                                        </li>
                                      
                                    </ul>
                                </div>
                                <button
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus mt-auto"
                                >
                                    <a className=" z-1 relative " href={gContext?.isloggedin ? `https://useartemis.co/register/next?plan=841100&useremail=${gContext?.userinfo?.email}` :  "https://useartemis.co/register?plan=841100"}  >Start for free</a>
                                   
                                </button>
                            </div>
                            <div
                               
                                className="group transition-transform duration-300 transform-gpu desktop:hover:-translate-y-4px translate-y-0 rounded-16px border-stroke-light-primary border p-24px phablet:p-[18px] tablet:pb-[16px] flex flex-col items-stretch justify-start gap-24px outline-offset-4 text-left bg-[rgba(15,107,233,1)] text-white shadow-pricingCard-highlight"
                            >
                                <div className="hidden desktop:block desktop:h-[50px]">
                                    <svg
                                        width={50}
                                        height={50}
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="rotate-0 group-hover:rotate-6 origin-bottom-right transition duration-300"
                                    >
                                        <g clipPath="url(#clip0_395_22044)">
                                            <mask id="path-1-inside-1_395_22044" fill="white">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M20.6497 45.7799L7.97543 38.4743C7.97543 38.4743 7.94833 38.4581 7.93206 38.4472L6.20276 37.4515C4.91798 36.7101 4.1211 35.3248 4.1211 33.842L4.1211 17.2055C4.1211 15.7227 4.91798 14.3373 6.20276 13.596L7.93206 12.6003C7.94833 12.5894 7.97543 12.5732 7.97543 12.5732L20.6497 5.26763C21.2948 4.89965 22.0213 4.71025 22.7477 4.71025C23.4741 4.71025 24.2005 4.89965 24.8456 5.26763L29.3788 7.88304L29.3884 7.87752L39.1679 13.5109C39.4976 13.7011 39.7971 13.9306 40.0616 14.1916C40.8875 14.9885 41.3742 16.0975 41.3742 17.2704L41.3742 33.7771C41.3742 34.95 40.8875 36.059 40.0616 36.8559C39.7971 37.1169 39.4976 37.3464 39.1679 37.5366L29.3884 43.17L29.3788 43.1644L24.8456 45.7799C24.2005 46.1478 23.4741 46.3372 22.7477 46.3372C22.0213 46.3372 21.2948 46.1478 20.6497 45.7799ZM36.4441 14.4565L23.7535 7.14007L23.7535 7.13466C23.1247 6.77209 22.3495 6.77209 21.726 7.13466L9.05173 14.4348L9.02462 14.451C9.0192 14.4564 9.00836 14.4673 9.00294 14.4673C8.52589 14.7541 8.47168 15.2195 8.47168 15.4143C8.47168 15.6091 8.52589 16.0853 9.02462 16.3721L21.5797 23.6019C22.2898 24.0132 23.1734 24.0132 23.8836 23.6073C23.9053 23.5965 23.9432 23.5749 23.9432 23.5749L36.4441 16.3721C36.9428 16.0853 36.997 15.6037 36.997 15.4143C36.997 15.2249 36.9428 14.7487 36.4441 14.4565Z"
                                                />
                                            </mask>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M20.6497 45.7799L7.97543 38.4743C7.97543 38.4743 7.94833 38.4581 7.93206 38.4472L6.20276 37.4515C4.91798 36.7101 4.1211 35.3248 4.1211 33.842L4.1211 17.2055C4.1211 15.7227 4.91798 14.3373 6.20276 13.596L7.93206 12.6003C7.94833 12.5894 7.97543 12.5732 7.97543 12.5732L20.6497 5.26763C21.2948 4.89965 22.0213 4.71025 22.7477 4.71025C23.4741 4.71025 24.2005 4.89965 24.8456 5.26763L29.3788 7.88304L29.3884 7.87752L39.1679 13.5109C39.4976 13.7011 39.7971 13.9306 40.0616 14.1916C40.8875 14.9885 41.3742 16.0975 41.3742 17.2704L41.3742 33.7771C41.3742 34.95 40.8875 36.059 40.0616 36.8559C39.7971 37.1169 39.4976 37.3464 39.1679 37.5366L29.3884 43.17L29.3788 43.1644L24.8456 45.7799C24.2005 46.1478 23.4741 46.3372 22.7477 46.3372C22.0213 46.3372 21.2948 46.1478 20.6497 45.7799ZM36.4441 14.4565L23.7535 7.14007L23.7535 7.13466C23.1247 6.77209 22.3495 6.77209 21.726 7.13466L9.05173 14.4348L9.02462 14.451C9.0192 14.4564 9.00836 14.4673 9.00294 14.4673C8.52589 14.7541 8.47168 15.2195 8.47168 15.4143C8.47168 15.6091 8.52589 16.0853 9.02462 16.3721L21.5797 23.6019C22.2898 24.0132 23.1734 24.0132 23.8836 23.6073C23.9053 23.5965 23.9432 23.5749 23.9432 23.5749L36.4441 16.3721C36.9428 16.0853 36.997 15.6037 36.997 15.4143C36.997 15.2249 36.9428 14.7487 36.4441 14.4565Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M9.01085 36.8248C8.97194 36.8248 8.94204 36.8156 8.92613 36.8097C8.90903 36.8034 8.89622 36.7964 8.88875 36.792C8.87423 36.7834 8.86465 36.7755 8.86181 36.7731C8.85578 36.7681 8.85207 36.7642 8.8559 36.768L9.20915 36.4142C9.20756 36.4126 9.19572 36.4005 9.18156 36.3887C9.17466 36.383 9.161 36.372 9.14276 36.3613C9.13315 36.3556 9.08255 36.3248 9.01084 36.3248L9.01085 36.8248ZM7.97543 38.4743L7.71846 38.9033L7.72574 38.9075L7.97543 38.4743ZM20.6497 45.7799L20.4 46.213L20.402 46.2142L20.6497 45.7799ZM7.93206 38.4472L8.20909 38.031L8.1956 38.022L8.18156 38.0139L7.93206 38.4472ZM6.20276 37.4515L5.95286 37.8846L5.95327 37.8848L6.20276 37.4515ZM4.1211 33.842L4.6211 33.842L4.6211 33.842L4.1211 33.842ZM4.1211 17.2055L4.6211 17.2055L4.6211 17.2055L4.1211 17.2055ZM6.20276 13.596L5.95327 13.1627L5.95286 13.1629L6.20276 13.596ZM7.93206 12.6003L8.18156 13.0336L8.19558 13.0255L8.20904 13.0165L7.93206 12.6003ZM7.97543 12.5732L7.7257 12.1399L7.71845 12.1443L7.97543 12.5732ZM20.6497 5.26763L20.402 4.83332L20.4 4.83444L20.6497 5.26763ZM22.7477 4.71025L22.7477 4.21025L22.7477 4.21025L22.7477 4.71025ZM24.8456 5.26763L25.0955 4.83454L25.0933 4.83333L24.8456 5.26763ZM29.3788 7.88304L29.1289 8.31613L29.3782 8.45994L29.6277 8.31665L29.3788 7.88304ZM29.3884 7.87752L29.638 7.44426L29.3888 7.30073L29.1394 7.44391L29.3884 7.87752ZM39.1679 13.5109L39.4177 13.0778L39.4175 13.0777L39.1679 13.5109ZM40.0616 14.1916L39.7104 14.5475L39.7144 14.5514L40.0616 14.1916ZM41.3742 17.2704L40.8742 17.2704L41.3742 17.2704ZM41.3742 33.7771L41.8742 33.7771L41.8742 33.7771L41.3742 33.7771ZM40.0616 36.8559L39.7144 36.4961L39.7104 36.5L40.0616 36.8559ZM39.1679 37.5366L39.4175 37.9698L39.4177 37.9697L39.1679 37.5366ZM29.3884 43.17L29.1395 43.6036L29.3888 43.7467L29.638 43.6032L29.3884 43.17ZM29.3788 43.1644L29.6277 42.7308L29.3782 42.5876L29.1289 42.7314L29.3788 43.1644ZM24.8456 45.7799L25.0933 46.2142L25.0955 46.2129L24.8456 45.7799ZM22.7477 46.3372L22.7477 45.8372L22.7477 45.8372L22.7477 46.3372ZM23.7535 7.14007L23.2535 7.14006L23.2535 7.42895L23.5038 7.57324L23.7535 7.14007ZM36.4441 14.4565L36.6969 14.025L36.6938 14.0233L36.4441 14.4565ZM23.7535 7.13466L24.2535 7.13466L24.2535 6.84579L24.0032 6.7015L23.7535 7.13466ZM21.726 7.13466L21.9756 7.56793L21.9774 7.56688L21.726 7.13466ZM9.05173 14.4348L8.80213 14.0015L8.7948 14.0059L9.05173 14.4348ZM9.02462 14.451L8.7677 14.0221L8.71492 14.0537L8.67138 14.0972L9.02462 14.451ZM9.00294 14.4673L9.00311 13.9673L8.86429 13.9672L8.7453 14.0388L9.00294 14.4673ZM8.47168 15.4143L7.97168 15.4143L7.97168 15.4143L8.47168 15.4143ZM9.02462 16.3721L9.27414 15.9388L9.27388 15.9387L9.02462 16.3721ZM21.5797 23.6019L21.8303 23.1693L21.8292 23.1686L21.5797 23.6019ZM23.8836 23.6073L23.6603 23.16L23.6477 23.1663L23.6355 23.1732L23.8836 23.6073ZM23.9432 23.5749L24.191 24.0092L24.1928 24.0081L23.9432 23.5749ZM36.4441 16.3721L36.1948 15.9387L36.1944 15.9389L36.4441 16.3721ZM36.997 15.4143L37.497 15.4143L37.497 15.4143L36.997 15.4143ZM7.72574 38.9075L20.4 46.213L20.8994 45.3467L8.22512 38.0411L7.72574 38.9075ZM7.65504 38.8635C7.67118 38.8742 7.68851 38.8849 7.69812 38.8908C7.7037 38.8943 7.70859 38.8972 7.71211 38.8994C7.71389 38.9005 7.71536 38.9013 7.71644 38.902C7.71699 38.9023 7.71744 38.9026 7.71778 38.9028C7.71795 38.9029 7.7181 38.903 7.71822 38.9031C7.71828 38.9031 7.71834 38.9031 7.71838 38.9032C7.7184 38.9032 7.71843 38.9032 7.71845 38.9032C7.71846 38.9032 7.71847 38.9032 7.71848 38.9032C7.71848 38.9032 7.71849 38.9032 7.71849 38.9032C7.71849 38.9032 7.7185 38.9032 7.97543 38.4743C8.23236 38.0454 8.23236 38.0454 8.23237 38.0454C8.23237 38.0454 8.23238 38.0454 8.23238 38.0454C8.23239 38.0454 8.2324 38.0454 8.2324 38.0454C8.23241 38.0454 8.23243 38.0454 8.23244 38.0454C8.23246 38.0454 8.23247 38.0454 8.23248 38.0454C8.2325 38.0454 8.23249 38.0454 8.23246 38.0454C8.2324 38.0454 8.23225 38.0453 8.23202 38.0451C8.23156 38.0449 8.23079 38.0444 8.22977 38.0438C8.2277 38.0425 8.2248 38.0408 8.22157 38.0388C8.21828 38.0368 8.2151 38.0348 8.21237 38.0331C8.20934 38.0312 8.2084 38.0305 8.20909 38.031L7.65504 38.8635ZM5.95327 37.8848L7.68257 38.8805L8.18156 38.0139L6.45226 37.0182L5.95327 37.8848ZM3.6211 33.842C3.6211 35.5028 4.51273 37.0536 5.95286 37.8846L6.45266 37.0184C5.32324 36.3667 4.6211 35.1468 4.6211 33.842L3.6211 33.842ZM3.6211 17.2055L3.6211 33.842L4.6211 33.842L4.6211 17.2055L3.6211 17.2055ZM5.95286 13.1629C4.51273 13.9939 3.6211 15.5447 3.6211 17.2055L4.6211 17.2055C4.6211 15.9007 5.32324 14.6808 6.45266 14.029L5.95286 13.1629ZM7.68257 12.1669L5.95327 13.1627L6.45226 14.0293L8.18156 13.0336L7.68257 12.1669ZM7.97543 12.5732C7.71845 12.1443 7.71845 12.1443 7.71844 12.1443C7.71844 12.1443 7.71843 12.1443 7.71843 12.1443C7.71842 12.1443 7.71841 12.1443 7.7184 12.1443C7.71838 12.1443 7.71836 12.1443 7.71834 12.1444C7.71829 12.1444 7.71824 12.1444 7.71818 12.1445C7.71806 12.1445 7.71791 12.1446 7.71774 12.1447C7.71739 12.1449 7.71694 12.1452 7.7164 12.1455C7.71532 12.1462 7.71385 12.1471 7.71207 12.1481C7.70855 12.1503 7.70367 12.1532 7.6981 12.1567C7.68849 12.1626 7.67119 12.1733 7.65509 12.184L8.20904 13.0165C8.20838 13.017 8.20933 13.0163 8.21237 13.0144C8.21511 13.0127 8.2183 13.0107 8.2216 13.0087C8.22483 13.0067 8.22774 13.0049 8.22981 13.0037C8.23083 13.0031 8.2316 13.0026 8.23206 13.0023C8.23229 13.0022 8.23244 13.0021 8.2325 13.002C8.23253 13.002 8.23254 13.002 8.23252 13.002C8.23252 13.002 8.2325 13.002 8.23248 13.0021C8.23247 13.0021 8.23246 13.0021 8.23245 13.0021C8.23244 13.0021 8.23243 13.0021 8.23243 13.0021C8.23242 13.0021 8.23242 13.0021 8.23241 13.0021C8.23241 13.0021 8.2324 13.0021 7.97543 12.5732ZM20.4 4.83444L7.72573 12.14L8.22512 13.0064L20.8994 5.70082L20.4 4.83444ZM22.7477 4.21025C21.9349 4.21025 21.123 4.42205 20.402 4.83333L20.8975 5.70194C21.4667 5.37725 22.1077 5.21025 22.7477 5.21025L22.7477 4.21025ZM25.0933 4.83333C24.3724 4.42205 23.5605 4.21025 22.7477 4.21025L22.7477 5.21025C23.3877 5.21025 24.0286 5.37725 24.5979 5.70194L25.0933 4.83333ZM29.6286 7.44995L25.0955 4.83455L24.5957 5.70072L29.1289 8.31613L29.6286 7.44995ZM29.1394 7.44391L29.1298 7.44943L29.6277 8.31665L29.6374 8.31113L29.1394 7.44391ZM39.4175 13.0777L29.638 7.44426L29.1388 8.31078L38.9183 13.9442L39.4175 13.0777ZM40.4128 13.8357C40.1182 13.5451 39.7848 13.2895 39.4177 13.0778L38.9181 13.9441C39.2104 14.1126 39.4759 14.3161 39.7104 14.5475L40.4128 13.8357ZM41.8742 17.2704C41.8742 15.9587 41.3301 14.7208 40.4088 13.8318L39.7144 14.5514C40.4448 15.2562 40.8742 16.2362 40.8742 17.2704L41.8742 17.2704ZM41.8742 33.7771L41.8742 17.2704L40.8742 17.2704L40.8742 33.7771L41.8742 33.7771ZM40.4088 37.2157C41.3301 36.3267 41.8742 35.0888 41.8742 33.7771L40.8742 33.7771C40.8742 34.8113 40.4448 35.7913 39.7144 36.4961L40.4088 37.2157ZM39.4177 37.9697C39.7848 37.758 40.1182 37.5024 40.4128 37.2118L39.7104 36.5C39.4759 36.7314 39.2104 36.9349 38.9181 37.1034L39.4177 37.9697ZM29.638 43.6032L39.4175 37.9698L38.9183 37.1033L29.1388 42.7367L29.638 43.6032ZM29.1298 43.5981L29.1395 43.6036L29.6373 42.7363L29.6277 42.7308L29.1298 43.5981ZM25.0955 46.2129L29.6286 43.5975L29.1289 42.7314L24.5957 45.3468L25.0955 46.2129ZM22.7477 46.8372C23.5605 46.8372 24.3724 46.6254 25.0933 46.2142L24.5979 45.3455C24.0286 45.6702 23.3877 45.8372 22.7477 45.8372L22.7477 46.8372ZM20.402 46.2142C21.123 46.6254 21.9348 46.8372 22.7477 46.8372L22.7477 45.8372C22.1077 45.8372 21.4667 45.6702 20.8975 45.3455L20.402 46.2142ZM23.5038 7.57324L36.1943 14.8896L36.6938 14.0233L24.0032 6.7069L23.5038 7.57324ZM23.2535 7.13465L23.2535 7.14006L24.2535 7.14007L24.2535 7.13466L23.2535 7.13465ZM21.9774 7.56688C22.4448 7.29507 23.0288 7.29398 23.5037 7.56782L24.0032 6.7015C23.2205 6.25019 22.2541 6.2491 21.4747 6.70244L21.9774 7.56688ZM9.30128 14.8681L21.9756 7.56793L21.4765 6.70139L8.80217 14.0015L9.30128 14.8681ZM9.28154 14.88L9.30865 14.8637L8.7948 14.0059L8.7677 14.0221L9.28154 14.88ZM9.00277 14.9673C9.1449 14.9673 9.24447 14.9064 9.26184 14.8962C9.29647 14.8758 9.32176 14.8554 9.33353 14.8456C9.35779 14.8254 9.37742 14.8053 9.37787 14.8049L8.67138 14.0972C8.6664 14.1021 8.67791 14.0902 8.69403 14.0768C8.70174 14.0704 8.72296 14.053 8.75387 14.0348C8.76975 14.0254 8.79628 14.011 8.83132 13.998C8.864 13.9859 8.92458 13.9672 9.00311 13.9673L9.00277 14.9673ZM8.97168 15.4143C8.97168 15.2919 9.00505 15.0494 9.26057 14.8958L8.7453 14.0388C8.04673 14.4588 7.97168 15.1471 7.97168 15.4143L8.97168 15.4143ZM9.27388 15.9387C9.00396 15.7835 8.97168 15.5356 8.97168 15.4143L7.97168 15.4143C7.97168 15.6826 8.04782 16.3872 8.77536 16.8056L9.27388 15.9387ZM21.8292 23.1686L9.27414 15.9388L8.77511 16.8054L21.3302 24.0352L21.8292 23.1686ZM23.6355 23.1732C23.0792 23.4912 22.3855 23.4908 21.8303 23.1693L21.3291 24.0346C22.1941 24.5356 23.2677 24.5352 24.1317 24.0414L23.6355 23.1732ZM23.9432 23.5749C23.6955 23.1406 23.6955 23.1406 23.6955 23.1406C23.6955 23.1406 23.6955 23.1405 23.6955 23.1405C23.6955 23.1405 23.6955 23.1405 23.6955 23.1405C23.6956 23.1405 23.6956 23.1405 23.6956 23.1405C23.6956 23.1405 23.6956 23.1405 23.6956 23.1405C23.6956 23.1405 23.6956 23.1405 23.6955 23.1406C23.6954 23.1406 23.6951 23.1408 23.6947 23.141C23.694 23.1414 23.6928 23.1421 23.6913 23.143C23.6882 23.1447 23.6838 23.1471 23.6791 23.1498C23.6742 23.1525 23.6694 23.1551 23.6653 23.1573C23.6607 23.1598 23.6593 23.1605 23.6603 23.16L24.1069 24.0547C24.1283 24.044 24.1515 24.0313 24.164 24.0243C24.1714 24.0202 24.178 24.0165 24.1827 24.0139C24.185 24.0126 24.187 24.0115 24.1884 24.0107C24.1891 24.0103 24.1897 24.0099 24.1901 24.0097C24.1903 24.0096 24.1905 24.0095 24.1906 24.0094C24.1907 24.0093 24.1908 24.0093 24.1908 24.0093C24.1908 24.0093 24.1909 24.0092 24.1909 24.0092C24.1909 24.0092 24.1909 24.0092 24.1909 24.0092C24.1909 24.0092 24.1909 24.0092 24.1909 24.0092C24.1909 24.0092 24.191 24.0092 23.9432 23.5749ZM36.1944 15.9389L23.6936 23.1416L24.1928 24.0081L36.6937 16.8054L36.1944 15.9389ZM36.497 15.4143C36.497 15.5315 36.464 15.7839 36.1948 15.9387L36.6933 16.8056C37.4216 16.3868 37.497 15.6759 37.497 15.4143L36.497 15.4143ZM36.1913 14.8879C36.4659 15.0488 36.497 15.3008 36.497 15.4143L37.497 15.4143C37.497 15.1489 37.4197 14.4486 36.6968 14.0251L36.1913 14.8879Z"
                                                fill="white"
                                                mask="url(#path-1-inside-1_395_22044)"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_395_22044">
                                                <rect width={50} height={50} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-12px pb-4px">
                                    <h3 className="typography-p1-strong color-white">Pro</h3>
                                    <div>
                                        <div className="flex flex-row items-start gap-8px">
                                            <div className="typography-h3-strong">
                                                <div className="relative inline-block">
                                                    {billingPeriod === 'monthly' ? (
                                                        <div className="relative">$129</div>
                                                    ) : (
                                                        <div className="relative">$109</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start pt-[6px]">
                                                <p className={`text-[11px] font-medium tracking-165 flex items-center text-center -tracking-0.2px rounded-6px px-[6px] py-[2px] translate-x-8px transition duration-200 delay-200 text-white bg-[#2D7EEE] ${annualDiscountActive ? annualDiscountActiveClass : annualDiscountInactiveClass}`}>
                                                    -20%
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-[11px] leading-120 font-medium text-[#9FC4F6]">
                                            per user/month, billed{" "}
                                            <div className="relative inline-block">
                                                {billingPeriod === 'monthly' ? (
                                                    <div className="relative"> monthly</div>
                                                ) : (
                                                    <div className="relative"> annually</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white">
                                    <p className="typography-p6-strong mb-12px">
                                        For scaling businesses
                                    </p>
                                    <ul className="flex flex-col gap-12px typography-p6-medium">
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-attio-blue-02">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            35 000 enrichment credits
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-attio-blue-02">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            15 running campaigns
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-attio-blue-02">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            70 campaign actions / day
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-attio-blue-02">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            AI for LinkedIn Invites
                                        </li>
                                    </ul>
                                </div>
                                <button
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-primaryOnBlue hover:text-buttonNew-primaryOnBlue-hover active:text-buttonNew-primaryOnBlue-active focus:text-buttonNew-primaryOnBlue-focus disabled:text-buttonNew-primaryOnBlue-disabled bg-buttonNew-primaryOnBlue hover:bg-buttonNew-primaryOnBlue active:bg-buttonNew-primaryOnBlue-active focus:bg-white disabled:bg-buttonNew-primaryOnBlue-disabled border-[1px] border-buttonNew-primaryOnBlue hover:border-buttonNew-primaryOnBlue-hover active:border-buttonNew-primaryOnBlue-active disabled:border-buttonNew-primaryOnBlue-disabled shadow-none hover:shadow-buttonNew-primaryOnBlue-hover active:shadow-none focus:shadow-buttonNew-primaryOnBlue-focus disabled:shadow-buttonNew-primaryOnBlue-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primaryOnBlue before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity mt-auto"
                                >
                                     <a className=" z-1 relative " href={gContext?.isloggedin ? `https://useartemis.co/register/next?plan=841101&useremail=${gContext?.userinfo?.email}` : "https://useartemis.co/register?plan=841101" } >Start for free</a>
                                    
                                </button>
                            </div>
                            <button
                                className="group transition-transform duration-300 transform-gpu desktop:hover:-translate-y-4px translate-y-0 rounded-16px border-stroke-light-primary border p-24px phablet:p-[18px] tablet:pb-[16px] flex flex-col items-stretch justify-start gap-24px outline-offset-4 text-left bg-white text-typography-light-primary shadow-pricingCard-standard"
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:R4kphp:"
                                data-state="closed"
                            >
                                <div className="hidden desktop:block desktop:h-[50px]">
                                    <svg
                                        width={42}
                                        height={43}
                                        viewBox="0 0 42 43"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="rotate-[9deg] group-hover:rotate-0 origin-top-left transition duration-300"
                                    >
                                        <mask id="path-1-inside-1_223_59405" fill="white">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.16686 35.834L20.067 41.303C20.067 41.303 20.0972 41.3143 20.1162 41.3204L22.0119 42.0673C23.4216 42.6212 25.0349 42.3756 26.2187 41.4318L39.5013 30.8423C40.6851 29.8985 41.284 28.3805 41.0581 26.8828L40.7523 24.8683C40.7506 24.8485 40.7463 24.8165 40.7463 24.8165L38.5116 10.0473C38.3948 9.29799 38.0837 8.59746 37.6213 8.0175C37.1589 7.43753 36.5453 6.97812 35.8409 6.69731L30.8673 4.74279L30.8656 4.73159L20.1431 0.509448C19.7814 0.367239 19.4075 0.274246 19.0308 0.229186C17.8689 0.0770422 16.6736 0.394298 15.7371 1.14089L2.55829 11.6477C1.62181 12.3943 1.04624 13.4888 0.935695 14.6555C0.89569 15.0328 0.90305 15.418 0.961111 15.8022L2.68826 27.1959L2.69879 27.2001L3.49612 32.4841C3.61294 33.2334 3.9241 33.9339 4.38647 34.5138C4.84885 35.0938 5.46244 35.5532 6.16686 35.834ZM21.1221 3.28645L35.0413 8.76153L35.0456 8.75809C35.7353 9.02937 36.2288 9.64829 36.3361 10.3768L38.5752 25.1426L38.5794 25.1746C38.5786 25.1823 38.5768 25.1979 38.5803 25.2022C38.6549 25.7656 38.3179 26.1052 38.1623 26.2292C38.0068 26.3532 37.5921 26.613 37.0456 26.3974L23.2819 20.9754C22.5015 20.6702 21.9391 19.9647 21.8111 19.1394C21.8059 19.1152 21.799 19.0711 21.799 19.0711L19.5927 4.50581C19.5042 3.92507 19.8542 3.57522 20.0054 3.45466C20.1567 3.3341 20.5714 3.07427 21.1221 3.28645Z"
                                            />
                                        </mask>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.16686 35.834L20.067 41.303C20.067 41.303 20.0972 41.3143 20.1162 41.3204L22.0119 42.0673C23.4216 42.6212 25.0349 42.3756 26.2187 41.4318L39.5013 30.8423C40.6851 29.8985 41.284 28.3805 41.0581 26.8828L40.7523 24.8683C40.7506 24.8485 40.7463 24.8165 40.7463 24.8165L38.5116 10.0473C38.3948 9.29799 38.0837 8.59746 37.6213 8.0175C37.1589 7.43753 36.5453 6.97812 35.8409 6.69731L30.8673 4.74279L30.8656 4.73159L20.1431 0.509448C19.7814 0.367239 19.4075 0.274246 19.0308 0.229186C17.8689 0.0770422 16.6736 0.394298 15.7371 1.14089L2.55829 11.6477C1.62181 12.3943 1.04624 13.4888 0.935695 14.6555C0.89569 15.0328 0.90305 15.418 0.961111 15.8022L2.68826 27.1959L2.69879 27.2001L3.49612 32.4841C3.61294 33.2334 3.9241 33.9339 4.38647 34.5138C4.84885 35.0938 5.46244 35.5532 6.16686 35.834ZM21.1221 3.28645L35.0413 8.76153L35.0456 8.75809C35.7353 9.02937 36.2288 9.64829 36.3361 10.3768L38.5752 25.1426L38.5794 25.1746C38.5786 25.1823 38.5768 25.1979 38.5803 25.2022C38.6549 25.7656 38.3179 26.1052 38.1623 26.2292C38.0068 26.3532 37.5921 26.613 37.0456 26.3974L23.2819 20.9754C22.5015 20.6702 21.9391 19.9647 21.8111 19.1394C21.8059 19.1152 21.799 19.0711 21.799 19.0711L19.5927 4.50581C19.5042 3.92507 19.8542 3.57522 20.0054 3.45466C20.1567 3.3341 20.5714 3.07427 21.1221 3.28645Z"
                                            className="fill-white group-hover:fill-brand-light-purple transition duration-300"
                                        />
                                        <path
                                            d="M20.067 41.303L19.8918 41.7714L19.884 41.7683L20.067 41.303ZM6.16686 35.834L5.98379 36.2993L5.9817 36.2985L6.16686 35.834ZM20.1162 41.3204L20.269 40.8443L20.2844 40.8493L20.2995 40.8552L20.1162 41.3204ZM22.0119 42.0673L21.8291 42.5327L21.8287 42.5325L22.0119 42.0673ZM26.2187 41.4318L25.9071 41.0408L26.2187 41.4318ZM39.5013 30.8423L39.1896 30.4513L39.5013 30.8423ZM41.0581 26.8828L41.5524 26.8078L41.5525 26.8082L41.0581 26.8828ZM40.7523 24.8683L40.258 24.9434L40.2556 24.9274L40.2542 24.9113L40.7523 24.8683ZM40.7463 24.8165L41.2408 24.7417L41.2419 24.75L40.7463 24.8165ZM38.5116 10.0473L39.0057 9.97023L39.006 9.97245L38.5116 10.0473ZM37.6213 8.0175L37.2303 8.32919L37.6213 8.0175ZM35.8409 6.69731L36.0238 6.23195L36.026 6.23285L35.8409 6.69731ZM30.8673 4.74279L30.6844 5.20815L30.4165 5.10287L30.373 4.81833L30.8673 4.74279ZM30.8656 4.73159L31.0488 4.26636L31.3164 4.37174L31.3599 4.65606L30.8656 4.73159ZM20.1431 0.509448L20.326 0.0441277L20.3263 0.0442175L20.1431 0.509448ZM19.0308 0.229186L18.9714 0.72568L18.9659 0.724955L19.0308 0.229186ZM15.7371 1.14089L15.4255 0.749934L15.7371 1.14089ZM2.55829 11.6477L2.2466 11.2567L2.2466 11.2567L2.55829 11.6477ZM0.935695 14.6555L1.4335 14.7026L1.43291 14.7082L0.935695 14.6555ZM0.961111 15.8022L0.466758 15.8772L0.466723 15.8769L0.961111 15.8022ZM2.68826 27.1959L2.5044 27.6609L2.237 27.5551L2.19391 27.2708L2.68826 27.1959ZM2.69879 27.2001L2.88265 26.7351L3.15026 26.8409L3.19319 27.1255L2.69879 27.2001ZM3.49612 32.4841L3.00208 32.5611L3.00171 32.5587L3.49612 32.4841ZM4.38647 34.5138L3.99551 34.8255L3.99551 34.8255L4.38647 34.5138ZM35.0413 8.76153L35.353 9.15249L35.1271 9.33258L34.8583 9.22683L35.0413 8.76153ZM21.1221 3.28645L21.3019 2.81986L21.3052 2.82115L21.1221 3.28645ZM35.0456 8.75809L34.7339 8.36713L34.9598 8.18706L35.2286 8.29279L35.0456 8.75809ZM36.3361 10.3768L35.8418 10.4518L35.8415 10.4497L36.3361 10.3768ZM38.5752 25.1426L39.0696 25.0676L39.0707 25.0761L38.5752 25.1426ZM38.5794 25.1746L39.075 25.1081L39.0832 25.1691L39.0763 25.2302L38.5794 25.1746ZM38.5803 25.2022L38.9711 24.8904L39.0577 24.9989L39.0759 25.1365L38.5803 25.2022ZM38.1623 26.2292L38.474 26.6201L38.474 26.6201L38.1623 26.2292ZM37.0456 26.3974L37.2289 25.9322L37.2292 25.9323L37.0456 26.3974ZM23.2819 20.9754L23.464 20.5097L23.4651 20.5102L23.2819 20.9754ZM21.8111 19.1394L22.3001 19.0351L22.303 19.0488L22.3052 19.0628L21.8111 19.1394ZM21.799 19.0711L21.305 19.1481L21.3047 19.146L21.799 19.0711ZM19.5927 4.50581L20.087 4.43052L20.087 4.43093L19.5927 4.50581ZM19.884 41.7683L5.98379 36.2993L6.34992 35.3688L20.2501 40.8377L19.884 41.7683ZM19.9634 41.7965C19.9448 41.7905 19.9253 41.7836 19.9145 41.7797C19.9083 41.7774 19.9028 41.7754 19.8989 41.7739C19.8969 41.7732 19.8953 41.7726 19.8941 41.7722C19.8935 41.7719 19.893 41.7717 19.8926 41.7716C19.8924 41.7715 19.8922 41.7715 19.8921 41.7714C19.892 41.7714 19.892 41.7714 19.8919 41.7714C19.8919 41.7713 19.8919 41.7713 19.8918 41.7713C19.8918 41.7713 19.8918 41.7713 19.8918 41.7713C19.8918 41.7713 19.8918 41.7713 19.8918 41.7713C19.8918 41.7713 19.8918 41.7713 20.067 41.303C20.2422 40.8347 20.2422 40.8347 20.2422 40.8347C20.2422 40.8347 20.2422 40.8347 20.2422 40.8347C20.2422 40.8347 20.2422 40.8347 20.2422 40.8347C20.2422 40.8347 20.2422 40.8347 20.2422 40.8347C20.2421 40.8347 20.2421 40.8347 20.2421 40.8347C20.2421 40.8347 20.2421 40.8347 20.2421 40.8347C20.2422 40.8347 20.2424 40.8348 20.2426 40.8349C20.2432 40.8351 20.244 40.8354 20.2452 40.8358C20.2475 40.8367 20.2508 40.8379 20.2545 40.8392C20.2582 40.8406 20.2618 40.8419 20.265 40.843C20.2685 40.8442 20.2697 40.8446 20.269 40.8443L19.9634 41.7965ZM21.8287 42.5325L19.9329 41.7856L20.2995 40.8552L22.1952 41.6021L21.8287 42.5325ZM26.5304 41.8227C25.2074 42.8775 23.4057 43.1521 21.8291 42.5327L22.1948 41.6019C23.4375 42.0902 24.8624 41.8737 25.9071 41.0408L26.5304 41.8227ZM39.813 31.2333L26.5304 41.8227L25.9071 41.0408L39.1896 30.4513L39.813 31.2333ZM41.5525 26.8082C41.8051 28.4833 41.136 30.1785 39.813 31.2333L39.1896 30.4513C40.2343 29.6185 40.7628 28.2777 40.5637 26.9574L41.5525 26.8082ZM41.2467 24.7933L41.5524 26.8078L40.5637 26.9578L40.258 24.9434L41.2467 24.7933ZM40.7463 24.8165C41.2419 24.75 41.2419 24.75 41.2419 24.75C41.2419 24.75 41.2419 24.75 41.2419 24.75C41.2419 24.75 41.2419 24.7501 41.2419 24.7501C41.2419 24.7501 41.2419 24.7501 41.2419 24.7501C41.2419 24.7502 41.2419 24.7503 41.2419 24.7503C41.242 24.7505 41.242 24.7506 41.242 24.7508C41.2421 24.7513 41.2421 24.7518 41.2422 24.7524C41.2424 24.7537 41.2426 24.7554 41.2429 24.7575C41.2434 24.7617 41.2442 24.7674 41.245 24.774C41.2464 24.7854 41.2488 24.8059 41.2505 24.8254L40.2542 24.9113C40.2542 24.912 40.2541 24.9107 40.2537 24.907C40.2534 24.9037 40.2529 24.8998 40.2524 24.8959C40.2519 24.892 40.2515 24.8886 40.2512 24.8861C40.251 24.8849 40.2509 24.884 40.2508 24.8834C40.2508 24.8831 40.2508 24.883 40.2508 24.8829C40.2508 24.8828 40.2508 24.8828 40.2508 24.8829C40.2508 24.8829 40.2508 24.8829 40.2508 24.8829C40.2508 24.8829 40.2508 24.8829 40.2508 24.8829C40.2508 24.8829 40.2508 24.883 40.2508 24.883C40.2508 24.883 40.2508 24.883 40.2508 24.883C40.2508 24.883 40.2508 24.883 40.7463 24.8165ZM39.006 9.97245L41.2407 24.7417L40.252 24.8913L38.0173 10.1221L39.006 9.97245ZM38.0122 7.70581C38.5285 8.35333 38.8754 9.13464 39.0057 9.97023L38.0176 10.1243C37.9142 9.46134 37.6388 8.8416 37.2303 8.32919L38.0122 7.70581ZM36.026 6.23285C36.8116 6.54602 37.496 7.05828 38.0122 7.70581L37.2303 8.32919C36.8218 7.81678 36.279 7.41022 35.6557 7.16176L36.026 6.23285ZM31.0502 4.27744L36.0238 6.23195L35.658 7.16266L30.6844 5.20815L31.0502 4.27744ZM31.3599 4.65606L31.3616 4.66726L30.373 4.81833L30.3713 4.80713L31.3599 4.65606ZM20.3263 0.0442175L31.0488 4.26636L30.6824 5.19682L19.9599 0.974679L20.3263 0.0442175ZM19.0902 -0.267277C19.5088 -0.21721 19.9242 -0.113881 20.326 0.0441277L19.9601 0.974769C19.6386 0.848359 19.3063 0.765702 18.9714 0.725648L19.0902 -0.267277ZM15.4255 0.749934C16.4704 -0.083146 17.8023 -0.435947 19.0957 -0.266584L18.9659 0.724955C17.9355 0.590032 16.8768 0.871741 16.0488 1.53185L15.4255 0.749934ZM2.2466 11.2567L15.4255 0.749934L16.0488 1.53185L2.86998 12.0387L2.2466 11.2567ZM0.437925 14.6083C0.56098 13.3096 1.20165 12.0898 2.2466 11.2567L2.86998 12.0387C2.04198 12.6988 1.53149 13.6681 1.43347 14.7026L0.437925 14.6083ZM0.466723 15.8769C0.402211 15.45 0.394035 15.022 0.438482 14.6027L1.43291 14.7082C1.39735 15.0436 1.40389 15.386 1.4555 15.7275L0.466723 15.8769ZM2.19391 27.2708L0.466759 15.8772L1.45546 15.7273L3.18261 27.121L2.19391 27.2708ZM2.51493 27.665L2.5044 27.6609L2.87212 26.7309L2.88265 26.7351L2.51493 27.665ZM3.00171 32.5587L2.20439 27.2747L3.19319 27.1255L3.99052 32.4095L3.00171 32.5587ZM3.99551 34.8255C3.47928 34.178 3.13236 33.3967 3.00208 32.5611L3.99015 32.4071C4.09351 33.07 4.36892 33.6897 4.77743 34.2022L3.99551 34.8255ZM5.9817 36.2985C5.19613 35.9853 4.51175 35.4731 3.99551 34.8255L4.77743 34.2022C5.18595 34.7146 5.72875 35.1211 6.35201 35.3696L5.9817 36.2985ZM34.8583 9.22683L20.9391 3.75175L21.3052 2.82115L35.2243 8.29624L34.8583 9.22683ZM35.3573 9.14905L35.353 9.15249L34.7296 8.37058L34.7339 8.36713L35.3573 9.14905ZM35.8415 10.4497C35.7604 9.89978 35.387 9.42965 34.8626 9.2234L35.2286 8.29279C36.0837 8.62908 36.6971 9.39679 36.8308 10.3039L35.8415 10.4497ZM38.0808 25.2176L35.8418 10.4518L36.8305 10.3018L39.0695 25.0676L38.0808 25.2176ZM38.0839 25.2411L38.0796 25.2091L39.0707 25.0761L39.075 25.1081L38.0839 25.2411ZM38.1894 25.514C38.1008 25.4029 38.0863 25.287 38.0835 25.267C38.0779 25.2272 38.078 25.1946 38.0783 25.1793C38.079 25.1476 38.0825 25.1196 38.0825 25.1189L39.0763 25.2302C39.0755 25.2373 39.0777 25.2209 39.0781 25.2001C39.0783 25.1901 39.0787 25.1628 39.0737 25.1273C39.0711 25.109 39.0658 25.0793 39.0542 25.0438C39.0433 25.0107 39.0201 24.9518 38.9711 24.8904L38.1894 25.514ZM37.8507 25.8382C37.9496 25.7593 38.1253 25.5751 38.0846 25.2679L39.0759 25.1365C39.1846 25.9562 38.6862 26.451 38.474 26.6201L37.8507 25.8382ZM37.2292 25.9323C37.5301 26.051 37.7526 25.9164 37.8507 25.8382L38.474 26.6201C38.261 26.7899 37.6541 27.175 36.8621 26.8625L37.2292 25.9323ZM23.4651 20.5102L37.2289 25.9322L36.8624 26.8626L23.0986 21.4406L23.4651 20.5102ZM22.3052 19.0628C22.406 19.713 22.8503 20.2697 23.464 20.5097L23.0998 21.441C22.1527 21.0707 21.4721 20.2164 21.317 19.216L22.3052 19.0628ZM21.799 19.0711C22.2931 18.9941 22.2931 18.9941 22.2931 18.9941C22.2931 18.9941 22.2931 18.9941 22.2931 18.9941C22.2931 18.994 22.2931 18.994 22.2931 18.994C22.2931 18.994 22.2931 18.994 22.2931 18.994C22.2931 18.994 22.2931 18.994 22.2931 18.994C22.2931 18.994 22.2931 18.994 22.2931 18.9941C22.2931 18.9942 22.2931 18.9945 22.2932 18.995C22.2934 18.9958 22.2936 18.9972 22.2939 18.999C22.2944 19.0026 22.2953 19.0077 22.2962 19.0132C22.2971 19.0188 22.2981 19.0243 22.299 19.0291C22.2999 19.0344 22.3003 19.0361 22.3001 19.0351L21.3221 19.2437C21.317 19.22 21.3125 19.1936 21.3101 19.1791C21.3086 19.1706 21.3074 19.1631 21.3065 19.1577C21.3061 19.155 21.3057 19.1528 21.3055 19.1511C21.3054 19.1503 21.3052 19.1496 21.3052 19.1491C21.3051 19.1489 21.3051 19.1487 21.3051 19.1485C21.3051 19.1484 21.305 19.1484 21.305 19.1483C21.305 19.1483 21.305 19.1482 21.305 19.1482C21.305 19.1482 21.305 19.1482 21.305 19.1482C21.305 19.1482 21.305 19.1482 21.305 19.1482C21.305 19.1481 21.305 19.1481 21.799 19.0711ZM20.087 4.43093L22.2934 18.9962L21.3047 19.146L19.0983 4.5807L20.087 4.43093ZM20.3171 3.84562C20.2224 3.92115 20.0384 4.11151 20.087 4.43052L19.0984 4.58111C18.97 3.73862 19.486 3.2293 19.6937 3.06371L20.3171 3.84562ZM20.9424 3.75302C20.634 3.63423 20.409 3.77242 20.3171 3.84562L19.6937 3.06371C19.9044 2.89579 20.5087 2.51431 21.3019 2.81987L20.9424 3.75302Z"
                                            className="fill-greyscale-light-09 group-hover:fill-brand-light-purple transition duration-300"
                                            mask="url(#path-1-inside-1_223_59405)"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-12px pb-4px">
                                    <h3 className="typography-p1-strong">Enterprise</h3>
                                    <div>
                                        <div className="flex flex-row items-start gap-8px">
                                            <div className="typography-h3-strong">
                                                <div className="relative inline-block">
                                                    <div className="relative">$299+</div>
                                                    <div className="opacity-0 top-0 absolute" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start pt-[6px]">
                                                <p className="text-[11px] font-medium tracking-165 flex items-center text-center -tracking-0.2px rounded-6px px-[6px] py-[2px] text-typography-light-quaternary bg-greyscale-light-04 translate-x-8px transition duration-200 delay-200" />
                                            </div>
                                        </div>
                                        <div className="text-[11px] leading-120 font-medium text-typography-light-tertiary">
                                            per user/month, billed monthly
                                            <div className="relative inline-block">
                                               
                                                <div className="opacity-0 top-0 absolute" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-typography-light-secondary">
                                    <p className="typography-p6-strong mb-12px">
                                        For large organizations
                                    </p>
                                    <ul className="flex flex-col gap-12px typography-p6-medium">
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            Unlimited enrichment
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                            50 running campaigns
                                        </li>
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                           500 campaign actions / day
                                        </li>

                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                          AI for LinkedIn Invites
                                        </li>

                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                          Team management
                                        </li>

                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-greyscale-light-04">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-08"
                                                >
                                                    <use
                                                        href="https://attio.com/build/_assets/checkmark-ALLBUTYC.svg#icon"
                                                        height={20}
                                                        width={20}
                                                    />
                                                </svg>
                                            </div>
                                          Multiple seats
                                        </li>
                                    </ul>
                                </div>
                                <div  id="my_custom_link"
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus mt-auto mt-auto"
                                >
                                    Talk to sales
                                </div>
                            </button>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}