import PostSummaryList from "./PostSummaryList";
import React from "react";

const ExploreComponent = () => {
  return (
    <>
      <div class="mb-2 d-flex justify-content-between align-items-center">
        <i class="fa fa-search search-glass"></i>
        <input class="w-100 twitter-search" placeholder="Search Twitter" />
        <i class="fa fa-gear ps-4 twitter-gear"></i>
      </div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">
            For you
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">
            Trending
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">
            News
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">
            Sports
          </a>
        </li>
        <li class="nav-item">
          <a
            class="
        nav-link
        d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block
      "
            href="entertainment.html"
          >
            Entertainment
          </a>
        </li>
      </ul>
      <ul class="nav mb-2 nav-tabs">
        <ul class="list-group list-group-width">
          <li class="list-group-item pa-inherit">
            <img class="spacex-img"  src={"../images/spaceX.jpg"}/>
            <div class="img-title" >SpaceX's Starship</div>
          </li>
          <PostSummaryList />{" "}
        </ul>
      </ul>
    </>
  );
};
export default ExploreComponent;
