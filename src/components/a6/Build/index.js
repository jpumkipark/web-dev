import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import ExploreComponents from "./ExploreComponent";
import WhoToFollowList from "./WhoToFollowList";
import "./index.css";

const ExploreScreen = () => {
  return (
    <div className="row">
      <div className="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 bg-color-blue fg-color-white">
        <NavigationSidebar active="explore" />
      </div>
      <div
        style={{ position: "relative" }}
        className="col-10 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 bg-color-yellow"
      >
        <ExploreComponents />
      </div>
      <div className="col-4 col-xxl-4 col-xl-4 col-lg-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none bg-color-red">
        <WhoToFollowList />
      </div>
    </div>
  );
};
export default ExploreScreen;
