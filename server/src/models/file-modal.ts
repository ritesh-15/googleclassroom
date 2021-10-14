import { model, ObjectId, Schema } from "mongoose";

export interface FileInterface {
  filename: string;
  url: string;
  type: string;
  size: string;
  userId: ObjectId;
  materialId: ObjectId;
}

const FileSchema = new Schema<FileInterface>({
  filename: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  materialId: {
    type: Schema.Types.ObjectId,
    ref: "classes",
    required: true,
  },
});

export default model("files", FileSchema);
