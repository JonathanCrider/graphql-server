import { getAge } from './utils.js'

const resolver = {
  hello: ({ name }) => {
    return `hello ${name || 'world'}!`
  },
  age: ({ birthday }) => {
    const currentAge = getAge(birthday)
    return currentAge
  },
  isAdmin: true,
  interests: ['music', 'camping', 'motorcycles']
}

export default resolver
