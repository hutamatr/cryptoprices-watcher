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
      setNewsData(news);
    };

    requestNewsData(
      {
        method: "get",
        url: "https://crypto-news14.p.rapidapi.com/news/cointelegraph",
        headers: {
          "X-RapidAPI-Key":
            "a53514e7damshc76c3f2908a577fp118200jsnc449175e8570",
          "X-RapidAPI-Host": "crypto-news14.p.rapidapi.com",
        },
      },
      newsDataFunc
    );
  }, [requestNewsData]);

  const newsContent = isLoadingNewsData.isLoading ? (
    <Loading text={isLoadingNewsData.text} />
  ) : (
    <div className="mx-auto grid grid-rows-1 justify-items-center gap-4 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
      {newsData.map((data, index) => {
        return (
          <Card
            title={data.title}
            desc={data.desc}
            img={data.image}
            link={data.url}
            key={index}
          />
        );
      })}
    </div>
  );

  return (
    <section className="min-h-[80vh]">
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
