// React
import { cloneElement, FC, ReactElement, useState } from "react";

type OwnProps = {
  tabNavs: { key: string; elm: ReactElement }[];
  tabItems: { key: string; elm: ReactElement }[];
};

export const TabSliderTop: FC<OwnProps> = (props) => {
  let [currentTab, setCurrentTab] = useState<string>("tab1");

  const _handleNavClick = (elmRef: ReactElement, tab: string) => {
    if (currentTab !== tab) {
      setCurrentTab(tab);
    }
  };

  const _handleItemClick = (key: string) => {};

  const _isTabActive = (tab: string) => currentTab === tab;

  const _renderTabNavs = () => {
    return props.tabNavs?.map((item, idx) => (
      <span key={idx}>
        {cloneElement(item.elm, {
          className:
            "tab-link-tab-1 w-inline-block w-tab-link" +
            (_isTabActive(item.key) ? " w--current" : ""),
          onClick: () => _handleNavClick(item.elm, item.key),
        })}
      </span>
    ));
  };

  const _renderTabItems = () => {
    return props.tabItems?.map((item, idx) => (
      <span key={idx}>
        {cloneElement(item.elm, {
          className:
            "w-tab-pane" +
            (_isTabActive(item.key) ? " w--tab-active animate-opacity" : ""),
          onClick: () => _handleItemClick(item.key),
        })}
      </span>
    ));
  };

  return (
    <>
      <div
        className="tabs-menu slide-from-bottom-0ms w-tab-menu"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        role="tablist"
      >
        {_renderTabNavs()}
      </div>

      <div className="mt-80-copy w-tab-content">{_renderTabItems()}</div>
    </>
  );
};
