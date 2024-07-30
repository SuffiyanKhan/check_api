import express from "express";
import { addStudentsData, getStudentsData } from "../controllers/students.controllers.js";


const route = express.Router();
route.get("/getStudentData",getStudentsData)
route.post("/addStudentsData",addStudentsData)



export default route