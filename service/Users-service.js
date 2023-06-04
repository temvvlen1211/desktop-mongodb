import { UserSchema } from "../models/User-modal.js";
import mongoose from "mongoose";

const userModel = mongoose.model("User", UserSchema);

export const getUsers = async () => {
  const users = await userModel.find({});
  return users;
};

export const getUserById = async (id) => {
  return await userModel.findById(id);
};

export const createUser = async (user) => {
  return await userModel.create(user);
};

export const updateUser = async (id, user) => {
  return await userModel.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};
