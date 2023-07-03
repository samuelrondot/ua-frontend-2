// React
import { FC } from "react";

export const Video: FC = () => {

    return (
        <>
            <div className="absolute top-0 right-0 left-0 bottom-0">
                <iframe
                    src="https://player.vimeo.com/video/841660544?autoplay=1&loop=1&autopause=0"
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    allow="autoplay; fullscreen"
                    allowFullScreen={true}
                />
            </div>
        </>
    )
}
//https://vimeo.com/841660544?share=copy