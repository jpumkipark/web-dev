import React, { useState } from "react";
import { useDispatch } from "react-redux";
const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tweetClickHandler = () => {
    dispatch({
      type: "create-tweet",
      tweet: {
        tweet: whatsHappening,
      },
    });
  };

  return (
    <>
      <textarea
        value={whatsHappening}
        onChange={(event) => setWhatsHappening(event.target.value)}
      ></textarea>

      <button onClick={tweetClickHandler}>Tweet</button>
    </>
  );
};
export default WhatsHappening;
