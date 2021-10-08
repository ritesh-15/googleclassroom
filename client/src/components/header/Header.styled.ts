import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  position: -webkit-sticky;
  width: 100%;
  top: 0 !important;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;

  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  div {
    a {
      display: flex;
      align-items: center;
      h1 {
        font-size: 0.9em;
        margin-left: 5px;
        max-width: 150px;
        height: fit-content;
        max-height: 40px;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &:hover {
        text-decoration: underline;
        color: var(--blue);
      }
    }

    img {
      width: 80px;
    }
  }
`;

export const HeaderRight = styled(HeaderLeft)`
  div {
    cursor: pointer;
    border-radius: 50%;
    margin-left: 1.5rem;

    img {
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
      height: 45px;
    }
  }
`;

export const Menu = styled(MenuIcon)`
  cursor: pointer;
  margin-right: 1rem;
`;
