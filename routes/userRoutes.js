const express = require("express");
const auth = require("../middlewares/auth");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get(
  "/profile",
  auth.checkAuth,
  auth.allowRoles(["user", "recruiter", "admin"]),
  userController.getProfile
);
userRouter.put(
  "/profile",
  auth.checkAuth,
  auth.allowRoles(["user"]),
  userController.updateProfile
);
userRouter.delete(
  "/profile",
  auth.checkAuth,
  auth.allowRoles(["user"]),
  userController.deleteProfile
);

userRouter.post(
  "/apply/:jobId",
  auth.checkAuth,
  auth.allowRoles(["user"]),
  userController.applyJob
);
userRouter.get(
  "/applications",
  auth.checkAuth,
  auth.allowRoles(["user"]),
  userController.myApplications
);
userRouter.get(
  "/jobs",
  auth.checkAuth,
  auth.allowRoles(["user"]),
  userController.getJobs
);
userRouter.get(
  "/jobs/:jobId",
  auth.checkAuth,
  auth.allowRoles(["user"]),
  userController.getJob
);

module.exports = userRouter;
