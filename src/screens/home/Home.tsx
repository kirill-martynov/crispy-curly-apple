import * as React from "react";
import { useHistory } from "react-router";

import { Card } from "@Core/components/Card";

import { COURSES } from "./homeConstants";

import s from "./Home.module.css";

export const Home = () => {
  const history = useHistory();

  const handleCardClick = (id: number) => {
    history.push(`/courses/${id}`)
  }

  return (
    <div className={s.home}>
      <h2 className={s.title}>Your courses:</h2>
      <div className={s.content}>
        {COURSES.map((course) => (
          <Card
            key={course.id}
            id={course.id}
            name={course.name}
            description={course.description}
            image={course.image}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};
