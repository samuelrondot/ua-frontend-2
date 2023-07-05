// React
import { FC } from "react"

type OwnProps = {
    style?: object,
}

export const CrmStartupCallToActions: FC<OwnProps> = (props) => {

    return (
        <>
            <div className="bg-brand-light-primary w-full flex flex-col desktop:flex-row justify-center desktop:items-end desktop:h-[346px] relative">
                <div className="group transition-colors border-l border-attio-blue-02 overflow-hidden isolate w-full flex flex-col desktop:flex-row justify-between desktop:items-end desktop:h-[346px] relative max-w-[1440px]">
                    <div className="z-10 w-full p-24px desktop:pb-[40px] desktop:pl-[40px] desktop:w-2/3 tablet:w-1/2 flex flex-col gap-32px desktop:gap-[20px] tablet:self-center tablet:pt-[80px] min-[1440px]:pl-[142px]">
                        <h2 className="typography-h4-strong desktop:typography-h2-strong text-[#A0C2FF] pt-4px">
                        Ready to start your <br className="hidden tablet:inline" /> 
                            <span className="text-white">Lead Machine?</span>
                        </h2>
                        <div className="flex flex-col desktop:flex-row gap-12px">
                            <a
                                href="https://app.attio.com/welcome/sign-in"
                                className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-primaryOnBlue hover:text-buttonNew-primaryOnBlue-hover active:text-buttonNew-primaryOnBlue-active focus:text-buttonNew-primaryOnBlue-focus disabled:text-buttonNew-primaryOnBlue-disabled bg-buttonNew-primaryOnBlue hover:bg-buttonNew-primaryOnBlue active:bg-buttonNew-primaryOnBlue-active focus:bg-white disabled:bg-buttonNew-primaryOnBlue-disabled border-[1px] border-buttonNew-primaryOnBlue hover:border-buttonNew-primaryOnBlue-hover active:border-buttonNew-primaryOnBlue-active disabled:border-buttonNew-primaryOnBlue-disabled shadow-none hover:shadow-buttonNew-primaryOnBlue-hover active:shadow-none focus:shadow-buttonNew-primaryOnBlue-focus disabled:shadow-buttonNew-primaryOnBlue-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primaryOnBlue before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                            >
                                <span className="z-1 relative">Start 14-day free trial</span>
                            </a>
                            <button
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:Rkohp:"
                                data-state="closed"
                                className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-secondaryOnBlue hover:text-white active:text-white focus:text-white disabled:text-buttonNew-secondaryOnBlue-disabled active:bg-buttonNew-secondaryOnBlue-active focus:bg-buttonNew-secondaryOnBlue-active border-[1px] border-buttonNew-secondaryOnBlue hover:border-white active:border-white focus:border-white disabled:border-buttonNew-secondaryOnBlue-disabled shadow-none focus:shadow-buttonNew-secondaryOnBlue-focus"
                            >
                                <span className="z-1 relative">Talk to sales</span>
                            </button>
                        </div>
                       
                    </div>
                    <div className="hidden desktop:contents relative">
                        <svg
                            width={708}
                            height={346}
                            viewBox="0 0 708 346"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-auto h-full absolute top-0 right-0 bottom-0"
                        >
                            <g clipPath="url(#clip0_965_57589)">
                                <path d="M108 -2L108 456" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path d="M348 232L708 232" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path d="M348 312L708 312" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path d="M348 272L708 272" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path d="M348 192H708" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path d="M348 192.06V398" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path d="M468 192.06V398" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path d="M588 192.06V398" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path d="M588 -2L588 192" stroke="#4B8BFF" strokeMiterlimit={10} />
                                <path
                                    d="M293 243.5C293 186.891 246.885 141 190 141C133.115 141 87 186.891 87 243.5C87 300.109 133.115 346 190 346C246.885 346 293 300.109 293 243.5Z"
                                    fill="#266DF0"
                                    stroke="#6B9FFF"
                                    strokeWidth="0.8"
                                    strokeMiterlimit={10}
                                />
                                <rect
                                    x={238}
                                    y="323.916"
                                    width={201}
                                    height={88}
                                    rx={24}
                                    fill="#266DF0"
                                    stroke="#6B9FFF"
                                    strokeWidth="0.8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    d="M273.975 29.1148L204.267 55.5471C197.752 58.0177 194.473 65.3023 196.943 71.8177L223.375 141.525C225.846 148.041 233.131 151.32 239.646 148.849L309.354 122.417C315.869 119.946 319.148 112.662 316.677 106.146L290.245 36.4387C287.775 29.9232 280.49 26.6442 273.975 29.1148Z"
                                    fill="#266DF0"
                                    stroke="#6B9FFF"
                                    strokeWidth="0.8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    d="M674.823 50.3932C679.626 50.3932 683.52 46.4996 683.52 41.6966C683.52 36.8936 679.626 33 674.823 33C670.02 33 666.127 36.8936 666.127 41.6966C666.127 46.4996 670.02 50.3932 674.823 50.3932Z"
                                    fill="#266DF0"
                                    stroke="#6B9FFF"
                                    strokeWidth="0.8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    d="M646.259 50.3932C651.062 50.3932 654.956 46.4996 654.956 41.6966C654.956 36.8936 651.062 33 646.259 33C641.456 33 637.562 36.8936 637.562 41.6966C637.562 46.4996 641.456 50.3932 646.259 50.3932Z"
                                    fill="#266DF0"
                                    stroke="#6B9FFF"
                                    strokeWidth="0.8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    d="M617.697 50.3932C622.5 50.3932 626.393 46.4996 626.393 41.6966C626.393 36.8936 622.5 33 617.697 33C612.894 33 609 36.8936 609 41.6966C609 46.4996 612.894 50.3932 617.697 50.3932Z"
                                    fill="#266DF0"
                                    stroke="#6B9FFF"
                                    strokeWidth="0.8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    d="M556.639 224.329C556.658 220.973 559.959 218.122 563.622 219.259L642.426 244.012C645.205 244.878 646.287 247.656 645.62 249.984L642.715 268.963C642.318 271.435 640.64 273.51 638.313 274.412L626.225 279.102L611.197 284.93C610.186 285.327 609.393 286.085 608.942 287.059L598.73 309.502C596.15 314.193 589.403 314.157 586.859 309.448L557.253 246.249C556.351 244.337 555.936 242.226 556.008 240.115L556.639 224.329Z"
                                    fill="#266DF0"
                                    stroke="#8FB7FF"
                                    strokeWidth="1.8"
                                    strokeMiterlimit={10}
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M609.718 265.661L599.759 283.703C597.179 288.394 590.431 288.358 587.888 283.649L557.289 226.927C554.998 222.687 559.021 217.816 563.622 219.259L642.427 244.012C646.865 245.401 646.955 251.661 642.553 253.195L611.973 263.767C611.017 264.092 610.205 264.777 609.7 265.68L609.718 265.661Z"
                                    fill="#266DF0"
                                    stroke="#8FB7FF"
                                    strokeWidth="1.8"
                                    strokeMiterlimit={10}
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M609.5 286.174L611.088 264.182"
                                    stroke="#8FB7FF"
                                    strokeMiterlimit={10}
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M598.748 309.483L601.869 279.751"
                                    stroke="#8FB7FF"
                                    strokeMiterlimit={10}
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M586.877 309.429L586.173 280.689"
                                    stroke="#8FB7FF"
                                    strokeMiterlimit={10}
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M601.098 143.137L574.703 184.935C571.919 189.389 567.037 192.101 561.77 192.101H507.382C502.114 192.115 497.232 189.389 494.448 184.935L468.325 143.137C465.227 138.184 465.227 131.917 468.311 126.978L494.705 85.1804C497.503 80.7123 502.371 78 507.624 78H562.027C567.294 78 572.176 80.7123 574.96 85.1518L601.083 126.978C604.181 131.917 604.181 138.198 601.098 143.137Z"
                                    fill="#266DF0"
                                    stroke="#8FB7FF"
                                    strokeWidth="1.8"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    d="M564.838 93.5166C565.766 92.0463 567.308 91.875 567.922 91.875C568.55 91.875 570.077 92.032 571.005 93.5166L572.761 96.3431V96.286L593.517 129.504C595.63 132.887 595.63 137.256 593.517 140.624L583.767 156.141L570.734 176.783C569.806 178.254 568.379 178.425 567.808 178.411C567.222 178.411 565.781 178.254 564.853 176.769L542.341 140.724C540.228 137.355 540.214 133.002 542.284 129.604L564.838 93.5166Z"
                                    fill="#266DF0"
                                    stroke="#8FB7FF"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    d="M237.014 250.557C236.868 246.741 237.887 242.896 239.985 239.532L366.18 37.5623C369.791 31.7805 376.112 28.2852 382.928 28.2852H453.387C460.203 28.2852 466.538 31.795 470.15 37.5623L472.801 41.8149L473.747 43.3295L487.117 64.7091L503.996 91.7103C505.991 94.9143 506.996 98.5406 506.996 102.182C506.996 105.808 505.991 109.449 503.996 112.653L397.914 282.408L380.496 310.283L380.437 310.385L377.816 314.608C374.204 320.376 367.869 323.885 361.053 323.885H290.579C283.763 323.885 277.428 320.361 273.816 314.608L255.626 285.495L239.985 260.446C238.091 257.417 237.086 254.009 237.014 250.557Z"
                                    fill="#266DF0"
                                    stroke="#8FB7FF"
                                    strokeWidth="1.8"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M370.927 303.788C370.155 303.788 368.218 303.569 366.98 301.603L351.776 277.267L340.183 259.135L338.028 255.698C336.688 253.557 335.945 251.096 335.887 248.62C335.799 245.78 336.542 243.042 338.028 240.654L394.724 149.922L457.858 48.8056C459.096 46.8249 461.048 46.6064 461.819 46.6064C462.591 46.6064 464.543 46.8249 465.781 48.8056L466.698 50.2765L494.777 94.6814C497.632 99.2544 497.632 105.167 494.777 109.74L374.918 301.501L374.859 301.603C373.621 303.569 371.699 303.788 370.913 303.788H370.927Z"
                                    fill="#266DF0"
                                    stroke="#8FB7FF"
                                    strokeMiterlimit={10}
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_965_57589">
                                    <rect width={708} height={346} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}