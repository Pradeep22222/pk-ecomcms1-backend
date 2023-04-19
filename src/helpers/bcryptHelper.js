import bcrypt from "bcryptjs";
const saltRound = 10;

export const encryptPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword);
};
export const comparePassword = (givenPassword, hashPassword) => {
  return bcrypt.compareSync(givenPassword, hashPassword);
};
