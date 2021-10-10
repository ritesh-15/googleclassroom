import styled from "styled-components";

interface props {
  bg?: string;
  color?: string;
  border?: string;
  width?: string;
  hover?: boolean;
  radius?: string;
  height?: string;
  flex?: boolean;
  hoverColor?: string;
}

const Button = styled.button<props>`
  padding: 0.7rem 1rem;
  background: ${({ bg }) => bg || "var(--blue)"};
  outline: none;
  border: ${({ border }) => border || "none"};
  font-size: 1em;
  cursor: pointer;
  color: ${({ color }) => color || "#fff"};
  border-radius: ${({ radius }) => radius || "4px"};
  width: ${({ width }) => width || "100%"};
  display: ${({ flex }) => (flex ? "flex" : "block")};
  transition: background 160ms ease-in;
  height: ${({ height }) => height};
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => flex && "center"};

  &:hover {
    background: ${({ hover, bg }) =>
      hover ? "hsl(215, 78%, 55%)" : bg || "var(--blue)"};
    color: ${({ hoverColor }) => hoverColor || "#fff"};
  }

  &:disabled {
    background: hsl(215, 4%, 81%);
    background: ${({ bg }) => bg || "hsl(215, 4%, 81%)"};
    color: ${({ bg }) => (bg ? " hsl(215, 4%, 81%)" : "#fff")};
    cursor: default;
  }
`;

export default Button;
