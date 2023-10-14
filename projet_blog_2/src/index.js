import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.scss";

// _____[REDUX]
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { getPosts } from "./actions/post_action";
import { getUser } from "./actions/user_action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

store.dispatch(getPosts());
store.dispatch(getUser());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
