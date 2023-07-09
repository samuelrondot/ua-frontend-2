// React
import { FC } from "react";
// Common components
import { BlogLayout } from "common/components/blog-layout";
// Sales Components
import { SalesCaptureSocialProof } from "modules/sales/capture/components/social-proof";
// Components
import { CmsContentPostShowRelated } from "./related";
import { CmsContentPostShowHeader } from "./header";
import { CmsContentPostShowAside } from "./aside";
// Models
import { PostModel } from "modules/cms/content/models";
// Styles
import style from './style.module.scss';

type OwnProps = {
    post: PostModel;
    relatedPosts: PostModel[];
}

export const CmsContentPostShow: FC<OwnProps> = (props) => {
    const post = props.post;

    return (
        <BlogLayout>
            <article className="gh-article post tag-flow tag-social-media-marketing tag-linkedin featured">
                <CmsContentPostShowHeader
                    post={post} />
                <div className="gh-content gh-canvas">
                    <div
                        dangerouslySetInnerHTML={{ __html: post.html }} />
                    <CmsContentPostShowAside
                        className={style.aside}
                        post={post} />
                    <div className="bf-spacer" />
                    {/** TODO: PS: You can add your comments here */}
                </div>
            </article>
            <CmsContentPostShowRelated relatedPosts={props.relatedPosts} />
            <SalesCaptureSocialProof />
        </BlogLayout >
    );
}