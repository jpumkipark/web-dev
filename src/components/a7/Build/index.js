import React from "react";
import ExploreScreen from "./ExploreScreen/index";
import HomeScreen from "./HomeScreen/index";
import { Route } from "react-router-dom";



import "./index.css";


const Build = () => {
  return (
   
      <div>
        <Route
          path={["/", "/a7/twitter/home"]}
          exact={true}
          component={HomeScreen}
        />
        <Route
          path="/a7/twitter/explore"
          exact={true}
          component={ExploreScreen}
        />
      </div>
  
  );
};
export default Build;
