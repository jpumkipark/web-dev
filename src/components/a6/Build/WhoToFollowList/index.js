import React from "react";
import WhoToFollowItem from "./WhoToFollowList";
import whos from "./who.json";
const WhoToFollowList = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item fw-bolder">Who to follow</li>
        {whos.map((who) => {
          return <WhoToFollowItem who={who} />;
        })}
      </ul>
    </>
  );
};

export default WhoToFollowList;
