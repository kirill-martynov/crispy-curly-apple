import * as React from "react";

import { User } from '../User';

import s from "./Header.module.css";

interface IProps {
  className?: string;
}

export const Header = ({ className }: IProps) => {
  return <div className={s.header}><User /></div>;
};
