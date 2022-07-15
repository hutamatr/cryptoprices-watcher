import React, { useState, useEffect } from "react";

import CoinTable from "../coinTable/CoinTable";

const Pagination = ({ data, pageLimit, dataLimit, onLoading }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 600 });
  }, [currentPage]);

  const firstPageHandler = () => {
    setCurrentPage(1);
  };

  const lastPageHandler = () => {
    setCurrentPage(13);
  };

  const nextPageHandler = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const prevPageHandler = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const changePageHandler = (event) => {
    const pageNumber = +event.target.textContent;
    setCurrentPage(pageNumber);
  };

  const getPaginationDataHandler = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroupHandler = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, index) => start + index + 1);
  };

  return (
    <>
      <CoinTable
        onLoading={onLoading}
        onPaginationData={getPaginationDataHandler}
      />

      <div className="my-6 flex flex-row items-center justify-center gap-x-2">
        <button
          onClick={firstPageHandler}
          className={`btn btn-primary btn-sm ${
            currentPage < 5 ? "btn-disabled" : ""
          }`}
        >
          first
        </button>
        <button
          onClick={prevPageHandler}
          className={`btn btn-primary btn-sm ${
            currentPage === 1 ? "btn-disabled" : ""
          }`}
        >
          prev
        </button>

        {getPaginationGroupHandler().map((item, index) => (
          <button
            key={index}
            onClick={changePageHandler}
            className={`btn btn-ghost btn-circle btn-sm ${
              currentPage === item
                ? "btn-outline"
                : currentPage > 12
                ? "hidden"
                : ""
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={nextPageHandler}
          className={`btn btn-primary btn-sm ${
            currentPage === 13 ? "btn-disabled" : ""
          }`}
        >
          next
        </button>
        <button
          onClick={lastPageHandler}
          className={`btn btn-primary btn-sm ${
            currentPage === 13 ? "btn-disabled" : ""
          }`}
        >
          last
        </button>
      </div>
    </>
  );
};

export default Pagination;
