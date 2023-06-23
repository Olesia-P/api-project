import "../../styles/globals.scss";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import store from "../store/index";
import { catsFactsApi } from "../store/modules/apiSlice";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <ApiProvider api={catsFactsApi}>
      <Component {...pageProps} />{" "}
    </ApiProvider>
    // </Provider>
  );
}

export default MyApp;
