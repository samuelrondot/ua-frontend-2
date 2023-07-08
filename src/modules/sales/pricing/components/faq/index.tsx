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
                    {[...leftQuestionsAndAnswers, ...rightQuestionsAndAnswers].map((item, index) => (
                        <SalesPricingFaqItem key={index} item={item} />
                    ))}
                </div>
            </section>
        </>
    )
}