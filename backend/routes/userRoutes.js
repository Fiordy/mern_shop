import express from "express";
import {
  authUser,
  getUserProfile,
  createUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/*-------------------------------------------------------------------
@desc Auth user & get token
@route POST [/api/users/login]
@access universal
-------------------------------------------------------------------*/
router.post("/login", authUser);

/*-------------------------------------------------------------------
@desc Register a new User
@route POST [/api/users]
@access universal
-------------------------------------------------------------------*/
router.post("/", createUser);

/*-------------------------------------------------------------------
@desc Get user profile
@route POST [/api/users/profile]
@access private
-------------------------------------------------------------------*/
router.route("/profile").get(protect, getUserProfile);

export default router;
