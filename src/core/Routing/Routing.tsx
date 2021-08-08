import React from "react";
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import s from './Routing.module.css';

const Home = React.lazy(() => import("@Screens/Home"));
const Courses = React.lazy(() => import("@Screens/Courses"));
const Course = React.lazy(() => import("@Screens/Course"));
const Profile = React.lazy(() => import("@Screens/Profile"));
const Editor = React.lazy(() => import("@Screens/Editor"));
const CourseEditor = React.lazy(
  () => import("@Screens/Editor/screens/CourseEditor")
);

export const Routing = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={250} classNames={{ ...s }} key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/courses/:id" component={Course} />
          <Route exact path="/editor" component={Editor} />
          <Route exact path="/editor/courses/:id" component={CourseEditor} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
