const express = require('express');

const router = express.Router();
const { Photo } = require('../db/models');
const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  // const photos = await Photo.findAll()
  // const animals = await Animal.findAll({raw:true})

  const animals = (await Animal.findAll({ include: [{ model: Photo }] })).map((el) => el.dataValues); // Вариант Кирилла

  return res.render('animal', { animals });
});

module.exports = router;
