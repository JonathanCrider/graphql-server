
import { createHandler } from 'graphql-http/lib/use/express'
import rootValue from './resolver.js'
import schema from './schema.js'
import express from 'express'
import dotenv from 'dotenv'

const app = express()
const PORT = 3000
dotenv.config()

app.listen(PORT, () => {
  console.log(`GraphQL Server running on port ${PORT}`)
})

app.all('/graphql', createHandler({schema, rootValue}))
