import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.json";


const PostSummaryList = () => {
  return (
    <>
      {posts.map((elem) => {
        return <PostSummaryItem post={elem}  />;
      })}
    </>
  );
};

export default PostSummaryList;
