const newsBaseUrl = "https://newsapi.org/v2/top-headlines";
const sourcesBaseUrl = "https://newsapi.org/v2/top-headlines/sources";

export const newsUrl = (selectedSource) => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const url = new URL(selectedSource ? newsBaseUrl : sourcesBaseUrl);
  if (selectedSource) {
    url.searchParams.append("sources", selectedSource);
  }

  url.searchParams.append("apiKey", apiKey);

  return url.href;
};
