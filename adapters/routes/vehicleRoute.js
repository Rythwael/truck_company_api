const express=require('express')
const vehicleController=require("../controllers/vehicleController")

const router = express.Router()

router.route("/vehicle_list").get(vehicleController.getVehicles);
router.route("/vehicle_add").post(vehicleController.addVehicle);

module.exports = router