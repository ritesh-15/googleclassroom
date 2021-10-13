import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMaterial } from "../../api/material/material.api";
import { MaterialInterface } from "../../components/topic/useTopic";
import { UrlParams } from "../class/useViewClass";

const ViewmaterialLogic = () => {
  const { id } = useParams<UrlParams>();
  const [material, setMaterial] = useState<MaterialInterface | null>(null);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const { data }: { data: { material: MaterialInterface } } =
          await getMaterial(id);

        setMaterial(data.material);
      } catch (err) {}
    })();
  }, [id]);

  return {
    material,
  };
};

export default ViewmaterialLogic;
