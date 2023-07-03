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
                            Ready to build your <br className="hidden tablet:inline" /> team&apos;s
                            <span className="text-white"> dream CRM?</span>
                        </h2>
                        <div className="flex flex-col desktop:flex-row gap-12px">
                            <a
                                href="https://app.attio.com/welcome/sign-in"
                                className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-primaryOnBlue hover:text-buttonNew-primaryOnBlue-hover active:text-buttonNew-primaryOnBlue-active focus:text-buttonNew-primaryOnBlue-focus disabled:text-buttonNew-primaryOnBlue-disabled bg-buttonNew-primaryOnBlue hover:bg-buttonNew-primaryOnBlue active:bg-buttonNew-primaryOnBlue-active focus:bg-white disabled:bg-buttonNew-primaryOnBlue-disabled border-[1px] border-buttonNew-primaryOnBlue hover:border-buttonNew-primaryOnBlue-hover active:border-buttonNew-primaryOnBlue-active disabled:border-buttonNew-primaryOnBlue-disabled shadow-none hover:shadow-buttonNew-primaryOnBlue-hover active:shadow-none focus:shadow-buttonNew-primaryOnBlue-focus disabled:shadow-buttonNew-primaryOnBlue-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primaryOnBlue before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                            >
                                <span className="z-1 relative">Start for free</span>
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
                        <div className="desktop:hidden contents">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full"
                                fill="none"
                                viewBox="0 0 294 240"
                            >
                                <g clipPath="url(#clip0_1640_38791)">
                                    <path
                                        fill="#266DF0"
                                        d="M0 0H294V239H0z"
                                        transform="translate(0 .53)"
                                    />
                                    <path
                                        stroke="#4B8BFF"
                                        d="M.5 87.13c0-1.69 0-2.925.08-3.9.08-.97.234-1.638.52-2.198a5.5 5.5 0 012.403-2.403c.56-.285 1.227-.44 2.197-.52.975-.08 2.212-.08 3.9-.08h273.8c1.688 0 2.925 0 3.9.08.97.08 1.637.235 2.197.52a5.504 5.504 0 012.404 2.403c.285.56.44 1.228.519 2.197.08.976.08 2.212.08 3.9v141.8c0 1.689 0 2.925-.08 3.9-.079.97-.234 1.638-.519 2.197a5.503 5.503 0 01-2.404 2.404c-.56.285-1.227.44-2.197.519-.975.08-2.212.08-3.9.08H9.6c-1.688 0-2.925 0-3.9-.08-.97-.079-1.637-.234-2.197-.519a5.499 5.499 0 01-2.404-2.404c-.285-.559-.44-1.227-.519-2.197-.08-.975-.08-2.211-.08-3.9v-141.8z"
                                    />
                                    <path
                                        stroke="#4B8BFF"
                                        strokeMiterlimit={10}
                                        d="M30 194.529h263M30 149.529h263M147 149.529v89M98 55.53v182.999M49 149.529v89M196 149.529v89M245 149.529v89M53 149.529v89"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M278.319 102.461l-9.478-15.167-7.507-12.01-.527-.852-1.493-2.394a11.109 11.109 0 00-9.414-5.218h-39.585a11.094 11.094 0 00-9.405 5.218l-19.225 30.423a10.985 10.985 0 00-1.671 6.2c.04 1.931.6 3.846 1.671 5.551l8.789 14.071 10.217 16.36a11.124 11.124 0 009.413 5.218h39.577c3.822 0 7.385-1.98 9.414-5.218l1.477-2.37.032-.048 9.787-15.67 7.928-12.335a11.095 11.095 0 000-11.759zm-35.787-14.063l8.821-13.966-17.707 28.037 8.886-14.071z"
                                    />
                                    <path
                                        fill="#266DF0"
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M181.686 102.461l19.208-30.423a11.098 11.098 0 019.414-5.218h39.585c3.83 0 7.384 1.972 9.413 5.218l19.006 30.423a11.099 11.099 0 010 11.759l-19.201 30.423a11.096 11.096 0 01-9.413 5.218h-39.585c-3.83 0-7.385-1.972-9.414-5.218l-10.225-16.36-8.788-14.063a11.095 11.095 0 010-11.759z"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M257.74 136.26l15.07-23.866c1.533-2.451 1.533-5.632 0-8.091l-15.102-24.166"
                                    />
                                    <path
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M257.74 136.26l15.07-23.866c1.533-2.451 1.533-5.632 0-8.091l-15.102-24.166"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M248.407 83.74l-12.895 20.636a7.742 7.742 0 00.033 8.091l13.3 21.277"
                                    />
                                    <path
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M248.407 83.74l-12.895 20.636a7.742 7.742 0 00.033 8.091l13.3 21.277"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M263.923 90.118l-7.499-12.002c-.673-1.08-1.793-1.193-2.247-1.193-.455 0-1.575.114-2.248 1.193l-4.269 6.833"
                                    />
                                    <path
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M263.923 90.118l-7.499-12.002c-.673-1.08-1.793-1.193-2.247-1.193-.455 0-1.575.114-2.248 1.193l-4.269 6.833"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M243.725 125.541l8.22 13.154c.666 1.071 1.721 1.185 2.143 1.185.421 0 1.468-.114 2.142-1.185l9.494-15.021"
                                    />
                                    <path
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M243.725 125.541l8.22 13.154c.666 1.071 1.721 1.185 2.143 1.185.421 0 1.468-.114 2.142-1.185l9.494-15.021"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M43.483 232.974l-30.555-48.45 98.647-160.193h67.22l30.118 50.633-102.576 158.01H43.483z"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M115.215 228.462l-1.946 3.126a14.657 14.657 0 01-12.412 6.876H48.681a14.656 14.656 0 01-12.411-6.876L22.8 210.024l-11.589-18.55a14.366 14.366 0 01-2.2-7.321"
                                    />
                                    <path
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M115.215 228.462l-1.946 3.126a14.657 14.657 0 01-12.412 6.876H48.681a14.656 14.656 0 01-12.411-6.876L22.8 210.024l-11.589-18.55a14.366 14.366 0 01-2.2-7.321"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M9.01 184.153a14.428 14.428 0 012.2-8.17l93.463-149.577a14.62 14.62 0 0112.402-6.877h52.185c5.044 0 9.739 2.598 12.412 6.877l1.964 3.154"
                                    />
                                    <path
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M9.01 184.153a14.428 14.428 0 012.2-8.17l93.463-149.577a14.62 14.62 0 0112.402-6.877h52.185c5.044 0 9.739 2.598 12.412 6.877l1.964 3.154"
                                    />
                                    <path
                                        fill="#266DF0"
                                        d="M183.635 29.561l10.598 16.955L206.73 66.51a14.616 14.616 0 010 15.5L128.163 207.74l-12.903 20.648-.047.076"
                                    />
                                    <path
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M183.635 29.561l10.598 16.955L206.73 66.51a14.616 14.616 0 010 15.5L128.163 207.74l-12.903 20.648-.047.076"
                                    />
                                    <path
                                        fill="#266DF0"
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        d="M108.184 223.578c-.576 0-2.002-.16-2.918-1.615l-11.26-18.031-8.585-13.431-1.596-2.541c-.992-1.587-1.55-3.41-1.587-5.242a10.446 10.446 0 011.587-5.904l41.994-67.204 46.755-74.883c.916-1.474 2.361-1.634 2.937-1.634.576 0 2.022.16 2.938 1.624l.68 1.087 20.789 32.88a10.595 10.595 0 010 11.154l-88.758 142.04-.038.076c-.916 1.464-2.343 1.615-2.919 1.615l-.019.009z"
                                    />
                                    <path
                                        fill="#266DF0"
                                        stroke="#6B9FFF"
                                        strokeMiterlimit={10}
                                        strokeWidth="0.8"
                                        d="M49.743 32.409a6.44 6.44 0 100-12.88 6.44 6.44 0 000 12.88zM28.59 32.409a6.44 6.44 0 100-12.88 6.44 6.44 0 000 12.88zM7.44 32.41a6.44 6.44 0 100-12.88 6.44 6.44 0 000 12.88z"
                                    />
                                    <path
                                        fill="#266DF0"
                                        stroke="#6B9FFF"
                                        strokeLinejoin="round"
                                        strokeWidth="0.8"
                                        d="M257.511 210.83l-7.295 17.829c-1.761 3.498-6.695 3.668-8.684.292l-17.625-36.225c-1.794-3.035 1.014-6.711 4.414-5.786l39.293 10.355c3.295.892 3.53 5.469.357 6.711l-10.444 6.824h-.016z"
                                    />
                                    <path
                                        fill="#266DF0"
                                        stroke="#6B9FFF"
                                        strokeLinejoin="round"
                                        strokeWidth="0.8"
                                        d="M217 168.673v10.468a9.72 9.72 0 001.079 4.447l22.901 44.447-.446-19.468L217 168.673zM257.511 195.266v15.564l-7.555 18.284-.487-17.886 8.042-15.962z"
                                    />
                                    <path
                                        fill="#266DF0"
                                        stroke="#6B9FFF"
                                        strokeLinejoin="round"
                                        strokeWidth="0.8"
                                        d="M282.91 183.759l-1.688 14.006a5.16 5.16 0 01-3.059 4.107l-20.653 8.95v-15.564l25.4-11.499z"
                                    />
                                    <path
                                        fill="#266DF0"
                                        stroke="#6B9FFF"
                                        strokeLinejoin="round"
                                        strokeWidth="0.8"
                                        d="M257.511 195.267l-7.296 14.517c-1.761 3.498-6.695 3.668-8.683.293l-23.972-40.616c-1.793-3.035 1.015-6.711 4.415-5.786l58.331 15.865c3.295.892 3.53 5.469.357 6.711l-23.152 9.016z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1640_38791">
                                        <path
                                            fill="#fff"
                                            d="M0 0H294V239H0z"
                                            transform="translate(0 .53)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
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