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
                onClick={() => functions.setMaterialOpenState(false)}
                className="icon"
              />
              <h1>New material</h1>
            </div>
            <Button onClick={functions.newMaterial} width="100px">
              Post
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
          <div>
            <span>
              Unit 1: Introduction to fundatamentals of data structures
            </span>
          </div>
          <div>
            <span>Unit 2</span>
          </div>
        </Topics>
        <Material>
          <Create>
            <Button
              border="1px solid var(--blue)"
              color="var(--blue)"
              bg="transparent"
              width="190px"
              flex
              hover
              hoverColor="#fff"
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

          <Topic
            title="Unit 1: Introduction to fundatamentals of data structures"
            _id="11"
          />
          <Topic
            title="Unit 1: Introduction to fundatamentals of data structures"
            _id="11"
          />
        </Material>
      </Main>
    </StyledClasswork>
  );
};

export default Classwork;
