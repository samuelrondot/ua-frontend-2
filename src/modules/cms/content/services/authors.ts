// Ghost API
import { Params, Author, Authors } from "@tryghost/content-api";
// Gosht API With configs
import { useGhostApi } from "common/hooks"

export const authors = {
    getManyAuthors: (params?: Params, local?: string | 'fr' | 'en'): Promise<Authors> => {
        const ghostApi = useGhostApi(local!);

        return ghostApi.authors.browse(params);
    },

    getOneAuthor: (slug: string, params?: Params, local?: string | 'fr' | 'en'): Promise<Author> => {
        const ghostApi = useGhostApi(local!);

        return ghostApi.authors.read({ slug }, params);
    }
}