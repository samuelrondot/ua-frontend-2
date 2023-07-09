// React
import { cloneElement, FC, ReactElement, use, useEffect, useState } from "react";
// Styles
import style from "./style.module.scss";

type OwnProps = {
    className?: string;
    toggleElement: ReactElement;
    menuItems: ReactElement[];
    isDesktopMedia: boolean;
};

export const Dropdown: FC<OwnProps> = (props) => {
    const [open, setOpen] = useState<boolean>(false);

    const _handleOpen = () => {
        setOpen(!open);
    };

    const _handleMenuItemClick = (item: ReactElement) => {
        if (typeof item.props?.onClick === "function") {
            item.props?.onClick();
        }

        setOpen(false);
    };

    const _handleMouseOver = () => {
        if (!props.isDesktopMedia) {
            return;
        }
        setOpen(true);
    };

    const _handleMouseOut = () => {
        if (!props.isDesktopMedia) {
            return;
        }
        setOpen(false);
    };

    return (
        <div
            className={`${props.className} ${style.dropdown} dropdown-item`}
            onMouseOver={() => _handleMouseOver()}
            onMouseOut={() => _handleMouseOut()}
            style={{ maxWidth: 1344 }}
            aria-expanded={open}
        >
            {cloneElement(props.toggleElement, {
                key: 0,
                onClick: _handleOpen,
            })}
            {open ? (
                <div
                    className={
                        "dropdown-menu " +
                        (open ? "w--open " : " ") +
                        (props.isDesktopMedia ? "" : "w--nav-dropdown-list-open w--open")
                    }
                    aria-label="submenu"
                >
                    <div className="dropdown-container">
                        {props.menuItems.map((item, index) => (
                            cloneElement(item, {
                                key: index,
                                onClick: () => _handleMenuItemClick(item),
                            })
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
