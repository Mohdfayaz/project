const express = require("express");
const recruiterController = require("../controllers/recruiterController");
const recruiterRouter = express.Router();
const auth = require("../middlewares/auth");

recruiterRouter.post(
  "/jobs",
  auth.checkAuth,
  auth.allowRoles(["recruiter"]),
  recruiterController.createJob
);
recruiterRouter.get(
  "/jobs",
  auth.checkAuth,
  auth.allowRoles(["recruiter"]),
  recruiterController.viewJobs
);
recruiterRouter.put("/jobs/:id", recruiterController.updateJob);
recruiterRouter.delete("/jobs/:id", recruiterController.deleteJob);
recruiterRouter.get("/applications", recruiterController.viewApplications);
recruiterRouter.get(
  "/applications/:id",
  recruiterController.viewCandidateProfile
);

module.exports = recruiterRouter;
