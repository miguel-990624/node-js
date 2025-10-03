import mongoose, { Types } from "mongoose"

interface IProducts {
    _id: Types.ObjectId;
    name: string;
    price: number;
    category: Types.ObjectId;
    description?: string;
    inStrock: boolean;
    createdAt?:Date;
};

const productsSchema = new mongoose.Schema<IProducts>(
    {
        name: {
            type: String,
            requiered: true
        }
    }
)