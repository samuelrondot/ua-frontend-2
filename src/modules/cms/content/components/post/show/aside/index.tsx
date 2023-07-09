// React
import { FC } from "react";
// Models
import { PostModel } from "modules/cms/content/models";

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
                <div className="bf-sharebar-actions">
                    <a
                        className="bf-sharebar-bf"
                        href={`https://publish.buffer.com/compose?url=${_getUrl()}&text=${_getText()}`}
                        aria-label="Share on Buffer"
                    >
                        <svg
                            width={27}
                            viewBox="0 0 32 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M.07 8.244L15.487.258 31.07 8.244l-15.583 8.014L.07 8.244zm4.9 7.014l10.517 5.172 10.629-5.172 4.954 2.414-15.583 7.586L.07 17.672l4.9-2.414zm0 9l10.517 5.704 10.629-5.704 4.954 2.648-15.583 8.352L.07 26.906l4.9-2.648z"
                            />
                        </svg>
                    </a>
                    <a
                        className="bf-sharebar-tw"
                        href={`https://twitter.com/share?url=${_getUrl()}&text=${_getText()}`}
                        onClick={_handleShare}
                        aria-label="Share on Twitter"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
                        </svg>
                    </a>
                    <a
                        className="bf-sharebar-fb"
                        href={`https://www.facebook.com/sharer/sharer.php?href=${_getUrl()}`}
                        onClick={_handleShare}
                        aria-label="Share on Facebook"
                    >
                        <svg
                            width={16}
                            height={31}
                            viewBox="0 0 16 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.3 30.7v-14H15l.7-5.5h-5.4V7.8c0-1.6.4-2.7 2.7-2.7h3V.2C14.6.1 13.2 0 11.8 0c-4.2 0-7 2.5-7 7.2v4H0v5.5h4.7v14h5.6z" />
                        </svg>
                    </a>
                    <a
                        className="bf-sharebar-li"
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${_getUrl()}`}
                        onClick={_handleShare}
                        aria-label="Share on LinkedIn"
                    >
                        <svg
                            width={28}
                            height={28}
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M23.6 23.9h-4v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.4h-4V11H15v1.8h.1c.5-1 1.9-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.2v7h-.1zM6.5 9.2c-1.3 0-2.3-1-2.3-2.3 0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3.1 1.2-1 2.3-2.3 2.3zm2.1 14.7h-4V11h4v12.9zM25.7.8H2.5c-1.1 0-2 .9-2 2V26c0 1.1.9 2 2 2h23.2c1.1 0 2-.9 2-2V2.7c0-1-.9-1.9-2-1.9z" />
                        </svg>
                    </a>
                </div>
            </aside>
        </>
    )
}