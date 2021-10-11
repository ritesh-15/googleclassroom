import { FC, useState } from "react";
import { Options, Selected, StyledSelect } from "./Select.styled";
import Input from "../input/Input";

export interface Select {
  title: string;
  current: any;
  changeCurrent(val: any): void;
  options: { title: string }[];
}

const Select: FC<Select> = ({ options, title, changeCurrent, current }) => {
  const [show, showSet] = useState(false);

  const changeState = (event: any) => {
    const val = event.target.getAttribute("data-value");
    changeCurrent(val);
    showSet(!show);
  };

  return (
    <StyledSelect>
      <Selected show={show} onClick={() => showSet(!show)}>
        <span> {current || title}</span>
      </Selected>
      <Options show={show}>
        {options.map(({ title }, index: number) => (
          <div onClick={changeState} key={index} data-value={title}>
            <label htmlFor="">{title}</label>
            <input type="radio" name="option" />
          </div>
        ))}
      </Options>
    </StyledSelect>
  );
};

export default Select;
