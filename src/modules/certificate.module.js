import mongoose, { mongo } from "mongoose";


const { Schema } = mongoose

const certificateSchems = new Schema({
    name: { type: String, required: true },
    course: { type: String, required: true },
    date: { type: Date, required: true },
    certificateUrl: { type: String, required: true },
    email: { type: String, required: true },
    cnic: { type: String, default: null },
    batchNo: { type: String, default: null },
    rollno: { type: String, default: null },
    isEmail: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const certificateModule = mongoose.model("AllCertificate", certificateSchems);

export default certificateModule