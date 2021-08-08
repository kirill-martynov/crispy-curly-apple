import * as React from "react";
import cn from "classnames";

import { Card } from "@Core/components/Card";

import s from "./CardList.module.css";

interface IProps {
  className?: string;
  title?: string;

  cards: any;

  onClick?: (id: number) => void;
}

export const CardList = ({ title, className, cards, onClick }: IProps) => {
  return (
    <div className={cn(s.cardlist, className)}>
      {title && <h2 className={s.title}>{title}</h2>}
      <div className={s.content}>
        {Boolean(cards.length) &&
          cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              description={card.description}
              image={card.image}
              onClick={onClick}
            />
          ))}
      </div>
    </div>
  );
};
