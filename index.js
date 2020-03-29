import { v4 as uuid } from './node_modules/uuid'
import './styles.less'

const root = document.querySelector('#root')

root.textContent = uuid()

// console.log(document.title || 'nada')
