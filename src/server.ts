import express from "express";
import { AppDataSource } from "./db/database-connect";
import adsRouter from "./routes";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));

app.use("/Ads", adsRouter);

AppDataSource.initialize().then(async () => {
  console.log("connected to database");
});

app.listen(3000, () => {
  console.log("server started");
});
