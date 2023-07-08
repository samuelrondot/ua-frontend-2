// React
import { FC } from "react";

export const CrmStartupFeaturesTabSliderReporting: FC = () => {

    return (
        <>
            <div className="relative isolate">
                <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/reporting-desktop-7UO2OZVO.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/reporting-desktop-RXGPNSTI.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet=""
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                        alt="A variety of different charts are visible in a dashboard view including line charts, bar charts and heatmaps."
                    />
                </picture>
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/reporting-desktop-7UO2OZVO.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/reporting-desktop-RXGPNSTI.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet=""
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                    />
                </picture>
            </div>
        </>
    )
}