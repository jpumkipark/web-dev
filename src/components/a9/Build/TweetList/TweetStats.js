import React, { useState } from "react";
import service from "../service/service";
const TweetStats = ({ tweet }) => {
  const likeTweet = (t) => {
    debugger;
    service.updateTweet(t);
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <i className="fa fa-comment me-2"></i>
        {tweet.stats.comments}
      </div>
      <div className="col">
        <i className="fa fa-retweet me-2"></i>
        {tweet.stats.retweets}
      </div>
      <div
        className="col"
        onClick={() => {
          likeTweet(tweet);
        }}
      >
        {tweet.liked && (
          <i
            className="fa fa-heart me-2"
            style={{ color: tweet.liked ? "red" : "white" }}
          ></i>
        )}
        {!tweet.liked && <i className="fa fa-heart me-2"></i>}
        {tweet.stats.likes}
      </div>
      <div className="col">
        <i className="fas fa-external-link-alt me-2"></i>
      </div>
    </div>
  );
};

export default TweetStats;
