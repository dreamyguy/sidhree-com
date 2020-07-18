import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/hoc/App";
import HomePage from "./components/pages/HomePage";
import SongPage from "./components/pages/SongPage";
import NotFoundPage from "./components/pages/NotFoundPage";

ReactDOM.render(
  <BrowserRouter basename="/">
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/progressive-rock/futures-past/" render={(props) => <SongPage {...props} withBio />} />
        <Route exact path="/piano-solo/transformation/" component={SongPage} />
        <Route exact path="/piano-solo/homecoming/" component={SongPage} />
        <Route exact path="/piano-solo/remembrance/" component={SongPage} />
        <Route exact path="/piano-solo/discovery/" component={SongPage} />
        <Route exact path="/piano-solo/resolution/" component={SongPage} />
        <Route exact path="/hard-jazz/organsm/" component={SongPage} />
        <Route exact path="/404" component={NotFoundPage} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
