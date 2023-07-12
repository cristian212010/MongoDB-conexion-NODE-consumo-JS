import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({
    Imagen: {
        type: String,
        require: true,
        trim: true
    },
    CategoriaNombre:{
        type: String,
        require: true,
        trim: true
    },
    Descripcion:{
        type: String,
        require: true,
        trim: true
    },
},
{
    timestamps: true
}
);

const Categoria = mongoose.model("Categorias", categoriaSchema);

export default Categoria;