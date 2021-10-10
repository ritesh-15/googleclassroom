import styled from "styled-components";

interface cardTop {
  bg?: string;
}

export const StyledCard = styled.div`
  width: 100%;
  max-width: 300px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTop = styled.div<cardTop>`
  background: ${({ bg }) => (!bg ? "var(--blue)" : "transparent")};
  color: #fff;
  padding: 1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    z-index: -1;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    background: url(${({ bg }) => bg}) no-repeat center center/cover;
  }

  h4 {
    font-size: 0.9em;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: center;

    a {
      &:hover {
        text-decoration: underline;
      }
    }

    h1 {
      font-size: 1.4em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 70%;
    }
  }
`;

export const CardBottom = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-end;
  border: 1px solid rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: flex-end;
    margin-left: auto;
    padding: 0.5rem 1rem;
    flex: 1;

    span {
      margin-left: 1rem;
    }
  }
`;

export const Image = styled.div`
  position: absolute;
  right: 3%;
  top: 20%;
`;
