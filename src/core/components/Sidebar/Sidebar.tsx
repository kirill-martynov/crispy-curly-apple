import * as React from "react";
import { NavLink } from "react-router-dom";

import { Svg } from "@Core/components/Svg";
import { Icon } from "@Core/components/Icon";

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
          <NavLink
            key={item.name}
            className={s.navigationLink}
            activeClassName={s.navigationLinkActive}
            to={item.path}
            exact={item.exact}
          >
            <Icon name={item.icon} width="28" height="28" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
