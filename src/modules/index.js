import mongoose from "mongoose";
import studentModule from "./students.module.js";
import certificateModule from "./certificate.module.js";

const db={}

db.mongoose = mongoose;
db.student = studentModule;
db.certificate= certificateModule




export default db