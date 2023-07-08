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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-full"><path className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition" d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"/></svg>
                                   
                                </div>
                                <div className={`typography-p6-strong desktop:typography-p5-strong transition-all ${activeTab === 'contacts' ? 'text-brand-light-primary' : 'text-greyscale-light-08'}`}>
                                    LinkedIn
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
                            className="group h-40px flex flex-col justify-center flex-none first-of-type:ml-24px last-of-type:mr-24px w-[150px]"
                            onClick={() => setActiveTab("pipelines")}
                        >
                            <div className="flex flex-row gap-8px flex-1 items-center ">
                                <div className="w-[22px] h-[24px] flex-shrink-0">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"  className="w-full"><path className="stroke-greyscale-light-07 group-data-[active=true]:stroke-brand-light-primary transition" d="M 24.984375 1.9863281 A 1.0001 1.0001 0 0 0 24.814453 2.0039062 C 12.274882 2.103865 2.1091128 12.266354 2.0039062 24.804688 A 1.0001 1.0001 0 0 0 2.0039062 25.183594 C 2.1028205 37.724066 12.2657 47.890882 24.804688 47.996094 A 1.0001 1.0001 0 0 0 25.183594 47.996094 C 37.724066 47.89718 47.890882 37.7343 47.996094 25.195312 A 1.0001 1.0001 0 0 0 47.996094 24.816406 C 47.897149 12.27201 37.72799 2.1028514 25.183594 2.0039062 A 1.0001 1.0001 0 0 0 24.984375 1.9863281 z M 24 4.0253906 L 24 5 A 1.0001 1.0001 0 1 0 26 5 L 26 4.0253906 C 36.812778 4.5308198 45.46918 13.187222 45.974609 24 L 45 24 A 1.0001 1.0001 0 1 0 45 26 L 45.974609 26 C 45.46918 36.812778 36.812778 45.46918 26 45.974609 L 26 45 A 1.0001 1.0001 0 0 0 24.984375 43.986328 A 1.0001 1.0001 0 0 0 24 45 L 24 45.974609 C 13.187222 45.46918 4.5308198 36.812778 4.0253906 26 L 5 26 A 1.0001 1.0001 0 1 0 5 24 L 4.0253906 24 C 4.5308198 13.187222 13.187222 4.5308198 24 4.0253906 z M 36.964844 12 A 1.0001 1.0001 0 0 0 36.439453 12.171875 L 22.117188 21.847656 A 1.0001 1.0001 0 0 0 21.847656 22.117188 L 12.171875 36.439453 A 1.0001 1.0001 0 0 0 13.560547 37.828125 L 27.884766 28.152344 A 1.0001 1.0001 0 0 0 28.154297 27.882812 L 37.828125 13.560547 A 1.0001 1.0001 0 0 0 36.964844 12 z M 23.396484 23.396484 L 26.603516 26.603516 L 16.71875 33.28125 L 23.396484 23.396484 z"/></svg>


                                </div>
                                <div className={`typography-p6-strong  desktop:typography-p5-strong transition-all ${activeTab === 'pipelines' ? 'text-brand-light-primary' : 'text-greyscale-light-08'} width-fit-content`}>
                                    Sales Navigator
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
                 

                </div>
            </div>

        </>
    )
}