import { useEffect, useState } from "react";
import { fetchArticle, fetchArticles } from "../data/apiclient";
import { useGoodForArticle } from "./goodcount";

export function useArticle(id) {
  const [article, setArticle] = useState();

  useEffect(() => {
    setArticle(void 0); // 切り替え時に一度初期化する
    fetchArticle(id).then((_article) => {
      setArticle(_article);
    });
  }, [id]);

  return {
    article,
  };
}

export function useArticles() {
  const [articles, setArticles] = useState();
  const { setGoodCount } = useGoodForArticle();

  useEffect(() => {
    fetchArticles().then((_articles) => {
      setArticles(_articles);
      setGoodCount(_articles);
    });
  }, []);

  return {
    articles,
  };
}
