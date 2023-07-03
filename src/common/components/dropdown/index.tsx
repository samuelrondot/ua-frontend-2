// React
import { cloneElement, FC, ReactElement, useState } from "react";
// Styles
import style from "./style.module.scss";

type OwnProps = {
  toggleElement: ReactElement;
  menuItems: ReactElement[];
  isDesktopMedia: boolean;
};

export const Dropdown: FC<OwnProps> = (props) => {
  const [open, setOpen] = useState(false);

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
      className={`${style.dropdown} w-dropdown`}
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      style={{ maxWidth: 1344 }}
    >
      {cloneElement(props.toggleElement, {
        onClick: _handleOpen,
      })}
      {open ? (
        <nav
          className={
            "dropdown-list w-dropdown-list " +
            (open ? "w--open " : " ") +
            (props.isDesktopMedia ? "" : "w--nav-dropdown-list-open w--open")
          }
        >
          {props.menuItems.map((item, index) =>
            cloneElement(item, {
              onClick: () => _handleMenuItemClick(item),
            })
          )}
        </nav>
      ) : null}
    </div>
  );
};
