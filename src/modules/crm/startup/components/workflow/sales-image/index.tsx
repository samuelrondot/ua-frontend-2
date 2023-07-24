// React
import { FC } from "react"

export const CrmStartupWorkflowSalesImage: FC = () => {

    return (
        <>
            <div className="relative isolate">
              
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="/assets/expor.png"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="/assets/expor.png"
                        media="(min-width:992px)"
                    />
                    <img loading="lazy" alt="A screenshot of useArtemis's Chrome extension in action to scrape linkedin search results." srcSet="" className="" />
                </picture>
            </div>
        </>
    )
}