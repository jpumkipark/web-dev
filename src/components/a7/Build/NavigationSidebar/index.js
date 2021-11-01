import React from "react";
import { Link } from "react-router-dom";
const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      {" "}
      <div className="list-group">
        <Link
          to="/a7"
          className="list-group-item list-group-item-action cursor-pointer"
        >
          <i className="fa fa-twitter"></i>
        </Link>
        <Link
          to="/a7/twitter/home"
          className={`
          ${active === "home" ? "active" : ""} 
        list-group-item list-group-item-action
        d-flex
        align-items-center
        cursor-pointer
      `}
        >
          <i className="fa fa-home pe-2"></i>
          <span
            className={`d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block`}
          >
            Home
          </span>
        </Link>
        <Link
          to="/a7/twitter/explore"
          className={`list-group-item list-group-item-action
          ${active === "explore" ? "active" : ""}  d-flex
          align-items-center
          cursor-pointer`}
          aria-current="true"
        >
          <i className="fa fa-hashtag pe-2"></i>
          <span
            className="
          d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
        "
          >
            Explore
          </span>
        </Link>
        <a
          className="
        list-group-item list-group-item-action
        d-flex
        align-items-center
        cursor-pointer
      "
        >
          <i className="fa fa-bell pe-2"></i>
          <span
            className="
          d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
        "
          >
            Notifications
          </span>
        </a>
        <a
          className="
        list-group-item list-group-item-action
        d-flex
        align-items-center
        cursor-pointer
      "
        >
          <i className="fa fa-envelope pe-2"></i>
          <span
            className="
          d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
        "
          >
            Messages
          </span>
        </a>
        <a
          className="
        list-group-item list-group-item-action
        d-flex
        align-items-center
        cursor-pointer
      "
        >
          <i className="fa fa-bookmark pe-2"></i>
          <span
            className="
          d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
        "
          >
            Bookmarks
          </span>
        </a>
        <a
          className="
        list-group-item list-group-item-action
        d-flex
        align-items-center
        cursor-pointer
      "
        >
          <i className="fa fa-list pe-2"></i>
          <span
            className="
          d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
        "
          >
            Lists
          </span>
        </a>
        <a
          className="
        list-group-item list-group-item-action
        d-flex
        align-items-center
        cursor-pointer
      "
        >
          <i className="fa fa-user pe-2"></i>
          <span
            className="
          d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
        "
          >
            Profile
          </span>
        </a>
        <a
          className="
        list-group-item list-group-item-action
        d-flex
        align-items-center
        cursor-pointer
      "
        >
          <i className="fa fa-ellipsis-h pe-2"></i>
          <span
            className="
          d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block
        "
          >
            More
          </span>
        </a>
      </div>
      <button className="btn btn-primary btn-tweet mt-2">Tweet</button>
    </>
  );
};

export default NavigationSidebar;
