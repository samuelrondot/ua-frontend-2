// React
import { FC, PropsWithChildren } from "react";

type OwnProps = PropsWithChildren & {
    style?: object,
}

export const Main: FC<OwnProps> = (props) => {

    return (
        <main className="main transition-opacity duration-100" style={props.style}>
            {props.children}
        </main>
    )
}