const sessionTimeout = (req, res, next) => {
  if (req.session.user) {
    const now = Date.now();

    // last activity time
    if (!req.session.lastActivity) {
      req.session.lastActivity = now;
    }

    const elapsed = now - req.session.lastActivity;
    const remaining = req.session.cookie.maxAge - elapsed;

    // update last activity
    req.session.lastActivity = now;

    if (remaining < 1000 * 60) {
      res.setHeader("X-Session-Warning", "Session expiring soon");
    }


    res.setHeader("X-Session-Remaining", remaining);
  }

  next();
};

export default sessionTimeout;