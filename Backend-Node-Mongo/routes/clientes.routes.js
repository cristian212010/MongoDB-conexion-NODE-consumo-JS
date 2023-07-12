import express from "express";

const router = express.Router();

import { obtenerClientes, agregarClientes, borrarCliente, selectOne, actualizarCliente } from "../controllers/cliente.controller.js";

router.get("/all", obtenerClientes);
router.post("/add", agregarClientes);
router.delete("/del/:id", borrarCliente);
router.get("/one/:id", selectOne);
router.put("/upd/:id", actualizarCliente);

export default router;