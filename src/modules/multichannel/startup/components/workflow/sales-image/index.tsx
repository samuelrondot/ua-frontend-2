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
                        srcSet="https://attio.com/build/_assets/perfect-workflow-desktop-T5QM2YFJ.png"
                        media="(min-width:992px)"
                    />
                    <img loading="lazy" srcSet="" className="" />
                </picture>
            </div>
        </>
    )
}