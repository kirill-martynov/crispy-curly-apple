import * as React from "react";
import { useParams } from "react-router";
import cn from "classnames";

import { Button } from "@Core/components/Button";
import { Input } from "@Core/components/Input";
import { Textarea } from "@Core/components/Textarea";

import s from "./CourseEditor.module.css";
import { Icon } from "src/core/components/Icon";

type TUseParams = {
  id: string;
};

export const CourseEditor = () => {
  const params = useParams<TUseParams>();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [shortDescription, setShortDescription] = React.useState("");

  React.useEffect(() => {
    const { id } = params;

    if (id === "create") {
      return;
    }

    // TODO: Request course by id;
  }, []);

  return (
    <div className={s.courseEditor}>
      <h2 className={s.title}>Create your course</h2>

      <div className={s.content}>
        <div className={cn(s.column, s.leftColumn)}>
          <div className={s.field}>
            <div className={s.image}>
              <Icon name="image" width="48" height="48" />
            </div>
            <Button>Upload Cover</Button>
          </div>

          <div className={s.field}>
            <Input
              name="name"
              title="Title:"
              placeholder="Enter course title"
              value={name}
              onChange={(name, value) => setName(value)}
            />
          </div>

          <div className={s.field}>
            <Textarea
              name="description"
              title="Description:"
              placeholder="Enter course description"
              value={description}
              onChange={(name, value) => setDescription(value)}
            />
          </div>

          <div className={s.field}>
            <Textarea
              name="shortDescription"
              title="Short description:"
              placeholder="Enter course short description"
              value={shortDescription}
              onChange={(name, value) => setShortDescription(value)}
            />
          </div>
        </div>

        <div className={cn(s.column, s.rightColumn)}></div>
      </div>
    </div>
  );
};
