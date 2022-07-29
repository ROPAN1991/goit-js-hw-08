import throttle from 'lodash.throttle'

const defaultStore = {
  email: '',
  message: ''
}

const form = document.getElementById('form')
const setStoreIntoLocalStorage = throttle((store) => window.localStorage.setItem('feedback-form-state', store), 1000)
const getStore = () => JSON.parse(window.localStorage.getItem('feedback-form-state')) || defaultStore

const store = getStore()
document.getElementById('input').value = store.email
document.getElementById('textarea').value = store.message

form.addEventListener('input', ({target}) => {
  let store = getStore()
  if (!store) {
    store = defaultStore
  }
  store[target.getAttribute('name')] = target.value
  setStoreIntoLocalStorage(JSON.stringify(store))
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const store = getStore()
  console.log(store)
  window.localStorage.setItem('feedback-form-state', JSON.stringify({
    email: '',
    message: ''
  }))
  form.reset()
})