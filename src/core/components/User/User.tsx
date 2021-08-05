import * as React from 'react';

import { Avatar } from '../Avatar';

import s from './User.module.css';

interface IProps {
  className?: string;
}

export const User = ({ className }: IProps) => {
  return (
    <div className={s.user}>
      <Avatar />
      <span className={s.name}>John Wick</span>
    </div>
  )
}
