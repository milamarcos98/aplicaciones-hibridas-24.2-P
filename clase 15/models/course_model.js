import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        type: String,
        required: true
    },
    tags: [{type: String}],
    carrera: {
        type: mongoose.Schema.Types.ObjectId, ref: 'carreras'
    }
})

export default mongoose.model('course', courseSchema);

//   DOCUMENTOS EMBEBIDOS
// {
//     "_id": 1,
//     "nombre": "Juan Pérez",
//     "direcciones": [
//       { "id": 1, "dirección": "Calle Falsa 123" },
//       { "id": 2, "dirección": "Avenida Siempreviva 456" }
//     ]
//   }

//   REFERENCIAS

