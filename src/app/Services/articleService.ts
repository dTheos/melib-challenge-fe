import axios from "axios";
import { iArticleResponse } from "../../model/article";
import { constants } from "../constants";

export async function fetchArticles(currentPage: number): Promise<iArticleResponse> {
    const res = await axios.get(`${constants.HOST}${constants.ARTICLES_PATH}`, {
        params: { page: currentPage, limit: constants.ARTICLE_LIMIT },
    });
    return res.data.data;
}