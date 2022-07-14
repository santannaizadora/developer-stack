import Joi from "joi";
import { CreateAnswerData } from "../services/answerService.js";

export const answerSchema = Joi.object<typeof CreateAnswerData>({
  answer: Joi.string().required(),
});
