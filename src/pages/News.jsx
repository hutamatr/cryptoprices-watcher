import React, { useEffect, useState } from "react";

import Card from "../components/ui/Card";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loading";
import useHttp from "../hooks/use-http";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const {
    requestData: requestNewsData,
    error: errorNewsData,
    isLoadingNow: isLoadingNewsData,
  } = useHttp();

  console.log(newsData);

  useEffect(() => {
    const newsDataFunc = (news) => {
      setNewsData(news.data);
    };

    requestNewsData(
      {
        method: "get",
        url: "https://data.messari.io/api/v1/news",
      },
      newsDataFunc
    );
  }, [requestNewsData]);

  console.log(newsData);

  const newsContent = isLoadingNewsData.isLoading ? (
    <Loading text={isLoadingNewsData.text} />
  ) : (
    <div className="max-auto grid justify-items-center gap-y-4 px-6 py-8 md:grid-cols-1">
      {newsData.map((data) => {
        return (
          <Card
            title={data.title}
            author={data.author.name}
            link={data.url}
            date={data.published_at}
            key={data.id}
          />
        );
      })}
    </div>
  );

  return (
    <section className="min-h-[80vh]" id="news-data">
      <h1 className="my-8 px-4 text-center text-2xl font-semibold md:text-3xl">
        News
      </h1>
      {errorNewsData.isError ? (
        <Error message={errorNewsData.message} />
      ) : (
        newsContent
      )}
    </section>
  );
};

export default News;
