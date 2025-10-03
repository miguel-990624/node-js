import express from "express";
import { connectDB } from "./db.ts";

const PORT = 3000;
const app = express();

(async () =>{
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Servicio corriendo en http://localhost:${PORT}`)
    })
})();