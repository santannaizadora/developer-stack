import { Questions } from "@prisma/client";
import { questionRepository } from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Questions, 'id'>;

const createQuestion = async (question: string) => {
    await questionRepository.insert({question});
}

const findAll = async () => {
    return await questionRepository.getAll();
}

const findById = async (id: number) => {
    const data = await questionRepository.getById(id);
    const filterData = data.answers.map(answer => {
        delete answer.id;
        delete answer.questionId;
        return answer;
    })
    return { ...data,answers: filterData }

}


const questionService = {
    createQuestion,
    findAll,
    findById
};
export default questionService;