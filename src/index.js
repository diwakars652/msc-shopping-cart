import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import store from "./Redux/store/store";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);
