import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ClassDetailsHelper from "../../helpers/classDetailas/ClassDetailsHelper";

const Tabs = () => {
  const { classRoom } = ClassDetailsHelper();

  return (
    <>
      <TabsDiv>
        <NavLink to={`/v/c/${classRoom?._id}`} activeClassName="active-tab">
          <span>Stream</span>
        </NavLink>
        <NavLink activeClassName="active-tab" to={`/v/c/w/${classRoom?._id}`}>
          <span>Classwork</span>
        </NavLink>
        <NavLink activeClassName="active-tab" to={`/v/c/p/${classRoom?._id}`}>
          <span>People</span>
        </NavLink>
      </TabsDiv>
    </>
  );
};

export default Tabs;

export const TabsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    top: 61px;
  }

  a {
    padding: 1rem 2rem;
    cursor: pointer;
    pointer-events: auto;
    z-index: 100;
    height: 100%;
    position: relative;

    span {
      font-weight: 500;
      font-size: 0.9em;
    }

    &:hover {
      background: #f6f6f6;
    }
  }
`;
