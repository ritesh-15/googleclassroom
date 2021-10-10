import { DeleteOutline, MoreVert } from "@mui/icons-material";
import { FC } from "react";
import { StyledTopic, TopicMaterials, TopicTitle } from "./Topic.styled";

export interface Topic {
  title: string;
  _id: string;
}

const Topic: FC<Topic> = ({ title, _id }) => {
  return (
    <StyledTopic>
      <TopicTitle>
        <h1>{title}</h1>
        <MoreVert />
      </TopicTitle>
      <TopicMaterials>
        <div>
          <h1>Matrix operations</h1>
          <div>
            <span>Posted on 23 oct</span>
            <DeleteOutline className="icon" />
          </div>
        </div>
      </TopicMaterials>
    </StyledTopic>
  );
};

export default Topic;
