import { Router } from "express"
import { setorRouter } from "./setor.router"
import { UsuarioRouter } from "./usuario.router"


const router = Router()

router.use("/setor", setorRouter)
router.use("/usuario", UsuarioRouter)


export default router