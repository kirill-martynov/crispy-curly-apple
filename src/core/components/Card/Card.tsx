import * as React from "react";

import { Svg } from "../Svg";

import s from "./Card.module.css";

interface IProps {
  id: number;
  name: string;
  description: string;

  image?: string;

  onClick?: (id: number) => void;
}
export const Card = ({ id, name, description, image = "", onClick }: IProps) => {
  const handleClick = () => {
    if (!onClick) {
      return;
    }

    onClick(id);
  }

  return (
    <div className={s.card} onClick={handleClick}>
      <div className={s.header}>
        <div className={s.image}>
          {image ? (
            <img src={image} alt="course" />
          ) : (
            <Svg name="image" width="48" height="48" />
          )}
        </div>
      </div>
      <div className={s.content}>
        <h4 className={s.name}>{name}</h4>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
