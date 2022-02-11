import { FC, useState, useEffect } from "react";
import "./App.scss";
import logo from "./logo.webp";

import Article from "./Article/Article";
import { iArticle } from "../model/article";
import ArticlePagination from "./Pagination/ArticlePagination";
import { fetchArticles } from "./Services/articleService";

const App: FC<{}> = () => {
  const [articles, setArticles] = useState<iArticle[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  //Set Articles
  useEffect(() => {
    async function fetch() {
      try {
        const data = await fetchArticles(currentPage);
        console.log(data)
        setArticles(data.content);
        setTotal(data.totalArticles);
      } catch (err: any) {
        throw Error(err);
      }
    }
    fetch();
  }, [currentPage]);

  //change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="title sticky-top">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="container">
        <div className="news">
          {articles?.map((article, index) => (
            <Article
              title={article.title}
              imageUrl={article.imageUrl}
              url={article.url}
              key={index}
            />
          ))}
          <ArticlePagination
            totalPost={total}
            currentPage={currentPage}
            onPaginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default App;
