import { AddOutlined, MoreVert } from "@mui/icons-material";
import ViewmaterialLogic from "./Viewmaterial.logic";
import {
  StyledViewMaterial,
  ViewmaterialDescription,
  ViewMaterialLeft,
  ViewMaterialMain,
  ViewMaterialRight,
  ViewMaterialTop,
  Work,
} from "./Viewmaterial.styled";
import Button from "../../styles/button/Button.styled";

const ViewMaterial = () => {
  const { material } = ViewmaterialLogic();

  return (
    <StyledViewMaterial>
      {material && (
        <ViewMaterialMain>
          <ViewMaterialLeft>
            <ViewMaterialTop>
              <div>
                <h1>{material.title}</h1>
                <span>{material.creatorId.name}</span>
              </div>
              <MoreVert />
            </ViewMaterialTop>
            <ViewmaterialDescription>
              <p>{material.description}</p>
            </ViewmaterialDescription>
          </ViewMaterialLeft>
          {material.type === "assignment" && (
            <ViewMaterialRight>
              <Work>
                <div>
                  <h1>Your work</h1>
                  <span>Assignend</span>
                </div>
                <Button
                  bg="transparent"
                  color="var(--blue)"
                  border="1px solid rgba(0,0,0,0.1)"
                >
                  <AddOutlined />
                  <span>Add or create</span>
                </Button>
                <Button>Mark as done</Button>
              </Work>
            </ViewMaterialRight>
          )}
        </ViewMaterialMain>
      )}
    </StyledViewMaterial>
  );
};

export default ViewMaterial;
