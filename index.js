import express from "express";
import "./configs/mongoose-config.js";
import userRouter from "./routes/Users-router.js";
import multer from "multer";
import { nanoid } from "nanoid";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "ds0o1qkfl",
  api_key: "333596553488198",
  api_secret: "PciTeR33LWRa4RfM9HTJMLdIvd0",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const fileName = nanoid();
    const splittedPath = file.originalname.split(".");
    const fileExtention = splittedPath[splittedPath.length - 1];
    cb(null, `${fileName}.${fileExtention}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("image") || file.mimetype.includes("video")) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

const PORT = 8080;
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.post("/files", upload.single("image"), async (req, res) => {
  const uploadedFile = await cloudinary.v2.uploader.upload(req.file.path);
  res.json(uploadedFile);
});

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
