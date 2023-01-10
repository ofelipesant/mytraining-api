import { Request, Response } from "express";
import { Training } from "../../models/Training";

export async function createTraining(req: Request, res: Response){
    try{
        const { name, exercises } = req.body

        if(!name){
            return res.status(400).json({
                error: "O campo 'nome' é obrigatório"
            })
        }
        if(!exercises){
            return res.status(400).json({
                error: "O treino precisa possuir pelo menos um exercício"
            })
        }
        const training = await Training.create({
            name,
            exercises
        })

        return res.status(201).json(training)

    } catch(error){
        console.error(error)
        res.sendStatus(500)
    }
}