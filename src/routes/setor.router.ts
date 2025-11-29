import { Router } from "express"
import SetorControllerIstance from "../controllers/setor.controller"

const router = Router()


router.post("/", SetorControllerIstance.create)
router.get("/", SetorControllerIstance.findBy)
router.put("/:id_setor", SetorControllerIstance.update)
router.delete("/:id", SetorControllerIstance.delete)


export {
    router as setorRouter
}