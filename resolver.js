import { getAge } from './utils.js'
import { v4 as uuid4 } from 'uuid'

const resolver = {
  hello: ({ name }) => {
    return `hello ${name || 'world'}!`
  },  
  user: () => ({
    id: uuid4(),
    name: 'Test User',
    age: ({ birthday }) => {
      const currentAge = getAge(birthday)
      return currentAge
    },
    isAdmin: true,
    interests: ['music', 'camping', 'motorcycles'],
  })
}

export default resolver
