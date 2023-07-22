// React
import Link from "next/link"
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
                        <h2 className="typography-h4-strong desktop:typography-h2-strong colorcustom pt-4px">
                        Ready to start your <br className="hidden tablet:inline" /> 
                            <span className="text-white">Lead Machine?</span>
                        </h2>
                        <div className="flex flex-col desktop:flex-row gap-12px">
                            <Link
                                href="/pricing"
                                className="buttoncustom rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium shadow-none  before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden  before:z-[0] before:opacity-0 hover:before:opacity-50 before:transition-opacity"
                            >
                                <span className="z-1 relative">Start 14-day free trial</span>
                            </Link>
                            <button
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:Rkohp:"
                                data-state="closed"
                                className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-secondaryOnBlue hover:text-white active:text-white focus:text-white  border-[1px]  hover:border-white active:border-white focus:border-white disabled:border-buttonNew-secondaryOnBlue-disabled shadow-none focus:shadow-buttonNew-secondaryOnBlue-focus"
                            >
                                <span className="z-1 relative">Talk to sales</span>
                            </button>
                        </div>
                       
                    </div>
                    <div className="hidden desktop:contents relative">
                       
                    </div>
                </div>
            </div>
        </>
    )
}