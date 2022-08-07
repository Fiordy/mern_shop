import express from "express";
import {
  authUser,
  getUserProfile,
  createUser,
  updateUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/*-------------------------------------------------------------------
@desc Auth user & get token
@route POST [/api/users/login]
@access universal
-------------------------------------------------------------------*/
router.route("/login").post(authUser);

/*-------------------------------------------------------------------
@desc Register a new User
@route POST [/api/users]
@access universal
-------------------------------------------------------------------*/
router.route("/").post(createUser);

/*-------------------------------------------------------------------
@desc Update User
@route PUT [/api/users]
@access universal
-------------------------------------------------------------------*/
router.route("/").put(protect, updateUser);

/*-------------------------------------------------------------------
@desc Get user profile
@route POST [/api/users/profile]
@access private
-------------------------------------------------------------------*/
router.route("/profile").get(protect, getUserProfile);

export default router;
