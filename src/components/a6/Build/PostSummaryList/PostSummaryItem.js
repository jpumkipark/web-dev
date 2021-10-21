import React from "react";
const PostSummaryItem = ({ post }) => {
  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="twitter-greytext">{post.topic}</div>
            <div>
              <span className="fw-bolder">{post.userName}</span>
              <i className="fa fa-check-circle"></i>
              <span className="twitter-greytext"> - {post.time}</span>
            </div>
            <p className="fw-bolder mb-0">{post.title}</p>
          </div>
          <div className="px-1">
            <img
              className="article-img"
              width="100px"
              height="100px"
              src={post.image}
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default PostSummaryItem;
