// React
import { FC, useState } from "react"
// Components
import { Video } from "./video"
import Screenshot from 'assets/images/screen2-min.png'
import Link from "next/link"
import Image from 'next/image'


type OwnProps = {
    style?: object,
}

export const Hero: FC<OwnProps> = (props) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)


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
                                    New 
                                </span>
                               
                                <div className="flex items-center ">
                                    Auto write Invite notes with ChatGPT
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
                        <h1 className="typography-h0-mobile max-tablet:px-24px tablet:pt-25px tablet:typography-h0-strong text-typography-light-primary text-center slide-down [font-kerning:none]">
                            Magic 
                            <br /> <span className="">lead machine</span>.
                        </h1>
                        <h2 className="mt-20px mx-auto max-tablet:px-[14px] typography-p3-medium tablet:typography-p2-medium text-typography-light-secondary max-w-[550px] text-center slide-down animation-delay-[300ms]">
                        Supercharge your outreach efforts, extract and enrich leads then start multichannel campaigns through Linkedin and Emails.
                        </h2>
                        <div className="relative z-10 mt-32px flex flex-row justify-center gap-12px pb-10px slide-down animation-delay-[750ms]">
                            <Link
                                href="/pricing"
                                className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-primary hover:text-buttonNew-primary-hover active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary hover:bg-buttonNew-primary active:bg-buttonNew-primary-active focus:bg-buttonNew-primary-active disabled:bg-buttonNew-primary-disabled border-[1px] border-buttonNew-primary hover:border-buttonNew-primary-hover disabled:border-buttonNew-primary-disabled shadow-buttonNew-primary hover:shadow-buttonNew-primary-hover active:shadow-none focus:shadow-buttonNew-primary-focus disabled:shadow-buttonNew-primary-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity text-center"
                            >
                                <span className="z-1 relative">14-day free trial</span>
                            </Link>
                            <button
                                className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus text-center"
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:R19hhp:"
                                data-state="closed"
                                id="my_custom_link"
                            >
                                <span className="z-1 ">Talk to sales</span>
                            </button>
                        </div>
                        <div className="w-[130%] phablet:w-[100%] centered-container mt-[24px] phablet:mt-[12px] tablet:mt-[0px] px-[0px] phablet:px-[32px] tablet:px-[64px] relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={1600}
                                height={843}
                                viewBox="0 0 1600 843"
                                fill="none"
                                className="w-[100%] max-w-[1600px] h-[auto]"
                            >
                                <g clipPath="url(#clip0_889_168141)">
                                    <path
                                        d="M0 0H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[50ms]"
                                    />
                                    <path
                                        d="M0 37H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[100ms]"
                                    />
                                    <path
                                        d="M0 74.5H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[150ms]"
                                    />
                                    <path
                                        d="M0 118.5H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[200ms]"
                                    />
                                    <path
                                        d="M0 178.3H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[250ms]"
                                    />
                                    <path
                                        d="M0 219.2H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[300ms]"
                                    />
                                    <path
                                        d="M0 260.1H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[350ms]"
                                    />
                                    <path
                                        d="M0 300.8H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[400ms]"
                                    />
                                    <path
                                        d="M0 341.7H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[450ms]"
                                    />
                                    <path
                                        d="M0 382.6H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[500ms]"
                                    />
                                    <path
                                        d="M0 423.5H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[550ms]"
                                    />
                                    <path
                                        d="M0 464.3H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[600ms]"
                                    />
                                    <path
                                        d="M0 505.2H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[650ms]"
                                    />
                                    <path
                                        d="M0 545.9H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[700ms]"
                                    />
                                    <path
                                        d="M0 586.8H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[750ms]"
                                    />
                                    <path
                                        d="M0 627.7H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[800ms]"
                                    />
                                    <path
                                        d="M0 668.5H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[850ms]"
                                    />
                                    <path
                                        d="M0 709.3H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[900ms]"
                                    />
                                    <path
                                        d="M0 750.5H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[1050ms]"
                                    />
                                    <path
                                        d="M0 791.7H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[950ms]"
                                    />
                                    <path
                                        d="M0 832.9H1600"
                                        stroke="#DEE2E7"
                                        className="grid-line-horizontal animation-delay-[1000ms]"
                                    />
                                    <path
                                        d="M82.5 920L82.5 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[50ms]"
                                    />
                                    <path
                                        d="M199.5 920L199.5 -9.89437e-06"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[100ms]"
                                    />
                                    <path
                                        d="M317,5 920L317,5 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[150ms]"
                                    />
                                    <path
                                        d="M434.8 920L434.8 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[200ms]"
                                    />
                                    <path
                                        d="M552.5 920L552.5 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[250ms]"
                                    />
                                    <path
                                        d="M670 920L670 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[300ms]"
                                    />
                                    <path
                                        d="M787.5 920L787.5 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[350ms]"
                                    />
                                    <path
                                        d="M905 920L905 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[400ms]"
                                    />
                                    <path
                                        d="M1022.5 920L1022.5 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[450ms]"
                                    />
                                    <path
                                        d="M1140.3 920L1140.3 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[550ms]"
                                    />
                                    <path
                                        d="M1270.5 920L1270.5 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[500ms]"
                                    />
                                    <path
                                        d="M1400.5 920L1400.5 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[600ms]"
                                    />
                                    <path
                                        d="M1517.5 920L1517.5 3.83295e-05"
                                        stroke="#DEE2E7"
                                        className="grid-line-vertical animation-delay-[650ms]"
                                    />
                                    <ellipse
                                        cx={800}
                                        cy="-103.5"
                                        rx={605}
                                        ry="262.5"
                                        fill="url(#paint0_radial_889_168141)"
                                    />
                                </g>
                                <path
                                    d="M0 74.5H1600"
                                    stroke="#C6CDD8"
                                    className="grid-line-horizontal animation-delay-[100ms]"
                                />
                                <path
                                    d="M0 750.5H1600"
                                    stroke="#C6CDD8"
                                    className="grid-line-horizontal animation-delay-[1050ms]"
                                />
                                <path
                                    d="M199.5 920L199.5 -9.89437e-06"
                                    stroke="#C6CDD8"
                                    className="grid-line-vertical animation-delay-[100ms]"
                                />
                                <path
                                    d="M1400.5 920L1400.5 3.83295e-05"
                                    stroke="#C6CDD8"
                                    className="grid-line-vertical animation-delay-[600ms]"
                                />
                                <defs>
                                    <filter
                                        id="filter0_dd_889_168141"
                                        x={204}
                                        y={153}
                                        width={232}
                                        height={39}
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feMorphology
                                            radius={1}
                                            operator="dilate"
                                            in="SourceAlpha"
                                            result="effect1_dropShadow_889_168141"
                                        />
                                        <feOffset />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_889_168141"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy={1} />
                                        <feGaussianBlur stdDeviation={2} />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="effect1_dropShadow_889_168141"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect2_dropShadow_889_168141"
                                            result="shape"
                                        />
                                    </filter>
                                    <filter
                                        id="filter1_dd_889_168141"
                                        x={446}
                                        y={154}
                                        width={122}
                                        height={36}
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy={1} />
                                        <feGaussianBlur stdDeviation={2} />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_889_168141"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feMorphology
                                            radius={1}
                                            operator="dilate"
                                            in="SourceAlpha"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feOffset />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="effect1_dropShadow_889_168141"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect2_dropShadow_889_168141"
                                            result="shape"
                                        />
                                    </filter>
                                    <filter
                                        id="filter2_dd_889_168141"
                                        x={568}
                                        y={154}
                                        width={91}
                                        height={36}
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feMorphology
                                            radius={1}
                                            operator="dilate"
                                            in="SourceAlpha"
                                            result="effect1_dropShadow_889_168141"
                                        />
                                        <feOffset />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_889_168141"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy={1} />
                                        <feGaussianBlur stdDeviation={2} />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="effect1_dropShadow_889_168141"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect2_dropShadow_889_168141"
                                            result="shape"
                                        />
                                    </filter>
                                    <filter
                                        id="filter3_dd_889_168141"
                                        x={659}
                                        y={154}
                                        width={68}
                                        height={36}
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy={1} />
                                        <feGaussianBlur stdDeviation={2} />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_889_168141"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feMorphology
                                            radius={1}
                                            operator="dilate"
                                            in="SourceAlpha"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feOffset />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="effect1_dropShadow_889_168141"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect2_dropShadow_889_168141"
                                            result="shape"
                                        />
                                    </filter>
                                    <filter
                                        id="filter4_dd_889_168141"
                                        x={1118}
                                        y={154}
                                        width={124}
                                        height={36}
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy={1} />
                                        <feGaussianBlur stdDeviation={2} />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_889_168141"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feMorphology
                                            radius={1}
                                            operator="dilate"
                                            in="SourceAlpha"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feOffset />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="effect1_dropShadow_889_168141"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect2_dropShadow_889_168141"
                                            result="shape"
                                        />
                                    </filter>
                                    <filter
                                        id="filter5_dd_889_168141"
                                        x={1242}
                                        y={154}
                                        width={146}
                                        height={36}
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy={1} />
                                        <feGaussianBlur stdDeviation={2} />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_889_168141"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feMorphology
                                            radius={1}
                                            operator="dilate"
                                            in="SourceAlpha"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feOffset />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="effect1_dropShadow_889_168141"
                                            result="effect2_dropShadow_889_168141"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect2_dropShadow_889_168141"
                                            result="shape"
                                        />
                                    </filter>
                                    <radialGradient
                                        id="paint0_radial_889_168141"
                                        cx={0}
                                        cy={0}
                                        r={1}
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(800 -103.5) scale(735.992 319.335)"
                                    >
                                        <stop offset="0.470178" stopColor="#FBFBFB" />
                                        <stop offset={1} stopColor="#FBFBFB" stopOpacity={0} />
                                    </radialGradient>
                                    <clipPath id="clip0_889_168141">
                                        <rect width={1600} height={920} fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_889_168141">
                                        <rect x={200} y={104} width={1200} height={736} fill="white" />
                                    </clipPath>
                                    <clipPath id="clip2_889_168141">
                                        <path d="M200 104H1400V840H200V104Z" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip3_889_168141">
                                        <rect
                                            width="972.27"
                                            height="665.511"
                                            fill="white"
                                            transform="translate(441.248 150.794)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="attio-hero-img  attio-hero-fade-in animation-duration-[3000ms] shadow-home-hero-screen-preview-mobile tablet:shadow-home-hero-screen-preview-desktop">
                         
                                <img
                                    src={Screenshot.src}
                                    className="w-full h-full"
                                />
                              

                               
                                
                                {isVideoPlaying && (
                                    <Video />
                                )}
                                {!isVideoPlaying && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tablet:-translate-y-[65%] tablet:scale-[1.2]">
                                        <div className="absolute inset-0 bg-[radial-gradient(theme(colors.attio.blue.main)_27.08%,_theme(colors.attio.blue.main)_100%)] border border-white rounded-full animate-[hero-ripple-outer_4s_ease-out_infinite]" />
                                        <div className="absolute inset-0 bg-[radial-gradient(theme(colors.attio.blue.main)_27.08%,_theme(colors.attio.blue.main)_100%)] border border-white rounded-full animate-[hero-ripple-inner_4s_ease-out_infinite]" />
                                        <button className="animate-[hero-pulse_4s_ease-out_infinite] relative p-[21px] rounded-full transition-all bg-buttonNew-primaryOnDark border border-buttonNew-primaryOnDark hover:bg-button-gradient-primaryOnDark hover:border-buttonNew-primaryOnDark-hover active:bg-buttonNew-primaryOnDark-active active:border-buttonNew-primaryOnDark-active focus:bg-buttonNew-primaryOnDark-focus focus:border-buttonNew-primaryOnDark-focus ring-0 ring-attio-blue ring-offset-1 ring-offset-white"
                                            onClick={() => setIsVideoPlaying(true)}>
                                            <svg
                                                width={26}
                                                height={26}
                                                viewBox="0 0 26 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M21.5429 10.4266C23.0055 11.2711 23.7369 11.6933 23.9823 12.2446C24.1964 12.7254 24.1964 13.2745 23.9823 13.7553C23.7369 14.3065 23.0055 14.7288 21.5429 15.5732L10.9572 21.6849C9.49456 22.5293 8.76323 22.9516 8.16312 22.8885C7.63968 22.8335 7.16416 22.5589 6.85479 22.1331C6.50011 21.645 6.50011 20.8005 6.50011 19.1116L6.50011 6.88828C6.50011 5.19935 6.50011 4.35488 6.8548 3.86671C7.16416 3.4409 7.63968 3.16636 8.16312 3.11134C8.76323 3.04827 9.49456 3.4705 10.9572 4.31497L21.5429 10.4266Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}