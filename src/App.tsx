import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Sidebar } from "@Core/components/Sidebar";
import { Header } from "@Core/components/Header";
import { Container } from "@Core/components/Container";
import { Routing } from "@Core/Routing";

import "./assets/css/variables.css";
import "./assets/css/reset.css";
import s from "./App.module.css";


function App() {
  const location = useLocation();

  return (
    <div className={s.app}>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Sidebar />
          <main className={s.main}>
            <Header />
            <Container className={s.content}>
              <Routing />
            </Container>
          </main>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
