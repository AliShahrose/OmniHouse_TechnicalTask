export const random = () => {
  const otpNumber = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  return otpNumber;
};
