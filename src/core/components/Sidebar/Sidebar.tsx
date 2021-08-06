import * as React from "react";
import { NavLink } from "react-router-dom";

import { Svg } from '../Svg';

import { MENU } from "./sidebarConstants";

import s from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.logoWrapper}>
        <NavLink to="/">Course.</NavLink>
      </div>

      <nav className={s.navigation}>
        {MENU.map((item) => (
          <NavLink key={item.name} className={s.navigationLink} to={item.path}>
            <Svg name={item.icon} width="24" height="24" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
