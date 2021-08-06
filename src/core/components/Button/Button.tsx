import * as React from "react";
import cn from "classnames";

import s from "./Button.module.css";

interface IProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;

  onClick?: () => void;
}
export const Button = ({
  className,
  children,
  type = "button",
  onClick,
}: IProps) => {
  const handleClick = () => {
    if (!onClick) return;

    onClick();
  };

  return (
    <button
      className={cn(s.button, className)}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
