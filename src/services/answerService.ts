import { Answers } from "@prisma/client";
import {  answerRepository } from "../repositories/answerRepository.js";


export type CreateAnswerData = Omit<Answers, 'id'>;

const createAnswer= async (answer: string, questionId: number) => {
    await answerRepository.insert({answer, questionId});
}

const answerService = {
    createAnswer,
};
export default answerService;