import mongoose from "mongoose";

const MONGO_CONNECTION_STRING =
  "mongodb+srv://Temaa:FnfKovLgs7o3UBUn@cluster0.0fob56l.mongodb.net/green";

await mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });

export default mongoose.connection;
