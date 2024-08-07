import { Router } from "express";
import { getCollege, getACollege,postCollege,deleteCollege,updateCollege } from "../controllers/college-controller.js";

export const collegeRouter = Router();

collegeRouter.get('/college', getCollege);
collegeRouter.post('/college', postCollege);
collegeRouter.get('/college/:id', getACollege);
collegeRouter.patch('/college/:id', updateCollege);
collegeRouter.delete('/college/:id', deleteCollege);