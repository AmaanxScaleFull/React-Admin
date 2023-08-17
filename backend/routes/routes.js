const { Router } = require("express");

const { getTask } = require("../controllers/controllers")

const router = Router();

router.get("/", getTask);


module.export = router;