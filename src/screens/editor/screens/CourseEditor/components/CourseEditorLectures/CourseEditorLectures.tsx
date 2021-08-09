import * as React from "react";
import cn from "classnames";

import { Button } from "@Core/components/Button";

import { CourseEditorLecture } from "../CourseEditorLecture/CourseEditorLecture";

import s from "./CourseEditorLectures.module.css";

interface IProps {
  courseLectures: {
    videoUrl: string;
    title: string;
    description: string;
  }[];
}
const DEFAULT_LECTURE = {
  videoUrl: "",
  title: "",
  description: "",
};

export const CourseEditorLectures = ({ courseLectures = [] }: IProps) => {
  const [lectures, setLectures] = React.useState(courseLectures);

  React.useEffect(() => {
    if (courseLectures.length) {
      return;
    }

    setLectures([DEFAULT_LECTURE]);
  }, []);

  const handleAddLecture = () => {
    setLectures([...lectures, DEFAULT_LECTURE]);
  }

  const handleDeleteLecture = (index: number) =>  {
    console.log('index', index);
  }

  return (
    <div className={s.courseEditorLectures}>
      <div className={s.content}>
        <div className={s.lectures}>
          {lectures.map((lecture: any, index: number) => (
            <CourseEditorLecture
              key={lecture.title}
              lecture={lecture}
              index={index}
              onDelete={handleDeleteLecture}
            />
          ))}
        </div>
        <div className={s.actions}>
          <Button onClick={handleAddLecture}>Add Video</Button>
        </div>
      </div>
    </div>
  );
};
