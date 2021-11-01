import React from "react";
import WhoToFollowItem from "./WhoToFollowList";
import { useSelector } from "react-redux";
const WhoToFollowList = () => {
  const who = useSelector((state) => state);
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item fw-bolder">Who to follow</li>
        {who.map((who) => {
          return <WhoToFollowItem who={who} />;
        })}
      </ul>
    </>
  );
};

export default WhoToFollowList;
