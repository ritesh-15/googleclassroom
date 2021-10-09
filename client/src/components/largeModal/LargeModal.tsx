import { CloseOutlined } from "@mui/icons-material";
import { FC, ReactElement } from "react";
import {
  LargeModalBody,
  LargeModalHead,
  StyledLargeModal,
} from "./LargeModal.styled";

interface LargeModal {
  open: boolean;
  children: ReactElement;
}

const LargeModal: FC<LargeModal> = ({ open, children }) => {
  return (
    <StyledLargeModal open={open}>
      <LargeModalBody>{children}</LargeModalBody>
    </StyledLargeModal>
  );
};

export default LargeModal;
