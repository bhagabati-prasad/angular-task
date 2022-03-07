// @route  GET: /api/user/logout
module.exports = (req, res) => {
  res.status(200).json({ status: true, isLoggedIn: false, user: null });
};
