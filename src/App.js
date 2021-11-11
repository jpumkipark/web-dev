import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a8/Practice/index";
import Build from "./components/a8/Build/index";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import { combineReducers, createStore } from "redux";
const reducer = combineReducers({ tweets: tweets, who });
const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Route path="/a6/hello" exact={true}>
            <HelloWorld />
          </Route>
          <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
            <Practice />
          </Route>
          <Route path="/a8/twitter">
            <Build />
          </Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
