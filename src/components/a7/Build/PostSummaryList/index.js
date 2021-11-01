import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.json";

const PostSummaryList = ({ title }) => {
  return (
    <>
      {title && <li className="list-group-item"><h5 className="fw-bolder mb-0">{title}</h5></li>}
      {posts.map((elem) => {
        return <PostSummaryItem post={elem} />;
      })}
    </>
  );
};

export default PostSummaryList;
