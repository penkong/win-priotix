// mount function
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);
  return {
    // listener to parent (location)
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) history.push(nextPathName);
    },
  };
};

// isolation
if (process.env.NODE_ENV === "development") {
  const history = createBrowserHistory();
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) mount(devRoot, { defaultHistory: history });
}

export { mount };
