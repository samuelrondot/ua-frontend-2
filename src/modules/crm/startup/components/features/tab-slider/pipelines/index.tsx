// React
import { FC } from "react";

export const CrmStartupFeaturesTabSliderPipelines: FC = () => {

    return (
        <>
            <div className="relative isolate">
               
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="/assets/salesnavlist.png"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="/assets/salesnavlist.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet="/assets/salesnavlist.png"
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                    />
                </picture>
            </div>
        </>
    )
}