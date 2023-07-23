// React
import { FC } from "react";
// Models
import { PostModel } from "modules/cms/content/models";
// Utils
import { getAuthorPath, getTagPath } from "modules/cms/content/utils";
import moment from 'moment'
import Link from "next/link";

const appBrandName = process.env.NEXT_PUBLIC_APP_BRAND_NAME;

type OwnProps = {
    post: PostModel;
}

export const CmsContentPostShowHeader: FC<OwnProps> = (props) => {
    const post = props.post;

    return (
        <>
            <header className="gh-header">
                <div className="gh-header-container gh-container">
                    <div className="gh-header-content">
                        <div className="gh-post-breadcrumb">
                            {/* Determine correct breadcrumbs */}
                            <Link
                                className="gh-breadcrumb-link"
                                href="/blog"
                            >
                                Blog
                            </Link>
                            <svg viewBox="0 0 18 27" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.397 25.426l13.143-11.5-13.143-11.5"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    fill="none"
                                    fillRule="evenodd"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {post.primary_tag && (
                                <div
                                    className="gh-breadcrumb-link"
                                   
                                >
                                    {post.primary_tag?.name}
                                </div>
                            )}
                        </div>
                        <h1 className="gh-title">
                            {post.title}
                        </h1>
                        <div className="gh-excerpt"
                           dangerouslySetInnerHTML={{ __html: post.excerpt.substring(0, 200) + '...' }} />
                        <div className="gh-header-meta">
                           

                            {moment(post.published_at).format('MMMM DD, YYYY')}
                            
                            
                             <span className="bf-readingtime">
                                <svg
                                    className="svg-icon"
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

                            
                            {post.primary_tag && (
                                <a
                                    className="bf-badge bf-badge-flow"
                                    href={getTagPath(post.primary_tag)}
                                >
                                    {post.primary_tag?.name}
                                </a>
                            )}
                        </div>
                        <div className="gh-author-card" >
                            <div className="gh-author-card-image-wrap">
                                <img
                                    className="gh-author-card-image"
                                    src={post.primary_author?.profile_image}
                                    alt={post.primary_author?.name}
                                    loading="lazy"
                                />
                            </div>
                            <div className="gh-author-card-content">
                                <strong>{post.primary_author.name}</strong>
                                <span className="gh-author-card-bio">
                                    {post.primary_author.bio?.length > 0 ? (
                                        post.primary_author.bio
                                    ) : (
                                        `Founder @ ${appBrandName}`
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="gh-header-image">
                        <picture className="gh-feature-image">
                            <img
                                sizes="(min-width: 1400px) 1400px, 92vw"
                                src={post.feature_image}
                                alt={post.feature_image_alt}
                                width={621}
                                height={450}
                            />
                        </picture>
                    </div>
                </div>
            </header>
        </>
    );
}