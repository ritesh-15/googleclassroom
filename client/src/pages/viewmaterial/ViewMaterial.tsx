import { MoreVert } from "@mui/icons-material";
import ViewmaterialLogic from "./Viewmaterial.logic";
import {
  StyledViewMaterial,
  ViewmaterialDescription,
  ViewMaterialMain,
  ViewMaterialTop,
} from "./Viewmaterial.styled";

const ViewMaterial = () => {
  const { material } = ViewmaterialLogic();

  return (
    <StyledViewMaterial>
      {material && (
        <ViewMaterialMain>
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
        </ViewMaterialMain>
      )}
    </StyledViewMaterial>
  );
};

export default ViewMaterial;
