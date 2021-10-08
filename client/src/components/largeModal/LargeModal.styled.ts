import styled from "styled-components";

interface props {
  open: boolean;
}

export const StyledLargeModal = styled.div<props>`
  position: fixed;
  z-index: 400;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  bottom: 0;
  background: #fff;
  transition: all 250ms ease-in;
  transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(100%)")};
`;

export const LargeModalBody = styled.div``;

export const LargeModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 1rem;
      text-transform: capitalize;
      font-size: 1.3em;
    }
  }
`;
