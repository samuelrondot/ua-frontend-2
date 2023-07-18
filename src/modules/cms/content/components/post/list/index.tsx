// React
import { FC, useEffect, useState } from "react";
// Common Components
import { Pagination } from "common/components/pagination";
// Models
import { PostModel, TagModel } from "modules/cms/content/models";
// Utils
import { getAuthorPath } from "modules/cms/content/utils/authors";
import { getPostPath } from "modules/cms/content/utils/posts";
import { getTagPath } from "modules/cms/content/utils/tags";
// Styles
import style from './style.module.scss';
import Link from "next/link";
import moment from 'moment'


type OwnProps = {
    posts: PostModel[];
    tags: TagModel[];
}

export const CmsContentPostList: FC<OwnProps> = (props) => {
    const [hasPagination, setHasPagination] = useState<boolean>(false);
    const [visiblePosts, setVisiblePosts] = useState<PostModel[]>([]);
    const [activeTags, setActiveTags] = useState<TagModel[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        setActiveTags(props.tags);
    }, [props.tags]);

    useEffect(() => {
        _initVisiblePosts();
    }, [props.posts]);

    useEffect(() => {
        _initVisiblePosts();
    }, [activeTags]);

    useEffect(() => {
        _initVisiblePosts((currentPage - 1) * 6, currentPage * 6);
    }, [currentPage]);

    const _initVisiblePosts = (skip: number = 0, take: number = 6) => {
        const latestTag = activeTags?.find((tag) => tag?.slug === 'latest');
        let visiblePosts: PostModel[] = [];

        if (activeTags.length === 0) {
            visiblePosts = props.posts;

        } else if (latestTag) {
            // Reorder VisiblePosts by latest updated
            const sortedPosts = props.posts?.sort((a, b) => {
                return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            });

            visiblePosts = sortedPosts;
        }
        else {
            const filteredPosts = props.posts?.filter((post) => {
                const postTags = post.tags?.map((tag) => tag?.slug);

                return activeTags.some((tag) => postTags?.includes(tag?.slug));
            });

            visiblePosts = filteredPosts;
        }

        if (visiblePosts.length > 6) {
            setHasPagination(true);
        } else {
            setHasPagination(false);
        }

        setVisiblePosts(visiblePosts.slice(skip, take));
    }

    return (
        <>
            <div className={`${style.list} gh-postfeed gh-article `}>
                {activeTags.length > 0 && activeTags[0]?.feature_image && (
                    <div id="flow-banner" className="bf-tab-banner">
                        <img
                            className="bf-banner-logo"
                            src={activeTags[0].feature_image}
                            alt={activeTags[0].name}
                            loading="lazy"
                        />
                        <p className="bf-banner-desc">
                            <div
                                dangerouslySetInnerHTML={{ __html: activeTags[0].description }}
                            />
                        </p>
                    </div>
                )}
                {visiblePosts?.map((post, idx) => (
                    <article className="gh-card post" key={post.id}>
                        <div className="gh-card-link">
                            <Link
                                href={getPostPath(post)}
                                className="bf-post-link"
                            >
                                <img
                                    className="gh-card-image"
                                    sizes="(max-width: 1000px) 400px, 700px"
                                    alt={post.feature_image_alt}
                                    src={post.feature_image}
                                    loading="lazy"
                                />
                            </Link>
                            <div className="gh-card-content">
                                <div className={`${style.cardContentMeta} gh-card-meta`}>
                                    {post.primary_tag && (
                                        <div
                                            className="gh-card-tag"
                                           
                                        >
                                            {post.primary_tag?.name}
                                        </div>
                                    )}
                                        {moment(post.created_at).format('MMMM DD, YYYY')}
                                </div>
                                <div  className="read-time d-inline-block customfontblog ">
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-bivlfq"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="AccessTimeIcon"
                                    >
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                    </svg>{" "}
                                    Reading time {post.reading_time} minutes
                                </div>
                                <Link
                                    href={getPostPath(post)}
                                    className="bf-post-link"
                                >
                                    <h3 className="gh-card-title">
                                        {post.title}
                                    </h3>
                                </Link>
                                <Link
                                    href={getPostPath(post)}
                                    className="bf-post-link"
                                >
                                    <div className="gh-excerpt"
                                        dangerouslySetInnerHTML={{ __html: `${post.excerpt.slice(0, 200)} ${post.excerpt?.length > 200 ? '...' : null}` }}
                                    />
                                </Link>
                            </div>
                            <div
                                className="gh-card-author"
                               
                            >
                                <div className="gh-card-author-image-wrap">
                                    <img
                                        className="gh-card-author-image"
                                        src={post.primary_author?.profile_image}
                                        alt={post.primary_author?.name}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="gh-card-author-content">
                                    <strong>{post.primary_author.name}</strong>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div >
            {hasPagination && (
                <div className={`${style.paginationWrapper}`}>
                    <Pagination
                        className={`${style.pagination} pagination-bottom`}
                        totalCount={props.posts.length}
                        currentPage={currentPage}
                        pageSize={6}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            )}
        </>
    );
}