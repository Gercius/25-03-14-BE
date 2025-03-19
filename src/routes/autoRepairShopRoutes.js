const { Router } = require("express");
const { addRepairShop, updateRepairShop, deleteRepairShop } = require("../controllers/autoRepairShopController");

const router = Router();

router.post("/", addRepairShop);
// prettier-ignore
router.route("/:id")
    .patch(updateRepairShop)
    .delete(deleteRepairShop);

module.exports = router;
