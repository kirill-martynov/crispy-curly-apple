import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Sidebar } from "./core/components/Sidebar";
import { Header } from "./core/components/Header";

import './assets/css/reset.css';
import s from "./App.module.css";

const Home = React.lazy(() => import("./screens/Home"));
const Courses = React.lazy(() => import("./screens/Courses"));
const Profile = React.lazy(() => import("./screens/Profile"));
const Editor = React.lazy(() => import("./screens/Editor"));

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
              <Route exact path="/Courses" component={Courses} />
              <Route exact path="/Editor" component={Editor} />
              <Route exact path="/Profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
