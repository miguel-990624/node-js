import "dotenv/config"
import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 3002
const app = express();

app.use(cors())
app.use(express.json())

app.listen(PORT, () => { console.log(`servidor iniciado en el puerto ${PORT}`) })