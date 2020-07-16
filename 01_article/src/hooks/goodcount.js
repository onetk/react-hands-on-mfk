import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { generateKey } from "../redux/reducers/good";

export function useGoodForArticle() {
  const dispatch = useDispatch();
  const goodState = useSelector((state) => state.good);

  const incrementGoodCount = useCallback(
    (articleId) => {
      dispatch({
        type: "GOOD_COUNT_INCREMENT",
        payload: {
          articleId,
        },
      });
    },
    [dispatch]
  );
  const setGoodCount = useCallback(
    (articles) => {
      dispatch({
        type: "GOOD_COUNT_SET_ALL",
        payload: {
          counts: articles.map((article) => ({
            id: article.id,
            good: article.good,
          })),
        },
      });
    },
    [dispatch]
  );

  const getGoodCount = useCallback(
    (articleId) => {
      return goodState[generateKey(articleId)] || 0;
    },
    [goodState]
  );

  return {
    goodState,
    getGoodCount,
    setGoodCount,
    incrementGoodCount,
  };
}