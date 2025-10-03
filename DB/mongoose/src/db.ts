import mongoose from "mongoose";

const connectDB = async () : Promise<void>  => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mi_base");

        console.log("Conectado a base de datos");
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};

export {connectDB};