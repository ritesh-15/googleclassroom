import { model, ObjectId, Schema } from "mongoose";

export interface MaterialInterface {
  title: string;
  description?: string;
  topic: ObjectId;
  classId: ObjectId;
  creatorId: ObjectId;
}

const MaterialSchema = new Schema<MaterialInterface>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    topic: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "topics",
    },
    classId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "classes",
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default model("materials", MaterialSchema);
