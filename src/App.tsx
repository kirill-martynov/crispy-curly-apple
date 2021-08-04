import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import s from './App.module.scss';

const Home = React.lazy(() => import('./screens/home/Home'));
const Profile = React.lazy(() => import('./screens/profile/Profile'));
const Editor = React.lazy(() => import('./screens/editor/Editor'));


function App() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/Editor">Editor</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Editor" component={Editor} />
          </Switch>
        </Router>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
