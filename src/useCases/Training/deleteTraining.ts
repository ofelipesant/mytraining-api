import { Request, Response } from "express";
import { Training } from "../../models/Training";

export async function deleteTraining(req: Request, res: Response){
    try{
        const { id } = req.params
        await Training.findByIdAndDelete(id)
        res.sendStatus(204) 
    } catch(error){
        console.error(error)
        res.sendStatus(500)
    }
}