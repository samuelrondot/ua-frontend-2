// React
import { FC } from "react";

export const CrmStartupFeaturesTabSliderPipelines: FC = () => {

    return (
        <>
            <div className="relative isolate">
                <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/pipelines-desktop-AZ74TXWQ.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/pipelines-desktop-GNEHB6BA.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://attio.com/build/_assets/pipelines-mobile-AFDDAUZ6.png"
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                        alt="Attio's pipeline view is displayed as a Kanban board, a list of columns with cards representing companies visible in each column."
                    />
                </picture>
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/pipelines-desktop-AZ74TXWQ.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/pipelines-desktop-GNEHB6BA.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://attio.com/build/_assets/pipelines-mobile-AFDDAUZ6.png"
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                    />
                </picture>
            </div>
        </>
    )
}