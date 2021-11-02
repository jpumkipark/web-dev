import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";
const HomeScreen = () => {
  return (
    <div className="row">
      <div className="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 bg-color-blue fg-color-white">
        <NavigationSidebar active="home" />
      </div>
      <div
        style={{ position: "relative" }}
        className="col-10 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 bg-color-yellow"
      >
        <WhatsHappening />
        <TweetList />
      </div>
      <div className="col-4 col-xxl-4 col-xl-4 col-lg-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none bg-color-red">
        <PostSummaryList title="What's happening" />
      </div>
    </div>
  );
};
export default HomeScreen;
