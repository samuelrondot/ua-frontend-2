// React
import { FC } from "react"

export const CrmStartupWorkflowDealImage: FC = () => {

    return (
        <>
            <div className="relative isolate">
                
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="/assets/clean-linkedin-data.png"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="/assets/clean-linkedin-data.png"
                        media="(min-width:992px)"
                    />
                    <img loading="lazy" alt="clean data from linkedin" srcSet="" className="" />
                </picture>
            </div>
        </>
    )
}