"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ads_controller_1 = require("./controllers/ads.controller");
const AuthMiddleware_1 = require("./middleware/AuthMiddleware");
const adsRouter = express_1.default.Router();
adsRouter.get("/", ads_controller_1.getAllAds);
adsRouter.get("/:id", ads_controller_1.getSingleAd);
adsRouter.post("/", AuthMiddleware_1.authMiddleware, ads_controller_1.createAd);
adsRouter.delete("/:id", AuthMiddleware_1.authMiddleware, ads_controller_1.deleteAd);
exports.default = adsRouter;
