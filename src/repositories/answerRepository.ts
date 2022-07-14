import { prisma } from "../config/database.js"; 
import { CreateAnswerData } from "../services/answerService.js";

const insert = async ({answer, questionId}: CreateAnswerData) => {
    await prisma.answers.create({
        data: {
            answer: answer,
            question: {
              connect: {
                id: questionId
              }
            }
        }
    });
}

export const answerRepository = {
    insert
}