const express = require('express');
const router = express.Router();
const { Photo } = require('../db/models')
const { Animal } = require('../db/models')

router.get('/', async (req, res) => {

    const photos = await Photo.findAll()
    const animals = await Animal.findAll()

    
    // let photosLion = await Photo.findAll({where: {animal_id: 1 }})
    // let photosWolf = await Photo.findAll({where: {animal_id: 2 }})   
    // let photosBear = await Photo.findAll({where: {animal_id: 3 }})   

    console.log(photos);
    return res.render('animal')
});





module.exports = router;