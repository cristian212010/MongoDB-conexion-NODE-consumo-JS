import Categoria from "../models/Categorias.js";

const obtenerCategorias = async (req, res)=>{
    const categorias = await Categoria.find();
    res.json(categorias);
};

const agregarCategoria = async (req, res)=>{
    const categoria = new Categoria(req.body);
    try {
        const nuevaCategoria = await categoria.save();
        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error);
    }
};

const borrarCategoria = async (req, res)=>{
    try {
        await Categoria.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Categoria no existe"});
    }
};

const selectOne = async (req, res)=>{
    try {
        const categoria = await Categoria.findOne({_id:req.params.id});
        res.send(categoria);
    } catch (error) {
        res.status(404);
        res.send({error: "Categoria no existe"});
    }
}

const actualizarCategoria = async (req, res)=>{
    try {
        const categoria = await Categoria.findOne({_id:req.params.id});
        if (req.body.Imagen) {
            categoria.Imagen = req.body.Imagen;
        }
        if (req.body.CategoriaNombre) {
            categoria.CategoriaNombre = req.body.CategoriaNombre;
        }
        if (req.body.Descripcion) {
            categoria.Descripcion = req.body.Descripcion;
        }
        await categoria.save();
        res.send(categoria);
    } catch (error) {
        res.status(404);
        res.send({error: "Categoria no existe"});
    }
};

export {obtenerCategorias, agregarCategoria, borrarCategoria, selectOne, actualizarCategoria};