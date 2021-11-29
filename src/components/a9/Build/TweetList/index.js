import React, { useEffect, useState } from "react";
import TweetListItem from "./TweetListItem";
import service from "../service/service";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => service.findAllTweets().then((tweets) => setTweets(tweets)));

  const deleteTweet = (tweet) =>
    service
      .deleteTweet(tweet._id)
      .then(() => setTweets(tweets.filter((t) => t !== tweet)));

  return (
    <ul className="list-group">
      {tweets.map((tweet) => (
        <TweetListItem tweet={tweet} deleteTweet={deleteTweet} />
      ))}
    </ul>
  );
};

export default TweetList;
