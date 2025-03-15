import { createHandler } from 'graphql-http/lib/use/express'
import resolver from './resolver.js'
import schema from './schema.js'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`GraphQL Server running on port ${ port }`)
})

app.all('/graphql', createHandler({ schema, rootValue: resolver }))
