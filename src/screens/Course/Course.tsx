import * as React from "react";

import s from "./Course.module.css";

export const Course = () => {
  React.useEffect(() => {
    // Load course
  }, []);

  return <div className={s.course}>Course</div>;
};
