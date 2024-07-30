import express from "express";
import { addStudentsData, getStudentsData } from "../controllers/students.controllers.js";
import { getStudentCertificate } from "../controllers/certificate.controllers.js";


const route = express.Router();
route.get("/getStudentData",getStudentsData)
route.get("/getStudentCertificate",getStudentCertificate)
route.post("/addStudentsData",addStudentsData)



export default route