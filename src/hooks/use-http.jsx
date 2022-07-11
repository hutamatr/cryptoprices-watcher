import { useState, useCallback } from "react";
import axios from "axios";

const useHttp = () => {
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const [isLoadingNow, setIsLoadingNow] = useState({
    isLoading: false,
    text: "",
  });

  const requestData = useCallback(
    async (requestConfigFunc, requestDataFunc) => {
      setIsLoadingNow({
        isLoading: true,
        text: "Loading...",
      });
      try {
        const response = await axios({
          method: requestConfigFunc.method,
          url: requestConfigFunc.url,
          headers: requestConfigFunc.headers ? requestConfigFunc.headers : {},
        });

        if (response.status !== 200) {
          throw new Error("Failed get data");
        }

        const data = response.data;

        requestDataFunc(data);
      } catch (error) {
        if (error instanceof Error) {
          setError({
            isError: true,
            message: error.message,
          });
        }
      }
      setIsLoadingNow({
        isLoading: false,
        text: "",
      });
    },
    []
  );

  return {
    requestData,
    error,
    isLoadingNow,
  };
};

export default useHttp;
