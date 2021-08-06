import * as React from 'react';

import userAvatar from '../../../assets/images/user-avatar.jpeg';

import s from './Avatar.module.css';

interface IProps {
  image?: string;
}

export const Avatar = ({ image = userAvatar }: IProps) => {
  return (
    <div className={s.avatar}>
      <img src={image} alt="avatar" />
    </div>
  )
}
