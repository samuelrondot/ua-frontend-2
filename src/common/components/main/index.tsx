// React
import { FC, PropsWithChildren } from "react";

type OwnProps = PropsWithChildren & {
    className?: string,
    style?: object,
}

export const Main: FC<OwnProps> = (props) => {

    return (
        <main className={`${props.className} main transition-opacity duration-100`} style={props.style}>
            {props.children}
        </main>
    )
}