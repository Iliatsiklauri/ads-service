import { Request, Response } from "express";
import { AdsService } from "../services/Ads.service";
import { ErrorResponse, SuccessResponse } from "../utils/ErrMessage";
import { AdSchema } from "../utils/Validation";

const adsService = new AdsService();

export async function getAllAds(req: Request, res: Response) {
  const ads = await adsService.getAllAds();
  res.json(ads);
}
export async function getSingleAd(req: Request, res: Response) {
  const id = Number(req.params.id) ?? 0;
  const singleAd = await adsService.getSingleAd(id);
  if (!singleAd) {
    res.status(404).json(new ErrorResponse(404, "Ad not found"));
    return;
  }
  res.status(201).json(singleAd);
}

export async function createAd(req: Request, res: Response) {
  const { error } = AdSchema.validate(req.body);

  if (error) {
    res.status(400).json(
      new ErrorResponse(
        400,
        error.details.map((error) =>
          error.message.replace(/\n/g, " ").replace(/"/g, "")
        )
      )
    );
    return;
  }
  const ad = await adsService.createAd(req.body);

  if (!ad) {
    res.status(404).json(new ErrorResponse(404, "Could not create an ad"));
    return;
  }

  res.status(201).json(new SuccessResponse(201, "Successfully created an ad"));
}

export async function deleteAd(req: Request, res: Response) {
  const id = Number(req.params.id) ?? 0;

  const ad = await adsService.getSingleAd(id);
  if (!ad) {
    res.status(404).json(new ErrorResponse(404, "Could not find an ad"));
    return;
  }

  await adsService.deleteAdd(id);
  res.status(201).json(new SuccessResponse(201, "Successfully deleted an ad"));
}
