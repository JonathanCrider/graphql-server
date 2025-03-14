import { getAge } from './utils.js'

const rootValue = {
  hello: (args) => {
    return `hello ${args.name || 'world'}!`
  },
  age: (args) => {
    const currentAge = getAge(args.birthday)
    return currentAge
  },
  isAdmin: true,
  interests: ['music', 'camping', 'motorcycles']
}

export default rootValue
