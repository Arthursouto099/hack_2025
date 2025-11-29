import { Router } from "express";
import leitoInstancia from "../controllers/leitos.controller";

const router = Router();

router.post("/",leitoInstancia.create);
router.get("/",leitoInstancia.list);
router.put("/:id_leito",leitoInstancia.update);
router.delete("/:id_leito",leitoInstancia.delete)

export {router as leitosRouter}