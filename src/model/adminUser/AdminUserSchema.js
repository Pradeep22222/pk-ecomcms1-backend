import mongoose from "mongoose";
const adminUserSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
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
      unique: true,
      index: 1,
      required: true,
      maxLength: [50, "users email address can't be longer than 50 character"],
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
    emailValidationCode: {
      type: String,
      default: "",
    },
    refreshJWT: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("admin-users", adminUserSchema);
