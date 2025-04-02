import Joi from "joi";

export const AdSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
}).options({ abortEarly: false });

export type CreateAdDTO = {
  title: string;
  description: string;
};
