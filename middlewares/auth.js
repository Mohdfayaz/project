const { JWT_SECRET } = require("../utils/config");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = {
  checkAuth: (req, res, next) => {
    // get the token from the cookie
    const token = req.cookies.token;

    // if the token does not exist, return an error
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // verify the token
    jwt.verify(token, JWT_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // set the user in the request object
      req.userId = user.id;

      // proceed to the next middleware
      next();
    });
  },
  allowRoles: (roles) => {
    return async (req, res, next) => {
      // get the userId from the request object
      const userId = req.userId;

      // get the user from the database
      const user = await User.findById(userId);

      // check if the user exists
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // check if the user role is allowed
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }

      // proceed to the next middleware
      next();
    };
  },
};

module.exports = auth;
