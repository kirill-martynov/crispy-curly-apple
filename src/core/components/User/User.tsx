import * as React from "react";
import cn from "classnames";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Svg } from "../Svg";

import s from "./User.module.css";

interface IProps {
  className?: string;
}

export const User = ({ className }: IProps) => {
  return (
    <div className={cn(s.user, className)}>
      <Avatar />
      <span className={s.name}>John</span>
      <Button className={s.button}>
        <Svg name="arrow-expand" width="24" height="24" />
      </Button>
    </div>
  );
};
