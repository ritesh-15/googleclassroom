import { FC } from "react";
import { CardBottom, CardTop, Image, StyledCard } from "./Card.styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Avatar from "../../styles/avatar/Avatar.styled";
import { Link } from "react-router-dom";

interface Card {
  banner?: string;
  className: string;
  creatorName: string;
  creatorAvatar: string;
  _id: string;
}

const Card: FC<Card> = ({
  banner,
  className,
  creatorName,
  creatorAvatar,
  _id,
}) => {
  return (
    <StyledCard>
      <CardTop bg={banner}>
        <div>
          <Link to={`/v/c/${_id}`}>
            <h1>{className}</h1>
          </Link>
          <MoreVertIcon />
        </div>
        <h4>{creatorName}</h4>
      </CardTop>

      <Image>
        <Avatar width="80px" height="80px">
          <img src={creatorAvatar} alt="" />
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
