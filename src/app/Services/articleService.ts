import axios from "axios";
import { iArticleResponse } from "../../model/article";

const ARTICLE_LIMIT = 10;

export async function fetchArticles(currentPage: number) : Promise<iArticleResponse>{
    const res = await axios.get("http://localhost:5000/articles", {
        params: { page: currentPage, limit: ARTICLE_LIMIT },
    });
    return res.data.data;
}