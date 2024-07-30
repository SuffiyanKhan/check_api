import { getAllCertificate } from "../services/certificate.services.js"


const getStudentCertificate =async(req,res)=>{
    try {
        const response = await getAllCertificate();
        console.log(response)
        return res.status(200).json({status:200,message:"success",data:response})
    } catch (error) {
        return res.status(500).json({status:500,message:"server error",errormessage:error.message})
    }
}


export{
    getStudentCertificate
}