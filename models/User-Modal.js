import mongoose from "mongoose";

export const User = {
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    unique: true,
  },
};

export const UserSchema = new mongoose.Schema(User, { timestamps: true });
