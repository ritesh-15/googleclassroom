import { FC, useState } from "react";
import { Options, Selected, StyledSelect } from "./Select.styled";
import Input from "../input/Input";

export interface Select {
  title: string;
  current: any;
  currentId?: any;
  changeCurrent(val: any): void;
  changeCurrentId?(val: any): void;
  options: { title: string; _id?: string }[];
}

const Select: FC<Select> = ({
  options,
  title,
  changeCurrent,
  current,
  currentId,
  changeCurrentId,
}) => {
  const [show, showSet] = useState(false);

  const changeState = (event: any) => {
    const val = event.target.getAttribute("data-value");
    const id = event.target.getAttribute("data-id");
    changeCurrent(val);
    showSet(!show);
  };

  return (
    <StyledSelect>
      <Selected show={show} onClick={() => showSet(!show)}>
        <span> {current || title}</span>
      </Selected>
      <Options show={show}>
        {options.map(({ title, _id }, index: number) => (
          <div
            data-id={_id}
            onClick={changeState}
            key={index}
            data-value={title}
          >
            <label htmlFor="">{title}</label>
            <input type="radio" name="option" />
          </div>
        ))}
      </Options>
    </StyledSelect>
  );
};

export default Select;
