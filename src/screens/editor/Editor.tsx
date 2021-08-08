import * as React from "react";
import { useHistory } from "react-router";

import { Button } from "@Core/components/Button";
import { CardList } from "@Core/components/CardList";

import { COURSES } from "src/data/courses";

import s from "./Editor.module.css";

export const Editor = () => {
  const history = useHistory();

  const handleCreateCourseClick = () => {
    history.push(`editor/courses/create`);
  };

  const handleCourseClick = (id: number) => {
    history.push(`editor/courses/${id}`);
  };

  return (
    <div className={s.editor}>
      <Button onClick={handleCreateCourseClick}>Create course</Button>
      <div className={s.content}>
        <CardList
          cards={COURSES}
          title="Your courses:"
          onClick={handleCourseClick}
        />
      </div>
    </div>
  );
};
