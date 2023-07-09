import GhostContentAPI from '@tryghost/content-api';

export const useGhostApi = (local?: string) => {
    let url = process.env.NEXT_PUBLIC_GHOST_API_URL!
    let key = process.env.NEXT_PUBLIC_GHOST_API_KEY!

    if (local === 'fr') {
        url = process.env.NEXT_PUBLIC_GHOST_FR_API_URL!
        key = process.env.NEXT_PUBLIC_GHOST_FR_API_KEY!
    }

    return new GhostContentAPI({
        version: 'v4',
        url,
        key
    })
}