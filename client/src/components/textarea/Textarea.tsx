import { ChangeEvent, FC } from "react";
import { StyledTextarea } from "./Textarea.styled";

export interface Textarea {
  title: string;
  value: string;
  onChange(e: ChangeEvent<HTMLTextAreaElement>): void;
  variant?: boolean;
}

const Textarea: FC<Textarea> = ({ title, onChange, value, variant }) => {
  return (
    <StyledTextarea variant={variant}>
      <textarea value={value} onChange={onChange} required></textarea>
      <label htmlFor="">
        <span>{title}</span>
      </label>
    </StyledTextarea>
  );
};

export default Textarea;
