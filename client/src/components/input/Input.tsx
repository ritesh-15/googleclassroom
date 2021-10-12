import { ChangeEvent, FC } from "react";
import { StyledInput } from "./Input.styled";

interface props {
  title?: string;
  variant?: boolean;
  type?: string;
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<props> = ({ variant, title, value, type, onChange }) => {
  return (
    <StyledInput variant={variant}>
      <input onChange={onChange} value={value} required type={type} />
      <label htmlFor="">
        <span>{title}</span>
      </label>
    </StyledInput>
  );
};

export default Input;
