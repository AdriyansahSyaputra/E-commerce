import React from "react";
import { CircleUserRound } from "lucide-react";
import PropsTypes from "prop-types";

const CardBlog = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div
          key={article.id}
          className="w-full h-full bg-white rounded-md shadow-md flex flex-col"
        >
          <div className="w-full h-52 overflow-hidden rounded-t-md">
            <img
              src="/public/img/banner.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <div className="mb-4">
              <p className="text-gray-400 text-xs uppercase mb-2">
                {article.category} - {article.date}
              </p>
              <h1 className="text-base font-semibold text-slate-700 mb-2">
                {article.title}
              </h1>
              <p className="text-sm text-slate-600 w-full line-clamp-3">
                {article.content}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center mt-auto">
              <CircleUserRound size={20} className="text-slate-500" />
              <p className="text-sm text-slate-500 ml-2">{article.author}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBlog;

CardBlog.propTypes = {
  articles: PropsTypes.array.isRequired,
};
