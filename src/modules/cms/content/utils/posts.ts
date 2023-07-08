// Models
import { PostModel } from "../models";

export const getPostPath = (post: PostModel) => {
    return `/blog/${post?.slug}`
}