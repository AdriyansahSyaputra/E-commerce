import React, { useState } from "react";
import {
  Calendar,
  User,
  Tag,
  ThumbsUp,
  Share2,
  ChevronsLeft,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Details = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const location = useLocation();
  4;
  const { author, category, title, content, date } = location.state;

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Hero Image */}
      <div className="relative w-full h-96 mb-4 rounded-xl overflow-hidden">
        <img
          src="/public/img/banner.png"
          alt="Blog post hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Post Meta */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>
              By <span className="font-semibold">{author}</span>
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-8">
          <p className="text-xl font-medium text-gray-900">{title}</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>{content}</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum
              soluta, non accusantium nesciunt ducimus minus amet! Voluptatibus
              harum reiciendis reprehenderit aspernatur error voluptates, id
              tenetur. Enim debitis quam veniam cumque iusto qui, sint quos eius
              aut ea adipisci suscipit omnis dicta amet quidem velit illo
              quaerat. Doloribus consequuntur sint ex explicabo iure nemo
              sapiente.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              aut, assumenda omnis ad corporis non pariatur ratione alias fugit
              porro suscipit odio ducimus temporibus eveniet? Cum repellendus
              asperiores voluptates, ipsa illum quae? Veritatis saepe quibusdam
              possimus provident veniam, tenetur debitis quo suscipit quae rerum
              iusto!
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border border-gray-200" />

        {/* Interactive Buttons */}
        <div className="flex gap-4 justify-between">
          <div>
            <Link
            to="/blogs"
            >
              <button className="px-4 py-2 rounded-xl text-slate-100 font-semibold bg-teal-500 hover:bg-teal-600 transition-colors duration-200 flex items-center gap-1">
                <ChevronsLeft className="w-5 h-5 " />
                Back To Post
              </button>
            </Link>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isLiked
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <ThumbsUp
                className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
              />
              <span>{likeCount}</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
