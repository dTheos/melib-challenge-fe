export interface iArticle {
    title: string,
    url: string,
    imageUrl: string
}

export interface iArticleResponse {
    totalArticles: number,
    content: iArticle[]
}
