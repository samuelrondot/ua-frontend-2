// Models
import { TagModel } from "../models";

export const getTagPath = (tag: TagModel) => {
    return `/blog/tag/${tag?.slug}`
}