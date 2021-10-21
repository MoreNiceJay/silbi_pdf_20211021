import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Route path="/about" component={App} />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
