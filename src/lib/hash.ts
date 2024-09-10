import bcrypt from "bcrypt";

const saltRounds = 10;

export const hash = (value: string) => {
  return bcrypt.hash(value, saltRounds);
};

export const verify = (value: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(value, hash);
};
