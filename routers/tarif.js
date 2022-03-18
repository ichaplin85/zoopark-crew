const { response } = require('express');
const express = require('express');
const { Tariff } = require('../db/models');

const router = express.Router();
// const sha256 = require('sha256');

router.get('/', async (req, res) => {
  // const tariffs = await Tariff.findAll({ raw: true });
  const tariffs = await Tariff.findOne({ raw: true, order: [['createdAt', 'deSC']] });
  console.log(tariffs);
  // const aa = {tar_1:tariffs.priceAdult,tar_2:tariffs.priceWeekendAdult, tar_3:tariffs.priceKid ,tar_4: tariffs.priceWeekendKid  }
  res.render('tarif', tariffs);
  // res.render('tarif', {PriceAdult:tariffs[0], priceAdultWeek:tariffs[1], priceKid:tariffs[2], priceKidWeek:tariffs[3] })
});

router.post('/', async (req, res) => {
  const {
    priceAdult, priceWeekendAdult, priceKid, priceWeekendKid,
  } = req.body;
  // console.log(req.body);

  const newTariffs = await Tariff.create({
    priceAdult, priceWeekendAdult, priceKid, priceWeekendKid,
  });

  // const newTariffs2 = await Tariff.update({ price: body2.price, priceWeekend: body2.priceWeekend }, { where: { id: body2.id } });

  res.end();
});

module.exports = router;
