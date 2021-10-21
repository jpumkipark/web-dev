import React from "react";
const WhoToFollowItem = ({ who }) => {
  return (
    <>
      <li className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <div className="d-flex">
            <div className="pe-2">
              <img
                className="follow-img-wrapper"
                src={who.avatarIcon}
                width="50px"
                height="50px"
              />
            </div>
            <div>
              <div className="d-flex align-items-center">
                <spn className="pe-1 fw-bolder">{who.userName}</spn>
                <i className="fa fa-check-circle"></i>
              </div>
              <div>@{who.handle}</div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-primary btn-follow">Follow</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default WhoToFollowItem;
