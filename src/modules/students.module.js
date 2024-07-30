import mongoose, { mongo } from "mongoose";


const {Schema}=mongoose;


const studentSchema = new Schema({
    name:String,
    email:String,
},{timestamps:true})

const studentModule = mongoose.model("student",studentSchema)



export default studentModule



