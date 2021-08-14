import React from "react";

function PostPreview({ post }) {
  return (
    <div>
      <h4> {post.title} </h4>
      <p> {post.description} </p>
    </div>
  );
}

export default PostPreview;
