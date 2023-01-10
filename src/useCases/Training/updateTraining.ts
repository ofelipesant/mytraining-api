import { Request, Response } from "express";
import { Training } from "../../models/Training";

export async function updateTraining(req: Request, res: Response){
    try{
        const { id } = req.params
        const { name, exercises } = req.body

        await Training.findByIdAndUpdate(id, {name: name, exercises: exercises})
        return res.sendStatus(204)
    } catch(error){
        console.error(error)
        return res.sendStatus(500)
    }
}