import { buildSchema } from 'graphql'
import { createHandler } from 'graphql-http/lib/use/express'
import { getAge } from './utils.js'
import express from 'express'
import dotenv from 'dotenv'

const app = express()
const PORT = 3000
dotenv.config()

const schema = buildSchema(`
    type Query {
      hello (name: String): String
      age (birthday: String): Int
    }
  `)

const rootValue = {
  hello: (args) => {
    return `hello ${args.name || 'world'}!`
  },
  age: (args) => {
    const currentAge = getAge(args.birthday)
    return currentAge
  }
}

app.listen(PORT, () => {
  console.log(`GraphQL Server running on port ${PORT}`)
})

app.all('/graphql', createHandler({schema, rootValue}))
