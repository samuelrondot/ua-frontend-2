// React
import { FC, useState } from "react";
// Components
import { CrmStartupFeaturesTabSliderPipelines } from "./pipelines";
import { CrmStartupFeaturesTabSliderReporting } from "./reporting";
import { CrmStartupFeaturesTabSliderContacts } from "./contacts";
import { CrmStartupFeaturesTabSliderActivity } from "./activity";


export const CrmStartupFeaturesTabSlider: FC = () => {
    const [activeTab, setActiveTab] = useState<string>("contacts");

    return (
        <>
            <div className="relative flex flex-col max-tablet:gap-[38px] items-center">
                <div className="overflow-x-auto snap-x snap-mandatory w-full flex hide-scrollbar flex flex-row justify-start gap-12px pt-40px max-w-full tablet:contents">
                    <div className="z-10 flex flex-row justify-center items-end gap-12px tablet:pt-[60px] tablet:pb-[40px] mx-auto">
                        <button
                            data-active={activeTab === "contacts"}
                            className="group h-40px flex flex-col justify-center flex-none first-of-type:ml-24px last-of-type:mr-24px w-[130px]"
                            onClick={() => setActiveTab("contacts")}
                        >
                            <div className="flex flex-row gap-8px flex-1 items-center">
                                <div className="w-[22px] h-[24px] flex-shrink-0">
                                    <svg
                                        viewBox="0 0 23 25"
                                        className="w-full"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_294_68882)">
                                            <path
                                                d="M12.3457 22.2117L18.6773 18.2622C19.352 17.8452 19.7651 17.11 19.77 16.3164L19.8131 8.10607C19.818 7.31254 19.4124 6.57175 18.7416 6.14852L12.4529 2.17237C11.7092 1.70279 10.7624 1.69758 10.0132 2.15931L3.68155 6.10882C3.00689 6.52583 2.59382 7.26105 2.58892 8.05459L2.54576 16.265C2.54085 17.0585 2.9465 17.7993 3.61725 18.2225L6.99786 20.3608L9.90524 22.1999C10.6489 22.6695 11.5957 22.6747 12.3429 22.2134L12.3457 22.2117Z"
                                                className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                strokeWidth="1.2"
                                                strokeMiterlimit={10}
                                            />
                                            <g opacity="0.8">
                                                <path d="M6.19543 7.0312L10.7108 4.21558C11.175 3.92939 11.7747 3.93247 12.2368 4.22489L16.7775 7.09595" />
                                                <path
                                                    d="M6.19543 7.0312L10.7108 4.21558C11.175 3.92939 11.7747 3.93247 12.2368 4.22489L16.7775 7.09595"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M16.0865 8.84265L12.1832 11.252C11.717 11.5339 11.1198 11.5293 10.6588 11.2376L6.6598 8.70952" />
                                                <path
                                                    d="M16.0865 8.84265L12.1832 11.252C11.717 11.5339 11.1198 11.5293 10.6588 11.2376L6.6598 8.70952"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M14.8992 5.91191L17.1548 7.33886C17.3568 7.46736 17.378 7.67779 17.3781 7.76308C17.377 7.84768 17.3539 8.05941 17.1498 8.18539L15.8573 8.98373" />
                                                <path
                                                    d="M14.8992 5.91191L17.1548 7.33886C17.3568 7.46736 17.378 7.67779 17.3781 7.76308C17.377 7.84768 17.3539 8.05941 17.1498 8.18539L15.8573 8.98373"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M8.20054 9.68318L5.72895 8.1204C5.52803 7.9926 5.50671 7.79452 5.50719 7.71575C5.50768 7.63697 5.52991 7.43868 5.73339 7.31381L8.57424 5.53885" />
                                                <path
                                                    d="M8.20054 9.68318L5.72895 8.1204C5.52803 7.9926 5.50671 7.79452 5.50719 7.71575C5.50768 7.63697 5.52991 7.43868 5.73339 7.31381L8.57424 5.53885"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_294_68882">
                                                <rect
                                                    width={22}
                                                    height={22}
                                                    fill="white"
                                                    transform="translate(0.25 1.27417)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`typography-p6-strong desktop:typography-p5-strong transition-all ${activeTab === 'contacts' ? 'text-brand-light-primary' : 'text-greyscale-light-08'}`}>
                                    Contacts
                                </div>
                            </div>
                            <div
                                aria-valuemax={100}
                                aria-valuemin={0}
                                aria-valuenow={0}
                                aria-valuetext="100%"
                                role="progressbar"
                                data-state="loading"
                                data-value={0}
                                data-max={100}
                                className="relative h-[1px] w-full overflow-hidden bg-greyscale-light-08"
                            >
                                <div
                                    data-state="loading"
                                    data-value={0}
                                    data-max={100}
                                    className="h-full w-full flex-1 bg-brand-light-primary transition-none"
                                    style={{
                                        transform: `translateX(${activeTab === 'contacts' ? '0%' : '-100%'})`,
                                        transitionDuration: "5000ms"
                                    }}
                                />
                            </div>
                        </button>
                        <button
                            data-active={activeTab === "pipelines"}
                            className="group h-40px flex flex-col justify-center flex-none first-of-type:ml-24px last-of-type:mr-24px w-[130px]"
                            onClick={() => setActiveTab("pipelines")}
                        >
                            <div className="flex flex-row gap-8px flex-1 items-center">
                                <div className="w-[22px] h-[24px] flex-shrink-0">
                                    <svg
                                        viewBox="0 0 22 25"
                                        className="w-full"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_294_68868)">
                                            <path
                                                d="M18.7758 5.83578L12.0515 2.59983C11.3382 2.25298 10.496 2.2974 9.82302 2.71784L2.86363 7.07432C2.1906 7.49475 1.78181 8.23381 1.78314 9.02693L1.78879 16.4672C1.78996 17.3467 2.29219 18.1494 3.08311 18.5353L9.80747 21.7713C10.5207 22.1181 11.3629 22.0737 12.0359 21.6532L18.9953 17.2968C19.6683 16.8763 20.0771 16.1373 20.0758 15.3442L20.0735 11.344L20.0716 7.90385C20.0704 7.02437 19.5682 6.22164 18.7787 5.83722L18.7758 5.83578Z"
                                                className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                strokeWidth="1.2"
                                                strokeMiterlimit={10}
                                            />
                                            <g opacity="0.8">
                                                <path d="M9.24147 19.154L4.44687 16.8459C3.95669 16.6068 3.63844 16.0985 3.6382 15.5516L3.63428 10.1794" />
                                                <path
                                                    d="M9.24147 19.154L4.44687 16.8459C3.95669 16.6068 3.63844 16.0985 3.6382 15.5516L3.63428 10.1794"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M5.47974 9.82849L9.60373 11.837C10.0913 12.08 10.4069 12.587 10.4072 13.1326L10.411 17.8636" />
                                                <path
                                                    d="M5.47974 9.82849L9.60373 11.837C10.0913 12.08 10.4069 12.587 10.4072 13.1326L10.411 17.8636"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M3.63904 12.3998L3.6377 9.7307C3.63817 9.49127 3.80459 9.36075 3.87664 9.3151C3.94868 9.27076 4.13989 9.17693 4.35556 9.28202L5.72152 9.94672" />
                                                <path
                                                    d="M3.63904 12.3998L3.6377 9.7307C3.63817 9.49127 3.80459 9.36075 3.87664 9.3151C3.94868 9.27076 4.13989 9.17693 4.35556 9.28202L5.72152 9.94672"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M10.4092 16.0411L10.4114 18.9654C10.4109 19.2035 10.255 19.3275 10.1882 19.3692C10.1214 19.4109 9.94195 19.4983 9.72758 19.3932L6.70807 17.9428" />
                                                <path
                                                    d="M10.4092 16.0411L10.4114 18.9654C10.4109 19.2035 10.255 19.3275 10.1882 19.3692C10.1214 19.4109 9.94195 19.4983 9.72758 19.3932L6.70807 17.9428"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_294_68868">
                                                <rect
                                                    width={22}
                                                    height={22}
                                                    fill="white"
                                                    transform="translate(0 1.27417)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`typography-p6-strong desktop:typography-p5-strong transition-all ${activeTab === 'pipelines' ? 'text-brand-light-primary' : 'text-greyscale-light-08'}`}>
                                    Pipelines
                                </div>
                            </div>
                            <div
                                aria-valuemax={100}
                                aria-valuemin={0}
                                aria-valuenow={0}
                                aria-valuetext="0%"
                                role="progressbar"
                                data-state="loading"
                                data-value={0}
                                data-max={100}
                                className="relative h-[1px] w-full overflow-hidden bg-greyscale-light-08"
                            >
                                <div
                                    data-state="loading"
                                    data-value={0}
                                    data-max={100}
                                    className="h-full w-full flex-1 bg-brand-light-primary transition-none"
                                    style={{
                                        transform: `translateX(${activeTab === 'pipelines' ? '0%' : '-100%'})`,
                                        transitionDuration: "5000ms"
                                    }}
                                />
                            </div>
                        </button>
                        <button
                            data-active={activeTab === "activity"}
                            className="group h-40px flex flex-col justify-center flex-none first-of-type:ml-24px last-of-type:mr-24px w-[130px]"
                            onClick={() => setActiveTab("activity")}
                        >
                            <div className="flex flex-row gap-8px flex-1 items-center">
                                <div className="w-[22px] h-[24px] flex-shrink-0">
                                    <svg
                                        viewBox="0 0 23 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_294_68895)">
                                            <path
                                                d="M2.30295 7.87359L2.30683 15.3361C2.304 16.1292 2.70959 16.8686 3.3805 17.2923L10.3262 21.6707C10.9971 22.0945 11.8403 22.1419 12.5542 21.7964L19.2545 18.5615C20.0463 18.1787 20.5514 17.3778 20.5557 16.4978L20.5518 9.0353C20.5546 8.24218 20.1491 7.5028 19.4781 7.07901L12.5325 2.70067C11.8616 2.27688 11.0183 2.22943 10.3044 2.57493L6.70183 4.31342L3.60352 5.80854C2.81174 6.19137 2.3066 6.99227 2.303 7.87037L2.30295 7.87359Z"
                                                className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                strokeWidth="1.2"
                                                strokeMiterlimit={10}
                                            />
                                            <g opacity="0.8">
                                                <path d="M18.4396 10.6814L18.4416 16.0026C18.439 16.548 18.1193 17.0553 17.6267 17.293L12.7888 19.6285" />
                                                <path
                                                    d="M18.4396 10.6814L18.4416 16.0026C18.439 16.548 18.1193 17.0553 17.6267 17.293L12.7888 19.6285"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M11.6716 18.1184L11.6908 13.5313C11.6981 12.9866 12.0178 12.4822 12.5092 12.2452L16.7696 10.1879" />
                                                <path
                                                    d="M11.6716 18.1184L11.6908 13.5313C11.6981 12.9866 12.0178 12.4822 12.5092 12.2452L16.7696 10.1879"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M14.787 18.6604L12.3831 19.8202C12.1672 19.9238 11.9774 19.8305 11.905 19.7854C11.8337 19.7397 11.6662 19.6082 11.6673 19.3683L11.6731 17.8492" />
                                                <path
                                                    d="M14.787 18.6604L12.3831 19.8202C12.1672 19.9238 11.9774 19.8305 11.905 19.7854C11.8337 19.7397 11.6662 19.6082 11.6673 19.3683L11.6731 17.8492"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M15.1285 10.9807L17.7619 9.70934C17.9766 9.60639 18.156 9.69304 18.2226 9.73511C18.2892 9.77718 18.4457 9.9009 18.4441 10.1396L18.4483 13.4894" />
                                                <path
                                                    d="M15.1285 10.9807L17.7619 9.70934C17.9766 9.60639 18.156 9.69304 18.2226 9.73511C18.2892 9.77718 18.4457 9.9009 18.4441 10.1396L18.4483 13.4894"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_294_68895">
                                                <rect
                                                    width={22}
                                                    height={22}
                                                    fill="white"
                                                    transform="translate(0.5 1.27417)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`typography-p6-strong desktop:typography-p5-strong transition-all ${activeTab === 'activity' ? 'text-brand-light-primary' : 'text-greyscale-light-08'}`}>
                                    Activity
                                </div>
                            </div>
                            <div
                                aria-valuemax={100}
                                aria-valuemin={0}
                                aria-valuenow={0}
                                aria-valuetext="0%"
                                role="progressbar"
                                data-state="loading"
                                data-value={0}
                                data-max={100}
                                className="relative h-[1px] w-full overflow-hidden bg-greyscale-light-08"
                            >
                                <div
                                    data-state="loading"
                                    data-value={0}
                                    data-max={100}
                                    className="h-full w-full flex-1 bg-brand-light-primary transition-none"
                                    style={{
                                        transform: `translateX(${activeTab === 'activity' ? '0%' : '-100%'})`,
                                        transitionDuration: "5000ms"
                                    }}
                                />
                            </div>
                        </button>
                        <button
                            data-active={activeTab === "reporting"}
                            className="group h-40px flex flex-col justify-center flex-none first-of-type:ml-24px last-of-type:mr-24px w-[130px] max-tablet:hidden"
                            onClick={() => setActiveTab("reporting")}
                        >
                            <div className="flex flex-row gap-8px flex-1 items-center">
                                <div className="w-[22px] h-[24px] flex-shrink-0">
                                    <svg
                                        className="w-full"
                                        fill="none"
                                        viewBox="0 0 23 25"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_294_69817)">
                                            <path
                                                d="M10.5131 2.1595L4.18142 6.109C3.50677 6.52601 3.09371 7.26123 3.0888 8.05477L3.04564 16.2651C3.04073 17.0587 3.44638 17.7995 4.11714 18.2227L10.4059 22.1988C11.1495 22.6684 12.0964 22.6736 12.8456 22.2119L19.1772 18.2624C19.8519 17.8454 20.2649 17.1102 20.2698 16.3166L20.313 8.10626C20.3179 7.31272 19.9123 6.57193 19.2415 6.1487L15.8609 4.01037L12.9535 2.17134C12.2099 1.70176 11.263 1.69655 10.5158 2.15784L10.5131 2.1595Z"
                                                className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                strokeWidth="1.2"
                                                strokeMiterlimit={10}
                                            />
                                            <g opacity="0.8">
                                                <path d="M16.6633 17.34L12.148 20.1556C11.6838 20.4418 11.0841 20.4387 10.6219 20.1463L6.0813 17.2753" />
                                                <path
                                                    d="M16.6633 17.34L12.148 20.1556C11.6838 20.4418 11.0841 20.4387 10.6219 20.1463L6.0813 17.2753"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M6.77222 15.5286L10.6756 13.1192C11.1418 12.8373 11.7389 12.8419 12.2 13.1336L16.199 15.6617" />
                                                <path
                                                    d="M6.77222 15.5286L10.6756 13.1192C11.1418 12.8373 11.7389 12.8419 12.2 13.1336L16.199 15.6617"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M7.95971 18.4593L5.7041 17.0324C5.50207 16.9039 5.48085 16.6934 5.48084 16.6081C5.48192 16.5235 5.50495 16.3118 5.70913 16.1858L7.00154 15.3875" />
                                                <path
                                                    d="M7.95971 18.4593L5.7041 17.0324C5.50207 16.9039 5.48085 16.6934 5.48084 16.6081C5.48192 16.5235 5.50495 16.3118 5.70913 16.1858L7.00154 15.3875"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                                <path d="M14.6582 14.688L17.1298 16.2508C17.3307 16.3786 17.3521 16.5767 17.3516 16.6555C17.3511 16.7342 17.3289 16.9325 17.1254 17.0574L14.2845 18.8324" />
                                                <path
                                                    d="M14.6582 14.688L17.1298 16.2508C17.3307 16.3786 17.3521 16.5767 17.3516 16.6555C17.3511 16.7342 17.3289 16.9325 17.1254 17.0574L14.2845 18.8324"
                                                    className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition"
                                                    strokeWidth="0.449329"
                                                    strokeMiterlimit={10}
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_294_69817">
                                                <rect
                                                    width={22}
                                                    height={22}
                                                    fill="white"
                                                    transform="translate(0.75 1.27417)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={`typography-p6-strong desktop:typography-p5-strong transition-all ${activeTab === 'reporting' ? 'text-brand-light-primary' : 'text-greyscale-light-08'}`}>
                                    Reporting
                                </div>
                            </div>
                            <div
                                aria-valuemax={100}
                                aria-valuemin={0}
                                aria-valuenow={0}
                                aria-valuetext="0%"
                                role="progressbar"
                                data-state="loading"
                                data-value={0}
                                data-max={100}
                                className="relative h-[1px] w-full overflow-hidden bg-greyscale-light-08"
                            >
                                <div
                                    data-state="loading"
                                    data-value={0}
                                    data-max={100}
                                    className="h-full w-full flex-1 bg-brand-light-primary transition-none"
                                    style={{
                                        transform: `translateX(${activeTab === 'reporting' ? '0%' : '-100%'})`,
                                        transitionDuration: "5000ms"
                                    }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden w-full">
                    <div className="max-tablet:max-w-[500px] mx-auto px-48px w-full max-w-[1204px] tablet:pb-[83px]">
                        <div className="w-full bg-white relative max-w-full z-10 shadow-xl border max-tablet:border-b-0 border-[#E0E1E6] rounded-t-[34px] tablet:rounded-[16px] p-[2px]">
                            {activeTab === "contacts" && (
                                <CrmStartupFeaturesTabSliderContacts />
                            )}
                            {activeTab === "pipelines" && (
                                <CrmStartupFeaturesTabSliderPipelines />
                            )}
                            {activeTab === "activity" && (
                                <CrmStartupFeaturesTabSliderActivity />
                            )}
                            {activeTab === "reporting" && (
                                <CrmStartupFeaturesTabSliderReporting />
                            )}
                        </div>
                    </div>
                    <div className="absolute z-0 overflow-hidden bottom-0 max-w-[1400px] h-full max-h-[884px] w-full hidden phablet:block opacity-10">
                        <svg
                            width={1440}
                            height={884}
                            viewBox="0 0 1440 884"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_f_22_12703)">
                                <path
                                    d="M731.878 664C1175 664 1175 614.855 1175 558.692C1175 502.529 970.394 457 718 457C465.606 457 261 502.529 261 558.692C261 614.855 303.59 664 731.878 664Z"
                                    fill="url(#paint0_linear_22_12703)"
                                />
                                <path
                                    d="M499.742 239.279C706.448 202.509 968.001 220.597 1083.93 279.678C1199.86 338.762 1126.27 416.463 919.56 453.232C712.849 490.002 451.298 471.914 335.366 412.832C219.434 353.749 293.026 276.047 499.742 239.279Z"
                                    fill="url(#paint1_radial_22_12703)"
                                    fillOpacity="0.8"
                                />
                            </g>
                            <g clipPath="url(#clip0_22_12703)">
                                <g clipPath="url(#clip1_22_12703)">
                                    <mask
                                        id="mask0_22_12703"
                                        style={{ maskType: "alpha" }}
                                        maskUnits="userSpaceOnUse"
                                        x={-1}
                                        y={-428}
                                        width={2402}
                                        height={1322}
                                    >
                                        <path d="M120 173H80V213H120V173Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 173H120V213H160V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 173H160V213H200V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 173H0V213H40V173Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 173H200V213H240V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 173H40V213H80V173Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 173H240V213H280V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 173H280V213H320V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 173H320V213H360V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 173H360V213H400V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 173H400V213H440V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 173H440V213H480V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 173H480V213H520V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 173H520V213H560V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 173H560V213H600V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 173H600V213H640V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 173H640V213H680V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 173H680V213H720V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 173H720V213H760V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 173H760V213H800V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 173H800V213H840V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 173H840V213H880V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 173H880V213H920V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 173H920V213H960V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 173H960V213H1000V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 173H1000V213H1040V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 173H1040V213H1080V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 173H1080V213H1120V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 173H1120V213H1160V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 173H1160V213H1200V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 173H1200V213H1240V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 173H1240V213H1280V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 173H1280V213H1320V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 173H1320V213H1360V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 173H1360V213H1400V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 173H1400V213H1440V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 173H1440V213H1480V173Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 213H80V253H120V213Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 213H120V253H160V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 213H160V253H200V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 213H0V253H40V213Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 213H200V253H240V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 213H40V253H80V213Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 213H240V253H280V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 213H280V253H320V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 213H320V253H360V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 213H360V253H400V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 213H400V253H440V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 213H440V253H480V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 213H480V253H520V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 213H520V253H560V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 213H560V253H600V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 213H600V253H640V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 213H640V253H680V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 213H680V253H720V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 213H720V253H760V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 213H760V253H800V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 213H800V253H840V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 213H840V253H880V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 213H880V253H920V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 213H920V253H960V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 213H960V253H1000V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 213H1000V253H1040V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 213H1040V253H1080V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 213H1080V253H1120V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 213H1120V253H1160V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 213H1160V253H1200V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 213H1200V253H1240V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 213H1240V253H1280V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 213H1280V253H1320V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 213H1320V253H1360V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 213H1360V253H1400V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 213H1400V253H1440V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 213H1440V253H1480V213Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 253H80V293H120V253Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 253H120V293H160V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 253H160V293H200V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 253H0V293H40V253Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 253H200V293H240V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 253H40V293H80V253Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 253H240V293H280V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 253H280V293H320V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 253H320V293H360V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 253H360V293H400V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 253H400V293H440V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 253H440V293H480V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 253H480V293H520V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 253H520V293H560V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 253H560V293H600V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 253H600V293H640V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 253H640V293H680V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 253H680V293H720V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 253H720V293H760V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 253H760V293H800V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 253H800V293H840V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 253H840V293H880V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 253H880V293H920V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 253H920V293H960V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 253H960V293H1000V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 253H1000V293H1040V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 253H1040V293H1080V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 253H1080V293H1120V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 253H1120V293H1160V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 253H1160V293H1200V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 253H1200V293H1240V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 253H1240V293H1280V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 253H1280V293H1320V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 253H1320V293H1360V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 253H1360V293H1400V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 253H1400V293H1440V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 253H1440V293H1480V253Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 293H80V333H120V293Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 293H120V333H160V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 293H160V333H200V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 293H0V333H40V293Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 293H200V333H240V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 293H40V333H80V293Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 293H240V333H280V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 293H280V333H320V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 293H320V333H360V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 293H360V333H400V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 293H400V333H440V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 293H440V333H480V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 293H480V333H520V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 293H520V333H560V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 293H560V333H600V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 293H600V333H640V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 293H640V333H680V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 293H680V333H720V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 293H720V333H760V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 293H760V333H800V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 293H800V333H840V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 293H840V333H880V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 293H880V333H920V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 293H920V333H960V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 293H960V333H1000V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 293H1000V333H1040V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 293H1040V333H1080V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 293H1080V333H1120V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 293H1120V333H1160V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 293H1160V333H1200V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 293H1200V333H1240V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 293H1240V333H1280V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 293H1280V333H1320V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 293H1320V333H1360V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 293H1360V333H1400V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 293H1400V333H1440V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 293H1440V333H1480V293Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 333H80V373H120V333Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 333H120V373H160V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 333H160V373H200V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 333H0V373H40V333Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 333H200V373H240V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 333H40V373H80V333Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 333H240V373H280V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 333H280V373H320V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 333H320V373H360V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 333H360V373H400V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 333H400V373H440V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 333H440V373H480V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 333H480V373H520V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 333H520V373H560V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 333H560V373H600V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 333H600V373H640V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 333H640V373H680V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 333H680V373H720V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 333H720V373H760V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 333H760V373H800V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 333H800V373H840V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 333H840V373H880V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 333H880V373H920V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 333H920V373H960V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 333H960V373H1000V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 333H1000V373H1040V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 333H1040V373H1080V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 333H1080V373H1120V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 333H1120V373H1160V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 333H1160V373H1200V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 333H1200V373H1240V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 333H1240V373H1280V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 333H1280V373H1320V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 333H1320V373H1360V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 333H1360V373H1400V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 333H1400V373H1440V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 333H1440V373H1480V333Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 373H80V413H120V373Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 373H120V413H160V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 373H160V413H200V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 373H0V413H40V373Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 373H200V413H240V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 373H40V413H80V373Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 373H240V413H280V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 373H280V413H320V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 373H320V413H360V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 373H360V413H400V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 373H400V413H440V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 373H440V413H480V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 373H480V413H520V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 373H520V413H560V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 373H560V413H600V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 373H600V413H640V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 373H640V413H680V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 373H680V413H720V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 373H720V413H760V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 373H760V413H800V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 373H800V413H840V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 373H840V413H880V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 373H880V413H920V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 373H920V413H960V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 373H960V413H1000V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 373H1000V413H1040V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 373H1040V413H1080V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 373H1080V413H1120V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 373H1120V413H1160V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 373H1160V413H1200V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 373H1200V413H1240V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 373H1240V413H1280V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 373H1280V413H1320V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 373H1320V413H1360V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 373H1360V413H1400V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 373H1400V413H1440V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 373H1440V413H1480V373Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 413H80V453H120V413Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 413H120V453H160V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 413H160V453H200V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 413H0V453H40V413Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 413H200V453H240V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 413H40V453H80V413Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 413H240V453H280V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 413H280V453H320V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 413H320V453H360V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 413H360V453H400V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 413H400V453H440V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 413H440V453H480V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 413H480V453H520V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 413H520V453H560V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 413H560V453H600V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 413H600V453H640V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 413H640V453H680V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 413H680V453H720V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 413H720V453H760V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 413H760V453H800V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 413H800V453H840V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 413H840V453H880V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 413H880V453H920V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 413H920V453H960V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 413H960V453H1000V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 413H1000V453H1040V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 413H1040V453H1080V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 413H1080V453H1120V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 413H1120V453H1160V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 413H1160V453H1200V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 413H1200V453H1240V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 413H1240V453H1280V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 413H1280V453H1320V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 413H1320V453H1360V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 413H1360V453H1400V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 413H1400V453H1440V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 413H1440V453H1480V413Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 453H80V493H120V453Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 453H120V493H160V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 453H160V493H200V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 453H0V493H40V453Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 453H200V493H240V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 453H40V493H80V453Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 453H240V493H280V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 453H280V493H320V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 453H320V493H360V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 453H360V493H400V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 453H400V493H440V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 453H440V493H480V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 453H480V493H520V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 453H520V493H560V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 453H560V493H600V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 453H600V493H640V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 453H640V493H680V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 453H680V493H720V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 453H720V493H760V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 453H760V493H800V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 453H800V493H840V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 453H840V493H880V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 453H880V493H920V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 453H920V493H960V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 453H960V493H1000V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 453H1000V493H1040V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 453H1040V493H1080V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 453H1080V493H1120V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 453H1120V493H1160V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 453H1160V493H1200V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 453H1200V493H1240V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 453H1240V493H1280V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 453H1280V493H1320V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 453H1320V493H1360V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 453H1360V493H1400V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 453H1400V493H1440V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 453H1440V493H1480V453Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 493H80V533H120V493Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 493H120V533H160V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 493H160V533H200V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 493H0V533H40V493Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 493H200V533H240V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 493H40V533H80V493Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 493H240V533H280V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 493H280V533H320V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 493H320V533H360V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 493H360V533H400V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 493H400V533H440V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 493H440V533H480V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 493H480V533H520V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 493H520V533H560V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 493H560V533H600V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 493H600V533H640V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 493H640V533H680V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 493H680V533H720V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 493H720V533H760V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 493H760V533H800V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 493H800V533H840V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 493H840V533H880V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 493H880V533H920V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 493H920V533H960V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 493H960V533H1000V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 493H1000V533H1040V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 493H1040V533H1080V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 493H1080V533H1120V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 493H1120V533H1160V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 493H1160V533H1200V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 493H1200V533H1240V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 493H1240V533H1280V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 493H1280V533H1320V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 493H1320V533H1360V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 493H1360V533H1400V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 493H1400V533H1440V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 493H1440V533H1480V493Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 533H80V573H120V533Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 533H120V573H160V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 533H160V573H200V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 533H0V573H40V533Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 533H200V573H240V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 533H40V573H80V533Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 533H240V573H280V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 533H280V573H320V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 533H320V573H360V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 533H360V573H400V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 533H400V573H440V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 533H440V573H480V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 533H480V573H520V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 533H520V573H560V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 533H560V573H600V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 533H600V573H640V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 533H640V573H680V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 533H680V573H720V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 533H720V573H760V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 533H760V573H800V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 533H800V573H840V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 533H840V573H880V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 533H880V573H920V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 533H920V573H960V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 533H960V573H1000V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 533H1000V573H1040V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 533H1040V573H1080V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 533H1080V573H1120V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 533H1120V573H1160V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 533H1160V573H1200V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 533H1200V573H1240V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 533H1240V573H1280V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 533H1280V573H1320V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 533H1320V573H1360V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 533H1360V573H1400V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 533H1400V573H1440V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 533H1440V573H1480V533Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 573H80V613H120V573Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 573H120V613H160V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 573H160V613H200V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 573H0V613H40V573Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 573H200V613H240V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 573H40V613H80V573Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 573H240V613H280V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 573H280V613H320V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 573H320V613H360V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 573H360V613H400V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 573H400V613H440V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 573H440V613H480V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 573H480V613H520V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 573H520V613H560V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 573H560V613H600V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 573H600V613H640V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 573H640V613H680V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 573H680V613H720V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 573H720V613H760V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 573H760V613H800V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 573H800V613H840V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 573H840V613H880V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 573H880V613H920V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 573H920V613H960V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 573H960V613H1000V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 573H1000V613H1040V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 573H1040V613H1080V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 573H1080V613H1120V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 573H1120V613H1160V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 573H1160V613H1200V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 573H1200V613H1240V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 573H1240V613H1280V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 573H1280V613H1320V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 573H1320V613H1360V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 573H1360V613H1400V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 573H1400V613H1440V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 573H1440V613H1480V573Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 613H80V653H120V613Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 613H120V653H160V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 613H160V653H200V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 613H0V653H40V613Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 613H200V653H240V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 613H40V653H80V613Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 613H240V653H280V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 613H280V653H320V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 613H320V653H360V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 613H360V653H400V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 613H400V653H440V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 613H440V653H480V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 613H480V653H520V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 613H520V653H560V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 613H560V653H600V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 613H600V653H640V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 613H640V653H680V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 613H680V653H720V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 613H720V653H760V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 613H760V653H800V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 613H800V653H840V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 613H840V653H880V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 613H880V653H920V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 613H920V653H960V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 613H960V653H1000V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 613H1000V653H1040V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 613H1040V653H1080V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 613H1080V653H1120V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 613H1120V653H1160V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 613H1160V653H1200V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 613H1200V653H1240V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 613H1240V653H1280V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 613H1280V653H1320V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 613H1320V653H1360V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 613H1360V653H1400V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 613H1400V653H1440V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 613H1440V653H1480V613Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 653H80V693H120V653Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 653H120V693H160V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 653H160V693H200V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 653H0V693H40V653Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 653H200V693H240V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 653H40V693H80V653Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 653H240V693H280V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 653H280V693H320V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 653H320V693H360V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 653H360V693H400V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 653H400V693H440V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 653H440V693H480V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 653H480V693H520V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 653H520V693H560V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 653H560V693H600V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 653H600V693H640V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 653H640V693H680V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 653H680V693H720V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 653H720V693H760V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 653H760V693H800V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 653H800V693H840V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 653H840V693H880V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 653H880V693H920V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 653H920V693H960V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 653H960V693H1000V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 653H1000V693H1040V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 653H1040V693H1080V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 653H1080V693H1120V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 653H1120V693H1160V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 653H1160V693H1200V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 653H1200V693H1240V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 653H1240V693H1280V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 653H1280V693H1320V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 653H1320V693H1360V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 653H1360V693H1400V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 653H1400V693H1440V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 653H1440V693H1480V653Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 693H80V733H120V693Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 693H120V733H160V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 693H160V733H200V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 693H0V733H40V693Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 693H200V733H240V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 693H40V733H80V693Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 693H240V733H280V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 693H280V733H320V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 693H320V733H360V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 693H360V733H400V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 693H400V733H440V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 693H440V733H480V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 693H480V733H520V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 693H520V733H560V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 693H560V733H600V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 693H600V733H640V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 693H640V733H680V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 693H680V733H720V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 693H720V733H760V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 693H760V733H800V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 693H800V733H840V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 693H840V733H880V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 693H880V733H920V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 693H920V733H960V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 693H960V733H1000V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 693H1000V733H1040V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 693H1040V733H1080V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 693H1080V733H1120V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 693H1120V733H1160V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 693H1160V733H1200V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 693H1200V733H1240V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 693H1240V733H1280V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 693H1280V733H1320V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 693H1320V733H1360V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 693H1360V733H1400V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 693H1400V733H1440V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 693H1440V733H1480V693Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 733H80V773H120V733Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 733H120V773H160V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 733H160V773H200V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 733H0V773H40V733Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 733H200V773H240V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 733H40V773H80V733Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 733H240V773H280V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 733H280V773H320V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 733H320V773H360V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 733H360V773H400V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 733H400V773H440V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 733H440V773H480V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 733H480V773H520V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 733H520V773H560V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 733H560V773H600V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 733H600V773H640V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 733H640V773H680V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 733H680V773H720V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 733H720V773H760V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 733H760V773H800V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 733H800V773H840V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 733H840V773H880V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 733H880V773H920V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 733H920V773H960V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 733H960V773H1000V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 733H1000V773H1040V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 733H1040V773H1080V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 733H1080V773H1120V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 733H1120V773H1160V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 733H1160V773H1200V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 733H1200V773H1240V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 733H1240V773H1280V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 733H1280V773H1320V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 733H1320V773H1360V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 733H1360V773H1400V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 733H1400V773H1440V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 733H1440V773H1480V733Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 773H80V813H120V773Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 773H120V813H160V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 773H160V813H200V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 773H0V813H40V773Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 773H200V813H240V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 773H40V813H80V773Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 773H240V813H280V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 773H280V813H320V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 773H320V813H360V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 773H360V813H400V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 773H400V813H440V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 773H440V813H480V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 773H480V813H520V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 773H520V813H560V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 773H560V813H600V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 773H600V813H640V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 773H640V813H680V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 773H680V813H720V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 773H720V813H760V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 773H760V813H800V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 773H800V813H840V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 773H840V813H880V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 773H880V813H920V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 773H920V813H960V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 773H960V813H1000V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 773H1000V813H1040V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 773H1040V813H1080V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 773H1080V813H1120V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 773H1120V813H1160V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 773H1160V813H1200V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 773H1200V813H1240V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 773H1240V813H1280V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 773H1280V813H1320V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 773H1320V813H1360V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 773H1360V813H1400V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 773H1400V813H1440V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 773H1440V813H1480V773Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 813H80V853H120V813Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 813H120V853H160V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 813H160V853H200V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 813H0V853H40V813Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 813H200V853H240V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 813H40V853H80V813Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 813H240V853H280V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 813H280V853H320V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 813H320V853H360V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 813H360V853H400V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 813H400V853H440V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 813H440V853H480V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 813H480V853H520V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 813H520V853H560V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 813H560V853H600V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 813H600V853H640V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 813H640V853H680V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 813H680V853H720V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 813H720V853H760V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 813H760V853H800V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 813H800V853H840V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 813H840V853H880V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 813H880V853H920V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 813H920V853H960V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 813H960V853H1000V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 813H1000V853H1040V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 813H1040V853H1080V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 813H1080V853H1120V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 813H1120V853H1160V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 813H1160V853H1200V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 813H1200V853H1240V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 813H1240V853H1280V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 813H1280V853H1320V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 813H1320V853H1360V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 813H1360V853H1400V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 813H1400V853H1440V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 813H1440V853H1480V813Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M120 853H80V893H120V853Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M160 853H120V893H160V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M200 853H160V893H200V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M40 853H0V893H40V853Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M240 853H200V893H240V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path d="M80 853H40V893H80V853Z" stroke="black" strokeWidth="0.8" />
                                        <path
                                            d="M280 853H240V893H280V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M320 853H280V893H320V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M360 853H320V893H360V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M400 853H360V893H400V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M440 853H400V893H440V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M480 853H440V893H480V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M520 853H480V893H520V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M560 853H520V893H560V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M600 853H560V893H600V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M640 853H600V893H640V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M680 853H640V893H680V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M720 853H680V893H720V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M760 853H720V893H760V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M800 853H760V893H800V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M840 853H800V893H840V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M880 853H840V893H880V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M920 853H880V893H920V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M960 853H920V893H960V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1000 853H960V893H1000V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1040 853H1000V893H1040V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1080 853H1040V893H1080V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1120 853H1080V893H1120V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1160 853H1120V893H1160V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1200 853H1160V893H1200V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1240 853H1200V893H1240V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1280 853H1240V893H1280V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1320 853H1280V893H1320V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1360 853H1320V893H1360V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1400 853H1360V893H1400V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1440 853H1400V893H1440V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M1480 853H1440V893H1480V853Z"
                                            stroke="black"
                                            strokeWidth="0.8"
                                        />
                                    </mask>
                                    <g mask="url(#mask0_22_12703)">
                                        <path
                                            opacity="0.5"
                                            d="M0 -426H2400V883H0V-426Z"
                                            fill="url(#paint2_radial_22_12703)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_22_12703"
                                    x={41}
                                    y="0.236572"
                                    width={1354}
                                    height="883.763"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation={110}
                                        result="effect1_foregroundBlur_22_12703"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_22_12703"
                                    x1="1138.77"
                                    y1="621.171"
                                    x2="942.229"
                                    y2="991.351"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#70A4FF" />
                                    <stop offset="0.54732" stopColor="#6F5CD4" />
                                    <stop offset={1} stopColor="#70A4FF" />
                                </linearGradient>
                                <radialGradient
                                    id="paint1_radial_22_12703"
                                    cx={0}
                                    cy={0}
                                    r={1}
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(709.648 346.256) rotate(-152.995) scale(175.869 467.8)"
                                >
                                    <stop stopColor="#97B6FF" />
                                    <stop offset={1} stopColor="#EBEFFE" />
                                </radialGradient>
                                <radialGradient
                                    id="paint2_radial_22_12703"
                                    cx={0}
                                    cy={0}
                                    r={1}
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(520.5 1088.77) rotate(-67.1753) scale(1288.95 1957.55)"
                                >
                                    <stop stopColor="#CAD4E1" />
                                    <stop offset={1} stopColor="#D4D9DF" stopOpacity={0} />
                                </radialGradient>
                                <clipPath id="clip0_22_12703">
                                    <rect
                                        width={1440}
                                        height={700}
                                        fill="white"
                                        transform="translate(0 184)"
                                    />
                                </clipPath>
                                <clipPath id="clip1_22_12703">
                                    <rect
                                        width={2400}
                                        height={1320}
                                        fill="white"
                                        transform="translate(0 -426)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                </div>
            </div>

        </>
    )
}