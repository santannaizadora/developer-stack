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
  const { id } = req.params as any;
  await answerService.createAnswer(answer, id);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll();
  res.send(questions).status(200);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params as any;
  const question = await questionService.findById(id);
  res.send(question).status(200);
}
