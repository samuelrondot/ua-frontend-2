// React
import { FC } from "react";
// Next
import Head from "next/head";
// Modules Components
import { CmsContentPostMain } from "modules/cms/content/components/post/main";
// Services
import { cmsContent } from "modules/cms/content/services";
// Models
import { PostModel, TagModel } from "modules/cms/content/models";

type OwnProps = {
    posts: PostModel[];
    tags: TagModel[];
}

const BlogPostList: FC<OwnProps> = (props) => {

    return (
        <>
            <Head>
                <title>useArtemis - Blog</title>
                <meta name="description" content="Get the latest news about lead generation." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CmsContentPostMain posts={props.posts} tags={props.tags} />
        </>
    );
}

export async function getServerSideProps(staticProps: any) {
    const locale = staticProps.locale;

    const defaultTag: Partial<TagModel> = {
        name: 'Latest Updates',
        slug: 'latest',
    }

    const tags = await cmsContent.tags.getManyTags(
        {},
        locale
    );

    const posts = await cmsContent.posts.getManyPosts(
        {
            include: ['tags', 'authors'],
            limit: 100,
        },
        locale
    );

    tags.unshift(defaultTag as any);

    return {
        props: { posts, tags }, // will be passed to the page component as props
    };
}

export default BlogPostList;