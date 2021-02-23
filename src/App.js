import React from "react";
import thunk from "redux-thunk";
import LandingPage from "./landingPage";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
