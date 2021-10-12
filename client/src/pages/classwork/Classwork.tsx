import Topic from "../../components/topic/Topic";
import {
  Material,
  StyledClasswork,
  Topics,
  Main,
  Create,
} from "./Classword.styled";
import Button from "../../styles/button/Button.styled";
import { CreateOutlined, CloseOutlined } from "@mui/icons-material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LargeModal from "../../components/largeModal/LargeModal";
import NewMaterial from "../../components/material/NewMaterial";
import useClassWork from "./useClassWork";
import LModalHeader from "../../styles/largeModalHeader/LModalHeader.styled";

const Classwork = () => {
  const { variables, functions } = useClassWork();

  return (
    <StyledClasswork>
      <LargeModal open={variables.materialOpenState}>
        <>
          <LModalHeader>
            <div>
              <CloseOutlined
                onClick={() => {
                  functions.setMaterialOpenState(false);
                  functions.clear();
                }}
                className="icon"
              />
              <h1>New material</h1>
            </div>
            <Button
              disabled={variables.posting ? true : false}
              onClick={functions.newMaterial}
              width="100px"
            >
              {variables.posting ? "Posting" : "Post"}
            </Button>
          </LModalHeader>
          <NewMaterial />
        </>
      </LargeModal>

      <Main>
        <Topics>
          <div>
            <span>All</span>
          </div>
          {variables.topics.map(({ title, _id }) => (
            <div key={_id}>
              <span>{title}</span>
            </div>
          ))}
        </Topics>
        <Material>
          {variables.classRoom?.userId._id === variables.user?._id && (
            <Create>
              <Button
                border="1px solid var(--blue)"
                color="var(--blue)"
                bg="transparent"
                width="190px"
                flex
                hover
                hoverColor="#fff"
                onClick={functions.newAssignment}
              >
                <CreateOutlined />
                <span>New Assignment</span>
              </Button>
              <Button
                border="1px solid var(--blue)"
                color="var(--blue)"
                bg="transparent"
                width="190px"
                flex
                hover
                hoverColor="#fff"
                onClick={() => functions.setMaterialOpenState(true)}
              >
                <NoteAddIcon />
                <span>New Material</span>
              </Button>
            </Create>
          )}
          {variables.topics.map(({ title, _id, classId }) => (
            <Topic classId={classId._id} title={title} _id={_id} key={_id} />
          ))}
        </Material>
      </Main>
    </StyledClasswork>
  );
};

export default Classwork;
