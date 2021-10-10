import styled from "styled-components";

interface props {
  show?: boolean;
}

export const StyledSelect = styled.div`
  position: relative;
`;

export const Selected = styled.div<props>`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;

  span {
    padding-right: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    background: url("/images/arrow.png") no-repeat center center/cover;
    width: 15px;
    height: 15px;
    transform: rotate(${({ show }) => (show ? "180deg" : "0")});
    right: 16px;
  }
`;

export const Options = styled.div<props>`
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  position: absolute;
  transform-origin: top center;
  width: 100%;
  left: 0;
  max-width: 400px;
  z-index: 100;
  transition: all 250ms ease-in;
  overflow-y: auto;
  max-height: 300px;
  transform: ${({ show }) => (show ? "scaleY(1)" : "scaleY(0)")};
  opacity: ${({ show }) => (show ? "1" : "0")};

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    border-radius: 0 8px 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 1rem;
    margin-bottom: 0;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    label {
      cursor: pointer;
      pointer-events: none;
      width: 100%;
      text-transform: capitalize;
    }

    input {
      display: none;
    }
  }
`;
