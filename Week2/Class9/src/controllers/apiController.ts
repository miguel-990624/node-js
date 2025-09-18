import { type Request, type Response } from 'express';
import { getRandomTrivia } from '../services/apiService.ts';

export async function getTriviaController(req: Request, res: Response) {
  try {
    const fact = await getRandomTrivia();
    res.json({ success: true, fact });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}