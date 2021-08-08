import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Sidebar } from "./core/components/Sidebar";
import { Header } from "./core/components/Header";
import { Container } from "./core/components/Container";

import "./assets/css/reset.css";
import s from "./App.module.css";

const Home = React.lazy(() => import("@Screens/Home"));
const Courses = React.lazy(() => import("@Screens/Courses"));
const Course = React.lazy(() => import("@Screens/Course"));
const Profile = React.lazy(() => import("@Screens/Profile"));
const Editor = React.lazy(() => import("@Screens/Editor"));

function App() {
  return (
    <div className={s.app}>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Sidebar />
          <div className={s.content}>
            <Header />
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Courses" component={Courses} />
                <Route exact path="/Courses/:id" component={Course} />
                <Route exact path="/Editor" component={Editor} />
                <Route exact path="/Profile" component={Profile} />
              </Switch>
            </Container>
          </div>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
