import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Sidebar } from "./core/components/Sidebar";
import { Header } from "./core/components/Header";
import { Container } from "./core/components/Container";

import "./assets/css/variables.css";
import "./assets/css/reset.css";
import s from "./App.module.css";

const Home = React.lazy(() => import("@Screens/Home"));
const Courses = React.lazy(() => import("@Screens/Courses"));
const Course = React.lazy(() => import("@Screens/Course"));
const Profile = React.lazy(() => import("@Screens/Profile"));
const Editor = React.lazy(() => import("@Screens/Editor"));
const CourseEditor = React.lazy(
  () => import("@Screens/Editor/screens/CourseEditor")
);

function App() {
  const location = useLocation();

  console.log('location', location);

  return (
    <div className={s.app}>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Sidebar />
          <div className={s.content}>
            <Header />
            <Container>
              <TransitionGroup>
                <CSSTransition timeout={10000} classNames={{ ...s }} key={location.key}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/courses" component={Courses} />
                    <Route exact path="/courses/:id" component={Course} />
                    <Route exact path="/editor" component={Editor} />
                    <Route
                      exact
                      path="/editor/courses/:id"
                      component={CourseEditor}
                    />
                    <Route exact path="/profile" component={Profile} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Container>
          </div>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
