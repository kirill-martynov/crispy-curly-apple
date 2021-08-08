import * as React from "react";
import { useParams } from "react-router";

import Input from "@Core/components/Input";

import s from "./CourseEditor.module.css";

type TUseParams = {
  id: string;
};

export const CourseEditor = () => {
  const params = useParams<TUseParams>();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

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
        <Input
          name="name"
          title="Title"
          placeholder="Enter course title"
          icon={{ name: "image", width: "16", height: "16" }}
          value={name}
          onChange={(name, value) => setName(value)}
        />
      </div>
    </div>
  );
};
