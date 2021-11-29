import React, { useEffect, useState } from "react";
const HelloApiClient = () => {
  const URL = "http://localhost:4000/";
  const [hello, setHello] = useState("");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    fetch(`${URL}hello`)
      .then((response) => response.text())
      .then((text) => setHello(text))
      .then(() => setReady(true));
  }, []);
  return ready && <h1>{hello}</h1>;
};
export default HelloApiClient;
