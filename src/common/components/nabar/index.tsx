// React
import { FC, useEffect, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
// Hooks
import {
  useWindowDimensions,
  useScrollY
} from "common/hooks";
// Components
import { HamburgerBannerRaises } from "./hamburger-banner-raises";
import { HambergerNavMenu } from "./hamburger-navmenu";
import { BannerRaises } from "./banner-raises";
import { NavMenu } from "./navmenu";
import Logo from 'assets/images/useartemis-logo.png'
import Link from "next/link";
// Styles
import style from "./style.module.scss";

type OwnProps = {
  navbarStyle?: "light" | "dark";
};

const Navbar: FC<OwnProps> = (props) => {
  const [isHamburgerExpanded, setHamburgerExpanded] = useState(false);
  const [isDesktopMedia, setIsDesktopMedia] = useState(true);
  const [showShadow, setShowShadow] = useState(false);

  const { width } = useWindowDimensions();
  const scrollY = useScrollY();

  useEffect(() => {
    if (width && width > 990) {
      setHamburgerExpanded(false);
      setIsDesktopMedia(true);
    } else {
      setIsDesktopMedia(false);
    }
  }, [width]);

  useEffect(() => {
    if (scrollY > 10) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  }, [scrollY]);


  useEffect(() => {
    if (isHamburgerExpanded) {
      document.body.style.overflow = "hidden";
      render(<HambergerNavMenu />, document.getElementById("hamburger-nav-menu"));
    } else {
      document.body.style.overflow = "auto";
      unmountComponentAtNode(document.getElementById("hamburger-nav-menu")!);
    }

    return () => {
      document.body.style.overflow = "auto";
    }

  }, [isHamburgerExpanded]);

  return (
    <div className={`sticky top-0 z-50 transition-shadow duration-300 bg-background-light-primary ${showShadow ? "shadow-[0_1px_0_0_#E4E7EB]" : null}`}>
      <div className="w-full max-w-[1440px] mx-auto px-24px flex flex-col width-before-scroll-bar">
        <BannerRaises
          isDesktopMedia={isDesktopMedia}
        />
        <div className="flex items-center py-16px">
          <Link aria-label="Home" href="/">
            <img className="logo" src={Logo.src}></img>
          </Link>
          <NavMenu />
          <div className="ml-auto flex-shrink-0 flex gap-12px max-tablet:hidden">
            <a
              href="https://app.useartemis.co/login"
              className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus"
            >
              <span className="z-1 relative">Sign in</span>
            </a>
            <a
              href="https://app.useartemis.co/register"
              className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-primary hover:text-buttonNew-primary-hover active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary hover:bg-buttonNew-primary active:bg-buttonNew-primary-active focus:bg-buttonNew-primary-active disabled:bg-buttonNew-primary-disabled border-[1px] border-buttonNew-primary hover:border-buttonNew-primary-hover disabled:border-buttonNew-primary-disabled shadow-buttonNew-primary hover:shadow-buttonNew-primary-hover active:shadow-none focus:shadow-buttonNew-primary-focus disabled:shadow-buttonNew-primary-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            >
              <span className="z-1 relative">Start for free</span>
            </a>
          </div>
          <div className="ml-auto flex items-center gap-12px tablet:hidden">
            <button className="humberger-btn"
              onClick={() => setHamburgerExpanded(!isHamburgerExpanded)}>
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12.5H25"
                  stroke="#1C1D1F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 19.5H25"
                  stroke="#1C1D1F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <HamburgerBannerRaises
        isDesktopMedia={isDesktopMedia}
      />
    </div>

  );
};

export { Navbar };
