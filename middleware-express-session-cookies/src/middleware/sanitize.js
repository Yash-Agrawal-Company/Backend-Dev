import xss from "xss";
import mongoSanitize from "mongo-sanitize";

const sanitizeData = (data) => {
  if (!data) return data;

  if (typeof data === "string") {
    return xss(data);
  }

  if (typeof data === "object") {
    for (let key in data) {
      const cleanKey = mongoSanitize(key);

      // sanitize value recursively
      data[cleanKey] = sanitizeData(data[key]);

      // if key changed (rare case), delete old key
      if (cleanKey !== key) {
        delete data[key];
      }
    }
  }

  return data;
};

const sanitizeMiddleware = (req, res, next) => {
  try {
    
    req.body = sanitizeData(req.body);

    
    sanitizeData(req.query);

   
    sanitizeData(req.params);

    next();
  } catch (err) {
    next(err);
  }
};

export default sanitizeMiddleware;