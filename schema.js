import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello (name: String): String
    age (birthday: String): Int
    isAdmin: Boolean
    interests: [String]
  }
`)

export default schema
