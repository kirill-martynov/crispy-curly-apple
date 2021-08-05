import * as React from "react";
import { NavLink } from "react-router-dom";

import s from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.logoWrapper}>Logo</div>

      <nav className={s.navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/editor">Editor</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </div>
  );
};
