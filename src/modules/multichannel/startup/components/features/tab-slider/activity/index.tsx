// React
import { FC } from "react";

export const CrmStartupFeaturesTabSliderActivity: FC = () => {

    return (
        <>
            <div className="relative isolate">
                <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/activity-desktop-55RQ5UEG.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/activity-desktop-DRFO4Z6E.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://attio.com/build/_assets/activity-mobile-5X35UITL.png"
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                        alt="A list of recent activity related to a record is displayed including a user changing a record's status 12 minutes ago, the subject line and text of recent emails, and a user adding files to a record."
                    />
                </picture>
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/activity-desktop-55RQ5UEG.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/activity-desktop-DRFO4Z6E.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://attio.com/build/_assets/activity-mobile-5X35UITL.png"
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                    />
                </picture>
            </div>
        </>
    )
}