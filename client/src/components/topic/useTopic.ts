import { useEffect, useState } from "react";
import { getMaterials } from "../../api/material/material.api";
import SocketHelper from "../../helpers/socket/SocketHelper";
import { ClassDetails } from "../../pages/class/useViewClass";
import { Topic } from "../../pages/classwork/useClassWork";

export interface MaterialInterface {
  classId: ClassDetails;
  _id: string;
  title: string;
  descriptions?: string;
  topic: Topic;
  createdAt: Date;
}

const useTopic = (_id: string, classId: string) => {
  const [materials, setMaterials] = useState<MaterialInterface[]>([]);
  const { socket } = SocketHelper();

  useEffect(() => {
    (async () => {
      try {
        const { data }: { data: { materials: MaterialInterface[] } } =
          await getMaterials(classId, _id);

        setMaterials(data.materials);
      } catch (err) {}
    })();
  }, [_id]);

  useEffect(() => {
    socket.on("new-material", (m: MaterialInterface) => {
      if (m.topic._id === _id) {
        setMaterials((prev) => [...prev, m]);
      }
    });

    return () => {
      socket.off();
    };
  });

  return {
    variables: {
      materials,
    },
  };
};

export default useTopic;
