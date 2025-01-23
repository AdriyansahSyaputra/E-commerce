import React from "react";
import PropTypes from "prop-types";
import CardBlog from "../../Elements/CardBlog";

const BlogsSection = ({ articles }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardBlog articles={articles} />
      </div>
    </>
  );
};

export default BlogsSection;

BlogsSection.propTypes = {
  articles: PropTypes.array.isRequired,
};
