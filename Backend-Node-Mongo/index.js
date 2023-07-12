import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";
import clientesRouter from "./routes/clientes.routes.js";
import productosRouter from "./routes/productos.routes.js";
import cors from "cors";

const app = express();

const configCors = {
    method:["GET", "POST", "PUT", "DELETE"]
};

app.use(express.json());

app.use(cors(configCors));

//Config escanea la carpeta raiz en busca de el .env para traer las variables de entorno
dotenv.config();

//use interpreta todos los metodos http
app.use("/categoria", categoriasRouter);
app.use("/empleado", empleadosRouter);
app.use("/cliente", clientesRouter);
app.use("/producto", productosRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, ()=>{
    console.log(`Server web listen on port ${PORT}`);
});