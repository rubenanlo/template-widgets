import useSWR from "swr";
import { newsUrl } from "@/library/newsapi";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useFetchNews = (selectedSource) => {
  const { data: sourcesData, error: sourceError } = useSWR(newsUrl(), fetcher);

  const { data: articlesData, error: articleError } = useSWR(
    selectedSource ? newsUrl(selectedSource) : null,
    fetcher,
  );

  return { sourcesData, articlesData, sourceError, articleError };
};
