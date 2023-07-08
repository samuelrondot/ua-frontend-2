// Ghost API
import { Params, Tag, Tags } from "@tryghost/content-api";
// Gosht API With configs
import { useGhostApi } from "common/hooks"

export const tags = {
    getManyTags: (params?: Params, local?: string | 'fr' | 'en'): Promise<Tags> => {
        const ghostApi = useGhostApi(local!);

        return ghostApi.tags.browse(params);
    },

    getOneTag: (slug: string, params?: Params, local?: string | 'fr' | 'en'): Promise<Tag> => {
        const ghostApi = useGhostApi(local!);

        return ghostApi.tags.read({ slug }, params);
    }
}