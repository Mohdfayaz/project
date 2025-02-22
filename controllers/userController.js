const User = require("../models/User");
const Job = require("../models/Job");
const { get } = require("mongoose");

const userController = {
  getProfile: async (req, res) => {
    try {
      // get the userId from the request object
      const userId = req.userId;

      // get the user profile from the database
      const userProfile = await User.findById(userId);

      // send the user profile in the response
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateProfile: async (req, res) => {
    try {
      // get the userId from the request object
      const userId = req.userId;

      // get the details to update from the request body
      const { name, email } = req.body;

      // update the user profile in the database
      const updatedProfile = await User.findByIdAndUpdate(
        userId,
        { name, email },
        { new: true }
      );

      // send the updated user profile in the response
      res
        .status(200)
        .json({ message: "Profile updated successfully", updatedProfile });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteProfile: async (req, res) => {
    try {
      // get the userId from the request object
      const userId = req.userId;

      // delete the user profile from the database
      await User.findByIdAndDelete(userId);

      // logout the user
      res.clearCookie("token");

      // send the response
      res.status(200).json({ message: "Profile deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  applyJob: async (req, res) => {
    try {
      // get the jobId from the request parameters
      const jobId = req.params.jobId;

      // get the userId from the request object
      const userId = req.userId;

      // get the job details from the database
      const job = await Job.findById(jobId);

      // check if the user has already applied for the job
      if (job.applicants.includes(userId)) {
        return res
          .status(400)
          .json({ message: "You have already applied for this job" });
      }

      // push the user to the job's applicants array
      job.applicants.push(userId);

      // save the job and user
      await job.save();

      // send the response
      res.status(200).json({ message: "Applied for the job successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  myApplications: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getJobs: async (req, res) => {
    try {
      // get the jobs from the database
      const jobs = await Job.find().select("-applicants -__v");

      // send the jobs in the response
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getJob: async (req, res) => {
    try {
      // get the jobId from the request parameters
      const jobId = req.params.jobId;

      // get the job from the database
      const job = await Job.findById(jobId).select("-__v -applicants");

      // send the job in the response
      res.status(200).json(job);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
