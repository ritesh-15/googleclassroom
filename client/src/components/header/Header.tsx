import { HeaderLeft, Menu, StyledHeader, HeaderRight } from "./Header.styled";
import AddIcon from "@mui/icons-material/Add";
import UserHelper from "../../helpers/user/UserHelper";
import CreateIcon from "@mui/icons-material/Create";
import Modal from "../modal/Modal";
import CreateClass from "../createclass/CreateClass";
import { useState } from "react";
import Tabs from "../tabs/Tabs";
import { Link } from "react-router-dom";
import Progress from "../progress/Progress";
import LargeModal from "../largeModal/LargeModal";
import JoinClass from "../joinClass/JoinClass";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../api/auth/register.api";
import useJoinRoom from "../../hooks/useJoinRoom";

const Header = () => {
  const { user } = UserHelper();
  const [modalState, setModalState] = useState(false);
  const url = window.location.pathname;
  const [largeModalState, setLargeModalState] = useState(false);
  const { changeUser } = UserHelper();
  useJoinRoom();

  const logOut = async () => {
    try {
      await logout();
      changeUser(null);
    } catch (err) {}
  };

  return (
    <>
      <StyledHeader>
        <LargeModal open={largeModalState}>
          <JoinClass setOpen={setLargeModalState} />
        </LargeModal>

        <HeaderLeft>
          <Menu />
          <div>
            <Link to="/">
              <img
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                alt=""
              />
              <h1>Classroom</h1>
            </Link>
          </div>
        </HeaderLeft>
        {url !== "/" && <Tabs />}
        <HeaderRight>
          <div>
            <AddIcon
              onClick={() => setLargeModalState(true)}
              className="icon"
            />
          </div>
          <div>
            <CreateIcon onClick={() => setModalState(true)} className="icon" />
          </div>
          <div>
            <LogoutIcon onClick={logOut} className="icon" />
          </div>
          <div>
            <img src={user?.avatar} alt="" />
          </div>
        </HeaderRight>

        <Modal open={modalState}>
          <CreateClass setOpen={setModalState} />
        </Modal>
      </StyledHeader>
      <Progress />
    </>
  );
};

export default Header;
