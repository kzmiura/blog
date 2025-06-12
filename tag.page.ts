export const layout = 'layouts/tag_page.vto'

export default function* ({ search }: Lume.Site) {
    const tags = search.values<string>('tags')

    for (const tag of tags) {
        yield {
            url: `/blog/tag/${tag}/`,
            title: tag,
            tag,
        }
    }
}