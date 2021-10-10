import { model, ObjectId, Schema } from "mongoose";

export interface TopicInterface {
  title: string;
  classId: ObjectId;
  creatorId: ObjectId;
}

const TopicSchema = new Schema<TopicInterface>(
  {
    title: {
      type: String,
      required: true,
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
  {
    timestamps: true,
  }
);

export default model("topics", TopicSchema);
