import AdminUserSchema from "./AdminUserSchema.js";

export const insertAdminUser = (obj) => {
  return AdminUserSchema(obj).save();
};
export const findOneAdminUser = (filter) => {
  return AdminUserSchema.findOne(filter);
};
