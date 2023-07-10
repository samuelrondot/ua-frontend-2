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


    function addProductJsonLd() {
        let datePublished = new Date(props.post.published_at).toISOString();
        let dateModified = new Date(props.post.updated_at).toISOString();
      
        return {
          __html: ` {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${props.post.title}",
            "image": "${props.post.feature_image}",
      
            "author": {
              "@type": "Person",
              "name": "Samuel Rondot"
            },
            "publisher": {
              "@type": "Organization",
              "name": "useArtemis",
              "logo": {
                "@type": "ImageObject",
                "url": "https://useartemis.co/favicon.ico"
              }
            },
            "datePublished": "${datePublished}",
            "dateModified": "${dateModified}"
          }
        `,
        };
      }


    return (
        <>
            <Head>
                <title>{`useArtemis | ${props.post.title}`}</title>
                <meta name="description" content={props.post.excerpt} />
                <meta property="og:title" content={props.post.title   ? `${props.post.title} | useArtemis`   : 'useArtemis - Find B2B contact informations'} />
                <meta property="og:description" content={props.post.excerpt} />
                {props.post.feature_image && <meta property="og:image" content={props.post.feature_image} />}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {props.post.feature_image && props.post.title && props.post.excerpt && props.post.published_at && props.post.updated_at &&<script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />}
            </Head>
            <CmsContentPostShow relatedPosts={props.relatedPosts} post={props.post} />
        </>
    );
}

export async function getStaticProps(staticProps: any) {
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
        props: { relatedPosts, post },
    };
}

export async function getStaticPaths() {
    const posts = await cmsContent.posts.getManyPosts();

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: 'blocking' };
}




export default BlogPostShow;