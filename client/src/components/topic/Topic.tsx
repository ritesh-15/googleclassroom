import { DeleteOutline, MoreVert } from "@mui/icons-material";
import { FC } from "react";
import { StyledTopic, TopicMaterials, TopicTitle } from "./Topic.styled";
import useTopic from "./useTopic";
import DescriptionIcon from "@mui/icons-material/Description";
import moment from "moment";

export interface Topic {
  title: string;
  _id: string;
  classId: string;
}

const Topic: FC<Topic> = ({ title, _id, classId }) => {
  const { variables } = useTopic(_id, classId);

  return (
    <StyledTopic>
      <TopicTitle>
        <h1>{title}</h1>
        <MoreVert />
      </TopicTitle>
      <TopicMaterials>
        {variables.materials.map(({ title, _id, createdAt }) => (
          <div key={_id}>
            <div>
              <DescriptionIcon style={{ color: "rgba(0,0,0,0.3)" }} />
              <h1>{title}</h1>
            </div>
            <div>
              <span>Posted on {moment(createdAt).format("DD MMM")} </span>
              <DeleteOutline className="icon" />
            </div>
          </div>
        ))}
      </TopicMaterials>
    </StyledTopic>
  );
};

export default Topic;
