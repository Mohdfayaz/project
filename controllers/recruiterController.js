const Job = require("../models/Job");
const Company = require("../models/Company");

const recruiterController = {
  createJob: async (req, res) => {
    try {
      // get the job details from the request body
      const { title, description } = req.body;

      // get the company details
      const company = await Company.findOne({ recruiter: req.userId });

      // create a new job
      const job = new Job({
        title,
        description,
        postedBy: req.userId,
        company: company._id,
      });

      // save the job
      await job.save();

      // push the job to the company's jobs array
      company.jobs.push(job._id);

      // save the company
      await company.save();

      res.status(201).json({ message: "Job created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  viewJobs: async (req, res) => {
    try {
      // get the company details
      const company = await Company.findOne({ recruiter: req.userId }).populate(
        "jobs"
      );

      res.status(200).json({ jobs: company.jobs });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateJob: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteJob: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  viewApplications: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  viewCandidateProfile: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = recruiterController;
