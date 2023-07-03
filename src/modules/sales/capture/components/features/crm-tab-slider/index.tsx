// React
import { FC, useEffect, useState } from "react";
import Markester from "assets/images/markester.png"
import Image from 'next/image'

const tabSliderImages = [
    {
        key: "build",
        src: "/assets/salesnavlist.png",
    },
    {
        key: "refine",
        src: "/assets/enrich.png",
    },
    {
        key: "work",
        src: "/assets/campaign.png",
    },
    {
        key: "report",
        src: "/assets/report.png",
    },
];

export const CrmTabSlider: FC = () => {
    const [intersectingImage, setIntersectingImage] = useState("build");
    const [activeTab, setActiveTab] = useState("build");
    let sections: any[] = []

    const options = {
        rootMargin: '0px',
        threshold: 0.10
    }

    useEffect(() => {
        if (document === undefined) {
            return
        }

        sections = [
            ...Array.from(document.getElementsByClassName('image-idx')),
        ]

        const callback = (entries: any[]) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setIntersectingImage(entry.target.id)
                    _setActiveCarousel(entry.target.id)
                    setActiveTab(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(callback, options)

        sections.forEach((section, index) => {
            observer.observe(section)
        });

    }, []);

    const _getSLiderImageByKey = (key: string) => {
        return tabSliderImages.find((item) => item.key === key);
    };

    const _setActiveCarousel = (key: string) => {
        const carousels = document.getElementsByClassName('carousel-idx')

        for (let i = 0; i < carousels.length; i++) {
            const carousel = carousels[i]
            if (carousel.id == `carousel-${key}`) {
                carousel.classList.remove("bg-[#E4E7EB]");
                carousel.classList.add("bg-[#99A2AF]");
            } else {
                carousel.classList.remove("bg-[#99A2AF]");
                carousel.classList.add("bg-[#E4E7EB]");
            }
        }
    }

    return (
        <>
            <div className="mt-60px tablet:mt-80px flex flex-col gap-24px relative min-h-[380px]">
                <div className="hidden tablet:contents">
                    <div className="rounded-[20px] overflow-hidden flex flex-col items-center pt-[36px] px-[40px] card-light-shadow bg-background-light-primary">
                        <div className="z-10 flex flex-row gap-24px w-full pb-64px max-w-[1076px]">
                            <button className="relative flex flex-col flex-1 gap-8px overflow-hidden rounded-12px transition-all duration-[140ms] transform"
                                onClick={() => setActiveTab('build')}>
                                <div className="flex flex-row items-center gap-8px">
                                    <svg
                                        width={20}
                                        height={19}
                                        viewBox="0 0 20 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.0006 2.03633L7.96484 2.03633C6.06467 2.03634 5.11458 2.03634 4.3888 2.40613C3.7504 2.73142 3.23136 3.25046 2.90607 3.88887C2.53627 4.61464 2.53627 5.56473 2.53627 7.46491L2.53627 11.5363C2.53627 13.4365 2.53627 14.3865 2.90607 15.1123C3.23136 15.7507 3.7504 16.2698 4.38881 16.595C5.11458 16.9648 6.06467 16.9648 7.96485 16.9648L10.0006 16.9648M10.0006 2.03633L12.0363 2.03633C13.9364 2.03633 14.8865 2.03633 15.6123 2.40613C16.2507 2.73142 16.7698 3.25046 17.095 3.88887C17.4648 4.61464 17.4648 5.56473 17.4648 7.4649L17.4648 11.5363C17.4648 13.4364 17.4648 14.3865 17.095 15.1123C16.7698 15.7507 16.2507 16.2698 15.6123 16.595C14.8865 16.9648 13.9365 16.9648 12.0363 16.9648L10.0006 16.9648M10.0006 2.03633L10.0006 16.9648"
                                            stroke={`${activeTab === 'build' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 11.3667L2.53571 11.3667"
                                            stroke={`${activeTab === 'build' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M17.4648 7.63428L10.0006 7.63428"
                                            stroke={`${activeTab === 'build' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <h3 className={`typography-p5-strong text-[#99A2AF] ${activeTab === 'build' ? 'text-[#24292F]' : null}`}>
                                    Scrape LinkedIn
                                    </h3>
                                </div>
                                <div className={`typography-p5-medium text-[#99A2AF] text-left ${activeTab === 'build' ? 'text-[#57606A]' : null}`}>
                                Scrape leads from LinkedIn & LinkedIn Sales Navigator
                                </div>
                            </button>
                            <button className="relative flex flex-col flex-1 gap-8px overflow-hidden rounded-12px transition-all duration-[140ms] transform"
                                onClick={() => setActiveTab('refine')}>
                                <div className="flex flex-row items-center gap-8px">
                                    <svg
                                        width={20}
                                        height={19}
                                        viewBox="0 0 20 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_943_164230)">
                                            <path
                                                d="M14.75 9.46127L14.75 6.78574C14.75 4.88555 14.75 3.93546 14.3802 3.20968C14.0549 2.57127 13.5359 2.05223 12.8975 1.72694C12.1717 1.35714 11.2216 1.35714 9.32141 1.35714L7.06233 1.35714C5.37256 1.35714 4.52767 1.35714 3.86798 1.65137C3.10364 1.99227 2.49227 2.60365 2.15137 3.36799C1.85714 4.02767 1.85714 4.87256 1.85714 6.56234L1.85714 8.82143C1.85714 10.7216 1.85714 11.6717 2.22694 12.3975C2.55223 13.0359 3.07127 13.5549 3.70967 13.8802C4.43545 14.25 5.38554 14.25 7.28571 14.25L9.96122 14.25C11.2605 14.25 11.9101 14.25 12.4345 14.0744C13.444 13.7364 14.2363 12.944 14.5744 11.9345C14.75 11.4101 14.75 10.7605 14.75 9.46127Z"
                                                stroke={`${activeTab === 'refine' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.464 6.10701C17.8901 6.67413 18.1426 7.37911 18.1426 8.14307L18.1426 12.8543C18.1426 13.5206 18.1426 13.8538 18.1036 14.1332C17.8526 15.936 16.4355 17.3531 14.6327 17.6042C14.3533 17.6431 14.0201 17.6431 13.3538 17.6431L9.09357 17.6431C8.21621 17.6431 7.4075 17.3491 6.76056 16.8543"
                                                stroke={`${activeTab === 'refine' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_943_164230">
                                                <rect
                                                    width={19}
                                                    height={19}
                                                    fill="white"
                                                    transform="translate(19.5 19) rotate(180)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h3 className={`typography-p5-strong text-[#99A2AF] ${activeTab === 'refine' ? 'text-[#24292F]' : null}`}>
                                        Enrich
                                    </h3>
                                </div>
                                <div className={`typography-p5-medium text-[#99A2AF] text-left ${activeTab === 'refine' ? 'text-[#57606A]' : null}`}>
                                    Automatically enrich leads with emails and phone numbers.
                                </div>
                            </button>
                            <button className="relative flex flex-col flex-1 gap-8px overflow-hidden rounded-12px transition-all duration-[140ms] transform"
                                onClick={() => setActiveTab('work')}>
                                <div className="flex flex-row items-center gap-8px">
                                    <svg
                                        width={19}
                                        height={19}
                                        viewBox="0 0 19 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.34197 17.1338C6.34197 14.2261 7.90938 11.6058 10.817 11.6058C7.90938 11.6058 6.34197 8.98541 6.34197 6.07776C6.34197 8.98541 4.77457 11.6058 1.86691 11.6058C4.77457 11.6058 6.34197 14.2261 6.34197 17.1338Z"
                                            stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.7127 8.71014C13.7127 6.96555 15.3902 5.28804 17.1348 5.28804C15.3902 5.28804 13.7127 3.61053 13.7127 1.86593C13.7127 3.61053 12.0351 5.28804 10.2906 5.28804C12.0351 5.28804 13.7127 6.96555 13.7127 8.71014Z"
                                            stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <h3 className={`typography-p5-strong text-[#99A2AF] ${activeTab === 'work' ? 'text-[#24292F]' : null}`}>
                                        Outreach
                                    </h3>
                                </div>
                                <div className={`typography-p5-medium text-[#99A2AF] text-left ${activeTab === 'work' ? 'text-[#57606A]' : null}`}>
                                    Start a multichannel campaign through LinkedIn and email.
                                </div>
                                <div className="hidden absolute left-0 bottom-0 h-[3px] w-full bg-greyscale-light-06 transition transform duration-[140ms] opacity-0 " />
                                <div className="hidden absolute left-0 bottom-0 h-[3px] w-full origin-left bg-brand-light-primary transition transform duration-[140ms] opacity-0 " />
                            </button>
                            <button className="relative flex flex-col flex-1 gap-8px overflow-hidden rounded-12px transition-all duration-[140ms] transform"
                                onClick={() => setActiveTab('report')}>
                                <div className="flex flex-row items-center gap-8px">
                                    <svg
                                        width={20}
                                        height={19}
                                        viewBox="0 0 20 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="2.53516"
                                            y="2.03516"
                                            width="14.9286"
                                            height="14.9286"
                                            rx="3.39286"
                                            stroke={`${activeTab === 'report' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.55469 7.20264L6.55469 12.9444"
                                            stroke={`${activeTab === 'report' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 6.05469V12.9448"
                                            stroke={`${activeTab === 'report' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.4434 9.49951V12.9446"
                                            stroke={`${activeTab === 'report' ? '#232529' : '#99A2AF'}`}
                                            strokeWidth="1.49286"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <h3 className={`typography-p5-strong text-[#99A2AF] ${activeTab === 'report' ? 'text-[#24292F]' : null}`}>
                                        Report
                                    </h3>
                                </div>
                                <div className={`typography-p5-medium text-[#99A2AF] text-left ${activeTab === 'report' ? 'text-[#57606A]' : null}`}>
                                    Analyze and track results from your campaigns.
                                </div>
                            </button>
                        </div>
                        <div className="w-full max-w-[1204px]">
                            <div className="w-0 h-0" />
                            <link
                                rel="preload"
                                type="image/webp"
                                href="https://attio.com/build/_assets/mockup-build-SIZIHVT5.webp"
                                as="image"
                            />
                            <div className="w-0 h-0" />
                            <link
                                rel="preload"
                                type="image/webp"
                                href="https://attio.com/build/_assets/mockup-refine-QIDSIUNL.webp"
                                as="image"
                            />
                            <div className="w-0 h-0" />
                            <link
                                rel="preload"
                                type="image/webp"
                                href="https://attio.com/build/_assets/mockup-work-HQEVF3XL.webp"
                                as="image"
                            />
                            <div className="w-0 h-0" />
                            <link
                                rel="preload"
                                type="image/webp"
                                href="https://attio.com/build/_assets/mockup-report-JAXR6WI3.webp"
                                as="image"
                            />
                           <div className="w-full relative max-w-full z-10 rounded-[16px] p-[2px]">
                                <div className="relative isolate">
                               
                                    
                                    <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                        <source
                                            srcSet={_getSLiderImageByKey(activeTab)?.src}
                                            media="(min-width:992px)"
                                            type="image/webp"
                                            height={1293}
                                            width={2295}
                                        />
                                        <source
                                            srcSet={_getSLiderImageByKey(activeTab)?.src}
                                            media="(min-width:992px)"
                                            height={1293}
                                            width={2295}
                                        />
                                        <img
                                            loading="lazy"
                                            srcSet="https://attio.com"
                                            className="rounded-[25px] relative rounded-[14px] w-full"
                                            alt="A card labelled Stripe is moved from a Screening column to the next column along in a Pipeline view."
                                            height={889}
                                            width={686}
                                        />
                                    </picture>
                                    <picture className="relative inset-0 z-0 w-full h-full">
                                        <source
                                            srcSet={_getSLiderImageByKey(activeTab)?.src}
                                            media="(min-width:992px)"
                                            type="image/webp"
                                            height={1293}
                                            width={2295}
                                        />
                                        <source
                                            srcSet={_getSLiderImageByKey(activeTab)?.src}
                                            media="(min-width:992px)"
                                            height={1293}
                                            width={2295}
                                        />
                                        <img
                                            loading="lazy"
                                            srcSet="https://attio.com"
                                            className="rounded-[25px] relative rounded-[14px] w-full"
                                            height={889}
                                            width={686}
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contents tablet:hidden">
                    <div className="tablet:hidden w-full absolute">
                        <div className="overflow-x-auto snap-x snap-mandatory w-full flex hide-scrollbar gap-12px p-4px">
                            <div id='build' className="image-idx rounded-[20px] overflow-hidden rounded-12px max-w-[495px] pt-24px snap-center transition duration-200 flex-shrink-0 w-[75vw] flex flex-col gap-[24px] justify-between card-light-shadow bg-background-light-primary">
                                <div className="flex flex-col gap-8px px-24px">
                                    <div className="flex flex-row gap-8px items-center">
                                        <svg
                                            width={20}
                                            height={19}
                                            viewBox="0 0 20 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.0006 2.03633L7.96484 2.03633C6.06467 2.03634 5.11458 2.03634 4.3888 2.40613C3.7504 2.73142 3.23136 3.25046 2.90607 3.88887C2.53627 4.61464 2.53627 5.56473 2.53627 7.46491L2.53627 11.5363C2.53627 13.4365 2.53627 14.3865 2.90607 15.1123C3.23136 15.7507 3.7504 16.2698 4.38881 16.595C5.11458 16.9648 6.06467 16.9648 7.96485 16.9648L10.0006 16.9648M10.0006 2.03633L12.0363 2.03633C13.9364 2.03633 14.8865 2.03633 15.6123 2.40613C16.2507 2.73142 16.7698 3.25046 17.095 3.88887C17.4648 4.61464 17.4648 5.56473 17.4648 7.4649L17.4648 11.5363C17.4648 13.4364 17.4648 14.3865 17.095 15.1123C16.7698 15.7507 16.2507 16.2698 15.6123 16.595C14.8865 16.9648 13.9365 16.9648 12.0363 16.9648L10.0006 16.9648M10.0006 2.03633L10.0006 16.9648"
                                                stroke={`${activeTab === 'build' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 11.3667L2.53571 11.3667"
                                                stroke={`${activeTab === 'build' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.4648 7.63428L10.0006 7.63428"
                                                stroke={`${activeTab === 'build' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <h3 className="typography-p4-strong text-[#24292F]">
                                            Scrape LinkedIn
                                        </h3>
                                    </div>
                                    <div className="text-left typography-p5-medium text-[#57606A] max-w-[280px]">
                                        Extract leads from LinkedIn & LinkedIn Sales Navigator
                                    </div>
                                </div>
                                <div className="flex justify-center w-[495px] overflow-hidden mx-auto">
                                    <div className="self-center mx-auto">
                                        <div className="relative isolate">
                                            <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                <source
                                                    srcSet="/assets/salesnavlist.png"
                                                    media="(max-width:991px)"
                                                    type="image/webp"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="/assets/salesnavlist.png"
                                                    className=""
                                                    alt="A modal shows different options for creating a list from a template, such as Sales Pipeline, Customer Success and Enterprise Sales"
                                                />
                                            </picture>
                                            <picture className="relative inset-0 z-0 w-full h-full">
                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                <source
                                                    srcSet="/assets/salesnavlist.png"
                                                    type="image/webp"
                                                    media="(max-width:991px)"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="/assets/salesnavlist.png"
                                                    className=""
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='refine' className="image-idx rounded-[20px] overflow-hidden rounded-12px max-w-[495px] pt-24px snap-center transition duration-200 flex-shrink-0 w-[75vw] flex flex-col gap-[24px] justify-between card-light-shadow bg-background-light-primary">
                                <div className="flex flex-col gap-8px px-24px">
                                    <div className="flex flex-row gap-8px items-center">
                                        <svg
                                            width={20}
                                            height={19}
                                            viewBox="0 0 20 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_943_164230)">
                                                <path
                                                    d="M14.75 9.46127L14.75 6.78574C14.75 4.88555 14.75 3.93546 14.3802 3.20968C14.0549 2.57127 13.5359 2.05223 12.8975 1.72694C12.1717 1.35714 11.2216 1.35714 9.32141 1.35714L7.06233 1.35714C5.37256 1.35714 4.52767 1.35714 3.86798 1.65137C3.10364 1.99227 2.49227 2.60365 2.15137 3.36799C1.85714 4.02767 1.85714 4.87256 1.85714 6.56234L1.85714 8.82143C1.85714 10.7216 1.85714 11.6717 2.22694 12.3975C2.55223 13.0359 3.07127 13.5549 3.70967 13.8802C4.43545 14.25 5.38554 14.25 7.28571 14.25L9.96122 14.25C11.2605 14.25 11.9101 14.25 12.4345 14.0744C13.444 13.7364 14.2363 12.944 14.5744 11.9345C14.75 11.4101 14.75 10.7605 14.75 9.46127Z"
                                                    stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                                    strokeWidth="1.49286"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17.464 6.10701C17.8901 6.67413 18.1426 7.37911 18.1426 8.14307L18.1426 12.8543C18.1426 13.5206 18.1426 13.8538 18.1036 14.1332C17.8526 15.936 16.4355 17.3531 14.6327 17.6042C14.3533 17.6431 14.0201 17.6431 13.3538 17.6431L9.09357 17.6431C8.21621 17.6431 7.4075 17.3491 6.76056 16.8543"
                                                    stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                                    strokeWidth="1.49286"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_943_164230">
                                                    <rect
                                                        width={19}
                                                        height={19}
                                                        fill="white"
                                                        transform="translate(19.5 19) rotate(180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3 className="typography-p4-strong text-[#24292F]">
                                            Enrich
                                        </h3>
                                    </div>
                                    <div className="text-left typography-p5-medium text-[#57606A] max-w-[280px]">
                                    Automatically enrich leads with emails and phone numbers.
                                    </div>
                                </div>
                                <div className="flex justify-center w-[495px] overflow-hidden mx-auto">
                                    <div className="self-center mx-auto">
                                        <div className="relative isolate">
                                            <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                <source
                                                    srcSet="/assets/enrich.png"
                                                    media="(max-width:991px)"
                                                    type="image/webp"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="/assets/enrich.png"
                                                    className=""
                                                    alt="A popup allows creating a new attribute in a list, choosing from a list of name, email address, Instagram and others."
                                                />
                                            </picture>
                                            <picture className="relative inset-0 z-0 w-full h-full">
                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                <source
                                                    srcSet="/assets/enrich.png"
                                                    type="image/webp"
                                                    media="(max-width:991px)"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="/assets/enrich.png"
                                                    className=""
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='work' className="image-idx rounded-[20px] overflow-hidden rounded-12px max-w-[495px] pt-24px snap-center transition duration-200 flex-shrink-0 w-[75vw] flex flex-col gap-[24px] justify-between card-light-shadow bg-background-light-primary">
                                <div className="flex flex-col gap-8px px-24px">
                                    <div className="flex flex-row gap-8px items-center">
                                        <svg
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.34197 17.1338C6.34197 14.2261 7.90938 11.6058 10.817 11.6058C7.90938 11.6058 6.34197 8.98541 6.34197 6.07776C6.34197 8.98541 4.77457 11.6058 1.86691 11.6058C4.77457 11.6058 6.34197 14.2261 6.34197 17.1338Z"
                                                stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.7127 8.71014C13.7127 6.96555 15.3902 5.28804 17.1348 5.28804C15.3902 5.28804 13.7127 3.61053 13.7127 1.86593C13.7127 3.61053 12.0351 5.28804 10.2906 5.28804C12.0351 5.28804 13.7127 6.96555 13.7127 8.71014Z"
                                                stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <h3 className="typography-p4-strong text-[#24292F]">
                                            Outreach
                                        </h3>
                                    </div>
                                    <div className="text-left typography-p5-medium text-[#57606A] max-w-[280px]">
                                    Start a multichannel campaign through LinkedIn and email.
                                    </div>
                                </div>
                                <div className="flex justify-center w-[495px] overflow-hidden mx-auto">
                                    <div className="self-center mx-auto">
                                    <div className="relative isolate">
                                            <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                <source
                                                    srcSet="/assets/campaign.png"
                                                    media="(max-width:991px)"
                                                    type="image/webp"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="/assets/campaign.png"
                                                    className=""
                                                    alt="A card labelled Stripe is moved from a Screening column to the next column along in a Pipeline view."
                                                />
                                            </picture>
                                            <picture className="relative inset-0 z-0 w-full h-full">
                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                <source
                                                    srcSet="/assets/campaign.png"
                                                    type="image/webp"
                                                    media="(max-width:991px)"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="/assets/campaign.png"
                                                    className=""
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='report' className="image-idx rounded-[20px] overflow-hidden rounded-12px max-w-[495px] pt-24px snap-center transition duration-200 flex-shrink-0 w-[75vw] flex flex-col gap-[24px] justify-between card-light-shadow bg-background-light-primary">
                                <div className="flex flex-col gap-8px px-24px">
                                    <div className="flex flex-row gap-8px items-center">
                                        <svg
                                            width={20}
                                            height={19}
                                            viewBox="0 0 20 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="2.53516"
                                                y="2.03516"
                                                width="14.9286"
                                                height="14.9286"
                                                rx="3.39286"
                                                stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.55469 7.20264L6.55469 12.9444"
                                                stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10 6.05469V12.9448"
                                                stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.4434 9.49951V12.9446"
                                                stroke={`${activeTab === 'work' ? '#232529' : '#99A2AF'}`}
                                                strokeWidth="1.49286"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <h3 className="typography-p4-strong text-[#24292F]">
                                            Report
                                        </h3>
                                    </div>
                                    <div className="text-left typography-p5-medium text-[#57606A] max-w-[280px]">
                                    Analyze and track results from your campaigns.
                                    </div>
                                </div>
                                <div className="flex justify-center w-[495px] overflow-hidden mx-auto">
                                    <div className="self-center mx-auto">
                                        <div className="relative isolate">
                                            <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                <source
                                                    srcSet="/assets/report.png"
                                                    media="(max-width:991px)"
                                                    type="image/webp"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="/assets/report.png"
                                                    className=""
                                                    alt="A card labelled Stripe is moved from a Screening column to the next column along in a Pipeline view."
                                                />
                                            </picture>
                                            <picture className="relative inset-0 z-0 w-full h-full">
                                                <source srcSet="https://attio.com" media="(min-width:992px)" />
                                                <source
                                                    srcSet="/assets/report.png"
                                                    type="image/webp"
                                                    media="(max-width:991px)"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="/assets/report.png"
                                                    className=""
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tablet:hidden flex flex-col items-center w-full pt-[22px] pb-24px">
                            <div className="flex flex-row gap-8px ">
                                <div id='carousel-build' className="carousel-idx rounded-2px w-[22px] h-4px bg-[#E4E7EB]" />
                                <div id='carousel-refine' className="carousel-idx rounded-2px w-[22px] h-4px bg-[#E4E7EB]" />
                                <div id='carousel-work' className="carousel-idx rounded-2px w-[22px] h-4px bg-[#E4E7EB]" />
                                <div id='carousel-report' className="carousel-idx rounded-2px w-[22px] h-4px bg-[#E4E7EB]" />
                            </div>
                        </div>
                    </div>
                    <div className="h-[420px]" />
                </div>
                <div className="pt-40px pb-60px px-24px tablet:pt-[96px] tablet:pb-[120px] tablet:px-0">
                    <div className="tablet:grid grid-cols-10 gap-x-24px gap-y-[50px]">
                        <img
                            className="h-[34px] tablet:h-44px col-start-2 col-end-5"
                            src={Markester.src}
                            alt="Pallet"
                        />
                        <div className="mt-24px tablet:mt-0 col-start-5 col-end-11">
                            <p className="max-w-[530px] typography-p2-strong tablet:typography-h5 tablet:!leading-120 text-typography-light-tertiary">
                            Best Value for Lead Scrapping tool in the market right now!
                            I love using useArtemis to scrape Linkedin. It saves me tons of time to verify and find email addresses.
                            </p>
                        </div>
                        <div className="mt-24px tablet:mt-0 order-2 col-start-5 col-end-11 flex items-center gap-[18px]">
                            <img
                                className="w-60px h-60px rounded-12px"
                                src='https://media.licdn.com/dms/image/D4D03AQEYBWSFCdPX_A/profile-displayphoto-shrink_800_800/0/1675964244936?e=1694044800&v=beta&t=k9UAr19bb5GrBwY8V5oqR8lSAKV1OG6x8vafLT9HxGo'
                                alt=""
                            />
                            <div>
                                <p className="typography-p5-strong text-typography-light-secondary">
                                Kazuki O.
                                </p>
                                <p className="typography-p5-medium text-typography-light-tertiary">
                                Co-Founder, Markester
                                </p>
                            </div>
                        </div>
                        <div className="mt-[30px] tablet:mt-0 col-start-2 col-end-5 self-end tablet:mb-[6px]">
                            <a
                                className="typography-p5-strong text-attio-blue-main tablet:text-typography-light-tertiary group w-fit flex items-center gap-4px rounded-8px focus:shadow-[0px_0px_0px_2px_#FAFAFA,_0px_0px_0px_5px_rgba(38,_109,_240,_0.5)] focus:bg-[#FAFAFA]"
                                href="/customers/pallet"
                            >
                                Read the full story
                                <svg
                                    className="mt-[2px] opacity-0 -translate-x-[3px] group-hover:opacity-100 group-focus:opacity-100 group-hover:translate-x-0 group-focus:translate-x-0 transition-all"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.125 5.25L10.875 9L7.125 12.75"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}