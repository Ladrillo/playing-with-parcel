import { v4 as uuid } from './node_modules/uuid'

const root = document.querySelector('#root')

root.textContent = uuid()

// console.log(document.title || 'nada')
