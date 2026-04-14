import User from "../models/User.js";

const activityTracker = async (req, res, next) => {
  try {
    const userId = req.query.userId; // using query for testing

    if (userId) {
      await User.findByIdAndUpdate(userId, {
        lastActiveAt: new Date()
      });
      console.log("Updated lastActiveAt for:", userId);
    }

    next();
  } catch (err) {
    next();
  }
};

export default activityTracker;