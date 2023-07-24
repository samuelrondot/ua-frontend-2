// React
import { FC, useState } from "react";
// Common components
import { CrmStartupWorkflowSalesImage } from "./sales-image";
import { CrmStartupWorkflowDealImage } from "./deal-image";
import { CrmStartupWorkflowNoteImage } from "./note-image";
import { CrmStartupWorkflowAccordion } from "./accordion";
import Link from "next/link";

export const CrmStartupWorkflow: FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<number>(0)

    const _handleAccordionChange = (index: number) => {
        setActiveAccordion(index)
    }

    return (
        <>
            <section className="bg-background-light-secondary pt-[90px] pb-[60px]">
                <div className="contents tablet:hidden">
                    <div className="pb-40px">
                        <header className="flex flex-col items-center gap-24px">
                            <div className="px-24px flex flex-col tablet:items-center gap-12px">
                                <div className="flex flex-col items-center gap-24px">
                                    <p className="border font-inter font-semibold text-12px leading-130 rounded-[30px] px-[10px] tablet:px-12px py-4px tablet:py-[6px] uppercase flex-grow-0 border-brand-light-primary text-brand-light-primary ">
                                     LinkedIn Scraper
                                    </p>
                                    <h2 className="typography-h4 tablet:typography-h2-strong text-center text-typography-light-primary px-[10px] phablet:max-desktop:max-w-[800px]">
                                   Build clean lists in seconds
                                    </h2>
                                </div>
                                <p className="typography-p5-medium tablet:typography-p2-medium text-typography-light-tertiary text-center mx-auto max-tablet:max-w-[500px] max-tablet:text-center tablet:max-w-[461px]">
                                Stop wasting hours to manually extract and clean lists of leads from LinkedIn.
                                </p>
                            </div>
                            <Link
                                href="/pricing"
                                className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-primary hover:text-buttonNew-primary-hover active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary hover:bg-buttonNew-primary active:bg-buttonNew-primary-active focus:bg-buttonNew-primary-active disabled:bg-buttonNew-primary-disabled border-[1px] border-buttonNew-primary hover:border-buttonNew-primary-hover disabled:border-buttonNew-primary-disabled shadow-buttonNew-primary hover:shadow-buttonNew-primary-hover active:shadow-none focus:shadow-buttonNew-primary-focus disabled:shadow-buttonNew-primary-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                            >
                                <span className="z-1 relative">Start for free</span>
                            </Link>
                        </header>
                    </div>
                    <div className="flex flex-col px-24px gap-60px max-phablet:items-center phablet:flex-row phablet:flex-wrap phablet:justify-center phablet:max-desktop:after:basis-[342px]">
                        <div className="flex flex-col gap-24px max-w-[342px]">
                            <div className="flex flex-col h-[315px] bg-background-light-tertiary rounded-16px">
                                <picture className="mt-auto max-h-full">
                                    <source
                                        srcSet="/assets/expor.png"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/assets/expor.png"
                                        alt="A screenshot of useArtemis's Chrome extension in action to scrape linkedin search results."
                                        className="max-h-full"
                                        width={684}
                                        height={630}
                                    />
                                </picture>
                            </div>
                            <div className="flex flex-col gap-8px">
                                <h3 className="typography-p3-medium text-typography-light-secondary">
                                    Export leads
                                </h3>
                                <p className="typography-p5-medium text-typography-light-quaternary">
                                   Leverage useArtemis&apos;s Chrome extension to extract lead from LinkedIn or Sales Navigator.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-24px max-w-[342px]">
                            <div className="flex flex-col h-[315px] bg-background-light-tertiary rounded-16px">
                                <picture className="mt-auto max-h-full">
                                    <source
                                        srcSet="/assets/clean-linkedin-data.png"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/assets/clean-linkedin-data.png"
                                        alt="An illustration of leads scrapd profiles from linkedin being cleaned and ready to use."
                                        className="max-h-full"
                                        width={684}
                                        height={630}
                                    />
                                </picture>
                            </div>
                            <div className="flex flex-col gap-8px">
                                <h3 className="typography-p3-medium text-typography-light-secondary">
                                    Clean data
                                </h3>
                                <p className="typography-p5-medium text-typography-light-quaternary">
                                    Stop spending hours to sanitize your lead list. Get clean and ready to use data in just a click.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-24px max-w-[342px]">
                            <div className="flex flex-col h-[315px] bg-background-light-tertiary rounded-16px">
                                <picture className="mt-auto max-h-full">
                                    <source
                                        srcSet="/assets/enrich2.png"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/assets/enrich2.png"
                                        alt="useArtemis's enrichment feature in action."
                                        className="max-h-full"
                                        width={684}
                                        height={630}
                                    />
                                </picture>
                            </div>
                            <div className="flex flex-col gap-8px">
                                <h3 className="typography-p3-medium text-typography-light-secondary">
                                    Automatic enrichment
                                </h3>
                                <p className="typography-p5-medium text-typography-light-quaternary">
                                    Automatically find verified professional emails of your exported leads.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden tablet:contents">
                    <div className="flex flex-row items-start max-w-[1204px] w-full px-48px mx-auto justify-between gap-48px" >
                        <div className="flex flex-col gap-24px max-w-[342px]">
                            <div className="flex flex-col gap-24px items-start">
                                <p className="border font-inter font-semibold text-12px leading-130 rounded-[30px] px-[10px] tablet:px-12px py-4px tablet:py-[6px] uppercase flex-grow-0 border-brand-light-primary text-brand-light-primary ">
                                    LinkedIn Scraper
                                </p>
                                <div className="flex flex-col gap-12px">
                                    <h2 className="typography-h2-strong text-typography-light-secondary">
                                    Build clean lists in seconds
                                    </h2>
                                    <p className="typography-p4-medium text-typography-light-tertiary">
                                        Stop wasting hours to manually extract and clean lists of leads from LinkedIn.
                                    </p>
                                </div>
                            </div>

                            <CrmStartupWorkflowAccordion onChange={_handleAccordionChange} />

                        </div>
                        <div className="w-[590px] mt-[53px] h-[544px] rounded-[10px] flex-grow-0">
                            {activeAccordion === 0 && (
                                <CrmStartupWorkflowSalesImage />
                            )}
                            {activeAccordion === 1 && (
                                <CrmStartupWorkflowDealImage />
                            )}
                            {activeAccordion === 2 && (
                                <CrmStartupWorkflowNoteImage />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}