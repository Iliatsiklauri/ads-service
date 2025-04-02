import express from "express";
import {
  createAd,
  getAllAds,
  deleteAd,
  getSingleAd,
} from "./controllers/ads.controller";
import { authMiddleware } from "./middleware/AuthMiddleware";

const adsRouter = express.Router();

adsRouter.get("/", getAllAds);
adsRouter.get("/:id", getSingleAd);
adsRouter.post("/", authMiddleware, createAd);
adsRouter.delete("/:id", authMiddleware, deleteAd);

export default adsRouter;
