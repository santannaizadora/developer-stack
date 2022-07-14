import { prisma } from "../config/database.js"; 

export interface Question {
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

const getAll = async () => {
    return await prisma.questions.findMany();
}

const getById = async (id: number) => {
    return await prisma.questions.findUnique({
        where: {
            id
        },
        include: {
            answers: true
        }
    });
}

export const questionRepository = {
    insert,
    getAll,
    getById
}