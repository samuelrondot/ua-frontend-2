// React
import { FC } from "react";
import { SalesPricingFaqItem } from "./item";

const leftQuestionsAndAnswers = [
    {
        question: "Is Attio free to use?",
        answer: "<p>Attio has plans for teams of all sizes, including a free option for very small teams or light projects. Our paid plans are incredibly powerful and are the best way to get the most out of Attio.</p>",
    },
    {
        question: "Do you offer discounts?",
        answer: "<p>Our Plus and Pro plans come with a 15% discount if you subscribe annually.</p>"
    },
    {
        question: "What are my payment options?",
        answer: "<p>All payments can be made via credit card. For our Pro and Enterprise plans, we can issue invoices and will accept PO, ACH, check or wire. Please contact our sales team for more information.</p>"
    },
    {
        question: "Do you offer invoice billing?",
        answer: "<p>We can issue invoices for our users of our Pro and Enterprise plans.</p>"
    },
    {
        question: "Do I need to connect my email?",
        answer: "<p><p>Connecting your email and calendar is not required. However, we recommend you sync your email and calendar with Attio.</p><p>When you sync your email and calendar, Attio instantly builds a real-time, global database of all your contacts. The more contacts you have in the database, the better our product becomes for you.</p></p>"
    },
    {
        question: "Can I import data from other tools?",
        answer: "<p>Yes! You can easily import data into Attio from other applications through CSV files.</p>"
    }
]

const rightQuestionsAndAnswers = [
    {
        question: "Does Attio have a free trial?",
        answer: "<p>Yes! Attio has a free plan which you can use to explore whether Attio is right for you.</p>"
    },
    {
        question: "Do you have a startup program?",
        answer: `<p>Yes! We offer up to $5k in credit for eligible startups and <a class="text-link active:text-link-active hover:text-link-hover" href="/startups">you can apply here</a>. For more information on the program feel free to reach out to the team at <a class="text-link active:text-link-active hover:text-link-hover" href="mailto:sales@attio.com">sales@attio.com</a>.</p>`
    },
    {
        question: "Do you have monthly and annual billing options?",
        answer: "<p>Our plans are billed either annually or monthly. If you choose to pay annually for our Plus and Pro plans, you'll receive a 15% discount.</p>"
    },
    {
        question: "Which plan is right for me?",
        answer: `<div><p>Our plans are built to scale with your needs. They include all the basic features and become increasingly more powerful depending on which plan you choose. Here's how they break down:</p>` +
            `<ul class="flex flex-col gap-4px pl-32px list-disc list-outside"><li class="mt-[5px] first-of-type:mt-[8px]"><span class="font-semibold">Free (for very small teams):</span> This plan is for teams with less than 3 people. It includes all the basic features, but has limited capabilities, including email and data enrichment.</li><li class="mt-[5px] first-of-type:mt-[8px]"><span class="font-semibold">Plus (for growing teams)</span>: This plan has an unlimited amount of seats. It has enhanced data enrichment, email capabilities such as sending and sharing and enhanced contact analysis.</li><li class="mt-[5px] first-of-type:mt-[8px]"><span class="font-semibold">Pro (for fast scaling businesses):</span> This plan is for businesses who need a single source of truth across their entire organization. It includes complete email sharing and sending capabilities. advanced data enrichment, advanced access permissions and extensive report building.</li><li class="mt-[5px] first-of-type:mt-[8px]"><span class="font-semibold">Enterprise (for large organizations):</span> This plan includes everything from our Pro plan plus advanced admin tools, permission access and SAML support. It is built for large organizations with strategic relationships spanning multiple business units.</li></ul></div>`
    },
    {
        question: "Does Attio have an API?",
        answer: "<p>Yes. Attio has a custom API that allows you to integrate with other tools in your stack.</p>"
    },
]

export const SalesPricingFaq: FC = () => {

    return (
        <>
            <section className="w-full max-w-screen-desktop flex flex-col pt-[90px] gap-40px tablet:gap-[60px] tablet:pb-[190px] px-24px desktop:px-16px max-desktop:bg-tertiary">
                <h3 className="typography-h4 desktop:typography-h3-strong text-typography-light-secondary">
                    Your questions, answered.
                </h3>
                <div className="hidden tablet:grid w-full max-w-screen-desktop tablet:px-32 mx-auto gap-24px grid-cols-2">
                    <div
                        className="flex flex-col gap-y-12px w-full"
                        data-orientation="vertical"
                    >
                        {leftQuestionsAndAnswers.map((item, index) => (
                            <SalesPricingFaqItem key={index} item={item} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-12px" data-orientation="vertical">
                        {rightQuestionsAndAnswers.map((item, index) => (
                            <SalesPricingFaqItem key={index} item={item} />
                        ))}
                    </div>
                </div>
                <div
                    className="flex tablet:hidden flex-col gap-y-12px"
                    data-orientation="vertical"
                >
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R26khp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:R6khp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Is Attio free to use?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R26khp:"
                            role="region"
                            aria-labelledby="radix-:R6khp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R2akhp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Rakhp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Does Attio have a free trial?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R2akhp:"
                            role="region"
                            aria-labelledby="radix-:Rakhp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R2ekhp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Rekhp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Do you offer discounts?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R2ekhp:"
                            role="region"
                            aria-labelledby="radix-:Rekhp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R2ikhp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Rikhp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Do you have a startup program?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R2ikhp:"
                            role="region"
                            aria-labelledby="radix-:Rikhp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R2mkhp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Rmkhp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                What are my payment options?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R2mkhp:"
                            role="region"
                            aria-labelledby="radix-:Rmkhp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R2qkhp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Rqkhp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Do you have monthly and annual billing options?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R2qkhp:"
                            role="region"
                            aria-labelledby="radix-:Rqkhp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R2ukhp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Rukhp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Do you offer invoice billing?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R2ukhp:"
                            role="region"
                            aria-labelledby="radix-:Rukhp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R32khp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:R12khp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Which plan is right for me?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R32khp:"
                            role="region"
                            aria-labelledby="radix-:R12khp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R36khp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:R16khp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Do I need to connect my email?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R36khp:"
                            role="region"
                            aria-labelledby="radix-:R16khp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R3akhp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:R1akhp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Does Attio have an API?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R3akhp:"
                            role="region"
                            aria-labelledby="radix-:R1akhp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                    <div
                        data-state="closed"
                        data-orientation="vertical"
                        className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
                    >
                        <h3
                            data-orientation="vertical"
                            data-state="closed"
                            className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                        >
                            <button
                                type="button"
                                aria-controls="radix-:R3ekhp:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:R1ekhp:"
                                className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                                data-radix-collection-item=""
                            >
                                Can I import data from other tools?
                                <svg
                                    height={20}
                                    width={20}
                                    className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                                >
                                    <use
                                        href="/build/_assets/chevron-down-B4U2TPCL.svg#icon"
                                        height={20}
                                        width={20}
                                    />
                                </svg>
                            </button>
                        </h3>
                        <div
                            data-state="closed"
                            id="radix-:R3ekhp:"
                            role="region"
                            aria-labelledby="radix-:R1ekhp:"
                            data-orientation="vertical"
                            className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                        ></div>
                    </div>
                </div>
            </section>
        </>
    )
}