import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { question } = req.body;
  await questionService.createQuestion(question);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { answer } = req.body;
  const { id } = req.params;
  await answerService.createAnswer(answer, parseInt(id));
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll();
  res.send(questions).status(200);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const question = await questionService.findById(parseInt(id));
  res.send(question).status(200);
}
