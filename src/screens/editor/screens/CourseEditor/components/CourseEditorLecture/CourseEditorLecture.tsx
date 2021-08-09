import * as React from "react";
import cn from "classnames";
import { CSSTransition } from "react-transition-group";

import { Button } from "@Core/components/Button";
import { Icon } from "@Core/components/Icon";
import { Input } from "@Core/components/Input";
import { Textarea } from "@Core/components/Textarea";

import s from "./CourseEditorLecture.module.css";

interface IProps {
  className?: string;

  lecture: {
    videoUrl: string;
    title: string;
    description: string;
  };

  index: number;

  onDelete: (index: number) => void;
}

export const CourseEditorLecture = ({
  className,
  lecture,
  index,
  onDelete,
}: IProps) => {
  const [expand, setExpand] = React.useState(false);
  const [titleValue, setTitleValue] = React.useState(lecture.title);
  const [descriptionValue, setDescriptionValue] = React.useState(
    lecture.description
  );

  return (
    <div className={cn(s.courseEditorLecture, className)}>
      <div className={s.header}>
        <span>Video-{index + 1}</span>
        <Button
          className={cn(s.expand, { [s.active]: expand })}
          onClick={() => setExpand(!expand)}
        >
          <Icon name="arrow-expand" width="16" height="16" />
        </Button>
      </div>

      <CSSTransition
        in={expand}
        timeout={300}
        classNames={{ ...s }}
        unmountOnExit
      >
        <div className={s.content}>
          <div className={s.field}>
            <Input
              title="Lecture title"
              name={`course-editor-lecture-title`}
              placeholder="Enter lecture title"
              value={titleValue}
              onChange={(name, value) => setTitleValue(value)}
            />
          </div>

          <div className={s.field}>
            <Textarea
              title="Lecture description"
              name={`course-editor-lecture-description`}
              placeholder="Enter lecture description"
              value={descriptionValue}
              onChange={(name, value) => setDescriptionValue(value)}
            />
          </div>

          <div className={s.actions}>
            <Button onClick={() => onDelete(index)}>Delete</Button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
