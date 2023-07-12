import Cliente from "../models/Clientes.js";

const obtenerClientes = async (req, res)=>{
    const clientes = await Cliente.find();
    res.json(clientes);
};

const agregarClientes = async (req, res)=>{
    const cliente = new Cliente(req.body);
    try {
        const nuevoCliente = await cliente.save();
        res.json(nuevoCliente);
    } catch (error) {
        console.log(error);
    }
};

const borrarCliente = async (req, res)=>{
    try {
        await Cliente.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no existe"});
    }
};

const selectOne = async (req, res)=>{
    try {
        const cliente = await Cliente.findOne({_id:req.params.id});
        res.send(cliente);
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no existe"});
    }
}

const actualizarCliente = async (req, res)=>{
    try {
        const cliente = await Cliente.findOne({_id:req.params.id});
        if (req.body.Compania) {
            cliente.Compania = req.body.Compania;
        }
        if (req.body.Contacto) {
            cliente.Contacto = req.body.Contacto;
        }
        if (req.body.Titulo) {
            cliente.Titulo = req.body.Titulo;
        }
        if (req.body.Direccion) {
            cliente.Direccion = req.body.Direccion;
        }
        await cliente.save();
        res.send(cliente);
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no existe"});
    }
};

export {obtenerClientes, agregarClientes, borrarCliente, selectOne, actualizarCliente};