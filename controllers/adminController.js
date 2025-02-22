const Company = require("../models/Company");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const adminController = {
  createRecruiter: async (req, res) => {
    try {
      // get the details of the recruiter from the request body
      const { email, password, role, name } = req.body;

      // check if the email is already in use
      const recruiter = await User.findOne({ email });

      // if the email exists, return an error message
      if (recruiter) {
        return res.status(400).json({ message: "Email already in use" });
      }

      // hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // create a new recruiter
      const newRecruiter = new User({
        email,
        password: hashedPassword,
        role,
        name,
      });

      // save the new recruiter to the database
      await newRecruiter.save();

      // return a success message
      res.status(201).json({ message: "Recruiter created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateRecruiter: async (req, res) => {
    try {
      // get the details of the recruiter from the request body
      const { email, password, name } = req.body;

      // get the id of the recruiter from the request parameters
      const { id } = req.params;

      // check if the recruiter exists
      const recruiter = await User.findById(id);

      // if the recruiter does not exist, return an error message
      if (!recruiter) {
        return res.status(404).json({ message: "Recruiter not found" });
      }

      // update the recruiter details
      await User.findByIdAndUpdate(id, {
        email,
        password,
        name,
      });

      // return a success message
      res.status(200).json({ message: "Recruiter updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteRecruiter: async (req, res) => {
    try {
      // get the id of the recruiter from the request parameters
      const { id } = req.params;

      // check if the recruiter exists
      const recruiter = await User.findById(id);

      // if the recruiter does not exist, return an error message
      if (!recruiter) {
        return res.status(404).json({ message: "Recruiter not found" });
      }

      // delete the recruiter
      await User.findByIdAndDelete(id);

      // return a success message
      res.status(200).json({ message: "Recruiter deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createCompany: async (req, res) => {
    try {
      // get the details of the company from the request body
      const { name, location } = req.body;

      // check if the company already exists
      const company = await Company.findOne({ name });

      // if the company exists, return an error message
      if (company) {
        return res.status(400).json({ message: "Company already exists" });
      }

      // create a new company
      const newCompany = new Company({
        name,
        location,
      });

      // save the new company to the database
      await newCompany.save();

      // return a success message
      res.status(201).json({ message: "Company created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateCompany: async (req, res) => {
    try {
      // get the details of the company from the request body
      const { name, location } = req.body;

      // get the id of the company from the request parameters
      const { id } = req.params;

      // check if the company exists
      const company = await Company.findById(id);

      // if the company does not exist, return an error message
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }

      // update the company details
      await Company.findByIdAndUpdate(id, {
        name,
        location,
      });

      // return a success message
      res.status(200).json({ message: "Company updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteCompany: async (req, res) => {
    try {
      // get the id of the company from the request parameters
      const { id } = req.params;

      // check if the company exists
      const company = await Company.findById(id);

      // if the company does not exist, return an error message
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }

      // delete the company
      await Company.findByIdAndDelete(id);

      // return a success message
      res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  assignRecruiter: async (req, res) => {
    try {
      // get the id of the company and recruiter from the request parameters
      const { companyId, recruiterId } = req.params;

      // check if the company exists
      const company = await Company.findById(companyId);

      // if the company does not exist, return an error message
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }

      // check if the recruiter exists
      const recruiter = await User.findById(recruiterId);

      // if the recruiter does not exist, return an error message
      if (!recruiter) {
        return res.status(404).json({ message: "Recruiter not found" });
      }

      // assign the recruiter to the company
      await Company.findByIdAndUpdate(companyId, {
        recruiter: recruiterId,
      });

      // return a success message
      res
        .status(200)
        .json({ message: "Recruiter assigned to company successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  removeRecruiter: async (req, res) => {
    try {
      // get the id of the company and recruiter from the request parameters
      const { companyId, recruiterId } = req.params;

      // check if the company exists
      const company = await Company.findById(companyId);

      // if the company does not exist, return an error message
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }

      // check if the recruiter exists
      const recruiter = await User.findById(recruiterId);

      // if the recruiter does not exist, return an error message
      if (!recruiter) {
        return res.status(404).json({ message: "Recruiter not found" });
      }

      // remove the recruiter from the company
      await Company.findByIdAndUpdate(companyId, {
        recruiter: null,
      });

      // return a success message
      res
        .status(200)
        .json({ message: "Recruiter removed from company successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createJob: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  viewAllJobs: async (req, res) => {
    try {
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
  viewAllUsers: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = adminController;
