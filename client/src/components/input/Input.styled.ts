import styled from "styled-components";

interface props {
  variant?: boolean;
}

export const StyledInput = styled.div<props>`
  position: relative;
  height: 60px;
  width: 100%;
  background: ${({ variant }) => (variant ? "var(--bg-grey)" : "transparent")};

  input {
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    padding-top: 15px;
    padding-left: 10px;
    background: ${({ variant }) =>
      variant ? "var(--bg-grey)" : "transparent"};
    font-size: 1em;
  }

  input:focus + label,
  input:valid + label {
    border-color: ${({ variant }) => (variant ? "transparent" : "var(--blue)")};

    &::after {
      transform: ${({ variant }) => (variant ? "scaleX(1)" : "scaleX(0)")};
    }

    span {
      transform: ${({ variant }) =>
        variant ? "translateY(-100%)" : "translateY(-170%)"};
      font-size: 0.7em;
      color: var(--blue);
      z-index: 200;
      background: ${({ variant }) => (variant ? "transparent" : "#fff")};
    }
  }

  label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    height: 100%;
    border: ${({ variant }) =>
      variant ? "none" : "2px solid rgba(0,0,0,0.1)"};
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-bottom: 3px solid var(--blue);
      transform: scaleX(0);
      transform-origin: center;
      transition: all 200ms ease-in;
    }

    span {
      position: absolute;
      left: 10px;
      color: var(--text);
      bottom: 20px;
      transition: all 200ms ease-in;
      font-size: 1em;
    }
  }
`;
