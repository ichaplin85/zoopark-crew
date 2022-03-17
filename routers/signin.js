const express = require('express');

const router = express.Router();
const sha256 = require('sha256');

router.get('/signin', (req, res) => {
  res.render('signin'); // потом сюда вернем
});

// router.post('/signin', (req ,res))

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
