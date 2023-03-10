import { useState } from "react";
import "../../app/App.css";
import { useListPostsQuery } from "./titlesApi";

const Titles = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, isFetching } = useListPostsQuery(page);
  console.log("posts", posts);

  if (isLoading) {
    return <div className="flex-item center">Loading...</div>;
  }

  if (!posts) {
    return <div>No titles :(</div>;
  }

  return (
    <div className="App">
        {posts.map((poem, i) => {
          return (
            <ul
              className="text-sm font-serif hover:font-sans font divide-y divide-gray-400 odd:bg-white even:bg-slate-100"
              font-family="Georgia, Arial"
              key={`inside titles view ${i}`}
            >
              <li>
                <h2 className="text-right">
                  {poem.title}
                </h2>
              </li>
            </ul>
          );
        })}
        <span>
        <label className="text-sm">
          {page}/{3010 / 10}
        </label>
        <button
          className="text-sm rounded bg-sky-500 hover:bg-sky-700"
          onClick={() => setPage(page - 1)}
          isLoading={isFetching}
        >
          Previous
        </button>
        <button
          className="text-sm rounded bg-sky-500 hover:bg-sky-700"
          onClick={() => setPage(page + 1)}
          isLoading={isFetching}
        >
          Next
        </button>
        </span>
    </div>
  );
};

export default Titles;
