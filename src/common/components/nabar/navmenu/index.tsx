// React
import { FC, useEffect, useState } from "react";
// Hooks
import { useWindowDimensions } from "common/hooks";
// Common Componenets
import { Dropdown } from "common/components/dropdown";

const navTree = {
    items: [
        {
            sortOrder: 1,
            name: 'LinkedIn Scraper',
            url: '/linkedin-scraper'
        },
        {
            sortOrder: 2,
            name: 'Email Finder',
            url: 'email-finder'
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
        }
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
                className={"px-16px py-8px inline-flex flex-row items-center justify-center rounded-12px typography-h3 tablet:typography-p5-medium text-center transition-colors text-typography-light-tertiary tablet:text-typography-light-primary bg-transparent desktop:hover:bg-buttonNew-ghost-hover active:bg-buttonNew-ghost-active"}
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
                isDesktopMedia={isDesktopMedia}
                toggleElement={
                    <div
                        className={
                            (props.navbarStyle === "dark"
                                ? "dropdown-toggle-black w-dropdown-toggle "
                                : "dropdown-toggle w-dropdown-toggle ") +
                            (isDesktopMedia
                                ? ""
                                : "w--nav-dropdown-toggle-open w--open")
                        }
                        role="button"
                    >
                        <div className="icon-8 w-icon-dropdown-toggle" />
                        <div className="text-block">{item.name}</div>
                    </div>
                }
                menuItems={item.children?.map((child: any, key: number) => (
                    <a
                        key={key}
                        className="dropdown-link w-dropdown-link"
                        href={child.url}
                    >
                        {child.name}
                    </a>
                ))}
            />
        )
    }

    return (
        <>
            <div className="ml-44px flex-row gap-[12px] max-tablet:hidden">
                {navTree?.items?.length > 0 && (
                    _renderMenuItems(navTree.items, 0)
                )}
            </div>
        </>
    )
}