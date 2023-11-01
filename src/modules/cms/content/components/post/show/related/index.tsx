// React
import { FC } from "react";
// Models
import { PostModel } from "modules/cms/content/models";
// Utils
import { getPostPath, getTagPath } from "modules/cms/content/utils";
import moment from 'moment'
import Link from "next/link";


type OwnProps = {
    relatedPosts: PostModel[];
}

export const CmsContentPostShowRelated: FC<OwnProps> = (props) => {
    const relatedPosts = props.relatedPosts;
    
    return (
        <>
            <div className="bf-related">
                <div className="gh-container">
                    <h3>Related Articles</h3>
                    <div className="bf-related-grid">
                        {relatedPosts.map((post, index) => (
                            <article
                                className="bf-relatedcard post tag-flow tag-content-2 tag-research featured"
                                key={post.id}
                            >
                                <Link
                                    className="bf-relatedcard-link"
                                    href={getPostPath(post)}
                                    aria-label={`Read more about ${post.title}`}
                                >
                                    <div className="bf-relatedcard-imgbox">
                                        <img
                                            className="bf-relatedcard-image"
                                            src={post.feature_image}
                                            alt={post.feature_image_alt}
                                            loading="lazy"
                                        />
                                    </div>
                                </Link>
                                <div className="bf-relatedcard-content">
                                    <Link
                                        href={getPostPath(post)}
                                    >
                                        <h4 className="bf-relatedcard-title">
                                            {post.title}
                                        </h4>
                                    </Link>
                                    <footer className="bf-relatedcard-meta">
                                     
                                        {moment(post.published_at).format('MMMM DD, YYYY')}
                                        <span className="bf-readingtime">
                                            <svg
                                                width={24}
                                                height={10}
                                                viewBox="0 0 24 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="5.7998"
                                                    cy={5}
                                                    r={4}
                                                    stroke="#B8B8B8"
                                                    strokeWidth="1.59999"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M9.65337 2.24106C9.23422 2.10134 8.78117 2.32787 8.64145 2.74702C8.50173 3.16617 8.72826 3.61922 9.14741 3.75894L9.65337 2.24106ZM14.4534 3.75894C14.8725 3.61922 15.099 3.16617 14.9593 2.74702C14.8196 2.32787 14.3666 2.10134 13.9474 2.24106L14.4534 3.75894ZM11.8004 3.8L11.5474 4.55894C11.7116 4.61368 11.8892 4.61368 12.0534 4.55894L11.8004 3.8ZM9.14741 3.75894L11.5474 4.55894L12.0534 3.04106L9.65337 2.24106L9.14741 3.75894ZM12.0534 4.55894L14.4534 3.75894L13.9474 2.24106L11.5474 3.04106L12.0534 4.55894Z"
                                                    fill="#B8B8B8"
                                                />
                                                <path
                                                    d="M22.5996 5.79922L22.5996 4.19922"
                                                    stroke="#B8B8B8"
                                                    strokeWidth="1.59999"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M1 5.79922L1 4.19922"
                                                    stroke="#B8B8B8"
                                                    strokeWidth="1.59999"
                                                    strokeLinecap="round"
                                                />
                                                <circle
                                                    cx="17.7998"
                                                    cy={5}
                                                    r={4}
                                                    stroke="#B8B8B8"
                                                    strokeWidth="1.59999"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            {post.reading_time} min read
                                        </span>
                                        {post.primary_tag?.name && (
                                            <p
                                                className="bf-badge bf-badge-flow"
                                            
                                            >
                                                {post.primary_tag.name}
                                            </p>
                                        )}
                                    </footer>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}