import React from "react";

const TrendingBlog = () => {
  const trendingPosts = [
    {
      id: 1,
      title: "The Future of AI: Latest Breakthroughs and Developments",
      date: "20 Jan 2025",
      image: "/public/img/banner.png",
    },
    {
      id: 2,
      title: "10 Essential Tips for Modern Web Development",
      date: "19 Jan 2025",
      image: "/public/img/banner.png",
    },
    {
      id: 3,
      title: "Understanding the Impact of Climate Change",
      date: "18 Jan 2025",
      image: "/public/img/banner.png",
    },
  ];

  return (
    <aside className="min-w-80 p-4 mb-10 md:mb-0">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-lg font-semibold text-slate-800">Trending News</h2>
        <div className="flex-1 h-0.5 bg-slate-200"></div>
      </div>

      {/* Blog Posts List */}
      <div className="space-y-2">
        {trendingPosts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer hover:bg-slate-50 rounded-lg transition-colors duration-200 p-2"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-20 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center mt-2 gap-2">
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="inline-block w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-xs text-blue-600 hover:text-blue-700">
                    Read more
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default TrendingBlog;
