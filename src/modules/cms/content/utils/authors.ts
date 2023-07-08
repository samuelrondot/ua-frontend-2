// Models
import { AuthorModel } from "../models";

export const getAuthorPath = (author: AuthorModel) => {
    return `/blog/author/${author?.slug}`
}