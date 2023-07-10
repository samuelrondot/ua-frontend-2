// React
import { FC, useState } from "react"
// Font Awesome
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type OwnProps = {
    item: {
        question: string
        answer: string
    }
}

export const SalesPricingFaqItem: FC<OwnProps> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>

            <div
                data-state={`${isOpen ? 'open' : 'closed'}`}
                data-orientation="vertical"
                className="block rounded-8px bg-white border border-stroke-light-secondary max-desktop:p-[18px]"
            >
                <h3
                    data-orientation="vertical"
                    data-state={`${isOpen ? 'open' : 'closed'}`}
                    className="typography-p6-strong desktop:typography-p5-medium text-typography-light-secondary"
                >
                    <button
                        type="button"
                        aria-controls="radix-:R4lkhp:"
                        aria-expanded={isOpen ? true : false}
                        data-state={`${isOpen ? 'open' : 'closed'}`}
                        data-orientation="vertical"
                        id="radix-:Rlkhp:"
                        className="group desktop:py-20px desktop:px-24px flex flex-row justify-between w-full text-left"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {props.item.question}
                        <svg
                            height={15}
                            width={20}
                            className="stroke-greyscale-light-12 transition-transform transform rotate-0 group-aria-expanded:-rotate-180 flex-shrink-0"
                        >
                            <FontAwesomeIcon icon={faChevronDown} />
                        </svg>
                    </button>
                </h3>
                <div
                    data-state={`${isOpen ? 'open' : 'closed'}`}
                    id="radix-:R4lkhp:"
                    role="region"
                    aria-labelledby="radix-:Rlkhp:"
                    data-orientation="vertical"
                    className="desktop:px-24px desktop:pb-20px max-desktop:pt-12px typography-p6-medium desktop:typography-p5-medium text-typography-light-tertiary desktop:text-typography-light-quaternary"
                    style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}
                >
                    {isOpen && (
                        <div
                            dangerouslySetInnerHTML={{ __html: props.item.answer }}
                        />
                    )}
                </div>
            </div>
        </>
    )
}