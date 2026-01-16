const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { getUsers, deleteUser } = require("../controllers/userController");

router.get("/", auth, getUsers);
router.delete("/:id", auth, deleteUser);

module.exports = router;
