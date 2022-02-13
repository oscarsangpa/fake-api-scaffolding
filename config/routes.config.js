const express = require('express');

const router = express.Router();

const bootcampsController = require('../controllers/bootcamps.controller');


router.get('/', (req, res, next) => {
  res.render('index')
})

//Bootcamps routes
router.get('/bootcamps', bootcampsController.list)
router.get('/bootcamps/new', bootcampsController.create)
router.get('/bootcamps/:id', bootcampsController.get)
router.post('/bootcamps', bootcampsController.doCreate)
router.delete('/bootcamps/:id/delete', bootcampsController.delete)
router.delete('/bootcamps/:id/delete', bootcampsController.deleteInDetails)



module.exports = router;