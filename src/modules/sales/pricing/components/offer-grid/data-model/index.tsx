// React
import { FC, useState } from "react";
// Font Awesome
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const infoBubble = {
    accessPermissions: ''
}

export const SalesPricingOfferGridDataModel: FC = () => {
    const [accordionOpen, setAccordionOpen] = useState<number[]>([])
    const [infoOpen, setInfoOpen] = useState<number[]>([])

    const _isAccordionOpen = (index: number) => {
        return accordionOpen.includes(index)
    }

    const _toggleAccordionOpen = (index: number) => {
        if (accordionOpen.includes(index)) {
            const newAccordionOpen = accordionOpen.filter((item) => item !== index)
            setAccordionOpen(newAccordionOpen)
        } else {
            setAccordionOpen([...accordionOpen, index])
        }
    }

    const _isInfoOpen = (index: number) => {
        return accordionOpen.includes(index)
    }

    const _toggleInfoOpen = (index: number) => {
        if (accordionOpen.includes(index)) {
            const newInfoOpen = infoOpen.filter((item) => item !== index)
            setInfoOpen(newInfoOpen)
        } else {
            setInfoOpen([...infoOpen, index])
        }
    }

    return (
        <>
            <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                    Data model
                </h3>
                <div data-orientation="vertical">
                    <table className="table-fixed border-separate w-full desktop:w-auto">
                        <tbody>
                            <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                    Access permissions
                                    <button
                                        type="button"
                                        aria-haspopup="dialog"
                                        aria-expanded={_isInfoOpen(0) ? true : false}
                                        aria-controls="radix-:Rin6rhp:"
                                        data-state={_isInfoOpen(0) ? 'open' : 'closed'}
                                        onClick={() => _toggleInfoOpen(0)}
                                    >
                                        <svg
                                            height={15}
                                            width={20}
                                            className="stroke-greyscale-light-07"
                                        >
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </svg>
                                    </button>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Free
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        Fully visible
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Plus
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        Private
                                        <button
                                            type="button"
                                            aria-haspopup="dialog"
                                            aria-expanded={_isInfoOpen(1) ? true : false}
                                            aria-controls="radix-:Rin6rhp:"
                                            data-state={_isInfoOpen(1) ? 'open' : 'closed'}
                                            onClick={() => _toggleInfoOpen(1)}
                                        >
                                            <svg
                                                height={15}
                                                width={20}
                                                className="stroke-greyscale-light-07"
                                            >
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Pro
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        Advanced
                                        <button
                                            type="button"
                                            aria-haspopup="dialog"
                                            aria-expanded={_isInfoOpen(2) ? true : false}
                                            aria-controls="radix-:Rin6rhp:"
                                            data-state={_isInfoOpen(2) ? 'open' : 'closed'}
                                            onClick={() => _toggleInfoOpen(2)}
                                        >
                                            <svg
                                                height={15}
                                                width={20}
                                                className="stroke-greyscale-light-07"
                                            >
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Enterprise
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        Advanced
                                        <button
                                            type="button"
                                            aria-haspopup="dialog"
                                            aria-expanded={_isInfoOpen(3) ? true : false}
                                            aria-controls="radix-:Rin6rhp:"
                                            data-state={_isInfoOpen(3) ? 'open' : 'closed'}
                                            onClick={() => _toggleInfoOpen(3)}
                                        >
                                            <svg
                                                height={15}
                                                width={20}
                                                className="stroke-greyscale-light-07"
                                            >
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr
                                className="typography-p6-medium hidden max-desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary"
                                data-state="closed"
                                data-orientation="vertical"
                            >
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                    <h3
                                        data-orientation="vertical"
                                        data-state="closed"
                                        className="w-full flex-1 flex flex-row items-center justify-between"
                                    >
                                        <div className="flex flex-row gap-[10px]">
                                            Access permissions
                                            <button
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded={_isInfoOpen(4) ? true : false}
                                                aria-controls="radix-:Rin6rhp:"
                                                data-state={_isInfoOpen(4) ? 'open' : 'closed'}
                                                onClick={() => _toggleInfoOpen(4)}
                                            >
                                                <svg
                                                    height={15}
                                                    width={20}
                                                    className="stroke-greyscale-light-07"
                                                >
                                                    <FontAwesomeIcon icon={faCircleInfo} />
                                                </svg>
                                            </button>{" "}
                                        </div>
                                        <button
                                            type="button"
                                            aria-controls="radix-:R376rhp:"
                                            aria-expanded={_isAccordionOpen(5) ? true : false}
                                            data-state={_isAccordionOpen(5) ? 'open' : 'close'}
                                            data-orientation="vertical"
                                            id="radix-:R176rhp:"
                                            className="group flex-grow flex flex-row justify-end"
                                            data-radix-collection-item=""
                                            onClick={() => _toggleAccordionOpen(5)}
                                        >
                                            <svg
                                                height={15}
                                                width={20}
                                                className=" stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                            >
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </svg>
                                        </button>
                                    </h3>
                                </td>
                            </tr>
                            {_isAccordionOpen(0) && (
                                <td className="contents" data-state="open" id="radix-:R6b7rhp:" role="region" aria-labelledby="radix-:R2b7rhp:" data-orientation="vertical" style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}>
                                    <table className="contents">
                                        <tbody className="contents">
                                            <tr className="contents">
                                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                    <div className="w-[120px] flex-none block desktop:hidden">Free</div>
                                                    <div className="flex justify-between desktop:contents flex-1">
                                                        Fully visible
                                                    </div>
                                                </td>
                                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                    <div className="w-[120px] flex-none block desktop:hidden">Plus</div>
                                                    <div className="flex justify-between desktop:contents flex-1">
                                                        Private
                                                        <button
                                                            type="button"
                                                            aria-haspopup="dialog"
                                                            aria-expanded={_isInfoOpen(0) ? true : false}
                                                            aria-controls="radix-:Rin6rhp:"
                                                            data-state={_isInfoOpen(0) ? 'open' : 'closed'}
                                                            onClick={() => _toggleInfoOpen(0)}
                                                        >
                                                            <svg height={20} width={20} className="stroke-greyscale-light-07">
                                                                <FontAwesomeIcon icon={faCircleInfo} />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                    <div className="w-[120px] flex-none block desktop:hidden">Pro</div>
                                                    <div className="flex justify-between desktop:contents flex-1">
                                                        Advanced
                                                        <button
                                                            type="button"
                                                            aria-haspopup="dialog"
                                                            aria-expanded={_isInfoOpen(2) ? true : false}
                                                            aria-controls="radix-:Rin6rhp:"
                                                            data-state={_isInfoOpen(2) ? 'open' : 'closed'}
                                                            onClick={() => _toggleInfoOpen(2)}
                                                        >
                                                            <svg height={20} width={20} className="stroke-greyscale-light-07">
                                                                <FontAwesomeIcon icon={faCircleInfo} />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                    <div className="w-[120px] flex-none block desktop:hidden">
                                                        Enterprise
                                                    </div>
                                                    <div className="flex justify-between desktop:contents flex-1">
                                                        Advanced
                                                        <button
                                                            type="button"
                                                            aria-haspopup="dialog"
                                                            aria-expanded={_isInfoOpen(3) ? true : false}
                                                            aria-controls="radix-:Rin6rhp:"
                                                            data-state={_isInfoOpen(3) ? 'open' : 'closed'}
                                                            onClick={() => _toggleInfoOpen(3)}
                                                        >
                                                            <svg height={20} width={20} className="stroke-greyscale-light-07">
                                                                <FontAwesomeIcon icon={faCircleInfo} />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}