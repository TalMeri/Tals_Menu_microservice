const express = require("express");
const {
    getAllNourishments,
    createNourishment,
    getNourishmentById,
    updateNourishment,
    deleteNourishment,
    getNourishmentsByIdList,
} = require("../controllers/MenuController");

const router = express.Router();

router.route("/").get(getAllNourishments).post(createNourishment);
router.route("/nourishments/").post(getNourishmentsByIdList);
router.route("/:id").get(getNourishmentById).put(updateNourishment).delete(deleteNourishment);

module.exports = router;
