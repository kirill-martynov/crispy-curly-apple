import * as React from "react";
import cn from "classnames";

import { Avatar } from "@Core/components/Avatar";
import { Button } from "@Core/components/Button";
import { Svg } from "@Core/components/Svg";
import { Icon } from "@Core/components/Icon";

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
        <Icon name="arrow-expand" width="24" height="24" />
      </Button>
    </div>
  );
};
