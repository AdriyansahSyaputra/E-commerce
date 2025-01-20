import React, { useState } from "react";
import CardBlog from "../../Elements/CardBlog";

const BlogsSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <CardBlog key={index} />
        ))}
      </div>
    </>
  );
};

export default BlogsSection;
