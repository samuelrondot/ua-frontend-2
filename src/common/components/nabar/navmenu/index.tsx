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
            name: 'Tools',
            children: [
                {
                    sortOrder: 1,
                    name: 'LinkedIn Scraper',
                    image: 'https://buffer.com/resources/assets/img/header/tool-icons/publish-icon.svg?v=9a5cf479fa',
                    url: '/linkedin-scraper',
                    description: `
                    <div>
                      
                        <p>Extract and enrich LinkedIn & Sales Navigator search results.</p>
                       
                    </div>
                    `
                },
                {
                    sortOrder: 2,
                    name: 'Email Finder',
                    image: 'https://buffer.com/resources/assets/img/header/tool-icons/analyze-icon.svg?v=9a5cf479fa',
                    url: '/email-finder',
                    description: `
                    <div>
                       
                        <p>Enrich leads automatically from LinkedIn or CSV.</p>
                    </div>
                    `
                },
                {
                    sortOrder: 3,
                    name: 'Multichannel',
                    image: 'https://buffer.com/resources/assets/img/header/tool-icons/engage-icon.svg?v=9a5cf479fa',
                    url: '/multichannel-outreach',
                    description: `
                    <div>
                        
                        <p>Automate your outreach campaigns through LinkedIn and emails.</p>
                    </div>
                    `
                },
              
            ]
        },
        {
            sortOrder: 2,
            name: 'Pricing',
            url: '/pricing'
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
                key={key}
                className={`typography-p5-medium dropdown-item px-16px py-8px rounded-12px typography-h3 tablet:typography-p5-medium transition-colors text-typography-light-tertiary tablet:text-typography-light-primary bg-transparent desktop:hover:bg-buttonNew-ghost-hover active:bg-buttonNew-ghost-active `}
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
                menuItems={item.children?.map((child: any, idx: number) => (
                    <a className="dropdown-menu-item typography-p5-medium"
                        href={child.url}
                        key={key * idx}
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
                <section className="navigation-desktop-menu typography-p5-medium">
                    {navTree?.items?.length > 0 && (
                        _renderMenuItems(navTree.items, 0)
                    )}
                </section>
            </nav>
        </>
    )
}