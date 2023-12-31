// React
import { FC } from "react";
// Module Components
import { CrmStartupFeaturesTabSlider } from "./tab-slider";
import Link from "next/link";

export const CrmStartupFeatures: FC = () => {

    return (
        <>
            <section className="bg-background-light-tertiary pt-[60px] tablet:pt-[90px]">
                <header className="flex flex-col items-center gap-24px">
                    <div className="px-24px flex flex-col tablet:items-center gap-12px">
                        <div className="flex flex-col items-center gap-24px">
                           
                            <h2 className="typography-h4 tablet:typography-h2-strong text-center text-typography-light-primary px-[10px] phablet:max-desktop:max-w-[800px]">
                            Why multichannel channel approach ?
                          
                            </h2>
                        </div>
                        <p className="typography-p5-medium tablet:typography-p2-medium text-typography-light-tertiary text-center mx-auto max-tablet:max-w-[500px] max-tablet:text-center tablet:max-w-[561px]">
                        Multichannel approach not only renders your strategy less intrusive, but also acknowledges that 80% of your prospects emails may remain undiscovered. By diversifying your channels, you demonstrate a genuine effort to connect with prospects, which is greatly appreciated by them.
                        </p>
                    </div>
                    <Link
                        href="/pricing"
                        className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-primary hover:text-buttonNew-primary-hover active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary hover:bg-buttonNew-primary active:bg-buttonNew-primary-active focus:bg-buttonNew-primary-active disabled:bg-buttonNew-primary-disabled border-[1px] border-buttonNew-primary hover:border-buttonNew-primary-hover disabled:border-buttonNew-primary-disabled shadow-buttonNew-primary hover:shadow-buttonNew-primary-hover active:shadow-none focus:shadow-buttonNew-primary-focus disabled:shadow-buttonNew-primary-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                    >
                        <span className="z-1 relative">Start 14-day free trial</span>
                    </Link>
                </header>
                <CrmStartupFeaturesTabSlider />
            </section>
        </>
    )
}