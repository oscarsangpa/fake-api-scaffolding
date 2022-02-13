const httpClient = require('./base.services');

const getBootcamps = () => httpClient.get('/bootcamps');

const getBootcamp = (bootcampId) => httpClient.get(`/bootcamps/${bootcampId}`);

const createBootcamp = (data) => httpClient.post('/bootcamps', data)

const deleteBootcamp = (bootcampId) => httpClient.delete(`/bootcamps/${bootcampId}`)


module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  deleteBootcamp
}
