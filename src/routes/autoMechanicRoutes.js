const { Router } = require("express");
const mechanicController = require("../controllers/autoMechanicController");

const router = Router();

// prettier-ignore
router.route('/')
    .get(mechanicController.getAllMechanics)
    .post(mechanicController.addMechanic);
// prettier-ignore
router.route("/:id")
    .get(mechanicController.getMechanic)
    .patch(mechanicController.updateMechanic)
    .delete(mechanicController.deleteMechanic);
// todo - update rating with PUT

module.exports = router;
