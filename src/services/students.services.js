
// import db from '../modules/index.js'
// const { students: Students } = db
import studentModule from "../modules/students.module.js"
const studentsData = async () => {
    try {
        const response = await studentModule.find({})
        return response
    } catch (error) {
        console.log(error.message)
        throw error
    }
}
const addStudents = async (payload) => {
    try {
        // const rollNumber = await generateOtp()
        const savedata = await studentModule({ ...payload})
        const saveStudentData = await savedata.save();
        return saveStudentData
    } catch (error) {
        throw error
    }
}


export {
    studentsData,
    addStudents
}