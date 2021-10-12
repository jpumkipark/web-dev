import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = () => {
  return `${posts
    .map((elem) => {
      return PostSummaryItem(elem);
    })
    .join("")}`;
};

export default PostSummaryList;
