const passwordValidation = (password) => {
  const requrement = [
    {
      regex: /^(?=.*[a-z])/,
      message: "Password must contain at least one lowercase letter",
    },
    {
      regex: /^(?=.*[A-Z])/,
      message: "Password must contain at least one Uppercase letter",
    },
    {
      regex: /^(?=.*[\d])/,
      message: "Password must contain at least one number letter",
    },
    {
      regex: /^(?=.*[@$!%*?&])/,
      message: "Password must contain at least one special character",
    },
    {
      regex: /^(?=.*[A-Za-z\d@$!%*?&]{8,})/,
      message: "Password must be at least 8 characters long",
    },
  ];
  const filter = requrement.filter(
    (requrement) => !requrement.regex.test(password)
  );
  const errors = filter.map((error) => error.message);
  return {
    valid: filter.length === 0,
    error: errors,
  };
};
module.exports = passwordValidation;
