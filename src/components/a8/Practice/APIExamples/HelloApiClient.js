import React, { useEffect, useState } from "react";
const URL = "http://localhost:4000/";
const HelloApiClient = () => {
  const [hello, setHello] = useState("");
  useEffect(() => {
    fetch(`${URL}hello`)
      .then((response) => response.text())
      .then((text) => setHello(text));
  }, []);
  return <h1>{hello}</h1>;
};
export default HelloApiClient;
