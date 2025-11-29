import { Router } from "express"
import UsuarioControllerInstance from "../controllers/usuario.controller"

const router = Router()


router.post("/", UsuarioControllerInstance.create)
router.get("/", UsuarioControllerInstance.findBy)
router.put("/:id_usuario", UsuarioControllerInstance.update)
router.delete("/:id_usuario", UsuarioControllerInstance.delete)


export {
    router as UsuarioRouter
}