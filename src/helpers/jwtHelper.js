import jwt from "jsonwebtoken";
import { addAccessToken } from "../model/session/sessionModel.js";
import { updateAdminUser } from "../model/adminUser/AdminUserModel.js";
const createAccessKey = async (payload) => {
  const accessJWT =  jwt.sign(payload, process.env.ACCESS_KEY_SECRET, {
    expiresIn: "15m",
  });
  const obj = {
    token: accessJWT,
    type: "accessJWT",
  };
  await addAccessToken(obj);
  return accessJWT;
};
const createRefreshKey = async (payload) => {
  const refreshJWT =  jwt.sign(payload, process.env.REFRESH_KEY_SECRET, {
    expiresIn: "30d",
  });
  await updateAdminUser(payload, {refreshJWT});
  return refreshJWT;
};
export const createJWTs = async (payload) => {
  return {
    accessJWT: await createAccessKey(payload),
    refreshJWT: await createRefreshKey(payload),
  };
};
