// React
import { FC, useState } from "react";
// Common Components
import { BlogLayout } from "common/components/blog-layout";
// CRM Components
import { CrmWidgetNewsletterSubscription } from "modules/crm/widget/newsletter-subscription";
import { CrmWidgetPodcastProposal } from "modules/crm/widget/podcast-proposal";
// Sales Components
import { SalesCaptureSocialProof } from "modules/sales/capture/components/social-proof";
// Components
import { CmsContentTagTabSelector } from "../../tag/tab-selector";
import { CmsContentPostMainHero } from "./hero";
import { CmsContentPostList } from "../list";
// Models
import { PostModel, TagModel } from "modules/cms/content/models";

const defaultTag = {
    slug: 'latest',
}

type OwnProps = {
    posts: PostModel[];
    tags: TagModel[];
}

export const CmsContentPostMain: FC<OwnProps> = (props) => {
    const [activeTag, setActiveTag] = useState<TagModel>(defaultTag as TagModel);

    const _isActive = (tag: TagModel) => {
        return activeTag?.slug === tag.slug;
    }

    const _handleTagChange = (tag: string) => {
        const selectedTag = props.tags?.find(t => t.slug === tag);

        setActiveTag(selectedTag!);
    }

    // Reorder SSR Posts by latest updated
    const sortedPosts = props.posts?.sort((a, b) => {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

    // Get the latest post
    const latestPost = sortedPosts?.length > 0 ? sortedPosts[0] : null;


    return (
        <BlogLayout>
            <CmsContentPostMainHero post={latestPost!} />
            <div className="bf-homefeed gh-page">
                <div className="gh-container bf-tab" >
                    <CmsContentTagTabSelector
                        activeTag={defaultTag.slug}
                        tags={[defaultTag, ...props.tags]}
                        onChange={_handleTagChange} />
                    <div>
                        <CmsContentPostList tags={[activeTag]} posts={sortedPosts} />
                    </div>
                </div>
            </div>
            <CrmWidgetNewsletterSubscription />


            <>
                {/** PS: There is not enough posts to show (I keep this here for now) 
                <div className="bf-homefeed gh-page">
                    <div className="gh-container bf-tab" >
                        <CmsContentTagTabSelector
                            activeTag={defaultTag.slug}
                            tags={[defaultTag, ...props.tags]}
                            onChange={_handleTagChange} />
                        <div>
                            <CmsContentPostList tags={[activeTag]} posts={sortedPosts} />
                        </div>
                    </div>
                </div>
                */}
            </>

            <SalesCaptureSocialProof />
        </BlogLayout>
    );
}