import * as React from 'react';

import s from './Avatar.module.css';

interface IProps {
  image?: string;
}

const STUB_URL = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.paz-online.de%2FNachrichten%2FKultur%2FKeanu-Reeves-John-Wick-ist-fuer-Erwachsene&psig=AOvVaw3QicePQ4VQY3Veg-V6sz7Z&ust=1628282577338000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDz3rrfmvICFQAAAAAdAAAAABAD';

export const Avatar = ({ image = STUB_URL }: IProps) => {
  return (
    <div className={s.avatar}>
      <img src={image} alt="avatar" />
    </div>
  )
}
