import { CloseOutlined } from "@mui/icons-material";
import { FC, ReactElement } from "react";
import {
  LargeModalBody,
  LargeModalHead,
  StyledLargeModal,
} from "./LargeModal.styled";
import Button from "../../styles/button/Button.styled";

interface LargeModal {
  open: boolean;
  setOpen(val: boolean): void;
  children: ReactElement;
}

const LargeModal: FC<LargeModal> = ({ open, setOpen, children }) => {
  return (
    <StyledLargeModal open={open}>
      <LargeModalHead>
        <div>
          <CloseOutlined onClick={() => setOpen(false)} className="icon" />
          <h1>Join class</h1>
        </div>
        <Button width="100px">Join</Button>
      </LargeModalHead>
      <LargeModalBody>{children}</LargeModalBody>
    </StyledLargeModal>
  );
};

export default LargeModal;
