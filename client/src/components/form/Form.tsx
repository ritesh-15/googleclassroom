import { FC, ReactElement } from "react";
import { FormMain, Image, StyledForm } from "./Form.styled";

interface props {
  children: ReactElement;
}

const Form: FC<props> = ({ children }) => {
  return (
    <StyledForm>
      <FormMain>
        <Image>
          <img
            src="http://assets.stickpng.com/images/5e8ce6a7664eae000408546e.png"
            alt=""
          />
        </Image>
        {children}
      </FormMain>
    </StyledForm>
  );
};

export default Form;
