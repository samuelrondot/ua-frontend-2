// React
import { FC, useEffect, useState } from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type OwnProps = {
    onChange: (index: number) => void
}

export const CrmStartupWorkflowAccordion: FC<OwnProps> = (props) => {
    const [activeAccordion, setActiveAccordion] = useState<number>(0)

    useEffect(() => {
        props.onChange(activeAccordion)
    }, [activeAccordion])

    return (
        <>
            <div className="w-[448px]" data-orientation="vertical">
                <div
                    className="flex flex-row py-24px pl-28px pr-20px rounded-8px justify-between items-start w-full group gap-12px transition-shadow shadow-none data-state-open:shadow-accordion-item"
                    data-state={`${activeAccordion === 0 ? 'open' : 'closed'}`}
                    data-orientation="vertical"
                >
                    <div className="flex flex-col gap-8px w-full">
                        <button
                            type="button"
                            aria-controls="radix-:R5j5hp:"
                            aria-expanded="true"
                            data-state={`${activeAccordion === 0 ? 'open' : 'closed'}`}
                            aria-disabled="true"
                            data-orientation="vertical"
                            id="radix-:R1j5hp:"
                            data-radix-collection-item=""
                            onClick={() => setActiveAccordion(0)}
                        >
                            <div
                                className="flex flex-row justify-between"
                                data-orientation="vertical"
                                data-state={`${activeAccordion === 0 ? 'open' : 'closed'}`}
                            >
                                <h3 className="typography-p4-medium text-left transition-colors text-typography-light-secondary group-data-[state=open]:text-brand-light-primary">
                                    Create the perfect sales workflow.
                                </h3>
                                <svg
                                    height={15}
                                    width={30}
                                    className="stroke-greyscale-light-11 flex-none transition ease-linear group-data-[state=open]:-rotate-180"
                                >
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </svg>
                            </div>
                        </button>
                        <div
                            data-state={`${activeAccordion === 0 ? 'open' : 'closed'}`}
                            id="radix-:R5j5hp:"
                            role="region"
                            aria-labelledby="radix-:R1j5hp:"
                            data-orientation="vertical"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-collapsible-content-height": "48px", "--radix-collapsible-content-width": "400px;" } as any}
                        >
                            <p className="typography-p5-medium text-typography-light-quaternary pr-[30px]"
                                style={{ display: `${activeAccordion === 0 ? 'block' : 'none'}` }}>
                                Use Attio’s powerful templates or building blocks to design your perfect
                                workflow.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-row py-24px pl-28px pr-20px rounded-8px justify-between items-start w-full group gap-12px transition-shadow shadow-none data-state-open:shadow-accordion-item"
                    data-state={`${activeAccordion === 1 ? 'open' : 'closed'}`}
                    data-orientation="vertical"
                >
                    <div className="flex flex-col gap-8px w-full">
                        <button
                            type="button"
                            aria-controls="radix-:R6j5hp:"
                            aria-expanded="true"
                            data-state={`${activeAccordion === 1 ? 'open' : 'closed'}`}
                            data-orientation="vertical"
                            id="radix-:R2j5hp:"
                            data-radix-collection-item=""
                            aria-disabled="true"
                            onClick={() => setActiveAccordion(1)}
                        >
                            <div
                                className="flex flex-row justify-between"
                                data-orientation="vertical"
                                data-state={`${activeAccordion === 1 ? 'open' : 'closed'}`}
                            >
                                <h3 className="typography-p4-medium text-left transition-colors text-typography-light-secondary group-data-[state=open]:text-brand-light-primary">
                                    Powerful intel on every deal.
                                </h3>
                                <svg
                                    height={15}
                                    width={30}
                                    className="stroke-greyscale-light-11 flex-none transition ease-linear group-data-[state=open]:-rotate-180"
                                >
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </svg>
                            </div>
                        </button>
                        <div
                            data-state={`${activeAccordion === 1 ? 'open' : 'closed'}`}
                            id="radix-:R6j5hp:"
                            role="region"
                            aria-labelledby="radix-:R2j5hp:"
                            data-orientation="vertical"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-collapsible-content-height": "48px", "--radix-collapsible-content-width": "400px;" } as any}
                        >
                            <p className="typography-p5-medium text-typography-light-quaternary pr-[30px]"
                                style={{ display: `${activeAccordion === 1 ? 'block' : 'none'}` }}>
                                Get instant visibility into each prospect’s communications and
                                interactions with your company.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-row py-24px pl-28px pr-20px rounded-8px justify-between items-start w-full group gap-12px transition-shadow shadow-none data-state-open:shadow-accordion-item"
                    data-state={`${activeAccordion === 2 ? 'open' : 'closed'}`}
                    data-orientation="vertical"
                >
                    <div className="flex flex-col gap-8px w-full">
                        <button
                            type="button"
                            aria-controls="radix-:R7j5hp:"
                            aria-expanded="true"
                            data-state={`${activeAccordion === 2 ? 'open' : 'closed'}`}
                            data-orientation="vertical"
                            id="radix-:R3j5hp:"
                            data-radix-collection-item=""
                            aria-disabled="true"
                            onClick={() => setActiveAccordion(2)}
                        >
                            <div
                                className="flex flex-row justify-between"
                                data-orientation="vertical"
                                data-state={`${activeAccordion === 2 ? 'open' : 'closed'}`}
                            >
                                <h3 className="typography-p4-medium text-left transition-colors text-typography-light-secondary group-data-[state=open]:text-brand-light-primary">
                                    Collaborative notes for everyone.
                                </h3>
                                <svg
                                    height={15}
                                    width={30}
                                    className="stroke-greyscale-light-11 flex-none transition ease-linear group-data-[state=open]:-rotate-180"
                                >
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </svg>
                            </div>
                        </button>
                        <div
                            data-state={`${activeAccordion === 2 ? 'open' : 'closed'}`}
                            id="radix-:R7j5hp:"
                            role="region"
                            aria-labelledby="radix-:R3j5hp:"
                            data-orientation="vertical"
                            style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-collapsible-content-height": "48px", "--radix-collapsible-content-width": "400px;" } as any}
                        >
                            <p className="typography-p5-medium text-typography-light-quaternary pr-[30px]"
                                style={{ display: `${activeAccordion === 2 ? 'block' : 'none'}` }}
                            >
                                Keep your team up-to-date on every part of the customer lifecycle,
                                from discovery to customer success and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}