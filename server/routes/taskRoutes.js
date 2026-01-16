const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/taskController");

router.post("/", auth, controller.createTask);
router.get("/", auth, controller.getTasks);
router.put("/:id", auth, controller.updateTask);
router.delete("/:id", auth, controller.deleteTask);

module.exports = router;
