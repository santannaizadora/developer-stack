import Joi from "joi";
import { CreateQuestionData } from "../services/questionService.js";

export const questionSchema = Joi.object<typeof CreateQuestionData>({
  question: Joi.string().required()
});
