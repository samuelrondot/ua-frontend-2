// React
import { FC } from "react"

export const CrmStartupWorkflowDealImage: FC = () => {

    return (
        <>
            <div className="relative isolate">
                <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/intel-desktop-FS65CVO5.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/intel-desktop-JS4GN2RH.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet=""
                        className=""
                        alt="A dropdown shows eight types of attributes, including Name, Email Address and Instagram, many of which are automatically enriched."
                    />
                </picture>
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/intel-desktop-FS65CVO5.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/intel-desktop-JS4GN2RH.png"
                        media="(min-width:992px)"
                    />
                    <img loading="lazy" srcSet="" className="" />
                </picture>
            </div>
        </>
    )
}