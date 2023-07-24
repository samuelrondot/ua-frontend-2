// React
import { FC } from "react";

export const CrmStartupFeaturesTabSliderContacts: FC = () => {

    return (
        <>
            <div className="relative isolate">
               
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="/assets/useartemis-linkedin-scraper-2.png"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="/assets/useartemis-linkedin-scraper-2.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet="/assets/useartemis-linkedin-scraper-2.png"
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                    />
                </picture>
            </div>

        </>
    )
}