// React
import { FC, useState } from "react";

type OwnProps = {
    style?: object,
    isDesktopMedia: boolean,
}

export const HamburgerBannerRaises: FC<OwnProps> = (props) => {
    const [hidden, setHidden] = useState(false)

    return (
        <>
            <div className={`tablet:hidden flex w-full px-[24px] pb-16px ${hidden || props.isDesktopMedia ? 'hidden' : null}`}>
                <div className="w-full  rounded-[12px] px-[10px] py-[8px] flex flex-row items-center cursor-pointer bg-[#202124] border border-[#3B3E45]">
                    <div className="flex flex-row gap-[12px] items-center w-full justify-center pl-[30px] pr-[10px]">
                        <div className="typography-c1-medium text-[#FFFFFF] text-center">
                        5X your reply rate with useArtemis AI
                            <a
                                className="inline-block ml-[4px] typography-c1-strong text-[#FFFFFF] underline"
                                href="https://app.useartemis.co/register"
                            >
                                Request access
                            </a>
                        </div>
                    </div>
                    <button aria-label="Hide banner"
                        onClick={() => setHidden(true)}
                    >
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1435_116753)">
                                <path
                                    d="M13.5 6.49989L6.49996 13.4999"
                                    stroke="#EDEEF0"
                                    strokeWidth="1.1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M13.4999 13.4999L6.49998 6.49991"
                                    stroke="#EDEEF0"
                                    strokeWidth="1.1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1435_116753">
                                    <rect width={20} height={20} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )

};