import { Request, Response } from "express";
import { Training } from "../../models/Training";

export async function listTraining(req: Request, res: Response){
    try {
        const trainings = await Training.find()
        res.status(200).json(trainings)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
