import throttle from 'lodash.throttle'

const form = document.getElementById('form')
const setStoreIntoLocalStorage = throttle((store) => window.localStorage.setItem('feedback-form-state', store), 1000)

form.addEventListener('input', ({target}) => {
  let store = JSON.parse(window.localStorage.getItem('feedback-form-state'))
  if (!store) {
    store = {
      email: '',
      message: ''
    }
  }
  store[target.getAttribute('name')] = target.value
  setStoreIntoLocalStorage(JSON.stringify(store))
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const store = JSON.parse(window.localStorage.getItem('feedback-form-state'))
  console.log(store)
  window.localStorage.setItem('feedback-form-state', JSON.stringify({
    email: '',
    message: ''
  }))
  form.reset()
})