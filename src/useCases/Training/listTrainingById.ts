import { Request, Response } from "express";
import { Training } from "../../models/Training";

export async function listTrainingById(req: Request, res: Response){
    try {
        const { id } = req.params
        const training = await Training.findById(id)
        return res.status(200).json(training)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error)
    }
}
