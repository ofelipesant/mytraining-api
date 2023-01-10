import { Router } from "express";
import { listTraining } from "./useCases/Training/listTraining";
import { listTrainingById } from "./useCases/Training/listTrainingById";
import { createTraining } from "./useCases/Training/createTraining";
import { deleteTraining } from "./useCases/Training/deleteTraining";
import { updateTraining } from "./useCases/Training/updateTraining";

export const router = Router()

router.get('/trainings', listTraining)
router.get('/trainings/:id', listTrainingById)
router.post('/trainings', createTraining)
router.delete('/trainings/:id', deleteTraining)
router.put('/trainings/:id', updateTraining)
