// React
import { FC, useState } from "react";
// Font Awesome
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SalesPricingOfferGridAdmin: FC = () => {
    const [accordionOpen, setAccordionOpen] = useState<number[]>([])

    const _isAccordionOpen = (index: number) => {
        return accordionOpen.includes(index)
    }

    const _toggleAccordion = (index: number) => {
        if (accordionOpen.includes(index)) {
            const newAccordionOpen = accordionOpen.filter((item) => item !== index)
            setAccordionOpen(newAccordionOpen)
        } else {
            setAccordionOpen([...accordionOpen, index])
        }
    }

    return (
        <>
            <div className="w-full px-24px desktop:px-0 desktop:w-[1168px]">
                <h3 className="typography-p3-strong desktop:sticky desktop:top-[269px] bg-neutral-light-50 desktop:backdrop-blur desktop:bg-opacity-90 text-neutral-light-900 py-4px desktop:py-16px">
                    Admin
                </h3>
                <div data-orientation="vertical">
                    <table className="table-fixed border-separate w-full desktop:w-auto">
                        <tbody>
                            <tr className="typography-p6-medium hidden desktop:flex flex-col desktop:flex-row desktop:gap-24px text-typography-light-quaternary desktop:text-typography-light-secondary">
                                <td className="border-b border-greyscale-light-05 flex flex-row items-start justify-start desktop:justify-between w-full desktop:w-[222px] text-typography-light-secondary py-[18px] desktop:py-20px max-desktop:gap-[10px]">
                                    Payment by invoice
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
                                            Payment by invoice{" "}
                                        </div>
                                        <button
                                            type="button"
                                            aria-controls="radix-:R6b7rhp:"
                                            aria-expanded={_isAccordionOpen(0) ? true : false}
                                            data-state={_isAccordionOpen(0) ? 'open' : 'close'}
                                            data-orientation="vertical"
                                            id="radix-:R2b7rhp:"
                                            className="group flex-grow flex flex-row justify-end"
                                            data-radix-collection-item=""
                                            onClick={() => _toggleAccordion(0)}
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
                                    SAML (SSO)
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
                                            SAML (SSO){" "}
                                        </div>
                                        <button
                                            type="button"
                                            aria-controls="radix-:R6d7rhp:"
                                            aria-expanded={_isAccordionOpen(1) ? true : false}
                                            data-state={_isAccordionOpen(1) ? 'open' : 'close'}
                                            data-orientation="vertical"
                                            id="radix-:R2d7rhp:"
                                            className="group flex-grow flex flex-row justify-end"
                                            data-radix-collection-item=""
                                            onClick={() => _toggleAccordion(1)}
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}