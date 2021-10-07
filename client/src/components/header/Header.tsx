import { HeaderLeft, Menu, StyledHeader, HeaderRight } from "./Header.styled";
import AddIcon from "@mui/icons-material/Add";
import UserHelper from "../../helpers/user/UserHelper";
import CreateIcon from "@mui/icons-material/Create";
import Modal from "../modal/Modal";
import CreateClass from "../createclass/CreateClass";
import { useState } from "react";

const Header = () => {
  const { user } = UserHelper();
  const [modalState, setModalState] = useState(false);

  return (
    <StyledHeader>
      <HeaderLeft>
        <Menu />
        <div>
          <img
            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
            alt=""
          />
          <h1>Classroom</h1>
        </div>
      </HeaderLeft>
      <HeaderRight>
        <div>
          <AddIcon className="icon" />
        </div>
        <div>
          <CreateIcon onClick={() => setModalState(true)} className="icon" />
        </div>
        <div>
          <img src={user?.avatar} alt="" />
        </div>
      </HeaderRight>

      <Modal open={modalState}>
        <CreateClass setOpen={setModalState} />
      </Modal>
    </StyledHeader>
  );
};

export default Header;
