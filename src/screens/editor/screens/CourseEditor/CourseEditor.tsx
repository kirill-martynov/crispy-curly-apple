import * as React from "react";
import { useParams } from "react-router";

import s from "./CourseEditor.module.css";

export const CourseEditor = () => {
  const params = useParams();

  React.useEffect(() => {
    console.log("params", params);
  }, []);

  return <div className={s.courseEditor}>Course Editor</div>;
};
