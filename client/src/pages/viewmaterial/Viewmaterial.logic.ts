import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMaterial } from "../../api/material/material.api";
import { MaterialInterface } from "../../components/topic/useTopic";
import ProgressHelper from "../../helpers/progress/ProgressHelper";
import { UrlParams } from "../class/useViewClass";

const ViewmaterialLogic = () => {
  const { id } = useParams<UrlParams>();
  const [material, setMaterial] = useState<MaterialInterface | null>(null);
  const { changeProgressState } = ProgressHelper();

  useEffect(() => {
    if (!id) return;

    changeProgressState(true);

    (async () => {
      try {
        const { data }: { data: { material: MaterialInterface } } =
          await getMaterial(id);
        setMaterial(data.material);
        changeProgressState(false);
      } catch (err) {
        changeProgressState(false);
      }
    })();
  }, [id]);

  return {
    material,
  };
};

export default ViewmaterialLogic;
