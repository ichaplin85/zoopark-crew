const checkAuth = (req, res, next) => {
  if (!req.session.alies?.id) {
    return res.sendStatus(401);
  }
  return next();
};

module.exports = checkAuth;
