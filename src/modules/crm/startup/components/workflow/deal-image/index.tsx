// React
import { FC } from "react"

export const CrmStartupWorkflowDealImage: FC = () => {

    return (
        <>
            <div className="relative isolate">
                
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="/assets/clean.png"
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