// React
import { FC } from "react";
// Next
import Head from "next/head";
// Modules Components
import { CmsContentPostShow } from "modules/cms/content/components/post/show";
// Services
import { cmsContent } from "modules/cms/content/services";
// Models
import { PostModel } from "modules/cms/content/models";

type OwnProps = {
    relatedPosts: PostModel[];
    post: PostModel;
}

const BlogPostShow: FC<OwnProps> = (props) => {

    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CmsContentPostShow relatedPosts={props.relatedPosts} post={props.post} />
        </>
    );
}

export async function getServerSideProps(staticProps: any) {
    const locale = staticProps.locale;

    let filter = '';

    const post = await cmsContent.posts.getOnePost(
        staticProps.params.slug,
        {
            include: ['tags', 'authors'],
        },
        locale
    );

    if (post.primary_tag?.slug) {
        filter += `tag:${post.primary_tag?.slug}`;
    }

    const relatedPosts = await cmsContent.posts.getManyPosts(
        {
            order: 'published_at DESC',
            include: ['tags', 'authors'],
            limit: 4,
            filter,
        },
        locale
    );


    return {
        props: { relatedPosts, post }, // will be passed to the page component as props
    };
}

export default BlogPostShow;