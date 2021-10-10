import { ObjectId } from "mongoose";

class TopicTitle {
  title: string;
  _id: ObjectId;

  constructor(topic: { title: string; _id: ObjectId } | any) {
    this.title = topic.title;
    this._id = topic._id;
  }
}

export default TopicTitle;
