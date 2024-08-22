export type IUser = {
  username: string;
  email: string;
  password: string;
};
export type UserInputs = Omit<IUser, "id">;
