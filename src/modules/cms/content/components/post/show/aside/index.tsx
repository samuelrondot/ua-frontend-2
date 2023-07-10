// React
import { FC } from "react";
// Models
import { PostModel } from "modules/cms/content/models";
import Leadmachine from 'assets/images/leadmachine.png'

type OwnProps = {
    className?: string,
    post: PostModel;
}

export const CmsContentPostShowAside: FC<OwnProps> = (props) => {

    const _handleShare = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const className = e.currentTarget.className;
        const href = e.currentTarget.href;
        const width = 760;
        const height = 570;

        const left = (window.screen.width / 2) - (width / 2);
        const top = (window.screen.height / 2) - (height / 2);

        window.open(href, className, `width=${width},height=${height},left=${left},top=${top}`);
    }

    const _getUrl = () => {
        if (typeof window === "undefined") {
            return '';
        }

        return window.location.href;
    }

    const _getText = () => {
        return props.post.title + ' 👉 ';
    }

    return (
        <>
            <aside className={`${props.className} bf-sharebar`}>
            <img className='sidebarimage' src={Leadmachine.src}></img>
            </aside>
        </>
    )
}