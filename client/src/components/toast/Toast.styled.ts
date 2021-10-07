import styled from "styled-components";

interface props {
  open: boolean;
}

export const StyledToast = styled.div<props>`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: opacity 160ms ease-in;
  opacity: ${({ open }) => (open ? "1" : "0")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
`;

export const ToastBody = styled.div`
  width: fit-content;
  max-width: 400px;
  height: fit-content;
  padding: 1rem;
  background: hsl(4, 1%, 14%);
  position: fixed;
  display: flex;
  bottom: 15px;
  border-radius: 4px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1), -2px 5px 10px rgba(0, 0, 0, 0.1);

  p {
    margin-left: 10px;
    color: #fff;
  }
`;
