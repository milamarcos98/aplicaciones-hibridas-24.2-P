import mongoose from "mongoose";

const carrerasSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    }
})

export default mongoose.model('carreras', carrerasSchema);

