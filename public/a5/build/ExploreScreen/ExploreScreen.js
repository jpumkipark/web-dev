import NavigationSidebar from "../NavigationSideBar/index.js";
import ExploreComponent from "../ExploreComponents.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
  $("#wd-explore").append(`
    <div class="row">
    <div class="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 bg-color-blue fg-color-white">        
        ${NavigationSidebar()}
    </div>
    <div
    class="col-10 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 bg-color-yellow">
        ${ExploreComponent()}
    </div>
    <div class="col-4 col-xxl-4 col-xl-4 col-lg-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none bg-color-red">
        ${WhoToFollowList()}
    </div>
    `);
})($);
