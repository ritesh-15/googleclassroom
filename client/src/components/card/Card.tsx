import { FC } from "react";
import { CardBottom, CardTop, Image, StyledCard } from "./Card.styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Avatar from "../../styles/avatar/Avatar.styled";
import { Link } from "react-router-dom";

const Card: FC = () => {
  return (
    <StyledCard>
      <CardTop bg="https://images.unsplash.com/photo-1627562369448-bc40100a959b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
        <div>
          <Link to="/v/c/615ff4f1df2e25ea51a504fd">
            <h1>SE COMP 2021-2022 FDS</h1>
          </Link>
          <MoreVertIcon />
        </div>
        <h4>Ritesh Khore</h4>
      </CardTop>

      <Image>
        <Avatar width="80px" height="80px">
          <img
            src="https://images.unsplash.com/photo-1633363743956-587a61637c32?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Avatar>
      </Image>

      <CardBottom>
        <div>
          <span>
            <AssignmentIndOutlinedIcon className="icon" />
          </span>

          <span>
            <FolderOpenIcon className="icon" />
          </span>
        </div>
      </CardBottom>
    </StyledCard>
  );
};

export default Card;
