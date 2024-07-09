import { Router } from "express";
import { getCollege, getACollege,postCollege,deleteCollege,updateCollege } from "../controllers/college-controller";

export const collegeRouter = Router();

collegeRouter.get('/college', getcollege);
collegeRouter.post('/college', postCollege);
collegeRouter.get('/college/:id', getACollege);
collegeRouter.patch('/college/:id', updateCollege);
collegeRouter.delete('/college/:id', deleteCollege);