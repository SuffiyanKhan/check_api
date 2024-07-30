
import db from '../modules/index.js'
const { certificate: Certificate } = db


const getAllCertificate=async()=>{
    try {
        const response =  await Certificate.find().exec();
        console.log(response)
        return response
    } catch (error) {
        throw error
    }
}



export{
    getAllCertificate
}