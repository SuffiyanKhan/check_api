import dotenv from "dotenv";

dotenv.config()

const serverCfig = {
    port: process.env.SERVER_APP_PORT,
    dbUrl:process.env.DB_URL
}

export default serverCfig
