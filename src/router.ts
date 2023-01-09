import { Router } from "express";
import { listTraining } from "./useCases/Training/listTraining";

export const router = Router()

router.get('/trainings', listTraining)