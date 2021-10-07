import { model, ObjectId, Schema } from "mongoose";

export interface ClassInformation {
  className: string;
  room?: string;
  section?: string;
  subject?: string;
  userId: ObjectId;
  banner?: string;
  code: string;
}

const ClassSchema = new Schema<ClassInformation>(
  {
    className: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      default: "",
    },
    section: {
      type: String,
      default: "",
    },
    subject: {
      type: String,
      default: "",
    },
    banner: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

export default model("classes", ClassSchema);
