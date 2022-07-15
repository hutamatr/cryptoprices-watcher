import React from "react";

const Loading = () => {
  let animation = [];
  for (let i = 0; i < 5; i++) {
    animation.push(
      <li
        className={`mx-1 w-2 animate-[loading_0.6s_infinite_alternate] rounded-2xl bg-neutral ${
          i % 2 === 1 ? "animation-delay h-16" : "h-5"
        }`}
      ></li>
    );
  }
  return (
    <div class="mx-auto flex h-12 max-w-fit items-center justify-center bg-base-100">
      <ul class="flex items-center">{animation}</ul>
    </div>
  );
};

export default Loading;
