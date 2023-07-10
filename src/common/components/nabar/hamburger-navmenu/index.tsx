// React
import { FC } from "react"
// Font Awesome
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Hooks
import { useWindowDimensions } from "common/hooks";
// Common Componenets
import { Dropdown } from "common/components/dropdown";

const navLinkClassName = 'px-16px py-8px inline-flex flex-row items-center justify-center rounded-12px typography-h3 tablet:typography-p5-medium text-center transition-colors text-typography-light-tertiary tablet:text-typography-light-primary bg-transparent desktop:hover:bg-buttonNew-ghost-hover active:bg-buttonNew-ghost-active'
const navLinkBadge = `inline-grid rounded-full bg-greyscale-light-12 text-white place-items-center w-[21px] h-[21px] phablet:w-[16px] phablet:h-[16px] typography-p6-strong phablet:typography-e1 self-start`

const navTree = {
    items: [
        {
            sortOrder: 1,
            name: 'LinkedIn Scraper',
            url: '/linkedin-scraper'
        },
        {
            sortOrder: 2,
            name: 'Email finder',
            url: '/email-finder'
        },
        {
            sortOrder: 3,
            name: 'Multichannel',
            url: '/multichannel-outreach'
        },

        {
            sortOrder: 5,
            name: 'Pricing',
            url: '/pricing'
        },
        {
            sortOrder: 6,
            name: 'Blog',
            url: '/blog'
        }
       
    ]
}

type OwnProps = {
    style?: object,
}

export const HambergerNavMenu: FC<OwnProps> = (props) => {

    const _renderMenuItems = (items: any[], key: number) => {
        const menuItems = items?.map(item => item)

        return menuItems?.sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item, idx) => (
                _renderMenuItem(item, key + idx)
            )) ?? (<></>)
    }

    const _renderMenuItem = (item: any, key: number) => {

        return item.children?.length > 0 ? (
            _renderMenuItemWithDropdown(item, key)
        ) : (
            <a
                className={navLinkClassName}
                href={item.url}
                key={key}
            >
                {item.name}
                {item.badge && (
                    <span className={navLinkBadge}>
                        {item.badge}
                    </span>
                )}
            </a>
        )
    }

    const _renderMenuItemWithDropdown = (item: any, key: number) => {

        return (
            <Dropdown
                key={key}
                className={`dropdown-item`}
                isDesktopMedia={false}
                toggleElement={
                    <a
                        className={`dropdown-link ${navLinkClassName}`}
                        aria-haspopup="true"
                        role="button"
                    >
                        <div className="text-block">
                            {item.name}
                            <span>
                                <svg
                                    className="stroke-greyscale-light-14 transition-transform transform rotate-0 group-aria-expanded:-rotate-180"
                                    style={{ display: "inherit" }}
                                    height={15}
                                    width={20}
                                >
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </svg>
                            </span>
                        </div>
                    </a>
                }
                menuItems={item.children?.map((child: any, key: number) => (
                    <a className="dropdown-menu-item"
                        href={child.url}
                        key={key}
                    >
                        <img src={child.image} style={{ position: 'relative', left: '-6px' }} />
                        <div>
                            {child.name}
                        </div>
                    </a>
                ))}
            />
        )
    }

    return (
        <>
            <div
                role="dialog"
                id="radix-:Rbm9p:"
                aria-describedby="radix-:Rbm9pH2:"
                aria-labelledby="radix-:Rbm9pH1:"
                data-state="open"
                className="hamburger radix-dialog-content fixed block min-[960px]:hidden z-40 pt-72px inset-0 bg-light text-primary"
                tabIndex={-1}
            >
                <div className="flex flex-col py-[7px] px-24px gap-8px align-center justify-center h-full relative top-[-40px]">
                    {navTree?.items?.length > 0 && (
                        _renderMenuItems(navTree.items, 0)
                    )}
                </div>
            </div>
        </>
    )
}