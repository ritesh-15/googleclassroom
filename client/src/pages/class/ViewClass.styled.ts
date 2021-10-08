import styled from "styled-components";

export const StyledClass = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 2rem;
`;

interface imageProps {
  bg?: string;
}

export const Image = styled.div<imageProps>`
  width: 100%;
  height: 240px;
  padding: 1rem;
  position: relative;
  border-radius: 8px;
  background: ${({ bg }) => (!bg ? "var(--blue)" : "transparent")};
  color: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 90px;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    &:last-child {
      margin-left: auto;
      width: 100%;
      text-align: right;
      height: 100%;
      display: flex;
      justify-content: flex-end;

      input {
        display: none;
      }

      p {
        cursor: pointer;
        font-size: 0.9em;
        margin-right: 1rem;
      }
    }

    span {
      margin-left: 5px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    border-radius: 6px;
    z-index: -1;
    top: 0;
    background: url(${({ bg }) => bg}) no-repeat center center/cover;
  }

  h1 {
    font-size: 2em;
    font-weight: 600;
  }
`;
