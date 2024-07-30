import express from "express";
import mongoose from "mongoose"
import serverCfig from "./src/config/server.config.js";
import route from "./src/route/index.js";
import cors from "cors"

const app = express();
const connectionDB = async () => {
    try {
        console.log("Establishing DB connection....")
        await mongoose.connect(serverCfig.dbUrl);
        console.log('Db connected')

    } catch (error) {
        console.log(error.message)
    }
}
connectionDB()
const PORT = serverCfig.port
app.use(express.json());
app.use(cors());
app.use("/", route)

app.listen(PORT, () => {
    console.log(`server are runing on port http://localhost:${PORT}`)
})

export default app