import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPeoples } from "../../api/class/class.api";
import ClassDetailsHelper from "../../helpers/classDetailas/ClassDetailsHelper";
import ProgressHelper from "../../helpers/progress/ProgressHelper";
import { UrlParams } from "../class/useViewClass";

const usePeoples = () => {
  const [peoples, setPeoples] = useState<{ name: string; avatar: string }[]>(
    []
  );
  const { classRoom } = ClassDetailsHelper();

  const { id } = useParams<UrlParams>();
  const { changeProgressState } = ProgressHelper();
  const [unMounted, setUnMounted] = useState(false);

  useEffect(() => {
    changeProgressState(true);
    (async () => {
      try {
        const { data } = <any>await getPeoples(id);

        if (!unMounted) {
          setPeoples(data.peoples);
        }

        changeProgressState(false);
      } catch (err) {
        changeProgressState(false);
      }
    })();

    return () => {
      setUnMounted(true);
    };
  }, [id]);

  return {
    variables: {
      peoples,
      classRoom,
    },
  };
};

export default usePeoples;
