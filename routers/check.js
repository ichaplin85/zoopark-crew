const express = require('express');

const router = express.Router();
const sha256 = require('sha256');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  const checkAdmin = User.findAll({
    where: {
      login,
      password,
      isAdmin: true,
    },
  });
  const [alies] = await checkAdmin;
  if (!alies && !alies?.id) {
    res.json({ authenticated: false });
  } else {
    req.session.alies = {};
    req.session.alies.id = alies.id;
    req.session.alies.login = alies.login;
    res.json({ authenticated: true });
  }
  res.end();
});

module.exports = router;
