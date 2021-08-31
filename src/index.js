import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import { CookiesProvider } from "react-cookie";
import GlobalStyle from "./globalStyles";
ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById("root")
);
