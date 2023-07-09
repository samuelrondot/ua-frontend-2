// Ghost API
import { Params, PostOrPage, PostsOrPages } from "@tryghost/content-api";
// Gosht API With configs
import { useGhostApi } from "common/hooks"

export const posts = {
    getManyPosts: (params?: Params, local?: string | 'fr' | 'en'): Promise<PostsOrPages> => {
        const ghostApi = useGhostApi(local!);

        return ghostApi.posts.browse(params);
    },

    getOnePost: (slug: string, params?: Params, local?: string | 'fr' | 'en'): Promise<PostOrPage> => {
        const ghostApi = useGhostApi(local!);

        return ghostApi.posts.read({ slug }, params);
    }
}