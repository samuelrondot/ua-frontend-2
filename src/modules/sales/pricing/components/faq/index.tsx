// React
import { FC } from "react";
import { SalesPricingFaqItem } from "./item";

const leftQuestionsAndAnswers = [
    {
        question: "Can i try useArtemis for free?",
        answer: "<p>You will get a 14-day free trial with any plan exept with the entreprise plan.</p>",
    },
    {
        question: "Do you offer discounts?",
        answer: "<p>You can have a discount with our annual billing.</p>"
    },
    {
        question: "What are my payment options?",
        answer: "<p>All payments can be made via credit card and paypal.</p>"
    },
    {
        question: "Do you offer invoice billing?",
        answer: "<p>We can issue invoices for our users of our Pro and Enterprise plans.</p>"
    },
    {
        question: "Do I need a LinkedIn Premium subscription?",
        answer: "<p><p>No, useArtemis also works with regular LinkedIn. However we strongly advise you to pick up a Sales Navigator to improve your performances.</p></p>"
    },
    {
        question: "Can I import data from other tools?",
        answer: "<p>Yes! You can easily import data into useArtemis from other applications through CSV files.</p>"
    }
]

const rightQuestionsAndAnswers = [
    {
        question: "What does 1 credit mean?",
        answer: "<p>1 enrichment credit is equal to 1 lead with at least a verified email address.</p>"
    },
    {
        question: "Do you have a freelance program?",
        answer: `<p>Yes! Please send us an email at hello@useartemis.co</p>`
    },
    {
        question: "Do you have monthly and annual billing options?",
        answer: "<p>Our plans are billed either annually or monthly. Our annual plans come with a 20% discount.</p>"
    },
    {
        question: "Can useArtemis be used as a marketing tool?",
        answer: `<p>Absolutely. You can configure to automatically push new leads through your campaign and create the perfect workflow to reach out to your leads.</p>`
    },
    {
        question: "Does useArtemis have an API?",
        answer: "<p>Yes. You can push new leads to your campaigns or lists through our API.</p>"
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