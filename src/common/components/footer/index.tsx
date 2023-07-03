// React
import { FC } from "react";
// Next
import Link from "next/link";
// Font Awesome
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: FC = () => {

    return (
        <>
            <div className="bg-background-dark-primary text-white relative">
                <div className="flex flex-col gap-40px phablet:gap-32px pt-40px pb-20px phablet:py-64px px-24px mx-auto w-full max-w-page">
                    <div className="flex flex-row justify-between">
                        <a href="#/" aria-label="Home">
                            <svg
                                className="h-32px fill-white"
                                viewBox="0 0 100 40"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M81.7733 6.10431H77.6621V10.2155H81.7733V6.10431Z" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M65.7696 16.6603H62.1593V23.3409C62.1593 23.8977 62.2976 24.3051 62.576 24.5611C62.8544 24.819 63.2618 24.9685 63.7963 25.0115C64.3307 25.032 64.996 25.0227 65.7883 24.9797V28.7377C62.9834 29.0591 60.982 28.8012 59.7823 27.9678C58.605 27.1119 58.0164 25.5702 58.0164 23.3427V16.6621H55.2227V12.678H58.0164V9.43398L62.1593 8.18195V12.6799H68.5633V9.43585L72.7062 8.18381V12.6818H76.3353V16.6659H72.7062V23.3465C72.7062 23.9034 72.8445 24.3107 73.123 24.5667C73.4014 24.8246 73.8088 24.9741 74.3432 25.0171C74.8777 25.0377 75.5429 25.0283 76.3334 24.9853V28.7433C73.5285 29.0647 71.5271 28.8068 70.3274 27.9734C69.1501 27.1175 68.5615 25.5758 68.5615 23.3483V16.6677H65.7678L65.7696 16.6603Z"
                                />
                                <path d="M81.7933 12.6742H77.6504V28.7357H81.7933V12.6742Z" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M91.554 12.2572C86.8897 12.2572 83.1074 16.0395 83.1074 20.7056C83.1074 25.3718 86.8897 29.154 91.554 29.154C96.2183 29.154 100.001 25.3718 100.001 20.7056C100.001 16.0395 96.2201 12.2572 91.554 12.2572ZM91.539 25.1718C89.0648 25.1718 87.0579 23.1648 87.0579 20.6907C87.0579 18.2165 89.0648 16.2095 91.539 16.2095C94.0132 16.2095 96.0183 18.2146 96.0183 20.6907C96.0183 23.1667 94.0132 25.1718 91.539 25.1718Z"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M49.7918 12.6422V13.5335C48.4968 12.7262 46.9682 12.2572 45.3294 12.2572C40.6651 12.2572 36.8828 16.0395 36.8828 20.7056C36.8828 25.3718 40.6651 29.154 45.3294 29.154C46.9682 29.154 48.4968 28.6868 49.7918 27.8777V28.7691H53.903V12.6422H49.7918ZM45.3144 25.1718C42.8402 25.1718 40.8333 23.1648 40.8333 20.6907C40.8333 18.2165 42.8402 16.2095 45.3144 16.2095C47.7886 16.2095 49.7526 18.1754 49.7918 20.6159V20.7635C49.7526 23.2041 47.7643 25.1699 45.3144 25.1699V25.1718Z"
                                />
                                <path d="M29.7538 22.3617L27.2422 18.3421C27.2422 18.3421 27.2329 18.3253 27.2273 18.3178L27.0292 18.002C26.6555 17.4022 26.0089 17.0434 25.3025 17.0415L21.2568 17.0284L20.9746 17.4807L16.1403 25.2171L15.873 25.645L17.8987 28.8816C18.2725 29.4834 18.919 29.8421 19.631 29.8421H25.3007C25.9996 29.8421 26.6611 29.474 27.0311 28.8835L27.231 28.564C27.231 28.564 27.2385 28.5546 27.2404 28.5509L29.7556 24.5257C30.1686 23.8679 30.1686 23.0176 29.7556 22.3617H29.7538ZM28.9876 24.0454L26.4723 28.0706C26.4611 28.0893 26.448 28.1042 26.4368 28.1192C26.349 28.2182 26.235 28.2313 26.1846 28.2313C26.1266 28.2313 25.9846 28.2145 25.893 28.0687L23.3778 24.0436C23.3497 23.9987 23.3254 23.952 23.303 23.9015C23.2806 23.8529 23.2638 23.8044 23.2488 23.7539C23.1928 23.5521 23.1928 23.3353 23.2488 23.1335C23.2769 23.0345 23.3198 22.9354 23.3759 22.8457L25.8874 18.8243C25.8874 18.8243 25.8912 18.8187 25.893 18.8149C25.9528 18.7252 26.0276 18.6841 26.093 18.671C26.1192 18.6636 26.1416 18.6617 26.1603 18.658C26.1696 18.658 26.1789 18.658 26.1883 18.658C26.2462 18.658 26.3901 18.6766 26.4798 18.8224L28.9913 22.842C29.2212 23.2082 29.2212 23.6792 28.9913 24.0454H28.9876Z" />
                                <path d="M22.3217 12.6358C22.7328 11.9761 22.7328 11.1277 22.3217 10.4718L19.8101 6.45222L19.6008 6.11398C19.2252 5.51413 18.5787 5.15533 17.8685 5.15533H12.1989C11.4907 5.15533 10.8441 5.51413 10.4666 6.11585L0.313942 22.3642C0.110254 22.6894 0 23.065 0 23.4462C0 23.8274 0.108385 24.203 0.312074 24.5263L3.03478 28.886C3.41038 29.4877 4.05696 29.8446 4.76519 29.8446H10.4348C11.1468 29.8446 11.7934 29.4859 12.1671 28.8841L12.3746 28.5552C12.3746 28.5552 12.3746 28.5552 12.3746 28.5515C12.3746 28.5515 12.3783 28.5459 12.3783 28.544L14.4021 25.3074L20.4006 15.7079L22.3179 12.6376L22.3217 12.6358ZM21.7293 11.5538C21.7293 11.7612 21.6714 11.9705 21.5536 12.1555L11.6084 28.0731C11.5187 28.217 11.3748 28.2338 11.3169 28.2338C11.2589 28.2338 11.1169 28.217 11.0254 28.0731L8.51195 24.0461C8.28396 23.6817 8.28396 23.2126 8.51195 22.8445L18.4572 6.9306C18.5469 6.78484 18.6908 6.76803 18.7487 6.76803C18.8066 6.76803 18.9505 6.78484 19.0421 6.93247L21.5536 10.9521C21.6714 11.1371 21.7293 11.3463 21.7293 11.5538Z" />
                            </svg>
                        </a>
                        <div className="block phablet:hidden">
                            <div className="flex flex-row items-center">
                                <a
                                    className="py-[6px] px-[6px] hover:text-white"
                                    href="https://twitter.com/attio"
                                    target="_blank"
                                    aria-label="Twitter"
                                    rel="noopener"
                                >
                                    <svg
                                        width={16}
                                        height={17}
                                        className=""
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.9">
                                            <path
                                                d="M5.71885 14.5766C11.3778 14.5766 14.4739 9.88707 14.4739 5.82154C14.4739 5.68971 14.471 5.55494 14.4651 5.42311C15.0674 4.98754 15.5872 4.44804 16 3.82994C15.4391 4.0795 14.8435 4.24249 14.2337 4.31334C14.8758 3.92845 15.3566 3.3238 15.5869 2.61148C14.9828 2.96948 14.3222 3.22201 13.6334 3.35826C13.1693 2.86511 12.5556 2.53858 11.8873 2.42916C11.219 2.31975 10.5332 2.43354 9.93609 2.75294C9.33893 3.07234 8.86363 3.57957 8.58365 4.1962C8.30368 4.81283 8.23464 5.50451 8.38721 6.16432C7.16406 6.10294 5.96746 5.7852 4.87499 5.23169C3.78252 4.67819 2.81856 3.90128 2.04561 2.95133C1.65275 3.62866 1.53254 4.43016 1.70939 5.19294C1.88625 5.95572 2.34691 6.62253 2.99775 7.05787C2.50914 7.04236 2.03123 6.91081 1.60352 6.67408V6.71217C1.60308 7.42297 1.84881 8.112 2.29894 8.66211C2.74908 9.21223 3.37583 9.58948 4.07266 9.72975C3.62003 9.85359 3.14499 9.87163 2.68428 9.78248C2.88091 10.3938 3.26348 10.9284 3.77861 11.3118C4.29373 11.6952 4.9157 11.9083 5.55771 11.9212C4.46777 12.7773 3.12136 13.2417 1.73535 13.2395C1.48955 13.2391 1.244 13.2241 1 13.1944C2.40804 14.0977 4.04596 14.5775 5.71885 14.5766Z"
                                                className=""
                                                fill="currentColor"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                <a
                                    className="py-[6px] px-[6px] hover:text-white"
                                    href="https://dribbble.com/attio"
                                    target="_blank"
                                    aria-label="Dribbble"
                                >
                                    <svg
                                        width={16}
                                        height={17}
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.9">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8 1.38867C4.13558 1.38867 1 4.52425 1 8.38867C1 12.2531 4.13558 15.3887 8 15.3887C11.8568 15.3887 15 12.2531 15 8.38867C15 4.52425 11.8568 1.38867 8 1.38867ZM12.6236 4.61535C13.4588 5.63271 13.9599 6.93097 13.9751 8.33552C13.7777 8.29758 11.8037 7.89517 9.81453 8.14573C9.76899 8.04703 9.73101 7.94072 9.68547 7.83445C9.56398 7.54596 9.42734 7.24986 9.29067 6.96894C11.4924 6.07307 12.4946 4.78238 12.6236 4.61535ZM8 2.42121C9.51843 2.42121 10.9078 2.99063 11.9631 3.92447C11.8568 4.07631 10.9533 5.28347 8.82753 6.08064C7.84814 4.28129 6.76249 2.80841 6.59545 2.58064C7.04336 2.47435 7.51411 2.42121 8 2.42121ZM5.45664 2.98303C5.61606 3.19561 6.67897 4.67609 7.67354 6.43747C4.87961 7.18152 2.41215 7.16634 2.14642 7.16634C2.53362 5.31383 3.78633 3.77262 5.45664 2.98303ZM2.01735 8.39628C2.01735 8.33552 2.01735 8.27479 2.01735 8.21407C2.27549 8.22163 5.17571 8.25961 8.15943 7.36374C8.33408 7.69777 8.4935 8.03942 8.64536 8.38106C8.56941 8.40385 8.48589 8.42665 8.40998 8.4494C5.32755 9.44397 3.68764 12.162 3.55098 12.3897C2.60195 11.3344 2.01735 9.9299 2.01735 8.39628ZM8 14.3713C6.6182 14.3713 5.34273 13.9006 4.33297 13.111C4.43926 12.8909 5.65399 10.5525 9.02493 9.37567C9.04011 9.36806 9.04773 9.36806 9.06291 9.36049C9.90562 11.5394 10.2473 13.3691 10.3384 13.893C9.61713 14.2043 8.82753 14.3713 8 14.3713ZM11.333 13.3464C11.2722 12.9819 10.9533 11.2357 10.1714 9.08714C12.0467 8.79104 13.6865 9.27697 13.8916 9.34531C13.6334 11.008 12.6768 12.4429 11.333 13.3464Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                <a
                                    className="py-[6px] px-[6px] -mr-[6px] hover:text-white"
                                    href="https://linkedin.com/company/attio"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                    rel="noopener"
                                >
                                    <svg
                                        width={16}
                                        height={17}
                                        className=""
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.9">
                                            <path
                                                d="M13.9637 1.38867H2.03359C1.46211 1.38867 1 1.83984 1 2.39766V14.377C1 14.9348 1.46211 15.3887 2.03359 15.3887H13.9637C14.5352 15.3887 15 14.9348 15 14.3797V2.39766C15 1.83984 14.5352 1.38867 13.9637 1.38867ZM5.15352 13.3187H3.07539V6.63594H5.15352V13.3187ZM4.11445 5.72539C3.44727 5.72539 2.90859 5.18672 2.90859 4.52227C2.90859 3.85781 3.44727 3.31914 4.11445 3.31914C4.77891 3.31914 5.31758 3.85781 5.31758 4.52227C5.31758 5.18398 4.77891 5.72539 4.11445 5.72539ZM12.9301 13.3187H10.8547V10.0703C10.8547 9.29648 10.841 8.29844 9.77461 8.29844C8.69453 8.29844 8.53047 9.14336 8.53047 10.0156V13.3187H6.45781V6.63594H8.44844V7.54922H8.47578C8.75195 7.02422 9.43008 6.46914 10.4391 6.46914C12.5418 6.46914 12.9301 7.85273 12.9301 9.65195V13.3187Z"
                                                className=""
                                                fill="currentColor"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col w-full phablet:flex-row gap-12px justify-between tablet:gap-36px">
                            <div className="flex flex-col gap-12px phablet:gap-16px bg-background-dark-tertiary phablet:bg-transparent rounded-8px px-20px py-8px phablet:p-0">
                                <button className="flex flex-row justify-between items-center">
                                    <div className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-category py-8px phablet:p-0">
                                        Product
                                    </div>
                                    <div className="flex items-center phablet:hidden transition-transform duration-200">
                                        <svg height={15} width={32} className="icon-tertiary">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </svg>
                                    </div>
                                </button>
                                <div className="flex phablet:flex flex-col gap-12px phablet:gap-8px pb-8px hidden">
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/changelog"
                                    >
                                        Changelog
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/customers"
                                    >
                                        Customer stories
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/security"
                                    >
                                        Security
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        target="_blank"
                                        href="https://chrome.google.com/webstore/detail/attio/legacbojjmajoedfolbjlekjjkepadph/"
                                    >
                                        Chrome extension
                                        <svg
                                            width={17}
                                            height={21}
                                            viewBox="0 0 17 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_458_54632)">
                                                <path
                                                    d="M3.59998 13.2204L9.59998 7.22037"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                                <path
                                                    d="M4.09996 7.22037H9.59996V12.7204"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_458_54632">
                                                    <rect
                                                        width={16}
                                                        height={20}
                                                        fill="currentColor"
                                                        transform="translate(0.599976 0.220398)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        target="_blank"
                                        href="https://apps.apple.com/gb/app/attio/id1511545395"
                                    >
                                        iOS app
                                        <svg
                                            width={17}
                                            height={21}
                                            viewBox="0 0 17 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_458_54632)">
                                                <path
                                                    d="M3.59998 13.2204L9.59998 7.22037"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                                <path
                                                    d="M4.09996 7.22037H9.59996V12.7204"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_458_54632">
                                                    <rect
                                                        width={16}
                                                        height={20}
                                                        fill="currentColor"
                                                        transform="translate(0.599976 0.220398)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.attio&gl=GB"
                                    >
                                        Android app
                                        <svg
                                            width={17}
                                            height={21}
                                            viewBox="0 0 17 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_458_54632)">
                                                <path
                                                    d="M3.59998 13.2204L9.59998 7.22037"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                                <path
                                                    d="M4.09996 7.22037H9.59996V12.7204"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_458_54632">
                                                    <rect
                                                        width={16}
                                                        height={20}
                                                        fill="currentColor"
                                                        transform="translate(0.599976 0.220398)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        target="_blank"
                                        href="https://zapier.com/apps/attio/integrations"
                                    >
                                        Zapier
                                        <svg
                                            width={17}
                                            height={21}
                                            viewBox="0 0 17 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_458_54632)">
                                                <path
                                                    d="M3.59998 13.2204L9.59998 7.22037"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                                <path
                                                    d="M4.09996 7.22037H9.59996V12.7204"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_458_54632">
                                                    <rect
                                                        width={16}
                                                        height={20}
                                                        fill="currentColor"
                                                        transform="translate(0.599976 0.220398)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        target="_blank"
                                        href="https://www.integromat.com/en/integrations/attio"
                                    >
                                        Integromat
                                        <svg
                                            width={17}
                                            height={21}
                                            viewBox="0 0 17 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_458_54632)">
                                                <path
                                                    d="M3.59998 13.2204L9.59998 7.22037"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                                <path
                                                    d="M4.09996 7.22037H9.59996V12.7204"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_458_54632">
                                                    <rect
                                                        width={16}
                                                        height={20}
                                                        fill="currentColor"
                                                        transform="translate(0.599976 0.220398)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-12px phablet:gap-16px bg-background-dark-tertiary phablet:bg-transparent rounded-8px px-20px py-8px phablet:p-0">
                                <button className="flex flex-row justify-between items-center">
                                    <div className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-category py-8px phablet:p-0">
                                        Company
                                    </div>
                                    <div className="flex items-center phablet:hidden transition-transform duration-200">
                                        <svg height={15} width={32} className="icon-tertiary">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </svg>
                                    </div>
                                </button>
                                <div className="flex phablet:flex flex-col gap-12px phablet:gap-8px pb-8px hidden">
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/about"
                                    >
                                        About
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/careers"
                                    >
                                        Careers
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/blog"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/startups"
                                    >
                                        Startup program
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-12px phablet:gap-16px bg-background-dark-tertiary phablet:bg-transparent rounded-8px px-20px py-8px phablet:p-0">
                                <button className="flex flex-row justify-between items-center">
                                    <div className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-category py-8px phablet:p-0">
                                        Attio for
                                    </div>
                                    <div className="flex items-center phablet:hidden transition-transform duration-200">
                                        <svg height={15} width={32} className="icon-tertiary">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </svg>
                                    </div>
                                </button>
                                <div className="flex phablet:flex flex-col gap-12px phablet:gap-8px pb-8px hidden">
                                    <Link
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/solution/startup-crm"
                                    >
                                        Startups
                                    </Link>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/solution/deal-flow-management-software"
                                    >
                                        Deal flow
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-12px phablet:gap-16px bg-background-dark-tertiary phablet:bg-transparent rounded-8px px-20px py-8px phablet:p-0">
                                <button className="flex flex-row justify-between items-center">
                                    <div className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-category py-8px phablet:p-0">
                                        Support
                                    </div>
                                    <div className="flex items-center phablet:hidden transition-transform duration-200">
                                        <svg height={32} width={32} className="icon-tertiary">
                                            <use
                                                href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                                height={32}
                                                width={32}
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <div className="flex phablet:flex flex-col gap-12px phablet:gap-8px pb-8px hidden">
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="/help"
                                    >
                                        Help center
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        href="mailto:support@attio.com"
                                    >
                                        Talk to support
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        target="_blank"
                                        href="/developers/introduction"
                                    >
                                        API docs
                                        <svg
                                            width={17}
                                            height={21}
                                            viewBox="0 0 17 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_458_54632)">
                                                <path
                                                    d="M3.59998 13.2204L9.59998 7.22037"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                                <path
                                                    d="M4.09996 7.22037H9.59996V12.7204"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_458_54632">
                                                    <rect
                                                        width={16}
                                                        height={20}
                                                        fill="currentColor"
                                                        transform="translate(0.599976 0.220398)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a
                                        className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                        target="_blank"
                                        href="https://status.attio.com/"
                                    >
                                        System status
                                        <svg
                                            width={17}
                                            height={21}
                                            viewBox="0 0 17 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_458_54632)">
                                                <path
                                                    d="M3.59998 13.2204L9.59998 7.22037"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                                <path
                                                    d="M4.09996 7.22037H9.59996V12.7204"
                                                    stroke="currentColor"
                                                    strokeWidth="1.3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_458_54632">
                                                    <rect
                                                        width={16}
                                                        height={20}
                                                        fill="currentColor"
                                                        transform="translate(0.599976 0.220398)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden tablet:flex flex-col gap-16px max-tablet:w-full max-tablet:flex-none">
                                <p className="typography-p5-medium text-[#9098A0]">Ready to build?</p>
                                <div className="flex flex-row tablet:flex-col gap-12px">
                                    <a
                                        href="https://app.attio.com/welcome/sign-in"
                                        className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-primaryOnDark hover:text-buttonNew-primaryOnDark-hover active:text-buttonNew-primaryOnDark-active disabled:text-buttonNew-primaryOnDark-disabled bg-buttonNew-primaryOnDark hover:bg-buttonNew-primaryOnDark active:bg-buttonNew-primaryOnDark-active disabled:bg-buttonNew-primaryOnDark-disabled border-[1px] border-buttonNew-primaryOnDark hover:border-buttonNew-primaryOnDark-hover active:border-buttonNew-primaryOnDark-active disabled:border-buttonNew-primaryOnDark-disabled shadow-buttonNew-primaryOnDark hover:shadow-buttonNew-primaryOnDark-hover active:shadow-none focus:shadow-buttonNew-primaryOnDark-focus disabled:shadow-buttonNew-primaryOnDark-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primaryOnDark before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                                    >
                                        <span className="z-1 relative">Start for free</span>
                                    </a>
                                    <button
                                        className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-secondaryOnDark hover:text-white enabled:active:text-white focus:text-white disabled:text-buttonNew-secondaryOnDark-disabled enabled:active:bg-buttonNew-secondaryOnDark-active focus:bg-buttonNew-secondaryOnDark-active border-[1px] border-buttonNew-secondaryOnDark hover:border-white enabled:active:border-white focus:border-white disabled:border-buttonNew-secondaryOnDark-disabled disabled shadow-none focus:shadow-buttonNew-secondaryOnDark-focus disabled:opacity-25 typography-p4-medium text-[#9098A0] flex flex-row items-center justify-center gap-4px py-12px w-[294px]"
                                        type="button"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="radix-:R1ahpp:"
                                        data-state="closed"
                                    >
                                        <span className="z-1 relative">Talk to sales</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-light-700 hidden phablet:block" />
                <div className="pt-20px pb-60px px-32px mx-auto max-w-page">
                    <div className="flex flex-col phablet:flex-row gap-8px items-center justify-between text-oncolor-tertiary text-[11px] font-normal font-inter -tracking-0.1px">
                        <div className="text-center">
                            © 2023 Attio Ltd. All rights reserved.
                        </div>
                        <div className="flex flex-row gap-4px items-center justify-end  text-[11px] font-normal font-inter -tracking-0.1px">
                            <a
                                className="hover:text-oncolor-primary transition"
                                href="/legal/terms-and-conditions"
                            >
                                Terms &amp; Conditions
                            </a>
                            <div>·</div>
                            <a
                                className="hover:text-oncolor-primary transition"
                                href="/legal/privacy"
                            >
                                Privacy Policy
                            </a>
                            <div className="hidden phablet:block pl-[25px]">
                                <div className="flex flex-row items-center">
                                    <a
                                        className="py-[6px] px-[6px] hover:text-white"
                                        href="https://twitter.com/attio"
                                        target="_blank"
                                        aria-label="Twitter"
                                        rel="noopener"
                                    >
                                        <svg
                                            width={16}
                                            height={17}
                                            className=""
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.9">
                                                <path
                                                    d="M5.71885 14.5766C11.3778 14.5766 14.4739 9.88707 14.4739 5.82154C14.4739 5.68971 14.471 5.55494 14.4651 5.42311C15.0674 4.98754 15.5872 4.44804 16 3.82994C15.4391 4.0795 14.8435 4.24249 14.2337 4.31334C14.8758 3.92845 15.3566 3.3238 15.5869 2.61148C14.9828 2.96948 14.3222 3.22201 13.6334 3.35826C13.1693 2.86511 12.5556 2.53858 11.8873 2.42916C11.219 2.31975 10.5332 2.43354 9.93609 2.75294C9.33893 3.07234 8.86363 3.57957 8.58365 4.1962C8.30368 4.81283 8.23464 5.50451 8.38721 6.16432C7.16406 6.10294 5.96746 5.7852 4.87499 5.23169C3.78252 4.67819 2.81856 3.90128 2.04561 2.95133C1.65275 3.62866 1.53254 4.43016 1.70939 5.19294C1.88625 5.95572 2.34691 6.62253 2.99775 7.05787C2.50914 7.04236 2.03123 6.91081 1.60352 6.67408V6.71217C1.60308 7.42297 1.84881 8.112 2.29894 8.66211C2.74908 9.21223 3.37583 9.58948 4.07266 9.72975C3.62003 9.85359 3.14499 9.87163 2.68428 9.78248C2.88091 10.3938 3.26348 10.9284 3.77861 11.3118C4.29373 11.6952 4.9157 11.9083 5.55771 11.9212C4.46777 12.7773 3.12136 13.2417 1.73535 13.2395C1.48955 13.2391 1.244 13.2241 1 13.1944C2.40804 14.0977 4.04596 14.5775 5.71885 14.5766Z"
                                                    className=""
                                                    fill="currentColor"
                                                />
                                            </g>
                                        </svg>
                                    </a>
                                    <a
                                        className="py-[6px] px-[6px] hover:text-white"
                                        href="https://dribbble.com/attio"
                                        target="_blank"
                                        aria-label="Dribbble"
                                    >
                                        <svg
                                            width={16}
                                            height={17}
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.9">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8 1.38867C4.13558 1.38867 1 4.52425 1 8.38867C1 12.2531 4.13558 15.3887 8 15.3887C11.8568 15.3887 15 12.2531 15 8.38867C15 4.52425 11.8568 1.38867 8 1.38867ZM12.6236 4.61535C13.4588 5.63271 13.9599 6.93097 13.9751 8.33552C13.7777 8.29758 11.8037 7.89517 9.81453 8.14573C9.76899 8.04703 9.73101 7.94072 9.68547 7.83445C9.56398 7.54596 9.42734 7.24986 9.29067 6.96894C11.4924 6.07307 12.4946 4.78238 12.6236 4.61535ZM8 2.42121C9.51843 2.42121 10.9078 2.99063 11.9631 3.92447C11.8568 4.07631 10.9533 5.28347 8.82753 6.08064C7.84814 4.28129 6.76249 2.80841 6.59545 2.58064C7.04336 2.47435 7.51411 2.42121 8 2.42121ZM5.45664 2.98303C5.61606 3.19561 6.67897 4.67609 7.67354 6.43747C4.87961 7.18152 2.41215 7.16634 2.14642 7.16634C2.53362 5.31383 3.78633 3.77262 5.45664 2.98303ZM2.01735 8.39628C2.01735 8.33552 2.01735 8.27479 2.01735 8.21407C2.27549 8.22163 5.17571 8.25961 8.15943 7.36374C8.33408 7.69777 8.4935 8.03942 8.64536 8.38106C8.56941 8.40385 8.48589 8.42665 8.40998 8.4494C5.32755 9.44397 3.68764 12.162 3.55098 12.3897C2.60195 11.3344 2.01735 9.9299 2.01735 8.39628ZM8 14.3713C6.6182 14.3713 5.34273 13.9006 4.33297 13.111C4.43926 12.8909 5.65399 10.5525 9.02493 9.37567C9.04011 9.36806 9.04773 9.36806 9.06291 9.36049C9.90562 11.5394 10.2473 13.3691 10.3384 13.893C9.61713 14.2043 8.82753 14.3713 8 14.3713ZM11.333 13.3464C11.2722 12.9819 10.9533 11.2357 10.1714 9.08714C12.0467 8.79104 13.6865 9.27697 13.8916 9.34531C13.6334 11.008 12.6768 12.4429 11.333 13.3464Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                        </svg>
                                    </a>
                                    <a
                                        className="py-[6px] px-[6px] -mr-[6px] hover:text-white"
                                        href="https://linkedin.com/company/attio"
                                        target="_blank"
                                        aria-label="LinkedIn"
                                        rel="noopener"
                                    >
                                        <svg
                                            width={16}
                                            height={17}
                                            className=""
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.9">
                                                <path
                                                    d="M13.9637 1.38867H2.03359C1.46211 1.38867 1 1.83984 1 2.39766V14.377C1 14.9348 1.46211 15.3887 2.03359 15.3887H13.9637C14.5352 15.3887 15 14.9348 15 14.3797V2.39766C15 1.83984 14.5352 1.38867 13.9637 1.38867ZM5.15352 13.3187H3.07539V6.63594H5.15352V13.3187ZM4.11445 5.72539C3.44727 5.72539 2.90859 5.18672 2.90859 4.52227C2.90859 3.85781 3.44727 3.31914 4.11445 3.31914C4.77891 3.31914 5.31758 3.85781 5.31758 4.52227C5.31758 5.18398 4.77891 5.72539 4.11445 5.72539ZM12.9301 13.3187H10.8547V10.0703C10.8547 9.29648 10.841 8.29844 9.77461 8.29844C8.69453 8.29844 8.53047 9.14336 8.53047 10.0156V13.3187H6.45781V6.63594H8.44844V7.54922H8.47578C8.75195 7.02422 9.43008 6.46914 10.4391 6.46914C12.5418 6.46914 12.9301 7.85273 12.9301 9.65195V13.3187Z"
                                                    className=""
                                                    fill="currentColor"
                                                />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}