import React from "react";

const Loading = ({ text }) => {
  return (
    <h1
      data-text={text}
      className="loading--animation relative mx-auto my-[10vh] max-w-fit text-xl font-bold text-[#fffaf0]"
    >
      {text}
    </h1>
  );
};

export default Loading;
