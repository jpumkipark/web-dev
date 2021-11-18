import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postNewTweet,
  fetchAllTweets,
} from "../../../../services/twitterService";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tweetClickHandler = () => {
    postNewTweet(dispatch, {
      tweet: whatsHappening,
    });
  };

  return (
    <div className="d-flex mb-3">
      <div className="d-flex align-items p-3">
        <img
          className="wd-profile-img"
          src="../../../images/react-blue.png"
          width="48px"
          height="48px"
        />
      </div>
      <div className="w-100">
        <div>
          <textarea
            className="w-100 wb-textbox text-secondary"
            placeholder="What's happening?"
            value={whatsHappening}
            onChange={(event) => setWhatsHappening(event.target.value)}
          ></textarea>
        </div>
        <hr />
        <div className="d-flex justify-content-between mt-1">
          <div className="wb-icon-collection">
            <i className="fa fa-regular fa-image"></i>
            <i class="fa fa-smile"></i>
            <i className="fa fa-regular fa-calendar"></i>
            <i class="fa fa-chart-line"></i>
          </div>
          <button
            className="btn btn-primary wb-create-tweet-btn"
            onClick={tweetClickHandler}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;
