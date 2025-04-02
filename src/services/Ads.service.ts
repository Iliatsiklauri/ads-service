import { AppDataSource } from "../db/database-connect";
import { Ad } from "../db/models/Ad";
import { CreateAdDTO } from "../utils/Validation";

export class AdsService {
  private AdsRepository = AppDataSource.getRepository(Ad);

  async getAllAds() {
    try {
      const ads = await this.AdsRepository.find();
      return ads;
    } catch (er) {
      console.log(er);
      return null;
    }
  }
  async getSingleAd(id: number) {
    try {
      const ad = await this.AdsRepository.findOneBy({ id });
      if (!ad) return null;
      return ad;
    } catch (er) {
      console.log(er);
      return null;
    }
  }
  async createAd(createAdDTO: CreateAdDTO) {
    try {
      const mock = await this.AdsRepository.create(createAdDTO);
      const ad = await this.AdsRepository.save(mock);
      return ad;
    } catch (er) {
      console.log(er);
      return null;
    }
  }
  async deleteAdd(id: number) {
    try {
      const deleted = await this.AdsRepository.delete({ id });
      console.log(deleted, "deleteeed");
      return deleted;
    } catch (er) {
      console.log(er);
      return null;
    }
  }
}
