// React
import { FC, useState } from "react";
// Font Awesome
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SalesPricingOfferGridSupport: FC = () => {
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
                    Support
                </h3>
                <div data-orientation="vertical">
                    <table className="table-fixed border-separate w-full desktop:w-auto">
                        <tbody>
                            <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                    Help center
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Free
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Plus
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Pro
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Enterprise
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
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
                                            Help center{" "}
                                        </div>
                                        <button
                                            type="button"
                                            aria-controls="radix-:Rcj8rhp:"
                                            aria-expanded={_isAccordionOpen(0) ? true : false}
                                            data-state={_isAccordionOpen(0) ? 'open' : 'close'}
                                            data-orientation="vertical"
                                            id="radix-:R4j8rhp:"
                                            className="group flex-grow flex flex-row justify-end"
                                            data-radix-collection-item=""
                                            onClick={() => _toggleAccordionOpen(0)}
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
                                {_isAccordionOpen(0) && (
                                    <td className="contents" data-state="open" id="radix-:R6b7rhp:" role="region" aria-labelledby="radix-:R2b7rhp:" data-orientation="vertical" style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}>
                                        <table className="contents">
                                            <tbody className="contents">
                                                <tr className="contents">
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Free</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Plus</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Pro</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">
                                                            Enterprise
                                                        </div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                )}
                            </tr>
                            <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                    Chat and email support
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Free
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Plus
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Pro
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Enterprise
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
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
                                            Chat and email support{" "}
                                        </div>
                                        <button
                                            type="button"
                                            aria-controls="radix-:Rcl8rhp:"
                                            aria-expanded={_isAccordionOpen(1) ? true : false}
                                            data-state={_isAccordionOpen(1) ? 'open' : 'close'}
                                            data-orientation="vertical"
                                            id="radix-:R4l8rhp:"
                                            className="group flex-grow flex flex-row justify-end"
                                            data-radix-collection-item=""
                                            onClick={() => _toggleAccordionOpen(1)}
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
                                {_isAccordionOpen(1) && (
                                    <td className="contents" data-state="open" id="radix-:R6b7rhp:" role="region" aria-labelledby="radix-:R2b7rhp:" data-orientation="vertical" style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}>
                                        <table className="contents">
                                            <tbody className="contents">
                                                <tr className="contents">
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Free</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Plus</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Pro</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">
                                                            Enterprise
                                                        </div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                )}
                            </tr>
                            <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                    Priority support
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Free
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 4L4 12"
                                                    className="stroke-greyscale-light-07"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4 4L12 12"
                                                    className="stroke-greyscale-light-07"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Plus
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 4L4 12"
                                                    className="stroke-greyscale-light-07"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4 4L12 12"
                                                    className="stroke-greyscale-light-07"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Pro
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Enterprise
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 7.92308L5.64706 11L13 3"
                                                    className="stroke-brand-light-primary"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
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
                                            Priority support{" "}
                                        </div>
                                        <button
                                            type="button"
                                            aria-controls="radix-:Rcn8rhp:"
                                            aria-expanded={_isAccordionOpen(2) ? true : false}
                                            data-state={_isAccordionOpen(2) ? 'open' : 'close'}
                                            data-orientation="vertical"
                                            id="radix-:R4n8rhp:"
                                            className="group flex-grow flex flex-row justify-end"
                                            data-radix-collection-item=""
                                            onClick={() => _toggleAccordionOpen(2)}
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
                                {_isAccordionOpen(2) && (
                                    <td className="contents" data-state="open" id="radix-:R6b7rhp:" role="region" aria-labelledby="radix-:R2b7rhp:" data-orientation="vertical" style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}>
                                        <table className="contents">
                                            <tbody className="contents">
                                                <tr className="contents">
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Free</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Plus</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Pro</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">
                                                            Enterprise
                                                        </div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3 7.92308L5.64706 11L13 3"
                                                                        className="stroke-brand-light-primary"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                )}
                            </tr>
                            <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                    Migration assistance
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
                                        <div className="h-20px flex flex-row items-center">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 4L4 12"
                                                    className="stroke-greyscale-light-07"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M4 4L12 12"
                                                    className="stroke-greyscale-light-07"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Plus
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        Chat with us
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Pro
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        Chat with us
                                    </div>
                                </td>
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                    <div className="w-[120px] flex-none block desktop:hidden">
                                        Enterprise
                                    </div>
                                    <div className="flex justify-between desktop:contents flex-1">
                                        Chat with us
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
                                            Migration assistance
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
                                            </button>{" "}
                                        </div>
                                        <button
                                            type="button"
                                            aria-controls="radix-:Rcp8rhp:"
                                            aria-expanded={_isAccordionOpen(3) ? true : false}
                                            data-state={_isAccordionOpen(3) ? 'open' : 'close'}
                                            data-orientation="vertical"
                                            id="radix-:R4p8rhp:"
                                            className="group flex-grow flex flex-row justify-end"
                                            data-radix-collection-item=""
                                            onClick={() => _toggleAccordionOpen(3)}
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
                                {_isAccordionOpen(3) && (
                                    <td className="contents" data-state="open" id="radix-:R6b7rhp:" role="region" aria-labelledby="radix-:R2b7rhp:" data-orientation="vertical" style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" } as any}>
                                        <table className="contents">
                                            <tbody className="contents">
                                                <tr className="contents">
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Free</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            <div className="h-20px flex flex-row items-center">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 4L4 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M4 4L12 12"
                                                                        className="stroke-greyscale-light-07"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Plus</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            Chat with us
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">Pro</div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            Chat with us
                                                        </div>
                                                    </td>
                                                    <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[212px] py-12px desktop:py-20px max-desktop:flex max-desktop:items-center max-desktop:flex-row">
                                                        <div className="w-[120px] flex-none block desktop:hidden">
                                                            Enterprise
                                                        </div>
                                                        <div className="flex justify-between desktop:contents flex-1">
                                                            Chat with us
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}