import { QuestionInsertData, questionRepository } from "../repositories/questionRepository.js";

export const CreateQuestionData = (question: string): QuestionInsertData => {
    return {
        question
    }
}

const createQuestion = async (question: string) => {
    const data = CreateQuestionData(question);
    await questionRepository.insert(data);
}


const questionService = {
    createQuestion,
};
export default questionService;