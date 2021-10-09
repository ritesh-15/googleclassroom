import { model, ObjectId, Schema } from "mongoose";

export interface JoinedClass {
  userId: ObjectId;
  classId: ObjectId;
  creatorUserInfo: ObjectId;
}

const JoinedClassSchema = new Schema<JoinedClass>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "classes",
      required: true,
    },
    creatorUserInfo: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

export default model("joinedClasses", JoinedClassSchema);
