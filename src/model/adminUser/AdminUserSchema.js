import mongoose from "mongoose";
const adminUserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxLength: [20, "User first name can't be longer than 20 character"],
    },
    lastName: {
      type: String,
      required: true,
      maxLength: [20, "User last name can't be longer than 20 character"],
    },
    email: {
      type: String,
      required: true,
      maxLength: [20, "User first name can't be longer than 20 character"],
    },
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
      default: null,
    },
    address: {
      type: String,
      default: "n/a",
    },
    password: {
      type: String,
      required: true,
        },
  },
  { timestamps: true }
);

export default mongoose.model("admin-user", adminUserSchema)