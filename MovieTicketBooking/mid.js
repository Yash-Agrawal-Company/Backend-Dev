function mid(req, res, next) {
  try {
    if (!req.body) {
      return res.status(400).send("Body is empty");
    }
    next();
  } catch (error) {
    next(error);
  }
}

export default mid;
