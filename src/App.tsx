import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Sidebar } from "./core/components/Sidebar";
import { Header } from "./core/components/Header";

import './assets/css/reset.css';
import s from "./App.module.css";

const Home = React.lazy(() => import("./screens/home/Home"));
const Profile = React.lazy(() => import("./screens/profile/Profile"));
const Editor = React.lazy(() => import("./screens/editor/Editor"));

function App() {
  return (
    <div className={s.app}>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Sidebar />
          <div className={s.content}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Editor" component={Editor} />
            </Switch>
          </div>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
