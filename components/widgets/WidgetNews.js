import { useState } from "react";
import useSWR from "swr";
import { Post } from "../ui/Post";
import { Container } from "../ui/Container";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Typography } from "../ui/Typography";
import { Show } from "../ui/Show";
import { useGeneralStore } from "@/providers/generalStore";
import { observer } from "mobx-react-lite";

const fetcher = (url) => fetch(url).then((res) => res.json());

const WidgetNews = () => {
  const { selectedSource } = useGeneralStore();
  console.log("🚀 ~ WidgetNews ~ selectedSource:", selectedSource);

  const { data: sourcesData } = useSWR(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${"4e1d7b146c4240f7919a802488db30a3"}`,
    fetcher,
  );

  const { data: articlesData, error } = useSWR(
    selectedSource
      ? `https://newsapi.org/v2/top-headlines?sources=${selectedSource}&apiKey=${"4e1d7b146c4240f7919a802488db30a3"}`
      : null,
    fetcher,
  );
  console.log("🚀 ~ WidgetNews ~ sourcesData:", sourcesData);
  console.log("🚀 ~ WidgetNews ~ articlesData:", articlesData);

  if (error) return <div>Failed to load news, contact us</div>;
  if (!sourcesData || !articlesData) return <div>Loading...</div>;

  const { sources } = sourcesData;
  const { articles } = articlesData;

  return (
    <>
      <SelectSource sources={sources} />
      <Show ternary>
        <Show.When isTrue={articles?.length > 0}>
          <Articles articles={articles} />
        </Show.When>
        <Show.Else>
          <Typography.Paragraph paragraph="No news available for this source." />
        </Show.Else>
      </Show>
    </>
  );
};

export default observer(WidgetNews);

const Articles = ({ articles }) => (
  <Container.Flex className="w-full flex-col gap-y-10">
    {articles.map((article) => (
      <Article key={article.title} article={article} />
    ))}
  </Container.Flex>
);

const Article = ({ article: { url, title, description } }) => (
  <Post as="article" className="">
    <Container.Link
      href={url}
      className="flex h-full w-full flex-col justify-between"
    >
      <Post.Title title={title} />
      <Post.Description text={description} />
      <Post.Cta text={"Read article"} />
    </Container.Link>
  </Post>
);

const SelectSource = observer(({ sources }) => {
  const { selectedSource, setSelectedSource } = useGeneralStore();
  const [query, setQuery] = useState("");
  const filteredSources =
    query === ""
      ? sources
      : sources.filter((source) => {
          return source.name.toLowerCase().includes(query.toLowerCase());
        });

  const getId = (sourceInput) => {
    return sources.find((source) => source.name === sourceInput).id;
  };

  return (
    <Combobox
      as="div"
      value={selectedSource}
      onChange={(source) => {
        setQuery("");
        setSelectedSource(getId(source));
      }}
      className="relative mb-10"
    >
      <Label className="block text-sm font-medium leading-6">
        Select a Source
      </Label>
      <Container className="relative">
        <ComboboxInput
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(source) => source}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>
      </Container>

      {filteredSources.length > 0 && (
        <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredSources.map((source) => (
            <ComboboxOption
              key={source.id}
              value={source.name}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-green-600 data-[focus]:text-white"
            >
              <span className="block truncate group-data-[selected]:font-semibold">
                {source.name}
              </span>
              <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-green-600 group-data-[selected]:flex group-data-[focus]:text-white">
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      )}
    </Combobox>
  );
});
