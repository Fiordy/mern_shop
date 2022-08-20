import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addOrderItems } from "../controllers/orderController.js";

const router = express.Router();
/*-------------------------------------------------------------------
@desc insert new Order
@route POST [/api/orders]
@access authenticated
-------------------------------------------------------------------*/
router.route("/").post(protect, addOrderItems);

export default router;
