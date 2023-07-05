// React
import { FC } from "react";

export const CrmStartupFeaturesTabSliderContacts: FC = () => {

    return (
        <>
            <div className="relative isolate">
                <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/contacts-desktop-TYNL2AUJ.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/contacts-desktop-SXSSTRHW.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://attio.com/build/_assets/contacts-mobile-PPCFCKFI.png"
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                        alt="A list of leads is displayed in a table view with columns including Last Interaction, Connection Strength and Email"
                    />
                </picture>
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="/assets/linkedinlist.png"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/contacts-desktop-SXSSTRHW.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://attio.com/build/_assets/contacts-mobile-PPCFCKFI.png"
                        className="relative border border-[#E0E1E6] rounded-t-[32px] tablet:rounded-[14px] w-full max-tablet:border-b-none"
                    />
                </picture>
            </div>

        </>
    )
}