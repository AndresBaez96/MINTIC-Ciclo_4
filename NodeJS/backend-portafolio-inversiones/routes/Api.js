const { Router } = require("express");
const router = Router();
const controladorInversion = require("../controllers/controladorInversion")

router.get("/inversiones", controladorInversion.inversiones_get);
router.post("/crear-inversion", controladorInversion.inversiones_post);
router.delete("/borrar-inversion/:id", controladorInversion.inversiones_delete);

module.exports = router;