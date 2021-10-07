import { FC, ReactElement } from "react";
import ModalHelper from "../../helpers/modal/ModalHelper";
import { ModalBody, StyledModal } from "./Modal.styled";

interface Modal {
  children: ReactElement;
  open: boolean;
}

const Modal: FC<Modal> = ({ open, children }) => {
  return (
    <StyledModal open={open}>
      <ModalBody open={open}>{children}</ModalBody>
    </StyledModal>
  );
};

export default Modal;
