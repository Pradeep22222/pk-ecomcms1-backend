import mongoose from "mongoose";
const sessionSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    associate: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    expire: {
      type: Date,
      default: null,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("session", sessionSchema);
