import { addStudents, studentsData } from "../services/students.services.js"


const getStudentsData=async(req,res)=>{
    try {
        const response = await studentsData()
        return res.status(200).json({status:200,message:"success",data:response})
    } catch (error) {
        return res.status(500).json({status:500,message:"server error",errormessage:error.message})
    }
}

const addStudentsData = async (req, res) => {
    try {
        const { name, course, date, email, cnic, batchNo  } = req.body;
        const data = {
            name, course, date, email, cnic, batchNo 
        }
        const saveaStudentsData = await addStudents(data)
        if (!saveaStudentsData) return res.status(400).json({ status: 400, message: "bad request" })
        return res.status(200).json({ status: 200, message: "success", saveaStudentsData })
    } catch (error) {
        return res.status(500).json({ message: "Failed to students data save in DB", errormessage: error.message })
    }
}

export{
    getStudentsData,
    addStudentsData
}