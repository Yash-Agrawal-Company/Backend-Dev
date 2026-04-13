import fs from "fs";
import path from "path";

const logFilePath = path.join("src","logs", "requests.log");

const requestLogger = (req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    const log = `${new Date().toISOString()} | ${req.method} | ${req.originalUrl} | ${res.statusCode} | ${responseTime}ms\n`;

    fs.appendFile(logFilePath, log, (err) => {
      if (err) console.error("Logging error:", err);
    });
  });

  next();
};

export default requestLogger;