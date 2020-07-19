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
        <Route exact path="/piano-solo/transformation/" render={(props) => <SongPage {...props} release="transformation" />} />
        <Route exact path="/piano-solo/homecoming/" render={(props) => <SongPage {...props} release="homecoming" />} />
        <Route exact path="/piano-solo/remembrance/" render={(props) => <SongPage {...props} release="remembrance" />} />
        <Route exact path="/piano-solo/discovery/" render={(props) => <SongPage {...props} release="discovery" />} />
        <Route exact path="/piano-solo/resolution/" render={(props) => <SongPage {...props} release="resolution" />} />
        <Route exact path="/piano-solo/golden-days/" render={(props) => <SongPage {...props} release="golden-days" />} />
        <Route exact path="/hard-jazz/organsm/" render={(props) => <SongPage {...props} release="organsm" />} />
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
