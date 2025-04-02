"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAds = getAllAds;
exports.getSingleAd = getSingleAd;
exports.createAd = createAd;
exports.deleteAd = deleteAd;
const Ads_service_1 = require("../services/Ads.service");
const ErrMessage_1 = require("../utils/ErrMessage");
const Validation_1 = require("../utils/Validation");
const adsService = new Ads_service_1.AdsService();
async function getAllAds(req, res) {
    const ads = await adsService.getAllAds();
    res.json(ads);
}
async function getSingleAd(req, res) {
    const id = Number(req.params.id) ?? 0;
    const singleAd = await adsService.getSingleAd(id);
    if (!singleAd) {
        res.status(404).json(new ErrMessage_1.ErrorResponse(404, "Ad not found"));
        return;
    }
    res.status(201).json(singleAd);
}
async function createAd(req, res) {
    const { error } = Validation_1.AdSchema.validate(req.body);
    if (error) {
        res.status(400).json(new ErrMessage_1.ErrorResponse(400, error.details.map((error) => error.message.replace(/\n/g, " ").replace(/"/g, ""))));
        return;
    }
    const ad = await adsService.createAd(req.body);
    if (!ad) {
        res.status(404).json(new ErrMessage_1.ErrorResponse(404, "Could not create an ad"));
        return;
    }
    res.status(201).json(new ErrMessage_1.SuccessResponse(201, "Successfully created an ad"));
}
async function deleteAd(req, res) {
    const id = Number(req.params.id) ?? 0;
    const ad = await adsService.getSingleAd(id);
    if (!ad) {
        res.status(404).json(new ErrMessage_1.ErrorResponse(404, "Could not find an ad"));
        return;
    }
    await adsService.deleteAdd(id);
    res.status(201).json(new ErrMessage_1.SuccessResponse(201, "Successfully deleted an ad"));
}
