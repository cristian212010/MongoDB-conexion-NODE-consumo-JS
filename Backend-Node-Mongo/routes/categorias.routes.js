import express from "express";

const router = express.Router();

import { obtenerCategorias, agregarCategoria, borrarCategoria, selectOne, actualizarCategoria } from "../controllers/categoria.controller.js";

router.get("/all", obtenerCategorias);
router.post("/add", agregarCategoria);
router.delete("/del/:id", borrarCategoria);
router.get("/one/:id", selectOne);
router.put("/upd/:id", actualizarCategoria);

export default router;