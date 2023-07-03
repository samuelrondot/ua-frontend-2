// React
import { FC, useState } from "react"

type OwnProps = {
    style?: object,
    isDesktopMedia: boolean,
}

export const BannerRaises: FC<OwnProps> = (props) => {
    const [hidden, setHidden] = useState(false)

    return (
        <>
            <div className={`flex w-full mx-auto pt-16px ${hidden || !props.isDesktopMedia ? 'hidden' : null}`}>
                <div className="w-full flex rounded-[12px] px-[11px] tablet:py-[5px] cursor-pointer bg-[#202124] hover:bg-button-gradient-primary border border-[#3B3E45]">
                    <div className="relative flex flex-row gap-[12px] items-center w-full justify-center">
                        <span className="typography-p6-strong text-[#FFFFFF]">
                            We&apos;ve raised a $23.5m Series A led by Redpoint Ventures!
                        </span>
                        <a
                            className="typography-c1-strong text-[#FFFFFF] underline"
                            href="https://attio.com/blog/series-a-round"
                        >
                            Read more
                        </a>
                    </div>
                    <button
                        aria-label="Hide banner"
                        className="relative ml-auto"
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
}