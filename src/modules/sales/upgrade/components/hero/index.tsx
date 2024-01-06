// React
import { FC, useEffect, useState } from "react"
// Components
import { SalesPricingBillingSelector } from "../billing-selector"
import Router, { useRouter } from 'next/router'
import Link from "next/link"

const annualDiscountActiveClass = 'opacity-1 translate-x-0'
const annualDiscountInactiveClass = 'opacity-0 translate-x-8px'

type OwnProps = {
    billingPeriod: "monthly" | "annually"
    onChange: (billingPeriod: "monthly" | "annually") => void
}

export const SalesPricingHero: FC<OwnProps> = (props) => {
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
                        Upgrade your account
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
                                <svg width="42" height="42" viewBox="0 0 145 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M96.3475 119.848C96.3475 119.848 99.7457 121.595 103.753 124.667C107.138 127.262 119.488 132.337 123.236 133.849C124.469 134.346 123.713 134.486 122.62 134.881C114.464 137.827 78.8357 151.623 56.675 175.194C56.3431 175.547 56.3107 175.356 56.2419 174.95C55.7911 172.279 53.6691 161.379 48.1911 154.852C41.9134 147.372 36.6378 141.963 36.6378 141.963L35.0022 140.126L35.992 142.293C33.3131 143.649 22.8593 148.8 15.5045 150.423C14.2881 150.691 14.3525 150.542 15.5374 149.946C19.8694 147.77 32.005 141.508 34.3007 138.557C34.3007 138.557 47.1225 132.814 50.0611 130.944C52.9994 129.074 70.3624 122.797 96.3475 119.848Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4322 23.9612C89.5605 12.9391 91.0983 34.0188 101.217 36.6498C107.895 38.3859 116.502 46.2761 114.706 56.9511C112.302 71.2425 118.045 70.7082 124.723 80.3245C130.332 88.4009 129.817 101.376 127.609 108.173C126.912 110.321 124.769 111.697 121.088 112.481C106.65 115.557 64.2597 122.983 28.624 113.178C25.3915 112.289 22.6971 111.903 21.0291 108.585C19.0014 104.552 15.9238 96.7506 18.2746 90.0747C21.6135 80.5917 28.0246 78.1877 24.6857 66.4341C21.3465 54.6809 39.3771 53.8792 41.2471 42.5267C43.1171 31.1739 55.5382 13.8109 71.4322 23.9612Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.87 40.6568C55.838 39.7532 67.4082 33.7094 84.9215 40.1228C84.9215 40.1228 90.8648 44.7306 90.8648 50.6072C90.8648 56.4842 87.593 63.496 90.6646 67.77C99.1276 79.5447 79.2756 81.0346 89.7295 92.3456C97.8769 101.16 74.4549 115.962 96.6504 116.441C96.6504 116.441 96.0072 120.928 96.4076 125.869C96.4076 125.869 77.9763 149.243 57.6747 171.414C57.6747 171.414 53.935 156.856 48.192 149.51C42.4486 142.164 53.1824 134.847 54.6029 129.876C56.0233 124.905 57.0909 114.553 56.9499 107.769C65.4591 113.415 77.3243 110.967 83.6331 104.472C84.2104 103.878 83.592 104.308 83.3716 104.422C72.3566 110.132 62.8081 110.483 56.4726 103.832C55.0067 102.293 52.065 98.7562 49.1267 89.8077C46.1884 80.8593 46.2416 74.9207 50.0617 68.3043C56.7871 56.6554 46.4272 49.0999 54.87 40.6568Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6084 88.238C58.5447 87.0359 60.3148 82.6616 62.1512 82.4281C63.9876 82.1942 63.8207 83.5633 64.8893 83.5633C65.9576 83.5633 66.0725 82.2786 67.9444 82.3779C70.1482 82.4947 73.504 87.9039 75.908 88.5718C75.908 88.5718 70.4651 92.2782 65.1228 92.5454C59.7802 92.8125 56.6084 88.238 56.6084 88.238Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.5001 56.2004C89.7408 56.3336 92.9179 60.3122 92.9179 65.5496C92.9179 70.7869 87.1362 75.5 81.8989 75.5C76.6618 75.5 73.1506 69.9186 72.6832 64.6145C72.2156 59.3105 75.2594 56.0668 82.5001 56.2004Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.5223 56.4366C48.8543 56.1489 46.2653 57.8726 45.5339 62.6821C44.8022 67.4917 48.919 72.7945 53.7286 73.5262C58.5382 74.2576 62.4087 70.057 63.5788 65.2515C64.7492 60.446 62.1901 56.7246 55.5223 56.4366Z" fill="#212121"/>
                                    <path d="M63.665 63.8732L62.9404 62.7813L63.3738 62.3105C63.3801 62.304 65.0549 59.8452 68.0389 60.069C70.2409 60.2341 72.2544 61.4645 73.5491 63.1219L72.8264 64.2422C71.7463 62.8598 69.9454 61.5754 68.0776 61.4353C66.1714 61.2924 64.8662 62.5677 63.665 63.8732Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M76.0394 56.7053C75.4715 56.5385 74.8198 55.1984 75.2872 54.3969C75.7549 53.5955 82.0322 52.3936 85.1041 52.7274C88.1759 53.0615 91.515 53.7291 93.9859 55.265C96.4569 56.8012 94.6485 57.6752 90.4414 56.0213C86.234 54.367 80.8808 55.0358 76.0394 56.7053Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7705 56.6271C61.3381 56.4602 61.9897 55.1201 61.5224 54.319C61.055 53.5175 54.7774 52.3154 51.7055 52.6491C48.6337 52.9832 45.2946 53.6511 42.8237 55.187C40.353 56.723 42.1614 57.5973 46.3685 55.943C50.5756 54.2891 55.9288 54.9576 60.7705 56.6271Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0976 74.1299C62.4681 73.713 63.0314 73.8101 63.3972 74.0315C64.3391 74.6001 63.4757 77.4515 61.9267 76.7432C61.2815 76.448 61.6004 74.6891 62.0976 74.1299Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.1107 74.1304C68.623 73.2424 71.1219 74.704 71.3801 76.0677C71.6136 77.3032 69.51 77.5034 68.9757 77.036C68.4682 76.592 68.4016 75.8239 67.1577 74.4424C67.0135 74.2824 66.9647 74.2161 67.1107 74.1304Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4083 69.5668C63.6798 68.998 63.9152 68.4089 64.1291 67.8164C64.6407 66.4 65.0529 64.9142 65.3898 63.4458C65.4041 63.3842 65.4163 63.3216 65.43 63.2596C65.4586 63.1323 65.4941 62.8978 65.6728 62.9093C65.8528 62.9209 65.8491 63.1435 65.8528 63.2718C65.8818 64.2687 65.6816 65.3722 65.4116 66.3287C65.0647 67.5576 64.5361 68.7694 63.8249 69.8321C63.7125 69.9999 63.5973 70.1721 63.4743 70.3325C63.4005 70.4293 63.2881 70.584 63.1443 70.4947C62.9609 70.381 63.1732 70.0398 63.2364 69.9109C63.2925 69.796 63.3532 69.6823 63.4083 69.5668Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7497 73.5357C60.4629 74.6476 60.3384 76.2832 61.2401 77.169C61.256 77.1845 61.2718 77.1998 61.2868 77.2163C61.3497 77.2845 61.3976 77.3729 61.3382 77.4654C61.2544 77.5955 61.1093 77.5295 61.0072 77.4754C60.5212 77.2163 60.1734 76.6216 60.0277 76.1082C59.7674 75.1909 59.9872 74.2269 60.4103 73.395C60.419 73.3779 60.4271 73.3607 60.4355 73.3439C60.4458 73.3234 60.4561 73.3031 60.4676 73.2835C60.5093 73.2132 60.5834 73.1646 60.6703 73.192C60.835 73.2443 60.779 73.4221 60.7497 73.5357Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3687 72.463C72.3126 72.3429 72.1716 72.1165 72.3257 72.0122C72.4708 71.9141 72.6019 72.0872 72.6856 72.1794C73.7527 73.3541 74.3452 75.9269 73.6785 77.4003C73.2831 78.2746 72.2939 78.4496 71.4336 78.3783C71.2932 78.3664 70.9258 78.3745 70.9342 78.1575C70.942 77.9579 71.2471 77.9732 71.3813 77.9582C72.6305 77.8197 73.2675 76.9712 73.2573 75.7504C73.2486 74.6768 72.8176 73.4276 72.3687 72.463Z" fill="#212121"/>
                                </svg>
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
                                    <a className=" z-1 relative " href="https://useartemis.co/upgrade/next?plan=810887"  >Get Started</a>
                                </button>
                            </div>
                            <div
                               
                                className="group transition-transform duration-300 transform-gpu desktop:hover:-translate-y-4px translate-y-0 rounded-16px border-stroke-light-primary border p-24px phablet:p-[18px] tablet:pb-[16px] flex flex-col items-stretch justify-start gap-24px outline-offset-4 text-left bg-white text-typography-light-primary shadow-pricingCard-standard"
                            >
                                <div className="hidden desktop:block desktop:h-[50px]">
                                <svg width="42" height="42" viewBox="0 0 145 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M96.3475 119.848C96.3475 119.848 99.7457 121.595 103.753 124.667C107.138 127.262 119.488 132.337 123.236 133.849C124.469 134.346 123.713 134.486 122.62 134.881C114.464 137.827 78.8357 151.623 56.675 175.194C56.3431 175.547 56.3107 175.356 56.2419 174.95C55.7911 172.279 53.6691 161.379 48.1911 154.852C41.9134 147.372 36.6378 141.963 36.6378 141.963L35.0022 140.126L35.992 142.293C33.3131 143.649 22.8593 148.8 15.5045 150.423C14.2881 150.691 14.3525 150.542 15.5374 149.946C19.8694 147.77 32.005 141.508 34.3007 138.557C34.3007 138.557 47.1225 132.814 50.0611 130.944C52.9994 129.074 70.3624 122.797 96.3475 119.848Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4322 23.9612C89.5605 12.9391 91.0983 34.0188 101.217 36.6498C107.895 38.3859 116.502 46.2761 114.706 56.9511C112.302 71.2425 118.045 70.7082 124.723 80.3245C130.332 88.4009 129.817 101.376 127.609 108.173C126.912 110.321 124.769 111.697 121.088 112.481C106.65 115.557 64.2597 122.983 28.624 113.178C25.3915 112.289 22.6971 111.903 21.0291 108.585C19.0014 104.552 15.9238 96.7506 18.2746 90.0747C21.6135 80.5917 28.0246 78.1877 24.6857 66.4341C21.3465 54.6809 39.3771 53.8792 41.2471 42.5267C43.1171 31.1739 55.5382 13.8109 71.4322 23.9612Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.87 40.6568C55.838 39.7532 67.4082 33.7094 84.9215 40.1228C84.9215 40.1228 90.8648 44.7306 90.8648 50.6072C90.8648 56.4842 87.593 63.496 90.6646 67.77C99.1276 79.5447 79.2756 81.0346 89.7295 92.3456C97.8769 101.16 74.4549 115.962 96.6504 116.441C96.6504 116.441 96.0072 120.928 96.4076 125.869C96.4076 125.869 77.9763 149.243 57.6747 171.414C57.6747 171.414 53.935 156.856 48.192 149.51C42.4486 142.164 53.1824 134.847 54.6029 129.876C56.0233 124.905 57.0909 114.553 56.9499 107.769C65.4591 113.415 77.3243 110.967 83.6331 104.472C84.2104 103.878 83.592 104.308 83.3716 104.422C72.3566 110.132 62.8081 110.483 56.4726 103.832C55.0067 102.293 52.065 98.7562 49.1267 89.8077C46.1884 80.8593 46.2416 74.9207 50.0617 68.3043C56.7871 56.6554 46.4272 49.0999 54.87 40.6568Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6084 88.238C58.5447 87.0359 60.3148 82.6616 62.1512 82.4281C63.9876 82.1942 63.8207 83.5633 64.8893 83.5633C65.9576 83.5633 66.0725 82.2786 67.9444 82.3779C70.1482 82.4947 73.504 87.9039 75.908 88.5718C75.908 88.5718 70.4651 92.2782 65.1228 92.5454C59.7802 92.8125 56.6084 88.238 56.6084 88.238Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.5001 56.2004C89.7408 56.3336 92.9179 60.3122 92.9179 65.5496C92.9179 70.7869 87.1362 75.5 81.8989 75.5C76.6618 75.5 73.1506 69.9186 72.6832 64.6145C72.2156 59.3105 75.2594 56.0668 82.5001 56.2004Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.5223 56.4366C48.8543 56.1489 46.2653 57.8726 45.5339 62.6821C44.8022 67.4917 48.919 72.7945 53.7286 73.5262C58.5382 74.2576 62.4087 70.057 63.5788 65.2515C64.7492 60.446 62.1901 56.7246 55.5223 56.4366Z" fill="#212121"/>
                                    <path d="M63.665 63.8732L62.9404 62.7813L63.3738 62.3105C63.3801 62.304 65.0549 59.8452 68.0389 60.069C70.2409 60.2341 72.2544 61.4645 73.5491 63.1219L72.8264 64.2422C71.7463 62.8598 69.9454 61.5754 68.0776 61.4353C66.1714 61.2924 64.8662 62.5677 63.665 63.8732Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M76.0394 56.7053C75.4715 56.5385 74.8198 55.1984 75.2872 54.3969C75.7549 53.5955 82.0322 52.3936 85.1041 52.7274C88.1759 53.0615 91.515 53.7291 93.9859 55.265C96.4569 56.8012 94.6485 57.6752 90.4414 56.0213C86.234 54.367 80.8808 55.0358 76.0394 56.7053Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7705 56.6271C61.3381 56.4602 61.9897 55.1201 61.5224 54.319C61.055 53.5175 54.7774 52.3154 51.7055 52.6491C48.6337 52.9832 45.2946 53.6511 42.8237 55.187C40.353 56.723 42.1614 57.5973 46.3685 55.943C50.5756 54.2891 55.9288 54.9576 60.7705 56.6271Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0976 74.1299C62.4681 73.713 63.0314 73.8101 63.3972 74.0315C64.3391 74.6001 63.4757 77.4515 61.9267 76.7432C61.2815 76.448 61.6004 74.6891 62.0976 74.1299Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.1107 74.1304C68.623 73.2424 71.1219 74.704 71.3801 76.0677C71.6136 77.3032 69.51 77.5034 68.9757 77.036C68.4682 76.592 68.4016 75.8239 67.1577 74.4424C67.0135 74.2824 66.9647 74.2161 67.1107 74.1304Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4083 69.5668C63.6798 68.998 63.9152 68.4089 64.1291 67.8164C64.6407 66.4 65.0529 64.9142 65.3898 63.4458C65.4041 63.3842 65.4163 63.3216 65.43 63.2596C65.4586 63.1323 65.4941 62.8978 65.6728 62.9093C65.8528 62.9209 65.8491 63.1435 65.8528 63.2718C65.8818 64.2687 65.6816 65.3722 65.4116 66.3287C65.0647 67.5576 64.5361 68.7694 63.8249 69.8321C63.7125 69.9999 63.5973 70.1721 63.4743 70.3325C63.4005 70.4293 63.2881 70.584 63.1443 70.4947C62.9609 70.381 63.1732 70.0398 63.2364 69.9109C63.2925 69.796 63.3532 69.6823 63.4083 69.5668Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7497 73.5357C60.4629 74.6476 60.3384 76.2832 61.2401 77.169C61.256 77.1845 61.2718 77.1998 61.2868 77.2163C61.3497 77.2845 61.3976 77.3729 61.3382 77.4654C61.2544 77.5955 61.1093 77.5295 61.0072 77.4754C60.5212 77.2163 60.1734 76.6216 60.0277 76.1082C59.7674 75.1909 59.9872 74.2269 60.4103 73.395C60.419 73.3779 60.4271 73.3607 60.4355 73.3439C60.4458 73.3234 60.4561 73.3031 60.4676 73.2835C60.5093 73.2132 60.5834 73.1646 60.6703 73.192C60.835 73.2443 60.779 73.4221 60.7497 73.5357Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3687 72.463C72.3126 72.3429 72.1716 72.1165 72.3257 72.0122C72.4708 71.9141 72.6019 72.0872 72.6856 72.1794C73.7527 73.3541 74.3452 75.9269 73.6785 77.4003C73.2831 78.2746 72.2939 78.4496 71.4336 78.3783C71.2932 78.3664 70.9258 78.3745 70.9342 78.1575C70.942 77.9579 71.2471 77.9732 71.3813 77.9582C72.6305 77.8197 73.2675 76.9712 73.2573 75.7504C73.2486 74.6768 72.8176 73.4276 72.3687 72.463Z" fill="#212121"/>
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
                                    <a className=" z-1 relative " href="https://useartemis.co/upgrade/next?plan=810888"  >Get Started</a>
                                   
                                </button>
                            </div>
                            <div
                               
                                className="group transition-transform duration-300 transform-gpu desktop:hover:-translate-y-4px translate-y-0 rounded-16px border-stroke-light-primary border p-24px phablet:p-[18px] tablet:pb-[16px] flex flex-col items-stretch justify-start gap-24px outline-offset-4 text-left bg-primary text-white shadow-pricingCard-highlight"
                            >
                                <div className="hidden desktop:block desktop:h-[50px]">
                                <svg width="42" height="42" viewBox="0 0 145 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M96.3475 119.848C96.3475 119.848 99.7457 121.595 103.753 124.667C107.138 127.262 119.488 132.337 123.236 133.849C124.469 134.346 123.713 134.486 122.62 134.881C114.464 137.827 78.8357 151.623 56.675 175.194C56.3431 175.547 56.3107 175.356 56.2419 174.95C55.7911 172.279 53.6691 161.379 48.1911 154.852C41.9134 147.372 36.6378 141.963 36.6378 141.963L35.0022 140.126L35.992 142.293C33.3131 143.649 22.8593 148.8 15.5045 150.423C14.2881 150.691 14.3525 150.542 15.5374 149.946C19.8694 147.77 32.005 141.508 34.3007 138.557C34.3007 138.557 47.1225 132.814 50.0611 130.944C52.9994 129.074 70.3624 122.797 96.3475 119.848Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4322 23.9612C89.5605 12.9391 91.0983 34.0188 101.217 36.6498C107.895 38.3859 116.502 46.2761 114.706 56.9511C112.302 71.2425 118.045 70.7082 124.723 80.3245C130.332 88.4009 129.817 101.376 127.609 108.173C126.912 110.321 124.769 111.697 121.088 112.481C106.65 115.557 64.2597 122.983 28.624 113.178C25.3915 112.289 22.6971 111.903 21.0291 108.585C19.0014 104.552 15.9238 96.7506 18.2746 90.0747C21.6135 80.5917 28.0246 78.1877 24.6857 66.4341C21.3465 54.6809 39.3771 53.8792 41.2471 42.5267C43.1171 31.1739 55.5382 13.8109 71.4322 23.9612Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.87 40.6568C55.838 39.7532 67.4082 33.7094 84.9215 40.1228C84.9215 40.1228 90.8648 44.7306 90.8648 50.6072C90.8648 56.4842 87.593 63.496 90.6646 67.77C99.1276 79.5447 79.2756 81.0346 89.7295 92.3456C97.8769 101.16 74.4549 115.962 96.6504 116.441C96.6504 116.441 96.0072 120.928 96.4076 125.869C96.4076 125.869 77.9763 149.243 57.6747 171.414C57.6747 171.414 53.935 156.856 48.192 149.51C42.4486 142.164 53.1824 134.847 54.6029 129.876C56.0233 124.905 57.0909 114.553 56.9499 107.769C65.4591 113.415 77.3243 110.967 83.6331 104.472C84.2104 103.878 83.592 104.308 83.3716 104.422C72.3566 110.132 62.8081 110.483 56.4726 103.832C55.0067 102.293 52.065 98.7562 49.1267 89.8077C46.1884 80.8593 46.2416 74.9207 50.0617 68.3043C56.7871 56.6554 46.4272 49.0999 54.87 40.6568Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6084 88.238C58.5447 87.0359 60.3148 82.6616 62.1512 82.4281C63.9876 82.1942 63.8207 83.5633 64.8893 83.5633C65.9576 83.5633 66.0725 82.2786 67.9444 82.3779C70.1482 82.4947 73.504 87.9039 75.908 88.5718C75.908 88.5718 70.4651 92.2782 65.1228 92.5454C59.7802 92.8125 56.6084 88.238 56.6084 88.238Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.5001 56.2004C89.7408 56.3336 92.9179 60.3122 92.9179 65.5496C92.9179 70.7869 87.1362 75.5 81.8989 75.5C76.6618 75.5 73.1506 69.9186 72.6832 64.6145C72.2156 59.3105 75.2594 56.0668 82.5001 56.2004Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.5223 56.4366C48.8543 56.1489 46.2653 57.8726 45.5339 62.6821C44.8022 67.4917 48.919 72.7945 53.7286 73.5262C58.5382 74.2576 62.4087 70.057 63.5788 65.2515C64.7492 60.446 62.1901 56.7246 55.5223 56.4366Z" fill="#212121"/>
                                    <path d="M63.665 63.8732L62.9404 62.7813L63.3738 62.3105C63.3801 62.304 65.0549 59.8452 68.0389 60.069C70.2409 60.2341 72.2544 61.4645 73.5491 63.1219L72.8264 64.2422C71.7463 62.8598 69.9454 61.5754 68.0776 61.4353C66.1714 61.2924 64.8662 62.5677 63.665 63.8732Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M76.0394 56.7053C75.4715 56.5385 74.8198 55.1984 75.2872 54.3969C75.7549 53.5955 82.0322 52.3936 85.1041 52.7274C88.1759 53.0615 91.515 53.7291 93.9859 55.265C96.4569 56.8012 94.6485 57.6752 90.4414 56.0213C86.234 54.367 80.8808 55.0358 76.0394 56.7053Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7705 56.6271C61.3381 56.4602 61.9897 55.1201 61.5224 54.319C61.055 53.5175 54.7774 52.3154 51.7055 52.6491C48.6337 52.9832 45.2946 53.6511 42.8237 55.187C40.353 56.723 42.1614 57.5973 46.3685 55.943C50.5756 54.2891 55.9288 54.9576 60.7705 56.6271Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0976 74.1299C62.4681 73.713 63.0314 73.8101 63.3972 74.0315C64.3391 74.6001 63.4757 77.4515 61.9267 76.7432C61.2815 76.448 61.6004 74.6891 62.0976 74.1299Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.1107 74.1304C68.623 73.2424 71.1219 74.704 71.3801 76.0677C71.6136 77.3032 69.51 77.5034 68.9757 77.036C68.4682 76.592 68.4016 75.8239 67.1577 74.4424C67.0135 74.2824 66.9647 74.2161 67.1107 74.1304Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4083 69.5668C63.6798 68.998 63.9152 68.4089 64.1291 67.8164C64.6407 66.4 65.0529 64.9142 65.3898 63.4458C65.4041 63.3842 65.4163 63.3216 65.43 63.2596C65.4586 63.1323 65.4941 62.8978 65.6728 62.9093C65.8528 62.9209 65.8491 63.1435 65.8528 63.2718C65.8818 64.2687 65.6816 65.3722 65.4116 66.3287C65.0647 67.5576 64.5361 68.7694 63.8249 69.8321C63.7125 69.9999 63.5973 70.1721 63.4743 70.3325C63.4005 70.4293 63.2881 70.584 63.1443 70.4947C62.9609 70.381 63.1732 70.0398 63.2364 69.9109C63.2925 69.796 63.3532 69.6823 63.4083 69.5668Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7497 73.5357C60.4629 74.6476 60.3384 76.2832 61.2401 77.169C61.256 77.1845 61.2718 77.1998 61.2868 77.2163C61.3497 77.2845 61.3976 77.3729 61.3382 77.4654C61.2544 77.5955 61.1093 77.5295 61.0072 77.4754C60.5212 77.2163 60.1734 76.6216 60.0277 76.1082C59.7674 75.1909 59.9872 74.2269 60.4103 73.395C60.419 73.3779 60.4271 73.3607 60.4355 73.3439C60.4458 73.3234 60.4561 73.3031 60.4676 73.2835C60.5093 73.2132 60.5834 73.1646 60.6703 73.192C60.835 73.2443 60.779 73.4221 60.7497 73.5357Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3687 72.463C72.3126 72.3429 72.1716 72.1165 72.3257 72.0122C72.4708 71.9141 72.6019 72.0872 72.6856 72.1794C73.7527 73.3541 74.3452 75.9269 73.6785 77.4003C73.2831 78.2746 72.2939 78.4496 71.4336 78.3783C71.2932 78.3664 70.9258 78.3745 70.9342 78.1575C70.942 77.9579 71.2471 77.9732 71.3813 77.9582C72.6305 77.8197 73.2675 76.9712 73.2573 75.7504C73.2486 74.6768 72.8176 73.4276 72.3687 72.463Z" fill="#212121"/>
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
                                            <div className="inline-block rounded-6px w-20px h-20px bg-primary-items">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                   
                                                </svg>
                                            </div>
                                            35 000 enrichment credits
                                        </li>

                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-primary-items">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                   
                                                </svg>
                                            </div>
                                            Multiple sending accounts
                                        </li>

                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-primary-items">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                   
                                                </svg>
                                            </div>
                                            Send unlimited emails
                                        </li>

                                       
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-primary-items">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                   
                                                </svg>
                                            </div>
                                            Automated LinkedIn prospection
                                        </li>

                                      
                                        
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-primary-items">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                   
                                                </svg>
                                            </div>
                                            15 running campaigns
                                        </li>
                                       
                                        <li className="flex flex-row gap-8px">
                                            <div className="inline-block rounded-6px w-20px h-20px bg-primary-items">
                                                <svg
                                                    height={20}
                                                    width={20}
                                                    className="stroke-greyscale-light-03"
                                                >
                                                   
                                                </svg>
                                            </div>
                                            AI campaign and icebreakers
                                        </li>
                                    </ul>
                                </div>
                                <button
                                    className="rounded-12px inline-flex flex-row items-center border-primary justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium  hover:text-buttonNew-primaryOnBlue-hover active:text-buttonNew-primaryOnBlue-active focus:text-buttonNew-primaryOnBlue-focus disabled:text-buttonNew-primaryOnBlue-disabled bg-primary-items  focus:bg-white disabled:bg-buttonNew-primaryOnBlue-disabled border-[1px] border-buttonNew-primaryOnBlue hover:border-buttonNew-primaryOnBlue-hover active:border-buttonNew-primaryOnBlue-active disabled:border-buttonNew-primaryOnBlue-disabled shadow-none hover:shadow-buttonNew-primaryOnBlue-hover active:shadow-none focus:shadow-buttonNew-primaryOnBlue-focus disabled:shadow-buttonNew-primaryOnBlue-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primaryOnBlue before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity mt-auto"
                                >
                                     <a className=" z-1 relative " href="https://useartemis.co/upgrade/next?plan=826727"  >Get Started</a>
                                    
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
                                <svg width="42" height="42" viewBox="0 0 145 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M96.3475 119.848C96.3475 119.848 99.7457 121.595 103.753 124.667C107.138 127.262 119.488 132.337 123.236 133.849C124.469 134.346 123.713 134.486 122.62 134.881C114.464 137.827 78.8357 151.623 56.675 175.194C56.3431 175.547 56.3107 175.356 56.2419 174.95C55.7911 172.279 53.6691 161.379 48.1911 154.852C41.9134 147.372 36.6378 141.963 36.6378 141.963L35.0022 140.126L35.992 142.293C33.3131 143.649 22.8593 148.8 15.5045 150.423C14.2881 150.691 14.3525 150.542 15.5374 149.946C19.8694 147.77 32.005 141.508 34.3007 138.557C34.3007 138.557 47.1225 132.814 50.0611 130.944C52.9994 129.074 70.3624 122.797 96.3475 119.848Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4322 23.9612C89.5605 12.9391 91.0983 34.0188 101.217 36.6498C107.895 38.3859 116.502 46.2761 114.706 56.9511C112.302 71.2425 118.045 70.7082 124.723 80.3245C130.332 88.4009 129.817 101.376 127.609 108.173C126.912 110.321 124.769 111.697 121.088 112.481C106.65 115.557 64.2597 122.983 28.624 113.178C25.3915 112.289 22.6971 111.903 21.0291 108.585C19.0014 104.552 15.9238 96.7506 18.2746 90.0747C21.6135 80.5917 28.0246 78.1877 24.6857 66.4341C21.3465 54.6809 39.3771 53.8792 41.2471 42.5267C43.1171 31.1739 55.5382 13.8109 71.4322 23.9612Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.87 40.6568C55.838 39.7532 67.4082 33.7094 84.9215 40.1228C84.9215 40.1228 90.8648 44.7306 90.8648 50.6072C90.8648 56.4842 87.593 63.496 90.6646 67.77C99.1276 79.5447 79.2756 81.0346 89.7295 92.3456C97.8769 101.16 74.4549 115.962 96.6504 116.441C96.6504 116.441 96.0072 120.928 96.4076 125.869C96.4076 125.869 77.9763 149.243 57.6747 171.414C57.6747 171.414 53.935 156.856 48.192 149.51C42.4486 142.164 53.1824 134.847 54.6029 129.876C56.0233 124.905 57.0909 114.553 56.9499 107.769C65.4591 113.415 77.3243 110.967 83.6331 104.472C84.2104 103.878 83.592 104.308 83.3716 104.422C72.3566 110.132 62.8081 110.483 56.4726 103.832C55.0067 102.293 52.065 98.7562 49.1267 89.8077C46.1884 80.8593 46.2416 74.9207 50.0617 68.3043C56.7871 56.6554 46.4272 49.0999 54.87 40.6568Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6084 88.238C58.5447 87.0359 60.3148 82.6616 62.1512 82.4281C63.9876 82.1942 63.8207 83.5633 64.8893 83.5633C65.9576 83.5633 66.0725 82.2786 67.9444 82.3779C70.1482 82.4947 73.504 87.9039 75.908 88.5718C75.908 88.5718 70.4651 92.2782 65.1228 92.5454C59.7802 92.8125 56.6084 88.238 56.6084 88.238Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.5001 56.2004C89.7408 56.3336 92.9179 60.3122 92.9179 65.5496C92.9179 70.7869 87.1362 75.5 81.8989 75.5C76.6618 75.5 73.1506 69.9186 72.6832 64.6145C72.2156 59.3105 75.2594 56.0668 82.5001 56.2004Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.5223 56.4366C48.8543 56.1489 46.2653 57.8726 45.5339 62.6821C44.8022 67.4917 48.919 72.7945 53.7286 73.5262C58.5382 74.2576 62.4087 70.057 63.5788 65.2515C64.7492 60.446 62.1901 56.7246 55.5223 56.4366Z" fill="#212121"/>
                                    <path d="M63.665 63.8732L62.9404 62.7813L63.3738 62.3105C63.3801 62.304 65.0549 59.8452 68.0389 60.069C70.2409 60.2341 72.2544 61.4645 73.5491 63.1219L72.8264 64.2422C71.7463 62.8598 69.9454 61.5754 68.0776 61.4353C66.1714 61.2924 64.8662 62.5677 63.665 63.8732Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M76.0394 56.7053C75.4715 56.5385 74.8198 55.1984 75.2872 54.3969C75.7549 53.5955 82.0322 52.3936 85.1041 52.7274C88.1759 53.0615 91.515 53.7291 93.9859 55.265C96.4569 56.8012 94.6485 57.6752 90.4414 56.0213C86.234 54.367 80.8808 55.0358 76.0394 56.7053Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7705 56.6271C61.3381 56.4602 61.9897 55.1201 61.5224 54.319C61.055 53.5175 54.7774 52.3154 51.7055 52.6491C48.6337 52.9832 45.2946 53.6511 42.8237 55.187C40.353 56.723 42.1614 57.5973 46.3685 55.943C50.5756 54.2891 55.9288 54.9576 60.7705 56.6271Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0976 74.1299C62.4681 73.713 63.0314 73.8101 63.3972 74.0315C64.3391 74.6001 63.4757 77.4515 61.9267 76.7432C61.2815 76.448 61.6004 74.6891 62.0976 74.1299Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.1107 74.1304C68.623 73.2424 71.1219 74.704 71.3801 76.0677C71.6136 77.3032 69.51 77.5034 68.9757 77.036C68.4682 76.592 68.4016 75.8239 67.1577 74.4424C67.0135 74.2824 66.9647 74.2161 67.1107 74.1304Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4083 69.5668C63.6798 68.998 63.9152 68.4089 64.1291 67.8164C64.6407 66.4 65.0529 64.9142 65.3898 63.4458C65.4041 63.3842 65.4163 63.3216 65.43 63.2596C65.4586 63.1323 65.4941 62.8978 65.6728 62.9093C65.8528 62.9209 65.8491 63.1435 65.8528 63.2718C65.8818 64.2687 65.6816 65.3722 65.4116 66.3287C65.0647 67.5576 64.5361 68.7694 63.8249 69.8321C63.7125 69.9999 63.5973 70.1721 63.4743 70.3325C63.4005 70.4293 63.2881 70.584 63.1443 70.4947C62.9609 70.381 63.1732 70.0398 63.2364 69.9109C63.2925 69.796 63.3532 69.6823 63.4083 69.5668Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7497 73.5357C60.4629 74.6476 60.3384 76.2832 61.2401 77.169C61.256 77.1845 61.2718 77.1998 61.2868 77.2163C61.3497 77.2845 61.3976 77.3729 61.3382 77.4654C61.2544 77.5955 61.1093 77.5295 61.0072 77.4754C60.5212 77.2163 60.1734 76.6216 60.0277 76.1082C59.7674 75.1909 59.9872 74.2269 60.4103 73.395C60.419 73.3779 60.4271 73.3607 60.4355 73.3439C60.4458 73.3234 60.4561 73.3031 60.4676 73.2835C60.5093 73.2132 60.5834 73.1646 60.6703 73.192C60.835 73.2443 60.779 73.4221 60.7497 73.5357Z" fill="#212121"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3687 72.463C72.3126 72.3429 72.1716 72.1165 72.3257 72.0122C72.4708 71.9141 72.6019 72.0872 72.6856 72.1794C73.7527 73.3541 74.3452 75.9269 73.6785 77.4003C73.2831 78.2746 72.2939 78.4496 71.4336 78.3783C71.2932 78.3664 70.9258 78.3745 70.9342 78.1575C70.942 77.9579 71.2471 77.9732 71.3813 77.9582C72.6305 77.8197 73.2675 76.9712 73.2573 75.7504C73.2486 74.6768 72.8176 73.4276 72.3687 72.463Z" fill="#212121"/>
                                </svg>
                                </div>
                                <div className="flex flex-col gap-12px pb-4px">
                                    <h3 className="typography-p1-strong">Enterprise</h3>
                                    <div>
                                        <div className="flex flex-row items-start gap-8px">
                                            <div className="typography-h3-strong">
                                                <div className="relative inline-block">
                                                    <div className="relative">From $299</div>
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

                                    </ul>
                                </div>
                                <div id="my_custom_link"
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