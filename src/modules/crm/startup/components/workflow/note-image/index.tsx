
// React
import { FC } from "react"

export const CrmStartupWorkflowNoteImage: FC = () => {

    return (
        <>
            <div className="relative isolate">
                <picture className="opacity-0 absolute z-10 inset-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/notes-desktop-V3LAOJSP.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/notes-desktop-AOZNSJ4L.png"
                        media="(min-width:992px)"
                    />
                    <img
                        loading="lazy"
                        srcSet=""
                        className=""
                        alt="Attio's notes feature showing two notes in a card display with truncated contents, title, and tags."
                    />
                </picture>
                <picture className="relative inset-0 z-0 w-full h-full">
                    <source
                        srcSet="https://attio.com/build/_assets/notes-desktop-V3LAOJSP.webp"
                        media="(min-width:992px)"
                        type="image/webp"
                    />
                    <source
                        srcSet="https://attio.com/build/_assets/notes-desktop-AOZNSJ4L.png"
                        media="(min-width:992px)"
                    />
                    <img loading="lazy" srcSet="" className="" />
                </picture>
            </div>
        </>
    )
}