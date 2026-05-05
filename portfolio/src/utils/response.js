export const success = (res, data, message = "Success") => {
  res.status(200).json({ success: true, message, data });
};

export const error = (res, message, code = 500) => {
  res.status(code).json({ success: false, message });
};