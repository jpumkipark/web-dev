import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a9/Practice/index";
import Build from "./components/a9/Build/index";
import Assignment6 from "./components/a6/Build/index";
import Assignment7 from "./components/a7/Build/index";
import Assignment8 from "./components/a8/Build/index";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import { combineReducers, createStore } from "redux";
const reducer = combineReducers({ tweets: tweets, who });
const store = createStore(reducer);
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Route path="/a6/twitter" exact={true}>
              <Assignment6 />
            </Route>
            <Route
              path={["/a7/twitter/home", "/a7/twitter/explore"]}
              exact={true}
            >
              <Assignment7 />
            </Route>
            <Route
              path={["/a8/twitter/home", "/a8/twitter/explore"]}
              exact={true}
            >
              <Assignment8 />
            </Route>
            <Route path="/a6/hello" exact={true}>
              <HelloWorld />
            </Route>
            <Route path={["/", "/a9", "/a9/practice"]} exact={true}>
              <Practice />
            </Route>
            <Route path="/a9/twitter">
              <Build />
            </Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
