const otpStore = new Map();

// Save OTP
export const setOTP = (userId, otp) => {
  otpStore.set(userId, otp);

  // expire OTP in 5 minutes
  setTimeout(() => otpStore.delete(userId), 5 * 60 * 1000);
};

// Verify OTP
export const verifyOTP = (userId, otp) => {
  return otpStore.get(userId) === otp;
};