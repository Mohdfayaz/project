const express = require("express");
const adminController = require("../controllers/adminController");
const adminRouter = express.Router();
const auth = require("../middlewares/auth");

// manage recruiters
adminRouter.post(
  "/recruiters",
  auth.checkAuth,
  auth.allowRoles(["admin"]),
  adminController.createRecruiter
);
adminRouter.put(
  "/recruiters/:id",
  auth.checkAuth,
  auth.allowRoles(["admin"]),
  adminController.updateRecruiter
);
adminRouter.delete(
  "/recruiters/:id",
  auth.checkAuth,
  auth.allowRoles(["admin"]),
  adminController.deleteRecruiter
);

// manage companies
adminRouter.post(
  "/companies",
  auth.checkAuth,
  auth.allowRoles(["admin"]),
  adminController.createCompany
);
adminRouter.put(
  "/companies/:id",
  auth.checkAuth,
  auth.allowRoles(["admin"]),
  adminController.updateCompany
);
adminRouter.delete(
  "/companies/:id",
  auth.checkAuth,
  auth.allowRoles(["admin"]),
  adminController.deleteCompany
);

// assign and remove recruiters
adminRouter.put(
  "/companies/:companyId/assign-recruiter/:recruiterId",
  auth.checkAuth,
  auth.allowRoles(["admin"]),
  adminController.assignRecruiter
);
adminRouter.put(
  "/companies/:companyId/remove-recruiter/:recruiterId",
  auth.checkAuth,
  auth.allowRoles(["admin"]),
  adminController.removeRecruiter
);

// // manage jobs
// adminRouter.post('/jobs', auth.checkAuth, auth.allowRoles(['recruiter', 'admin']), adminController.createJob);
// adminRouter.put('/jobs/:id', auth.checkAuth, auth.allowRoles(['admin']), adminController.updateJob);
// adminRouter.delete('/jobs/:id', auth.checkAuth, auth.allowRoles(['admin']), adminController.deleteJob);
// adminRouter.get('/jobs', auth.checkAuth, auth.allowRoles(['admin']), adminController.viewAllJobs);

// // manage users
// adminRouter.get('/users', auth.checkAuth, auth.allowRoles(['admin']), adminController.viewAllUsers);
// adminRouter.put('/users/:id', auth.checkAuth, auth.allowRoles(['admin']), adminController.updateUser);
// adminRouter.delete('/users/:id', auth.checkAuth, auth.allowRoles(['admin']), adminController.deleteUser);

module.exports = adminRouter;
