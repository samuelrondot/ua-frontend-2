// React
import { FC, PropsWithChildren } from "react";
// Common Components
import { CoockiesPolicy } from "../coockies-policy";
import { Footer } from "../footer";
import { Navbar } from "../nabar";
import { Main } from "../main";

type OwnProps = PropsWithChildren & {
    style?: React.CSSProperties
}

export const BlogLayout: FC<OwnProps> = (props) => {

    return (
        <>
            <Navbar />
            <Main className="gh-main">
                {props.children}
            </Main >
            <Footer />
           {/*   <CoockiesPolicy /> */}
            <div id='hamburger-nav-menu'></div>
        </>
    )
}