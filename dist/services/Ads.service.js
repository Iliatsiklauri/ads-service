"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsService = void 0;
const database_connect_1 = require("../db/database-connect");
const Ad_1 = require("../db/models/Ad");
class AdsService {
    constructor() {
        this.AdsRepository = database_connect_1.AppDataSource.getRepository(Ad_1.Ad);
    }
    async getAllAds() {
        try {
            const ads = await this.AdsRepository.find();
            return ads;
        }
        catch (er) {
            console.log(er);
            return null;
        }
    }
    async getSingleAd(id) {
        try {
            const ad = await this.AdsRepository.findOneBy({ id });
            if (!ad)
                return null;
            return ad;
        }
        catch (er) {
            console.log(er);
            return null;
        }
    }
    async createAd(createAdDTO) {
        try {
            const mock = await this.AdsRepository.create(createAdDTO);
            const ad = await this.AdsRepository.save(mock);
            return ad;
        }
        catch (er) {
            console.log(er);
            return null;
        }
    }
    async deleteAdd(id) {
        try {
            const deleted = await this.AdsRepository.delete({ id });
            console.log(deleted, "deleteeed");
            return deleted;
        }
        catch (er) {
            console.log(er);
            return null;
        }
    }
}
exports.AdsService = AdsService;
