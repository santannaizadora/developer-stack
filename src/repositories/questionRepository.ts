import { prisma } from "../config/database.js"; 

interface Question {
    id: number; 
    question: string;
}

export type QuestionInsertData = Omit<Question, 'id'>;

const insert = async (question: QuestionInsertData) => {
    await prisma.questions.create({
        data: {
            question: question.question
        }
    });
}

export const questionRepository = {
    insert
}