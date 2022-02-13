const httpClient = axios.create({
  baseURL: 'http://localhost:8000/bootcamps'
});

const deleteBootcamp = (id) => httpClient.delete(`/${id}`)
  .then(() => {
    document.getElementById(`bootcamp-${id}`).remove()
  })
  .catch(err => console.error(err))

document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.onclick = (event) => {
    btn.classList.add('disabled')
    deleteBootcamp(event.target.value)
  }
})