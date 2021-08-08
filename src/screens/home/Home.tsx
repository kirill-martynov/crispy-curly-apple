import * as React from "react";

import { CardList } from "@Core/components/CardList";

import { COURSES } from "src/data/courses";

import s from "./Home.module.css";


export const Home = () => {
  const courses = COURSES;

  return (
    <div className={s.home}>
      <div className={s.content}>
        <CardList cards={courses} title="My learnings:" />
      </div>
    </div>
  );
};
