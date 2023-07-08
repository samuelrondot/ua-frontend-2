// React
import { FC, useEffect, useState } from "react";
// Font Awesome
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Hooks
import { useWindowDimensions } from "common/hooks";
// Common Componenets
import { Dropdown } from "common/components/dropdown";

const navLinkClassName = 'px-16px py-8px inline-flex flex-row items-center justify-center rounded-12px typography-h3 tablet:typography-p5-medium text-center transition-colors text-typography-light-tertiary tablet:text-typography-light-primary bg-transparent desktop:hover:bg-buttonNew-ghost-hover active:bg-buttonNew-ghost-active'

const navTree = {
    items: [
        {
            sortOrder: 1,
            name: 'Customers',
            url: '#/customers'
        },
        {
            sortOrder: 2,
            name: 'Changelog',
            url: '#/changelog'
        },
        {
            sortOrder: 3,
            name: 'Help center',
            url: '#/help'
        },
        {
            sortOrder: 4,
            name: 'Careers',
            url: '#/careers',
            badge: '4'
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
        },
        {
            sortOrder: 7,
            name: 'Tools',
            children: [
                {
                    sortOrder: 1,
                    name: 'Publishing',
                    image: 'https://buffer.com/resources/assets/img/header/tool-icons/publish-icon.svg?v=9a5cf479fa',
                    description: `
                    <div>
                        <h3>Publishing</h3>
                        <p>Plan, collaborate, and publish thumb-stopping content</p>
                    </div>
                    `
                },
                {
                    sortOrder: 2,
                    name: 'Analytics',
                    image: 'https://buffer.com/resources/assets/img/header/tool-icons/analyze-icon.svg?v=9a5cf479fa',
                    description: `
                    <div>
                        <h3>Analytics</h3>
                        <p>Analyze social media performance and create reports</p>
                    </div>
                    `
                },
                {
                    sortOrder: 3,
                    name: 'Engagement',
                    image: 'https://buffer.com/resources/assets/img/header/tool-icons/engage-icon.svg?v=9a5cf479fa',
                    description: `
                    <div>
                        <h3>Engagement</h3>
                        <p>Quickly navigate your comments and engage with your audience</p>
                    </div>
                    `
                },
                {
                    sortOrder: 4,
                    name: 'Start Page',
                    image: 'https://buffer.com/resources/assets/img/header/tool-icons/start-page-icon.svg?v=9a5cf479fa',
                    description: `
                    <div>
                        <h3>Start Page</h3>
                        <p>Build a customized landing page in minutes</p>
                    </div>
                    `
                },
            ]
        },
    ]
}

type OwnProps = {
    style?: object,
    navMenuOpen?: boolean,
    navbarStyle?: string | 'dark' | 'light'
}


export const NavMenu: FC<OwnProps> = (props) => {
    const [isHamburgerExpanded, setHamburgerExpanded] = useState(false);
    const [isDesktopMedia, setIsDesktopMedia] = useState(true);

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width && width > 990) {
            setHamburgerExpanded(false);
            setIsDesktopMedia(true);
        } else {
            setIsDesktopMedia(false);
        }
    }, [width]);

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
            </a>
        )
    }

    const _renderMenuItemWithDropdown = (item: any, key: number) => {

        return (
            <Dropdown
                className={`dropdown-item ${navLinkClassName}`}
                isDesktopMedia={isDesktopMedia}
                toggleElement={
                    <a
                        className={
                            `dropdown-link ${isDesktopMedia ? "w-dropdown-link" : ""}`
                        }
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
                        <img src={child.image} />
                        <div>
                            <h3>
                                {child.name}
                            </h3>
                            <div dangerouslySetInnerHTML={{ __html: child.description }} />
                        </div>
                    </a>
                ))}
            />
        )
    }

    return (
        <>
            <nav className="navigation ml-44px flex-row gap-[12px] max-tablet:hidden">
                <section className="navigation-desktop-menu">
                    {navTree?.items?.length > 0 && (
                        _renderMenuItems(navTree.items, 0)
                    )}
                </section>
            </nav>
        </>
    )
}