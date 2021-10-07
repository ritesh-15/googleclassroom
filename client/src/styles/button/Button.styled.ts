import styled from "styled-components";

interface props {
  bg?: string;
  color?: string;
  border?: boolean;
  width?: string;
  hover?: boolean;
}

const Button = styled.button<props>`
  padding: 0.7rem 1rem;
  background: ${({ bg }) => bg || "var(--blue)"};
  outline: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
  color: ${({ color }) => color || "#fff"};
  border-radius: 4px;
  width: ${({ width }) => width || "100%"};
  display: block;
  transition: background 160ms ease-in;

  &:hover {
    background: ${({ hover, bg }) =>
      hover ? "hsl(215, 78%, 55%)" : bg || "var(--blue)"};
  }

  &:disabled {
    background: hsl(215, 4%, 81%);
    background: ${({ bg }) => bg || "hsl(215, 4%, 81%)"};
    color: hsl(215, 4%, 81%);
    cursor: default;
  }
`;

export default Button;
