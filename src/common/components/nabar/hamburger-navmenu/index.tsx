// React
import { FC } from "react"

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
            name: 'Help',
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
            url: '#/pricing'
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

        return (
            <a
                className={`px-16px py-8px inline-flex flex-row items-center ` +
                    `justify-center rounded-12px typography-h3 tablet:typography-p5-medium ` +
                    `text-center transition-colors text-typography-light-tertiary ` +
                    `tablet:text-typography-light-primary bg-transparent desktop:hover:bg-buttonNew-ghost-hover ` +
                    `active:bg-buttonNew-ghost-active ${item.badge ? 'flex items-center gap-4px' : null}`}
                href={item.url}
                key={key}
            >
                {item.name}
                {item.badge && (
                    <span className={`inline-grid rounded-full bg-greyscale-light-12 ` +
                        `text-white place-items-center w-[21px] h-[21px] phablet:w-[16px] ` +
                        `phablet:h-[16px] typography-p6-strong phablet:typography-e1 self-start`}>
                        {item.badge}
                    </span>
                )}
            </a>
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
                className="radix-dialog-content fixed block min-[960px]:hidden z-40 pt-72px inset-0 bg-light text-primary"
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