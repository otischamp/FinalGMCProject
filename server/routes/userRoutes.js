import express from "express";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddleware.js";
import { activateUserProfile, changeUserPassword, deleteUserProfile, getNotificationsList, getTeamList, loginUser, logoutUser, markNotificationRead, resgisterUser, updateUserProfile } from "../controllers/userControllers.js";

const router = express.Router();


router.post("/register", resgisterUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)

router.get("/get-team", protectRoute, isAdminRoute, getTeamList)
router.get("/notifications", protectRoute, getNotificationsList)

router.put("/profile", protectRoute, updateUserProfile)
router.put("/read-noti", protectRoute, markNotificationRead)
router.put("change-password", protectRoute, changeUserPassword)

// // Admin ONLY

router
        .route("/:id")
        .put(protectRoute, isAdminRoute, activateUserProfile)
        .delete(protectRoute, isAdminRoute, deleteUserProfile);



export default router;