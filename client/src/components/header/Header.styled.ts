import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;

    img {
      width: 80px;
    }

    h1 {
      font-size: 1.3em;
      margin-left: 5px;
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
