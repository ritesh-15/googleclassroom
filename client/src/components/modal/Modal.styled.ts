import styled from "styled-components";

interface props {
  open: boolean;
}

export const StyledModal = styled.div<props>`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  opacity: ${({ open }) => (open ? "1" : "0")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: all 200ms ease-in;
`;

export const ModalBody = styled.div<props>`
  width: 100%;
  max-width: 550px;
  height: fit-content;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-in;
  transform: ${({ open }) => (open ? "scale(1)" : "scale(0.7)")};
  padding: 1rem;
`;
