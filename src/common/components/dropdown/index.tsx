// React
import { cloneElement, FC, ReactElement, useState } from "react";
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

    return (
        <div
            className={`${props.className} ${style.dropdown} dropdown-item`}
            aria-expanded={open ? true : false}
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
            style={{ maxWidth: 1344 }}
        >
            {cloneElement(props.toggleElement, {
                onClick: _handleOpen,
            })}
            {true ? (
                <div
                    className={
                        "dropdown-menu " +
                        (open ? "w--open " : " ") +
                        (props.isDesktopMedia ? "" : "w--nav-dropdown-list-open w--open")
                    }
                    aria-label="submenu"
                >
                    <div className="dropdown-container">
                        {props.menuItems.map((item, index) =>
                            cloneElement(item, {
                                onClick: () => _handleMenuItemClick(item),
                            })
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
