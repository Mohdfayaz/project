Job Portal Application
Description
This is a job portal application that allows users to create an account, login, and apply for jobs.

Features
Candidate/User:

Candidate can create an account
Candidate can login
Candidate can view all jobs
Candidate can apply for a job
Candidate can view the jobs they have applied for along with the status of their application
Candidate can view their profile, update their profile, and delete their profile
Recruiter:

Recruiter can login
Recruiter can create a job
Recruiter can view all jobs they have posted
Recruiter can view all candidates that have applied for a job they have posted
Recruiter can view the profile of a candidate that has applied for a job they have posted
Recruiter can view the status of a candidate's application
Recruiter can update the status of a candidate's application
Admin:

Admin can login
Admin can create recruiter accounts, update recruiter accounts, and delete recruiter accounts
Admin can create companies, update companies, and delete companies
Admin can assign a recruiter to a company and remove a recruiter from a company
Admin can view all jobs, update jobs, and delete jobs
Admin can view all candidates, update candidates, and delete candidates
Endpoints
Candidate
POST /candidates/register
POST /candidates/login
GET /candidates/jobs
POST /candidates/jobs/:jobId/apply
GET /candidates/jobs/applied
GET /candidates/profile
PUT /candidates/profile
DELETE /candidates/profile
GET /candidates/logout