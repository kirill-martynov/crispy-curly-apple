import * as React from "react";
import cn from "classnames";

import { Svg } from "@Core/components/Svg";
import { Icon } from "@Core/components/Icon";

import s from "./Input.module.css";

interface IProps {
  name: string;
  value: string;

  type?: string;
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

export const Input = ({
  name,
  value,
  type = "text",
  title,
  placeholder,
  className,
  icon,
  action,
  onChange,
}: IProps) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  React.useEffect(() => {
    onChange(name, inputValue);
  }, [inputValue]);

  const handleInputChange = (event) => {
    const { value } = event.target;

    setInputValue(value);
  };

  return (
    <div className={cn(s.field, className)}>
      {title && (
        <label htmlFor={name} className={s.title}>
          {title}
        </label>
      )}
      <div className={s.inputWrapper}>
        {icon && (
          <div className={s.icon}>
            <Icon name={icon.name} width={icon.width} height={icon.height} />
          </div>
        )}
        <input
          type={type}
          value={value}
          className={cn(s.input, { [s.extended]: icon })}
          name={name}
          id={name}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        {action && <div className={s.action}>{action}</div>}
      </div>
    </div>
  );
};
