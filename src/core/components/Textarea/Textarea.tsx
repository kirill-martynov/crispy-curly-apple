import * as React from "react";
import cn from 'classnames';

import { Icon } from "@Core/components/Icon";

import s from './Textarea.module.css';

interface IProps {
  name: string;
  value: string;

  title?: string;
  placeholder?: string;
  className?: string;

  icon?: {
    name: string;
    width: string;
    height: string;
  };

  action?: React.ReactNode;

  onChange: (name: string, value: string) => void;
}

export const Textarea = ({
  name,
  value,
  title,
  placeholder,
  className,
  icon,
  action,
  onChange,
}: IProps) => {
  const [textareaValue, setTextareaValue] = React.useState<string>("");

  React.useEffect(() => {
    onChange(name, textareaValue);
  }, [textareaValue]);

  const handleTextareaChange = (event) => {
    const { value } = event.target;

    setTextareaValue(value);
  };

  return (
    <div className={cn(s.field, className)}>
      {title && (
        <label htmlFor={name} className={s.title}>
          {title}
        </label>
      )}
      <div className={s.textareaWrapper}>
        {icon && (
          <div className={s.icon}>
            <Icon name={icon.name} width={icon.width} height={icon.height} />
          </div>
        )}
        <textarea
          value={value}
          className={cn(s.textarea, { [s.extended]: icon })}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleTextareaChange}
        />
        {action && <div className={s.action}>{action}</div>}
      </div>
    </div>
  );
};
