const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");
const { getPayload } = require("../utils/tokenUtils");

//protected routes
const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const payload = getPayload(token);
      req.user = await User.findById(payload.userId).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Unauthorized, Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Unauthorized");
  }
});

//admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Unauthorized");
  }
};

module.exports = {
  protect,
  admin,
};
