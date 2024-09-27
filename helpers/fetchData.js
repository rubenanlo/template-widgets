import useSWR from "swr";
import { newsUrl } from "@/library/newsapi";

// Fetcher function used by SWR to fetch data from the API
const fetcher = (url) => fetch(url).then((res) => res.json());

// Custom hook to fetch news sources and articles
export const useFetchNews = (selectedSource) => {
  // Fetch the list of news sources
  const { data: sourcesData, error: sourceError } = useSWR(newsUrl(), fetcher);

  // Conditionally fetch articles if a source is selected
  const { data: articlesData, error: articleError } = useSWR(
    selectedSource ? newsUrl(selectedSource) : null,
    fetcher,
  );

  return { sourcesData, articlesData, sourceError, articleError };
};
