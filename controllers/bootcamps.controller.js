const bootcampsService = require('../services/bootcamps.service');

module.exports.list = (req, res, next) => {
  bootcampsService.getBootcamps()
    .then(response => {
      console.log(response)
      res.render('bootcamps', { bootcamps: response.data })
    })
    .catch(err => {
      next(err)
    })
}

module.exports.get = (req, res, next) => {
  bootcampsService.getBootcamp(req.params.id)
    .then(response => {
      res.render('bootcampDetail', { bootcamps: response.data })
    })
    .catch(err => next(err))
}

module.exports.create = (req, res, next) => {
  res.render('newBootcamp')
}

module.exports.doCreate = (req, res, next) => {
  bootcampsService.createBootcamp(req.body)
    .then((response) => {
      res.redirect(`/bootcamps/${response.data.id}`)
    })
    .catch(err => next(err))
}

module.exports.delete = (req, res, next) => {
  bootcampsService.deleteBootcamp(req.params.id)
    .then((response) => {
      res.status(200).json({})
    })
    .catch(err => next(err))
}

module.exports.deleteInDetails = (req, res, next) => {
  bootcampsService.deleteBootcamp(req.params.id)
    .then((response) => {
      res.status(200).json({})
      res.redirect('/bootcamps')
    })
    .catch(err => next(err))
}


