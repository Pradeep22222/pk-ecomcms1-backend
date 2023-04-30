import mongoose from "mongoosed";
const categoriesSchema = new mongoose.Schema({
  status: {
    type: String,
    default: "inactive",
    maxLength: 10,
  },
  name: {
    type: String,
    require: true,
    maxLength: 50,
  },
  slug: {
    type: String,
    require: true,
    unique: true,
    index: 1,
    maxLength: 50,
    trim: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    defult: null,
  },
});
