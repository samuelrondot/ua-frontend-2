// React
import { FC } from "react";
// Next
import Link from "next/link";
// Font Awesome
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterAccordion } from "./accordion";
import Logo from "assets/images/logo-dark.png"


export const Footer: FC = () => {

    return (
        <>
            <div className="bg-background-dark-primary text-white relative">
                <div className="flex flex-col gap-40px phablet:gap-32px pt-40px pb-20px phablet:py-64px px-24px mx-auto w-full max-w-page">
                    <div className="flex flex-row justify-between">
                        <a href="#/" aria-label="Home">
                           <img className="logo" src={Logo.src}/>
                        </a>
                        <div className="block phablet:hidden">
                            <div className="flex flex-row items-center">
                                <a
                                    className="py-[6px] px-[6px] hover:text-white"
                                    href="https://twitter.com/useartemisco"
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
                                    className="py-[6px] px-[6px] -mr-[6px] hover:text-white"
                                    href="https://www.linkedin.com/company/86274280/"
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
                            <FooterAccordion
                                key={1}
                                id="footer-accordion-1"
                                header={
                                    <button className="flex flex-row justify-between items-center">
                                        <div className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-category py-8px phablet:p-0">
                                            Product
                                        </div>
                                        <div className="btn-icon flex items-center phablet:hidden transition-transform duration-200">
                                            <svg height={15} width={32} className="icon-tertiary">
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </svg>
                                        </div>
                                    </button>
                                }
                                body={
                                    <div className="flex phablet:flex flex-col gap-12px phablet:gap-8px pb-8px">
                                        <Link
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="/linkedin-scraper"
                                        >
                                            LinkedIn Scraper
                                        </Link>
                                        <Link
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="/email-finder"
                                        >
                                            Email Finder
                                        </Link>
                                        <Link
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="/multichannel-outreach"
                                        >
                                            Multichannel outreach
                                        </Link>
                                       
                                        <a
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            target="_blank"
                                            href="https://chrome.google.com/webstore/detail/useartemis-email-finder-e/eblaafalmnibhddbmepjjdoohmhnfncf"
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
                                       
                                    </div>
                                }
                            />
                            <FooterAccordion
                                key={2}
                                id="footer-accordion-2"
                                header={
                                    <button className="flex flex-row justify-between items-center">
                                        <div className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-category py-8px phablet:p-0">
                                            Company
                                        </div>
                                        <div className="btn-icon flex items-center phablet:hidden transition-transform duration-200">
                                            <svg height={15} width={32} className="icon-tertiary">
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </svg>
                                        </div>
                                    </button>
                                }
                                body={
                                    <div className="flex phablet:flex flex-col gap-12px phablet:gap-8px pb-8px hidden">
                                        
                                        <Link
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="/blog"
                                        >
                                            Blog
                                        </Link>

                                        <a
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="https://help.useartemis.co/en/"
                                        >
                                            Help center
                                        </a>

                                        <a
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="/about"
                                        >
                                            About
                                        </a>
                                        <Link
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="/contact-us"
                                        >
                                            Contact
                                        </Link>
                                       
                                       
                                    </div>
                                }
                            />
                           
                            <FooterAccordion
                                key={4}
                                id="footer-accordion-4"
                                header={
                                    <button className="flex flex-row justify-between items-center">
                                        <div className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-category py-8px phablet:p-0">
                                            Ressources
                                        </div>
                                        <div className="btn-icon flex items-center phablet:hidden transition-transform duration-200">
                                            <svg height={15} width={32} className="icon-tertiary">
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </svg>
                                        </div>
                                    </button>
                                }
                                body={
                                    <div className="flex phablet:flex flex-col gap-12px phablet:gap-8px pb-8px hidden">
                                        <a
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="https://useartemis.firstpromoter.com/"
                                        >
                                            Affiliate program
                                        </a>
                                        <a
                                            className="typography-p5-medium tablet:typography-p6-medium text-footer-dark-link hover:text-oncolor-primary transition flex align-center gap-[4px]"
                                            href="https://www.g2.com/products/useartemis/reviews#reviews"
                                        >
                                            Reviews
                                        </a>
                                    </div>
                                }
                            />
                            <div className="hidden tablet:flex flex-col gap-16px max-tablet:w-full max-tablet:flex-none">
                                <p className="typography-p5-medium text-[#9098A0]">Ready to get started?</p>
                                <div className="flex flex-row tablet:flex-col gap-12px">
                                    <a
                                        href="https://app.useartemis.co/register"
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
                            © 2023 useArtemis. All rights reserved.
                        </div>
                        <div className="flex flex-row gap-4px items-center justify-end  text-[11px] font-normal font-inter -tracking-0.1px">
                            <a
                                className="hover:text-oncolor-primary transition"
                                href="https://useartemis.co/terms"
                            >
                                Terms &amp; Conditions
                            </a>
                            <div>·</div>
                            <a
                                className="hover:text-oncolor-primary transition"
                                href="https://useartemis.co/privacy"
                            >
                                Privacy Policy
                            </a>
                            <div className="hidden phablet:block pl-[25px]">
                                <div className="flex flex-row items-center">
                                    <a
                                        className="py-[6px] px-[6px] hover:text-white"
                                        href="https://twitter.com/useartemisco"
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
                                        className="py-[6px] px-[6px] -mr-[6px] hover:text-white"
                                        href="https://www.linkedin.com/company/86274280/"
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