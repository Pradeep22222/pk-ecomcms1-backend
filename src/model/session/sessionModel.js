import sessionSchema from "./sessionSchema.js";

export const addAccessToken = (obj) => {
  return sessionSchema(obj).save();
};
